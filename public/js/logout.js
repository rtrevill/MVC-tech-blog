const logoutUser = async (event) =>{
    console.log("Logging out")
   try{
        await fetch('api/users/logout', {
        method: 'POST' 
    })
    location.replace('/');
    }catch(err){
        console.log(err);
    };
};


document.getElementById('logout').addEventListener('click', logoutUser);