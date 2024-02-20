document.addEventListener('DOMContentLoaded', function () {
    populateTable();
});

let tbody = document.getElementById('playersTableBody');
let tableCount = document.getElementById('playerCount');

//Populate Table
function populateTable() {
    playerList.forEach(p => {
        let row = tbody.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.innerHTML = p.name;
        cell2.innerHTML = p.position;
    });
    tableCount.innerHTML = "Count: " + playerList.length;
}

// //Player Sort
// let playerSort = document.getElementById('playerSort');
// let ascending = true; // Flag to track sorting order

// playerSort.onclick = function () {
//     playerList.sort((a, b) => {
//         if (a.name < b.name) {
//             return ascending ? -1 : 1; // Ascending or descending based on flag
//         } else if (a.name > b.name) {
//             return ascending ? 1 : -1; // Ascending or descending based on flag
//         } else {
//             return 0;
//         }
//     });
//     ascending = !ascending; // Toggle sorting order
//     tbody.innerHTML = '';
//     populateTable();
//     //tbody.scrollIntoView({ behavior: "smooth" , block: "start" }); // Scrolls to top of table
// };

// //Position Sort
// let positionSort = document.getElementById('positionSort');
// let ascending2 = true; // Flag to track sorting order

// positionSort.onclick = function () {
//     playerList.sort((a, b) => {
//         if (a.position < b.position) {
//             return ascending2 ? -1 : 1; // Ascending or descending based on flag
//         } else if (a.position > b.position) {
//             return ascending2 ? 1 : -1; // Ascending or descending based on flag
//         } else {
//             return 0;
//         }
//     });
//     ascending2 = !ascending2; // Toggle sorting order
//     tbody.innerHTML = '';
//     populateTable();
// }

//Sort Players
let playerSort = document.getElementById('playerSort');
let positionSort = document.getElementById('positionSort');
let ascending = { name: true, position: true }; // Flags to track sorting order for each property

function sortPlayers(property) {
    playerList.sort((a, b) => {
        if (a[property] < b[property]) {
            return ascending[property] ? -1 : 1; // Ascending or descending based on flag
        } else if (a[property] > b[property]) {
            return ascending[property] ? 1 : -1; // Ascending or descending based on flag
        } else {
            return 0;
        }
    });
    ascending[property] = !ascending[property]; // Toggle sorting order
    tbody.innerHTML = '';
    populateTable();
}

playerSort.onclick = function () {
    sortPlayers('name');
};

positionSort.onclick = function () {
    sortPlayers('position');
};

//Add Player
let addPlayerForm = document.getElementById('addPlayerForm');
addPlayerForm.onsubmit = function (e) {
    e.preventDefault();
    let name = document.getElementById("playerNameInput").value;
    let position = document.getElementById('playerPositionInput').value;
    playerList.push(new Player(name, position));
    tbody.innerHTML = '';
    playerList.forEach(p => {
        let row = tbody.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.innerHTML = p.name;
        cell2.innerHTML = p.position;
    });
    addPlayerForm.reset();
    populateTable();
}

//Modal
let randomPlayersModal = document.getElementById('randomPlayersModal');
let modalContent = document.getElementById('modalContent');
let modalClose = document.getElementById('modalClose');
let randomizeButton = document.getElementById('randomizeButton');
let team1Players = document.getElementById('team1Players');
let team2Players = document.getElementById('team2Players');

randomizeButton.onclick = function () {
    team1Players.innerHTML = '';
    team2Players.innerHTML = '';
    let randomPlayers1 = [];
    let randomPlayers2 = [];
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * playerList.length);
        randomPlayers1.push(playerList[randomIndex].name);
    }
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * playerList.length);
        randomPlayers2.push(playerList[randomIndex].name);
    }
    team1Players.innerHTML = randomPlayers1.join('<br>');
    team2Players.innerHTML = randomPlayers2.join('<br>');
    randomPlayersModal.style.display = 'block';
}

modalClose.onclick = function () {
    randomPlayersModal.style.display = 'none';
}

window.onclick = function (e) {
    if (e.target == randomPlayersModal) {
        randomPlayersModal.style.display = 'none';
    }
}