//Accessing elements from DOM
let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");
let message = document.querySelector('h1')


//Function for subtract and add btn
function subtrationAndAdditon (event) {
    let output = document.querySelector("#output");
    let target = event.target.id;
    //Check if it is subtract btn
      if(target==='subtract')
    {
        output.innerHTML = Number(output.innerHTML) - 1;
        result = output.innerHTML;
    
       // Check if it is btn
    } else if (target==='add')
    { 
        output.innerHTML = Number(output.innerHTML) + 1;
        result = output.innerHTML;

    }
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
add.addEventListener("click", subtrationAndAdditon);
subract.addEventListener("click", subtrationAndAdditon)