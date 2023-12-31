// Event handler and function for when a new comment is made.
// Function sends a post request for the comment, then, if ok, reloads the page
// which will have the new comment on it.

const submitComment = async (event) => {
    event.preventDefault();
    const commentText = document.getElementById('comments').value;
    const userID = document.getElementById('new-comment-box').getAttribute('userID');
    const blogID = document.getElementById('new-comment-box').getAttribute('blogID');

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
            }
            }catch(err){
                console.log(err);
            }
        })

    }catch(err){
        console.log(err)
    }


}

document.getElementById('new-comment-form').addEventListener('submit', submitComment);