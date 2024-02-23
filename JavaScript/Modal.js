//Modal
let randomPlayersModal = document.getElementById('randomPlayersModal');
let modalContent = document.getElementById('modalContent');
let modalClose = document.getElementById('modalClose');
let randomizeButton = document.getElementById('randomizeButton');
let team1Players = document.getElementById('team1Players');
let team2Players = document.getElementById('team2Players');
let randomizeForm = document.getElementById('randomizeForm');

modalClose.onclick = function () {
    randomPlayersModal.style.display = 'none';
}

window.onclick = function (e) {
    if (e.target == randomPlayersModal) {
        randomPlayersModal.style.display = 'none';
    }
}
