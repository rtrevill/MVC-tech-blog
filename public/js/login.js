// Event handler and function for logging a user in.
// Function saves login information and sends a Post request
// If the login is okay, that user's dashboard is displayed,  
// otherwise an alert is shown for an unsuccessful login attempt

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