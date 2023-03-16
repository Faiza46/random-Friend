function loadFriend() {
    fetch("https://randomuser.me/api/?results=50")
        .then(response => response.json())
        .then(data => displayFriend(data))

}


function displayFriend(data) {
    const friendData = data.results;
    console.log(friendData);

    const friendDiv = document.getElementById("friend");
    for (const friend of friendData) {
        const div = document.createElement("div");
        div.classList.add("friendClass")
        div.innerHTML = `
        <h2>${friend.name.title} ${friend.name.first} ${friend.name.last}</h2>
        <h4>${friend.email}</h4>
        <h5>${friend.cell}</h5>
        <img src=${friend.picture.large} alt="">
        `
        friendDiv.appendChild(div);


    }


}
