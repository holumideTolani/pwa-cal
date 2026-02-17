
const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
       display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
}

if ("serviceWorker" in  navigator){
    navigator.serviceWorker.register("service-worker.js").then(function (){
        console.log("PWA ready");
        
    })
    .catch(function (error){
        console.log("Service worker:", error);
        
    })
}




