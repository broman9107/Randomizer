//Modal
let randomPlayersModal = document.getElementById('randomPlayersModal');
let modalClose = document.getElementById('modalClose');

modalClose.onclick = function () {
    randomPlayersModal.style.display = 'none';
    teamsDiv.innerHTML = '';
}

window.onclick = function (e) {
    if (e.target == randomPlayersModal) {
        randomPlayersModal.style.display = 'none';
        teamsDiv.innerHTML = '';
    }
}