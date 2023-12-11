// const {User} = require("../../models");

const loginAttempt = async (event) => {
    event.preventDefault();

    const username = document.getElementById('User-login').value;
    const password = document.getElementById('User-password').value;

    if (username && password){
        // console.log(username, email, password);
        const validateUser = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'content-type': 'application/json'},
        })
        
    
    if (validateUser.ok){
        console.log(`All Good you are now logged in`);
        location.replace("/dash");
    }
    else{
        console.log("No Good");
    }
}
}


document.getElementById('login-form').addEventListener('submit', loginAttempt);