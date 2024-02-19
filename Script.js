document.addEventListener('DOMContentLoaded', function () {
    populateTable();
});

let tbody = document.getElementById('playersTableBody');

//Populate Table
function populateTable() {
    playerList.forEach(p => {
        let row = tbody.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.innerHTML = p.name;
        cell2.innerHTML = p.position;
    });
}

//Player Sort
let playerSort = document.getElementById('playerSort');
let ascending = true; // Flag to track sorting order

playerSort.onclick = function () {
    playerList.sort((a, b) => {
        if (a.name < b.name) {
            return ascending ? -1 : 1; // Ascending or descending based on flag
        } else if (a.name > b.name) {
            return ascending ? 1 : -1; // Ascending or descending based on flag
        } else {
            return 0;
        }
    });

    ascending = !ascending; // Toggle sorting order

    tbody.innerHTML = '';
    playerList.forEach(p => {
        let row = tbody.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.innerHTML = p.name;
        cell2.innerHTML = p.position;
    });

    //tbody.scrollIntoView({ behavior: "smooth" , block: "start" }); // Scrolls to top of table
};

//Position Sort
let positionSort = document.getElementById('positionSort');
let ascending2 = true; // Flag to track sorting order

positionSort.onclick = function () {
    playerList.sort((a, b) => {
        if (a.position < b.position) {
            return ascending2 ? -1 : 1; // Ascending or descending based on flag
        } else if (a.position > b.position) {
            return ascending2 ? 1 : -1; // Ascending or descending based on flag
        } else {
            return 0;
        }
    });

    ascending2 = !ascending2; // Toggle sorting order

    tbody.innerHTML = '';
    playerList.forEach(p => {
        let row = tbody.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.innerHTML = p.name;
        cell2.innerHTML = p.position;
    });
}

//Grab addPlayerForm and add new player to playerList when submitted
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

