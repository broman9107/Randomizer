//Randomize Teams
let randomizeForm = document.getElementById('randomizeForm');
randomizeForm.onsubmit = function (event) {
    event.preventDefault();

    // Get the values from the form and parse them into integers
    let numOfTeams = parseInt(document.getElementById('numberOfTeams').value, 10);
    let numOfGuards = parseInt(document.getElementById('numberOfGuards').value, 10);
    numOfGuards = isNaN(numOfGuards) ? 0 : numOfGuards;
    let numOfForwards = parseInt(document.getElementById('numberOfForwards').value, 10);
    numOfForwards = isNaN(numOfForwards) ? 0 : numOfForwards;
    let numOfCenters = parseInt(document.getElementById('numberOfCenters').value, 10);
    numOfCenters = isNaN(numOfCenters) ? 0 : numOfCenters;
    let numOfPlayers = numOfGuards + numOfForwards + numOfCenters;

    // Validate number of players
    if(numOfPlayers > playerList.length || numOfPlayers < 1 || isNaN(numOfPlayers)) {
        alert('Please enter a valid number of players');
        return;
    }
    // Validate number of teams
    if(numOfTeams < 1 || isNaN(numOfTeams)) {
        alert('Please enter a valid number of teams');
        return;
    }

    //Filter players by position
    let guards = playerList.filter(player => player.position === 'Guard');
    let forwards = playerList.filter(player => player.position === 'Forward');
    let centers = playerList.filter(player => player.position === 'Center');

    //Randomize players
    for (let i = 1; i <= numOfTeams; i++) {
        let randomPlayers = randomizePlayers(guards, numOfGuards)
            .concat(randomizePlayers(forwards, numOfForwards))
            .concat(randomizePlayers(centers, numOfCenters));
        let teamsDiv = document.getElementById('teamsDiv');
        teamsDiv.innerHTML += `<div><h1>Team ${i}</h1>` + `<p class="teamList">${randomPlayers.join('<br>')}<p></div>`;        
    }

    // Adjust the grid layout based on the number of teams
    let numTeams = teamsDiv.children.length;
    if (numTeams % 2 === 0) {
        teamsDiv.style.gridTemplateColumns = '1fr 1fr';
    } else {
        teamsDiv.style.gridTemplateColumns = '1fr 1fr 1fr';
    }
    // Show the modal
    randomPlayersModal.style.display = 'block';
    // Clear the form
    randomizeForm.reset();
}

//Randomize Players Function
function randomizePlayers(playerList, numOfPlayers) {
    let randomPlayers = [];
    for (let i = 0; i < numOfPlayers; i++) {
        let randomIndex = Math.floor(Math.random() * playerList.length);
        randomPlayers.push(playerList[randomIndex].name);
        playerList.splice(randomIndex, 1); // Remove the selected player from the list
    }
    return randomPlayers;
}