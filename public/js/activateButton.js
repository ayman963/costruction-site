var checkBox = document.getElementById('vehicle1');
var submitButton = document.getElementById('submitButton');

function handleChange(){
    if (checkBox.checked === true){
    submitButton.disabled = false;    
    } else {
    submitButton.disabled = true;    
    }

}



//document.getElementById("vehicle1").addEventListener("click", handleClick);
/* checkBox.onchange = function(){
    submitButton.disabled = !!this.checked;
   */ 