var button = document.querySelector("#button")
var istatus = document.querySelector("#istatus")
var flag = 0

button.addEventListener("click", function(){
    if(flag == 0){
        flag = 1
        istatus.innerHTML = "Friend"
        istatus.style.color = "green"
        button.innerHTML = "Remove Friend"
    }
    else{
        flag = 0
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        button.innerHTML = "Add Friend"
    }
})