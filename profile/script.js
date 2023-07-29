let user = JSON.parse(localStorage.getItem('user'));
console.log(user);

const fullname = document.getElementById('fname');
    const fullemail = document.getElementById('email');
    const fulltoken = document.getElementById('token');
    const password = document.getElementById('password');

    fullname.innerText = user.firstname;
    fullemail.innerText = user.emailname;
    fulltoken.innerText = user.tokengen;
    password.innerText =   user.confirmpass;


    const logbtn = document.getElementById('logbtn');
    logbtn.addEventListener('click', () => {
        localStorage.removeItem('user');

        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1000);
        
    });