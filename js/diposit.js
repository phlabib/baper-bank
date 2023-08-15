// step 1: add event listner to the diposite button
document.getElementById('btn-diposit').addEventListener('click', function(){
    // get the diposite amount from the diposite input field
    // for input field use .value to the value inside the input field
    const dipositeField = document.getElementById('diposit-field');
    const dipositeAmount = dipositeField.value;
    // step 3 : get the curretnt diposite total
    // for non inout (element other than input, testarea) use innerText to get the text
    const dipositTotalElement = document.getElementById('diposit-total');
    const dipositTotal = dipositTotalElement.innerText;
    dipositTotalElement.innerText = dipositeAmount;
})