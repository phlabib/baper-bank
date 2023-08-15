// step : 1 [add click event handler with the submit button]
document.getElementById('btn-submit').addEventListener('click', function(){
// step 2 : get the email address inside the email input field
// remember : always to use .value to get text form an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
// step 3 : get password 
// -> get the element
//  -> get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;

// DANGER : don't verify email and password on the client side
// step 4 : verify email and password  and check where valid user or not
    if (email === 'sontan@bapp.com' && password === 'secret'){
        console.log('valid user');}
        else {
            console.log('invalid user');
        }
    
})