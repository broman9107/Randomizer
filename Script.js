//Testing for width and height
//------------------------------------------------------------------------//
// window.onresize = function () {
//     let windowWidth = document.getElementById("width");
//     let windowHeight = document.getElementById("height");
//     windowWidth.innerHTML = window.innerWidth;
//     windowHeight.innerHTML = window.innerHeight;
// }
//------------------------------------------------------------------------//



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
let randomizeForm = document.getElementById('randomizeForm');

//Randomize Teams
randomizeForm.onsubmit = function (event) {
    event.preventDefault();
    team1Players.innerHTML = '';
    team2Players.innerHTML = '';
    let numOfPlayers = document.getElementById('numberOfPlayers');
    let randomPlayers1 = [];
    let randomPlayers2 = [];
    if(numOfPlayers.value > playerList.length || numOfPlayers.value < 1) {
        alert('Please enter a valid number of players');
        return;
    }
    for (let i = 0; i < numOfPlayers.value ; i++) {
        let randomIndex = Math.floor(Math.random() * playerList.length);
        randomPlayers1.push(playerList[randomIndex].name);
    }
    for (let i = 0; i < numOfPlayers.value; i++) {
        let randomIndex = Math.floor(Math.random() * playerList.length);
        randomPlayers2.push(playerList[randomIndex].name);
    }
    team1Players.innerHTML = randomPlayers1.join('<br>');
    team2Players.innerHTML = randomPlayers2.join('<br>');
    randomPlayersModal.style.display = 'block';
    numOfPlayers.value = '';
}

modalClose.onclick = function () {
    randomPlayersModal.style.display = 'none';
}

window.onclick = function (e) {
    if (e.target == randomPlayersModal) {
        randomPlayersModal.style.display = 'none';
    }
}

window.onresize = function () {
    let windowWidth = document.getElementById("width");
    let windowHeight = document.getElementById("height");
    windowWidth.innerHTML = window.innerWidth;
    windowHeight.innerHTML = window.innerHeight;
}
