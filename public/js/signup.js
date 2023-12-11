

const clickbutton = async (event) => {

    const username = document.querySelector('#new-user-name').value;
    const password = document.querySelector('#new-user-password').value;
  
    event.preventDefault();    
    console.log(username, password);
    if (username && password){
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
    return 
}

const validateUser = async (username, password) => {
    await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {'content-type': 'application/json'},
    })
return;
};


document
.querySelector('#new-user-form')
.addEventListener('submit', clickbutton);

