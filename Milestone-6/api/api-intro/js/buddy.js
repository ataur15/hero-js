const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => displayBuddies(data))
}

const displayBuddies = (buddies) => {
    console.log(buddies);

    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies.results) {
        let p = document.createElement('p');
        p.innerText = `
            Name: ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}
        `;
        buddiesDiv.appendChild(p);
    }
}