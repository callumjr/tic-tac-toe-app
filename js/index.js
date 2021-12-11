const boxes = document.querySelectorAll('.game__box');
let box0 = document.getElementById('#0');
let box1 = document.getElementById('#1');
let box2 = document.getElementById('#2');
let box3 = document.getElementById('#3');
let box4 = document.getElementById('#5');
let box5 = document.getElementById('#5');
let box6 = document.getElementById('#6');
let box7 = document.getElementById('#7');
let box8 = document.getElementById('#8');
const xImages = document.querySelectorAll('.x');
const oImages = document.querySelectorAll('.o');
const playerDiv = document.querySelector('.player');
const winnerDiv = document.querySelector('.winner');
const restartBtn = document.querySelector('.restart--button');
const fullBoardDiv = document.querySelector('.full--board');

const board = [ [ 00, 01, 02 ], [ 10, 11, 12 ], [ 20, 21, 22 ] ];

box0 = board[0][0];
box1 = board[0][1];
box2 = board[0][2];
box3 = board[1][0];
box4 = board[1][1];
box5 = board[1][2];
box6 = board[2][0];
box7 = board[2][1];
box8 = board[2][2];

let player1Boxes = [ [], [], [] ];
let player2Boxes = [ [], [], [] ];

let currentPlayer = player1;

const playerGoX = document.createElement('h2');
playerGoX.innerText = "X it's your turn";
playerGoX.style.fontSize = '3rem';
playerGoX.style.fontFamily = 'sans-serif';
playerGoX.style.textAlign = 'center';
playerGoX.style.color = '#7db2e8';
playerGoX.style.margin = '2rem auto 0 auto';
playerGoX.style.width = '25rem';
playerDiv.appendChild(playerGoX);

const playerGoO = document.createElement('h2');
playerGoO.innerText = "O it's your turn";
playerGoO.style.fontSize = '3rem';
playerGoO.style.fontFamily = 'sans-serif';
playerGoO.style.textAlign = 'center';
playerGoO.style.color = '#ff6666';
playerGoO.style.margin = '2rem auto 0 auto';
playerGoO.style.width = '25rem';
playerGoO.classList.add('hidden');
playerDiv.appendChild(playerGoO);

const winnerTextX = document.createElement('h2');
winnerTextX.innerText = 'X Has Won';
winnerTextX.style.fontSize = '3rem';
winnerTextX.style.fontFamily = 'sans-serif';
winnerTextX.style.textAlign = 'center';
winnerTextX.style.color = '#7db2e8';
winnerTextX.style.margin = '2rem auto 0 auto';
winnerTextX.style.width = '25rem';
winnerTextX.classList.add('hidden');
winnerDiv.appendChild(winnerTextX);

const winnerTextO = document.createElement('h2');
winnerTextO.innerText = 'O Has Won';
winnerTextO.style.fontSize = '3rem';
winnerTextO.style.fontFamily = 'sans-serif';
winnerTextO.style.textAlign = 'center';
winnerTextO.style.color = '#ff6666';
winnerTextO.style.margin = '2rem auto 0 auto';
winnerTextO.style.width = '25rem';
winnerTextO.classList.add('hidden');
winnerDiv.appendChild(winnerTextO);

const fullBoardText = document.createElement('h2');
fullBoardText.innerText = 'Draw';
fullBoardText.style.fontSize = '3rem';
fullBoardText.style.fontFamily = 'sans-serif';
fullBoardText.style.textAlign = 'center';
fullBoardText.style.color = 'rgb(124, 117, 170)';
fullBoardText.style.margin = '2rem auto 0 auto';
fullBoardText.style.width = '25rem';
fullBoardText.classList.add('hidden');
fullBoardDiv.appendChild(fullBoardText);

let boxArr = [];

boxes.forEach(box => {
	box.addEventListener('click', e => {
		if (winner) {
			return;
		}

		let clicked = e.target.id;

		applyToBox(clicked, currentPlayer);
	});
});

restartBtn.addEventListener('click', () => {
	resetBoard();
});
