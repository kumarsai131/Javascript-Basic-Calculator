let input = document.getElementById("inp");
console.log(input);
let buttons = document.querySelectorAll("button")
let inputVal = ""
for(i of buttons){
    i.addEventListener("click",(e) => {
        let buttonText = e.target.innerText;
        if(buttonText=="C"){
            inputVal=""
            input.value = inputVal;
        }
        else if(buttonText=="="){
            input.value = eval(inputVal)
            
        }else{
            inputVal+=buttonText;
            input.value = inputVal;
        }
    })
}