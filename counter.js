const counterElement=document.getElementById('counter');
const incrementElement=document.getElementById('increment');
const decrementElement=document.getElementById('decrement');
let counterValue=0;
counterElement.textContent=counterValue;
incrementElement.addEventListener("click",() =>{
counterValue++;
counterElement.textContent=counterValue;
});
decrementElement.addEventListener("click",()=>{
counterValue--;
counterElement.textContent=counterValue;
});