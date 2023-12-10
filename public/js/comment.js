const submitComment = async (event) => {
    const commentText = document.getElementById('comments').value;
    const userID = document.getElementById('comments-box').getAttribute('userID');
    const blogID = document.getElementById('comments-box').getAttribute('blogID');

    try{
        await fetch('/api/blog/newComment', {
                method: 'POST',
                body: JSON.stringify({
                    creator_id: userID,
                    blog_id: blogID,
                    comment: commentText
                }),
                headers: {'content-type': 'application/json'},               
        })
        .then(async (response) => {
            try{
            if(response.ok){
                location.reload();
                // await fetch(`/api/blog/blogComments/${blogID}`,{
                //     method: 'GET',
                // })
            }
            }catch(err){
                console.log(err);
            }
        })

    }catch(err){
        console.log(err)
    }


    console.log(commentText, userID, blogID)
}

document.getElementById('submit-btn').addEventListener('click', submitComment);