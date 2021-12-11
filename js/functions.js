const player1 = selectedBox => {
	if (selectedBox === box0) {
		player1Boxes[0].splice(0, 0, 0);
	}
	if (selectedBox === box1) {
		player1Boxes[0].splice(1, 0, 1);
	}
	if (selectedBox === box2) {
		player1Boxes[0].splice(2, 0, 2);
	}
	if (selectedBox === box3) {
		player1Boxes[1].splice(0, 0, 0);
	}
	if (selectedBox === box4) {
		player1Boxes[1].splice(1, 0, 1);
	}
	if (selectedBox === box5) {
		player1Boxes[1].splice(2, 0, 2);
	}
	if (selectedBox === box6) {
		player1Boxes[2].splice(0, 0, 0);
	}
	if (selectedBox === box7) {
		player1Boxes[2].splice(1, 0, 1);
	}
	if (selectedBox === box8) {
		player1Boxes[2].splice(2, 0, 2);
	}
};

const player2 = selectedBox => {
	if (selectedBox === box0) {
		player2Boxes[0].splice(0, 0, 0);
	}
	if (selectedBox === box1) {
		player2Boxes[0].splice(1, 0, 1);
	}
	if (selectedBox === box2) {
		player2Boxes[0].splice(2, 0, 2);
	}
	if (selectedBox === box3) {
		player2Boxes[1].splice(0, 0, 0);
	}
	if (selectedBox === box4) {
		player2Boxes[1].splice(1, 0, 1);
	}
	if (selectedBox === box5) {
		player2Boxes[1].splice(2, 0, 2);
	}
	if (selectedBox === box6) {
		player2Boxes[2].splice(0, 0, 0);
	}
	if (selectedBox === box7) {
		player2Boxes[2].splice(1, 0, 1);
	}
	if (selectedBox === box8) {
		player2Boxes[2].splice(2, 0, 2);
	}
};

let winner;

const winConditionals = (array1, array2, array3) => {
	if (array1.includes(0) && array1.includes(1) && array1.includes(2)) {
		winner = true;
		playerDiv.classList.add('hidden');
		currentPlayer === player1 ? winnerTextX.classList.remove('hidden') : winnerTextO.classList.remove('hidden');
	} // top row

	if (array2.includes(0) && array2.includes(1) && array2.includes(2)) {
		winner = true;
		playerDiv.classList.add('hidden');
		currentPlayer === player1 ? winnerTextX.classList.remove('hidden') : winnerTextO.classList.remove('hidden');
	} // middle row

	if (array3.includes(0) && array3.includes(1) && array3.includes(2)) {
		winner = true;
		playerDiv.classList.add('hidden');
		currentPlayer === player1 ? winnerTextX.classList.remove('hidden') : winnerTextO.classList.remove('hidden');
	} // bottom row

	if (array1.includes(0) && array2.includes(0) && array3.includes(0)) {
		winner = true;
		playerDiv.classList.add('hidden');
		currentPlayer === player1 ? winnerTextX.classList.remove('hidden') : winnerTextO.classList.remove('hidden');
	} // first column

	if (array1.includes(1) && array2.includes(1) && array3.includes(1)) {
		winner = true;
		playerDiv.classList.add('hidden');
		currentPlayer === player1 ? winnerTextX.classList.remove('hidden') : winnerTextO.classList.remove('hidden');
	} // second column

	if (array1.includes(2) && array2.includes(2) && array3.includes(2)) {
		winner = true;
		playerDiv.classList.add('hidden');
		currentPlayer === player1 ? winnerTextX.classList.remove('hidden') : winnerTextO.classList.remove('hidden');
	} // third column

	if (array1.includes(0) && array2.includes(1) && array3.includes(2)) {
		winner = true;
		playerDiv.classList.add('hidden');
		currentPlayer === player1 ? winnerTextX.classList.remove('hidden') : winnerTextO.classList.remove('hidden');
	} // top diagonal bottom

	if (array3.includes(0) && array2.includes(1) && array1.includes(2)) {
		winner = true;
		playerDiv.classList.add('hidden');
		currentPlayer === player1 ? winnerTextX.classList.remove('hidden') : winnerTextO.classList.remove('hidden');
	} // bottom diagonal top
};

function displayBox(box) {
	if (
		(!document.getElementById(`${box}x`).classList.contains('hidden') &&
			document.getElementById(`${box}o`).classList.contains('hidden')) ||
		(!document.getElementById(`${box}o`).classList.contains('hidden') &&
			document.getElementById(`${box}x`).classList.contains('hidden'))
	) {
		return;
	}
	if (currentPlayer === player1) {
		document.getElementById(`${box}x`).classList.remove('hidden');
		currentPlayer = player2;
	} else {
		document.getElementById(`${box}o`).classList.remove('hidden');
		currentPlayer = player1;
	}
}

const resetBoard = () => {
	winner = false;
	currentPlayer = player1;
	xImages.forEach(x => {
		x.classList.add('hidden');
	});

	oImages.forEach(o => {
		o.classList.add('hidden');
	});

	player1Boxes = [ [], [], [] ];
	player2Boxes = [ [], [], [] ];
	boxArr = [];
	winnerTextX.classList.add('hidden');
	winnerTextO.classList.add('hidden');
	fullBoardText.classList.add('hidden');
	playerGoX.classList.remove('hidden');
	playerGoO.classList.add('hidden');
	playerDiv.classList.remove('hidden');
};

const applyToBox = (id, currentPlayer) => {
	if (
		id === '0x' ||
		id === '0o' ||
		id === '1x' ||
		id === '1o' ||
		id === '2x' ||
		id === '2o' ||
		id === '3x' ||
		id === '3o' ||
		id === '4x' ||
		id === '4o' ||
		id === '5x' ||
		id === '5o' ||
		id === '6x' ||
		id === '6o' ||
		id === '7x' ||
		id === '7o' ||
		id === '8x' ||
		id === '8o'
	) {
		return;
	}

	let numId = Number(id);

	if (numId === 0) {
		clickedBox = box0;
	} else if (numId === 1) {
		clickedBox = box1;
	} else if (numId === 2) {
		clickedBox = box2;
	} else if (numId === 3) {
		clickedBox = box3;
	} else if (numId === 4) {
		clickedBox = box4;
	} else if (numId === 5) {
		clickedBox = box5;
	} else if (numId === 6) {
		clickedBox = box6;
	} else if (numId === 7) {
		clickedBox = box7;
	} else if (numId === 8) {
		clickedBox = box8;
	}

	if (boxArr.includes(numId)) {
		return;
	}

	if (currentPlayer === player1) {
		player1(clickedBox);
		winConditionals(player1Boxes[0], player1Boxes[1], player1Boxes[2]);
		playerGoX.classList.add('hidden');
		playerGoO.classList.remove('hidden');
	} else {
		player2(clickedBox);
		winConditionals(player2Boxes[0], player2Boxes[1], player2Boxes[2]);
		playerGoO.classList.add('hidden');
		playerGoX.classList.remove('hidden');
	}
	displayBox(numId);
	boxArr.push(numId);
	if (
		boxArr.includes(0) &&
		boxArr.includes(2) &&
		boxArr.includes(3) &&
		boxArr.includes(4) &&
		boxArr.includes(5) &&
		boxArr.includes(6) &&
		boxArr.includes(7) &&
		boxArr.includes(8)
	) {
		if (!winner) {
			playerDiv.classList.add('hidden');
			fullBoardText.classList.remove('hidden');
		}
	}
};
