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

document
.querySelector('.btn')
.addEventListener('click', clickbutton);