let button = document.getElementById("btn")
button.addEventListener("dblclick", () => {
    // List of all mouse events 
    // https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
    // alert("i am clicked by user")
    document.querySelector(".box").innerHTML = "<b>you clicked me !!</b>"
})

button.addEventListener("contextmenu", () => {
    alert("do not hack us")
})

document.addEventListener("keydown", (e) => {
    console.log(e,e.key,e.keyCode)
})