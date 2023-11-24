// const form = document.getElementsByClassName('new-user-form');
const blah =()=> {console.log('Connected')}
const signupHandler = async (event) => {
    event.preventdefault();

    console.log('It Works');
    return
}


blah();
document.querySelector('.new-user-form').addEventlistener('submit', signupHandler);