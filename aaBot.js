function(e,formFields){

let fieldArr = formFields.split(",");
document.getElementById('customerName').value = fieldArr[0];
document.getElementById('customerID').value = fieldArr[1];
document.getElementById('primaryContact').value = fieldArr[2];
document.getElementById('street').value = fieldArr[3];
document.getElementById('city').value = fieldArr[4];
document.getElementById('state').value = fieldArr[5];
document.getElementById('zip').value = fieldArr[6];
document.getElementById('email').value = fieldArr[7];
if(fieldArr[8] == "YES"){
document.getElementById('activeDiscountYes').click();
}else{
document.getElementById('activeDiscountNo').click();
}

if(fieldArr[9] == "YES"){
document.getElementById('NDA').click();
}

document.getElementById('submit_button').click();
}