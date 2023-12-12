const clickbutton = async (event) => {

    const username = document.querySelector('#new-user-name').value;
    const password = document.querySelector('#new-user-password').value;
  
    event.preventDefault(); 
    
    (!username||!password) ? errorMessages(1) :
    (password.length<8) ? errorMessages(2) :
    usernameCheck(username, password);
}

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
}

const createUser = async (username, password) => {
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
}


const validateUser = async (username, password) => {
    await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {'content-type': 'application/json'},
    })
return;
};

const errorMessages = (num) => {
    (num === 1) ? window.alert("Please complete all fields"):
    (num === 2) ? window.alert("Please enter at least 7 characters for a password"):
    (num === 3) ? window.alert("This username is already taken"):
    console.log("Unknown error");

    return
};


document
.querySelector('#new-user-form')
.addEventListener('submit', clickbutton);

