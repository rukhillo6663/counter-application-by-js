//Accessing elements from DOM
let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");
let message = document.querySelector('h1')

//Function for add btn
function addition(){
    let output = document.querySelector("#output");
    output.innerHTML = Number(output.innerHTML) + 1;
    result = output.innerHTML;
      
        if (result <0) 
        {
            output.style.backgroundColor = 'red'
        } else if (result>0)
        {
            output.style.backgroundColor = 'navy'
        } else  {
            output.style.backgroundColor = 'grey';

        } 
      
}
//Function for subtract btn
function subtration () {
    let output = document.querySelector("#output");
    output.innerHTML = Number(output.innerHTML) - 1;
    result = output.innerHTML;

  
       if (result <0) 
        {
          output.style.backgroundColor = 'red'
        } else if (result>0)
        {
          output.style.backgroundColor = 'navy'
        } else 
        {
          output.style.backgroundColor = 'grey';
        }
  
   
}

//AddEventListener trigger
add.addEventListener("click", addition);
subract.addEventListener("click", subtration)