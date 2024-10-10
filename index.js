let string = ""
const display = document.getElementById("calc-display")

const buttons = document.querySelectorAll(".btn")
const clearButton = document.getElementById("clear")
const backspaceButton = document.getElementById("backspace")



Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string)
            document.querySelector("input").value = string
        }else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1)
             document.querySelector("input").value = string   
        }
        else{
            string = string + e.target.innerHTML
        document.querySelector("input").value = string   
        }
             
    })
})


clearButton.addEventListener("click", ()=>{
    string = ""
    document.querySelector("input").value = string 
})

