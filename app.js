let btn = document.querySelectorAll('button');
let input = document.querySelector('input');
let string = '';
for(i of btn){
i.addEventListener('click',function(event){

    
    if(event.target.innerText== '='){
        cal( input.value);
    }
    else{        
    string += event.target.innerText;
    input.value = string ;
    }
    
});
}
function cal(sr){
   res = eval(sr);
   input.value = res;
}