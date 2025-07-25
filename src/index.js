import OpenAI  from "openai";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

export default {
	async fetch(request, env, ctx) {

		if (request.method === 'OPTIONS') {
			return new Response(null, { headers: corsHeaders });
		}
		if(request.method !== 'POST'){
			return new Response(JSON.stringify({error: `${request.method} Methode not allowed`}),
		{
			status: 405, 
			headers: corsHeaders
		})
		}

		const openai = new OpenAI({
			apiKey: env.OPENAI_API_KEY, 
			baseURL: "https://gateway.ai.cloudflare.com/v1/aec8d2f0bb85a6bc96f15f2c0b835767/translate_ai_app/openai"
	
		})


		
		try{
			const messages = await request.json()

			const response = await openai.chat.completions.create({
				model: "gpt-3.5-turbo",
				messages,
				temperature: 1.1, 
				presence_penalty: 0,
				frequency_penalty: 0
				
			});
			return new Response(JSON.stringify(response.choices[0].message), { headers: corsHeaders });
		} catch(e){
		
			return new Response(JSON.stringify({error: e.message}), {status: 500,  headers: corsHeaders });
			
		}
	},
};
