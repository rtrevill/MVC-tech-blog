// const { User } = require("../../models");

const clickbutton = async (event) => {

    event.preventDefault();    

    const username = document.querySelector('#new-user-name').value;
    const email = document.querySelector('#new-user-email').value;
    const password = document.querySelector('#new-user-password').value;
    if (username && email && password){
        const newUser = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password}),
        headers: { 'Content-Type': 'application/json' },
        });
    }
    // console.log(`${uname} and also ${upass}`);
    // console.log('YAAAAAA');
    return 
}


// const loginAttempt = async (event) => {
//     event.preventDefault();

//     const username = document.getElementById('User-login').value;
//     const password = document.getElementById('User-password').value;

//     if (username && password){
//         const validateUser = await fetch('api/users', {
//             method: 'POST',
//             body: JSON.stringify({username, password}),
//             headers: {'content-type': 'application/json'},
//         })
//         }
    
//     if (response.ok){
//         console.log('All Good you are now logged in');
//     }
    
// }

document
.querySelector('.btn')
.addEventListener('click', clickbutton);

// document.getElementById('login-button').addEventListener('click', loginAttempt);