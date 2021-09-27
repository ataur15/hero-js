function loadData () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUsers () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayData(json))
}

function displayData (data) {
    let ul = document.getElementById('users');
    for (const user of data) {
        let li = document.createElement('li');
        li.innerText = `Name: ${user.name} Email: ${user.email}`;
        ul.appendChild(li);
    }
}