const showComments = (event) => {
    let element = event.target.parentElement;
    console.log(element.id);
}

// const showCommentsFromTitle = (event) => {
//     let element = event.target.parentElement;
//     console.log(element.id);
// }

// const showCommentsFromBody = (event) => {
//     let element = event.target.parentElement;
//     console.log(element.id);
// }

const newish = document.getElementsByClassName('blog-wrapper');
for (var i = 0; i < newish.length; i++) {
    newish[i].addEventListener('click', showComments, false);
}

// const titleish = document.getElementsByClassName('blog-title');
// for (var i = 0; i < titleish.length; i++) {
//     titleish[i].addEventListener('click', showCommentsFromTitle, false);
// }

// const blogishish = document.getElementsByClassName('bodyOfBlog');
// for (var i = 0; i < blogishish.length; i++) {
//     blogishish[i].addEventListener('click', showCommentsFromBody, false);
// }
// newish.addEventListener('click', showComments);