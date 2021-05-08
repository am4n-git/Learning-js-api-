var btn = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationURL(text)
{
    return serverURL + "?" + "text=" +text;
}

function clickHandler()
{

    var inputText = txtInput.value;
        
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputdiv.innerText= translatedText;
            })
        }


btn.addEventListener("click", clickHandler);
 
