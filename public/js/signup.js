// Event handler and functions to create a new user

// clickbutton function saves new user information and ensures that there is both username and password,
// also checks the password is at least 8 characters.
// If okay, the usernameCheck function is called, otherwise error messages are specified.
const clickbutton = (event) => {

    const username = document.querySelector('#new-user-name').value;
    const password = document.querySelector('#new-user-password').value;
  
    event.preventDefault(); 
    
    (!username||!password) ? errorMessages(1) :
    (password.length<8) ? errorMessages(2) :
    usernameCheck(username, password);
};


// usernameCheck function sends a Get request to find if the specified username has been taken.
// If so, an error message is specified, otherwise createUser function is called.
const usernameCheck = async (username,password) => {
    try{
        await fetch(`/api/users/${username}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json())
        .then((data) => {
            if(data === null){
                createUser(username, password);
            }
            else{
                errorMessages(3);
            }
        })
    }catch(err){
        console.log(err);
    }
};


// createUser function sends a Post request that will create a new user in the database.
// When done, runs validateUser function to log the new user in, then redirects to the new user's dashboard.
const createUser = async (username, password) => {
    try{
        await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type': 'application/json' },
            })
            .then(async (res) => {
                await validateUser(username,password)           
            })
            .then(() => {
                window.location.replace('/dash');
            })
    }catch(err){
        console.log(err);
    }
};


// validateUser function sends a Post request that logs the new user in (creates a session for them)
const validateUser = async (username, password) => {
    try{
        await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'content-type': 'application/json'},
    })
    }catch(err){
        console.log(err);
    }
return;
};


//errorMessages function sends a different alert to the user, depending on the different error.
const errorMessages = (num) => {
    (num === 1) ? window.alert("Please complete all fields"):
    (num === 2) ? window.alert("Please enter at least 8 characters for a password"):
    (num === 3) ? window.alert("This username is already taken"):
    console.log("Unknown error");

    return
};


document
.querySelector('#new-user-form')
.addEventListener('submit', clickbutton);

