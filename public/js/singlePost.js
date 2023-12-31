// 2 Event handlers and functions to update, or delete blog posts


// deleteBlog function takes the blog id from the url address, and then sends a Delete request 
// to remove this blog.
// Once complete, user's dashboard is shown.
const deleteBlog = async () => {
    let url = window.location.href;
    let urlArray = url.split('/');
    let number = parseInt(urlArray[5]);
    try{
        await fetch('/api/blog', {
            method: 'DELETE',
            body: JSON.stringify({id: number}),
            headers: { 'Content-Type': 'application/json' },
        })
        window.alert('Post Deleted!');
        location.replace("/dash");
    }catch(err){
        console.log(err);
    }
};


// updateBlog function takes the blog id from the url address, and then sends a Put request 
// to update this blog.
// Once complete, user's dashboard is shown.

const updateBlog = async () => {
    const url = (window.location.href).split('/');
    const id = parseInt(url[5]);
    const title = document.getElementById('blog-title').value;
    const contents = document.getElementById('blog-contents').value;
try{
    await fetch('/api/blog/', {
        method: 'PUT',
        body: JSON.stringify({id, title, contents}),
        headers: { 'Content-Type': 'application/json' },
    });
    window.alert('Blog updated')
    location.replace('/dash');
}catch(err){
    console.log(err);
}
}

document.getElementById('update-button').addEventListener('click', updateBlog)
document.getElementById('delete-button').addEventListener('click', deleteBlog)