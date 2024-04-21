const counter = document.querySelector("h1")
const plus_btn = document.querySelector('.plus')
const minus_btn = document.querySelector('.minus')
const input = document.querySelector(".input")
const reset = document.querySelector(".reset")

plus_btn.addEventListener("click", () => {
    const changevalue = parseInt(counter.innerText)
    if (input.value !== '') {
        const changeInput = parseInt(input.value)
        counter.innerText = changevalue + changeInput

    }
    
    else {
        counter.innerText = changevalue + 1
    }


})
minus_btn.addEventListener("click", () => {
    const changevalue = parseInt(counter.innerText)
    if (input.value !== '') {
        const changeInput = parseInt(input.value)
        counter.innerText = changevalue - changeInput

    }
    else {
        counter.innerText = changevalue - 1
    }


})
reset.addEventListener('click', () =>{
    counter.innerText = 0
})
