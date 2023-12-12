const logoutUser = async (event) =>{
   try{
        await fetch('/api/users/logout', {
        method: 'POST' 
    })
    .then((response) => {
        if (response.ok){
            (location.replace('/'))};
    })
    }catch(err){
        console.log(err);
    };
};


document.getElementById('logout').addEventListener('click', logoutUser);