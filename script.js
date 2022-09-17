let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(!(e.target.innerHTML === 'C')){
            console.log("I was called")
        if(e.target.innerHTML === '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        
        else if(e.target.innerHTML === 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    }})
})
const handleClear = ()=>{

    const presentValue=document.querySelector('input').value;
    // console.log(presentValue.slice(0,presentValue.length-1))
    document.querySelector('input').value=presentValue.slice(0,presentValue.length-1);
}