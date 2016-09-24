function clearTranslate() {
    document.getElementById('clear').value = "";
    document.getElementById('translate').value = "";
}

// Still working on code 
/*var languageFrom = document.getElementById("langpairFROM").value;
var languageTo = document.getElementById("langpairTO").value;*/
var s = document.createElement("script");
/*s.src = "http://api.microsofttranslator.com/V2/Ajax.svc/Translate?oncomplete=mycallback&appId=68D088969D79A8B23AF8585CC83EBA2A05A97651&from=" + languageFrom + "&to=" + languageTo + "&text=" + text;*/
s.src = "http://api.microsofttranslator.com/V2/Ajax.svc/Translate?oncomplete=mycallback&appId=68D088969D79A8B23AF8585CC83EBA2A05A97651&from=" + "English" + "&to=" + "Russian" + "&text=" + "Hello Sandeep";

function translator() {
    var text = document.getElementById('clear').value;
    window.mycallback = function (response) {
        document.getElementById('translate').innerHTML = response;
    }
}