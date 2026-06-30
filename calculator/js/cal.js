
 const display = document.getElementById('input');

 function appendValue(value){
  input.value += value;

 }


 function clearValue(){
  input.value = '';
 }

 function backspace(){
  input.value = input.value.slice(0, -1)
 }



function calculateResult(){
  try{
  input.value = eval(input.value);
}catch(error){
  input.value = "Error";
  }
}
