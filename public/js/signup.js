// const { User } = require("../../models");

const clickbutton = async (event) => {

    event.preventDefault();    

    const username = document.querySelector('#new-user-name').value;
    const password = document.querySelector('#new-user-password').value;
    if (username && password){
        const newUser = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' },
        })
        .then(async(response)=> {
            console.log("AAAAAAAAAA")
            const validateUser = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {'content-type': 'application/json'},
            })
            })
            .then(window.location.replace('/dash'));
    }
    return 
}



document
.querySelector('#new-user-form')
.addEventListener('submit', clickbutton);

