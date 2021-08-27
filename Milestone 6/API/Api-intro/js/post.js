function loadPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}

loadPosts();

function displayPosts (posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        let div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h2>${post.id} ${post.title}</h2>
            <p>${post.body}</p>
        `
        postContainer.appendChild(div);
    }
}