//Randomize Teams
let randomizeForm = document.getElementById('randomizeForm');
randomizeForm.onsubmit = function (event) {
    event.preventDefault();
    team1Players.innerHTML = '';
    team2Players.innerHTML = '';

    let numOfTeams = parseInt(document.getElementById('numberOfTeams').value, 10);
    let numOfGuards = parseInt(document.getElementById('numberOfGuards').value, 10);
    numOfGuards = isNaN(numOfGuards) ? 0 : numOfGuards;
    let numOfForwards = parseInt(document.getElementById('numberOfForwards').value, 10);
    numOfForwards = isNaN(numOfForwards) ? 0 : numOfForwards;
    let numOfCenters = parseInt(document.getElementById('numberOfCenters').value, 10);
    numOfCenters = isNaN(numOfCenters) ? 0 : numOfCenters;
    let numOfPlayers = numOfGuards + numOfForwards + numOfCenters;

    if(numOfPlayers > playerList.length || numOfPlayers < 1 || isNaN(numOfPlayers)) {
        alert('Please enter a valid number of players');
        return;
    }

    // if(numOfTeams < 1 || isNaN(numOfTeams)) {
    //     alert('Please enter a valid number of teams');
    //     return;
    // }

    // for (let i = 0; i < numOfTeams; i++) {
    //     randomizeTeam(guards, numOfGuards)
    //     .concat(randomizeTeam(forwards, numOfForwards));
    //     randomizeTeam(centers, numOfCenters);
    // }

    let guards = playerList.filter(player => player.position === 'Guard');
    let forwards = playerList.filter(player => player.position === 'Forward');
    let centers = playerList.filter(player => player.position === 'Center');

    let randomPlayers1 = randomizePlayers(guards, numOfGuards)
        .concat(randomizePlayers(forwards, numOfForwards))
        .concat(randomizePlayers(centers, numOfCenters));

    let randomPlayers2 = randomizePlayers(guards, numOfGuards)
        .concat(randomizePlayers(forwards, numOfForwards))
        .concat(randomizePlayers(centers, numOfCenters));

    team1Players.innerHTML = randomPlayers1.join('<br>');
    team2Players.innerHTML = randomPlayers2.join('<br>');
    randomPlayersModal.style.display = 'block';
    randomizeForm.reset();
}

function randomizePlayers(playerList, numOfPlayers) {
    let randomPlayers = [];
    for (let i = 0; i < numOfPlayers; i++) {
        let randomIndex = Math.floor(Math.random() * playerList.length);
        randomPlayers.push(playerList[randomIndex].name);
        playerList.splice(randomIndex, 1); // Remove the selected player from the list
    }
    return randomPlayers;
}