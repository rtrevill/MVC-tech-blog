const newpost = async (event) => {
    try{
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const contents = document.getElementById('post-content').value;

    await fetch('/api/blog', {
        method: 'POST',
        body: JSON.stringify({ title, contents}),
        headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            location.replace('/dash');
        })
        return
    }catch(err){
        console.log(err)
    }
}   






document.getElementById('postform').addEventListener('submit', newpost);