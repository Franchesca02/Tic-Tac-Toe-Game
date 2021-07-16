window.addEventListener('DOMContentLoaded', () => {
    const title = Array.from(document.querySelectorAll('.title'));
    const play = document.querySelector('.play');
    const refreshButton = document.querySelector('#refresh');
    const inform = document.querySelector('.inform');

    let board = ['', '', '', '', '', '', '', ''];
    let currentPlayer = 'D';
    let isGameActive = true;

    const PLAYERD_WON = 'PLAYERD_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';
});