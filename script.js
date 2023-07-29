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

const signupButton = document.getElementById('signupbtn');
signupButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (fname.value.trim() ==='' || email.value.trim() ==='' || password.value.trim() ==='' ) {
        alert('All fields are mandatory.');

    }else{
        if(password.value.trim() !== cpassword.value.trim()){
            alert('password not match');
            password.value = '';
            cpassword.value = '';
        }else{
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
            alert('congratulation');

            setTimeout(() => {
                window.location.href = '../profile/index.html';
            }, 1000);
            
        }
    }

   
});

