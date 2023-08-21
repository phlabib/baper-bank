// step 1: add event listner to the diposite button
    document.getElementById('btn-diposit').addEventListener('click', function(){

    // step 2 :get the diposite amount from the diposite input field
    // for input field use .value to the value inside the input field
  
    const dipositeField = document.getElementById('diposit-field');
    const newDipositeAmountString = dipositeField.value;
      // convart strint diposite amount to a number
    const newDipositeAmount = parseFloat(newDipositeAmountString);
    
    // step 3 : get the curretnt diposite total
    // for non inout (element other than input, testarea) use innerText to get the text
    const dipositTotalElement = document.getElementById('diposit-total');
    const previuosDipositTotalString = dipositTotalElement.innerText;
    const previuosDipositTotal = parseFloat(previuosDipositTotalString);
    
    // stpe 4: add numbers to set the total diposite
    const currentDipositeTotal = previuosDipositTotal + newDipositeAmount; 
    //  set the diposite total 
    dipositTotalElement.innerText = currentDipositeTotal;

    // step 5 : get ballance current total
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalStirng = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalStirng);

    // step 6 : calculate current total balance
    const currtentBalanceTotal = previousBalanceTotal + newDipositeAmount;
    // set the balance total 
    balanceTotalElement.innerText = currtentBalanceTotal;






    // step 7: clear the diposite field
    dipositeField.value = '';
})