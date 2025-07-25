
let choosenLanguage


function translate(){
    const inputText = document.getElementById("user-input").value
    document.getElementById("user-input").value = ''
    if(choosenLanguage && inputText)
        translateTo(choosenLanguage, inputText)
    else{
            const warning = document.createElement('h3')
            warning.classList.add("warning")
            warning.id = "warning"
            warning.innerHTML =`Something went wrong<br/> make sure you entered a text` 
            document.querySelector("main").appendChild(warning)
            setTimeout( function(){
                document.getElementById("warning").remove()
            },2500)
        }        
}


function getLanguage(radioBtn){
    radioBtn.addEventListener(
        'click', function(e){
            choosenLanguage = e.target.value

    })
}

document.querySelectorAll('input[type=radio]').forEach(radioBtn => getLanguage(radioBtn))

document.getElementById("translate-btn").addEventListener('click', translate)



async function translateTo(lang, inputText){
    
    const messages = [
        {
            role:"system", 
            content:`You are a linguist with knowledge of every language in existence. 
            You can flawlessly translate any sentence into ${lang}, providing clear, easy-to-understand,
            and logically accurate meanings`
        },
        {
            role:"user",
            content: `${inputText}`
        }]
        
        try{
            const url = "https://translation-ai-app.osamaforedu.workers.dev"
            const res = await fetch(url, 
                {
                    method: "POST", 
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(messages)
                }
                
            )
            if(!res.ok)
                throw new Error(`Worker Error: ${data.error}`)

            const data = await res.json() 
            console.log(data)
            renderOutputtml(data.content);


        } catch(e){
            document.querySelector('main').innerHTML = `${e}`
        }

        
    

}

function renderOutputtml(translatedText){
    const responseHtml = 
    `
        <p class="text-field">${translatedText}</p>
        <button id="start-over">Start Over</button>
    `
    document.getElementById('user-input').disabled = true
    
    document.getElementById('translated-text').innerHTML = responseHtml
    
    document.getElementById("start-over").addEventListener('click', function()
    {
        document.getElementById('user-input').disabled = false


        document.getElementById('translated-text').innerHTML = `
         <fieldset class="languages-options">
                    <legend class="select-language">Select language 👇</legend>
                        <div>
                            <input 
                            type="radio"
                            class="option"
                            id="arabic"
                            value="arabic"
                            name="lang" />
                            
                            <label for="arabic">Arabic <img loading='lazy' src="./assets/tn_palestine-flag.gif" class="language-flag"></label>
                        </div>
                    
                        <div>
                            <input type="radio" 
                            class="option" 
                            id="japanese" 
                            value="japanese" 
                            name="lang" />
                            
                            <label for="japanese">Japanese <img loading='lazy' src="./assets/jpn-flag.png" class="language-flag"></label>
                        
                        </div>
                        
                        <div>

                            <input type="radio" 
                            class="option" 
                            id="spanish" 
                            value="spanish" 
                            name="lang"/>
                            
                            <label for="spanish">Spanish <img loading='lazy' src= "./assets/sp-flag.png" class="language-flag"></label>
                        </div>
                </fieldset>
                <button id="translate-btn">Translate</button>
        `
        document.querySelectorAll('input[type=radio]').forEach(radioBtn => getLanguage(radioBtn))
    
        document.getElementById("translate-btn").addEventListener('click', translate)
    })
    
}

