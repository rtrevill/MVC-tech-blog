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
    

}



document.getElementById('delete-button').addEventListener('click', deleteBlog)