// step 1 : add eventhandler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    // step 2 : get the withdraw amount from the input field
    // also make sure to convert the input into a number by using parseFloat 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 3 : get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // step 4 : calculate total withdraw amount
    const couutentWitdeawTotal = previousWithdrawTotal + newWithdrawAmount;
    // step 4.5 : set total withdeaw amount 
    withdrawTotalElement.innerText = couutentWitdeawTotal;

    // step 5 : get the prevous balance total
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalStirng = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalStirng);

    //  step 6 : claculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // step 6.5 : set the new balance total
    balanceTotalElement.innerText = newBalanceTotal;


    // step 7 : clear the input field 
    withdrawField.value = '';
})