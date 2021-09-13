
const elResult = document.querySelector("#result");
const reset = document.querySelector("#click");
const dumalag = document.querySelector(".dumaloq")
const elForm = document.querySelector("#form");
const elSelect = document.querySelector("#select");
const result = document.querySelector("#ozgartirish");
let x = 0
dumalag.addEventListener("click", e=>{
    x = x+1
    elResult.textContent = x
    if(x === 33){
        alert("siz 33 ta " + elSelect.value + " aytdingiz")
    }
})
elForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    result.textContent = elSelect.value
})
reset.addEventListener("click", e => {
    x = 0
    elResult.textContent = x
})

