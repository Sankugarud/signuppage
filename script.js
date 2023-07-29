const fname = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


// token generation
function randomtoken(){
    let char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let token = '';
    for(let i=0; i<16; i++){
        let random = Math.floor((Math.random() * char.length));

        token = token + char.charAt(random);
    }
    return token;
}
function displayErrorMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}

function displaySuccessMessage(message) {
    const successMessage = document.getElementById('error-message');
    successMessage.style.color = 'green';
    successMessage.textContent = message;
}

const signupButton = document.getElementById('signupbtn');
signupButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (fname.value.trim() ==='' || email.value.trim() ==='' || password.value.trim() ==='' ) {
        displayErrorMessage('All fields are mandatory.');

    }else{
        if(password.value.trim() !== cpassword.value.trim()){
            displayErrorMessage('Password not match!!!');
            password.value = '';
            cpassword.value = '';
        }else if (!isValidEmail(email.value.trim())) {
            displayErrorMessage('Invalid email address.');
            email.value = '';
        } else{
            let firstname = fname.value;
            let emailname = email.value;
            let confirmpass = cpassword.value;
            let tokengen = randomtoken();
            const user = {
                firstname,
                emailname,
                tokengen,
                confirmpass
            };
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            displaySuccessMessage('Signup successful! Redirecting to profile page...');

            setTimeout(() => {
                window.location.href = '../profile/index.html';
            }, 1000);
            
        }
    }

   
});

function isValidEmail(email) {
    // Simple check for "@" and "."
    return email.includes('@') && email.includes('.');
}
