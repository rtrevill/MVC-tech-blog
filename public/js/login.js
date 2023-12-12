
const loginAttempt = async (event) => {
    event.preventDefault();

    const username = document.getElementById('User-login').value;
    const password = document.getElementById('User-password').value;

    if (username && password){
        const validateUser = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'content-type': 'application/json'},
        })
        
    
    if (validateUser.ok){
        location.replace("/dash");
    }
    else{
        window.alert("Sorry, Login unsuccessful");
    }
}
}


document.getElementById('login-form').addEventListener('submit', loginAttempt);