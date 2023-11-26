const deleteBlog = async () => {
    console.log(window.location.href);
    let url = window.location.href;
    let urlArray = url.split('/');
    console.log(urlArray);
    let number = parseInt(urlArray[5]);
    console.log(number);

    await fetch('/api/blog', {
        method: 'DELETE',
        body: JSON.stringify({id: number}),
        headers: { 'Content-Type': 'application/json' },
    })
    location.replace("/dash");
};

const updateBlog = async () => {
    const url = (window.location.href).split('/');
    const id = parseInt(url[5]);
    const title = document.getElementById('blog-title').value;
    const contents = document.getElementById('blog-contents').value;
    // console.log(urlIndex, titleArea, contentsArea);
try{
    await fetch('/api/blog/', {
        method: 'PUT',
        body: JSON.stringify({id, title, contents}),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log('Blog updated')
    location.replace('/dash');
}catch(err){
    console.log(err);
}
}


document.getElementById('update-button').addEventListener('click', updateBlog)
document.getElementById('delete-button').addEventListener('click', deleteBlog)