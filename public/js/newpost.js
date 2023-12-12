// Event handler and function for creating a new blog entry.
// Function saves user entered data and sends a Post query to create a new blog post.
// When completed, the user's dashboard is displayed with the new post being listed.

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