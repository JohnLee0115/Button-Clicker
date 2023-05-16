function inout(element){
    console.log("he");
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    }
    else
        element.innerText = "Login"
}

function removebutt(element){
    element.remove();
}

function ninjalike(element){
    alert("Ninja was liked")
}