const clickbutton = async (event) => {

    event.preventDefault();    

    const username = document.querySelector('#new-user-name').value;
    const password = document.querySelector('#new-user-password').value;
    if (uname && upass){
        const newUser = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password}),
        headers: { 'Content-Type': 'application/json' },
        });
    }
    // console.log(`${uname} and also ${upass}`);
    // console.log('YAAAAAA');
    return 
}

document
.querySelector('button')
.addEventListener('onclick', clickbutton);