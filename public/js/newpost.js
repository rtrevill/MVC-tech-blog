const newpost = async (event) => {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const contents = document.getElementById('post-content').value;
    // const creator_id = req.session.user_id;
    await fetch('/api/blog', {
        method: 'POST',
        body: JSON.stringify({ title, contents}),
        headers: { 'Content-Type': 'application/json' },
        });
        location.replace('/dash');
        return
}   






document.getElementById('postform').addEventListener('submit', newpost);