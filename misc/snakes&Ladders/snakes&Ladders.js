let player1, player2, player1ScoreBoard, player2ScoreBoard;

class Player {
  constructor(id, name, score, location) {
    this._id = id;
    this._name = name;
    this._score = score;
    this._location = location;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get score() {
    return this._score;
  }

  get location() {
    return this._location;
  }

  set score(score) {
    this._score = score;
  }

  set location(location) {
    this._location = location;
  }
}

const ladders = [
  [2, 15],
  [27, 34],
];

const snakes = [
  [10, 3],
  [29, 17],
  [35, 23],
];

window.onload = () => {
  createGridItems();
  player1ScoreBoard = document.querySelector('#player1-score');
  player2ScoreBoard = document.querySelector('#player2-score');

  player1 = new Player(
    document.querySelector('#player1'),
    'Player 1',
    0,
    document.querySelector('.c36 img')
  );

  player2 = new Player(
    document.querySelector('#player2'),
    'Player 2',
    0,
    document.querySelector('.c36 img')
  );

  activePlayer = player1;
};

const createGridItems = () => {
  let markup = '';

  for (let i = 1, cell = 37; i <= 6; i++) {
    if (i % 2 == 0) {
      cell -= 11;
      for (let j = cell; j < cell + 6; j++) {
        markup += `<div class="grid-item c${j}">${j}<img src=""></div>`;
      }
    } else {
      cell -= 1;
      for (let j = cell; j > cell - 6; j--) {
        markup += `<div class="grid-item c${j}">${j}<img src=""></div>`;
      }
    }
  }
  document.querySelector('.grid').innerHTML = markup;
};

const gameStart = () => {
  document.querySelector('.game-panel').style.display = 'block';
  document.querySelector('.launch-panel').style.display = 'none';
};

const changeActivePlayer = () => {
  if (activePlayer === player1) {
    activePlayer = player2;
    document.querySelector('.dice-message').innerHTML =
      "Player 2's turn. Roll the dice!!";
  } else {
    activePlayer = player1;
    document.querySelector('.dice-message').innerHTML =
      "Player 1's turn. Roll the dice!!";
  }

  //changes
  player1.id.querySelector('img').classList.toggle('active-player');
  player2.id.querySelector('img').classList.toggle('active-player');
};

const playerScoreUpdate = () => {
  document.querySelector('.obstruction-message').innerHTML = ' ';

  if (activePlayer == player1) activePlayer.score = player1.score += rollDice();
  else activePlayer.score = player2.score += rollDice();

  checkObstructions();
  updatePlayerLocation();
  displayScores();

  if (activePlayer.score == 36)
    setTimeout(() => {
      finishGame();
    }, 200);
  else changeActivePlayer();
};

const rollDice = () => {
  const dice = document.querySelector('.dice');
  const random = Math.floor(Math.random() * 6 + 1);
  dice.src = `/assets/dice-${random}.png`;
  return random;
};

const checkObstructions = () => {
  for (let ladder of ladders) {
    if (activePlayer.score == ladder[0] && activePlayer == player1) {
      activePlayer.score = player1.score = ladder[1];
      document.querySelector(`.c${ladder[0]}`).style.backgroundColor = 'aqua';
      setTimeout(() => {
        document.querySelector(`.c${ladder[0]}`).style.backgroundColor =
          'rgba(256, 256, 256, 0.4)';
      }, 2000);
      document.querySelector('.obstruction-message').innerHTML =
        'Player 1 used ladder at ' + ladder[0];
    } else if (activePlayer.score == ladder[0] && activePlayer == player2) {
      activePlayer.score = player2.score = ladder[1];
      document.querySelector(`.c${ladder[0]}`).style.backgroundColor = 'aqua';
      setTimeout(() => {
        document.querySelector(`.c${ladder[0]}`).style.backgroundColor =
          'rgba(256, 256, 256, 0.4)';
      }, 2000);
      document.querySelector('.obstruction-message').innerHTML =
        'Player 2 used ladder at ' + ladder[0];
    }
  }

  for (let snake of snakes) {
    if (activePlayer.score == snake[0] && activePlayer == player1) {
      activePlayer.score = player1.score = snake[1];
      document.querySelector(`.c${snake[0]}`).style.backgroundColor =
        'lightcoral';
      setTimeout(() => {
        document.querySelector(`.c${snake[0]}`).style.backgroundColor =
          'rgba(256, 256, 256, 0.4)';
      }, 2000);
      document.querySelector('.obstruction-message').innerHTML =
        'Player 1 got bitten at ' + snake[0];
    } else if (activePlayer.score == snake[0] && activePlayer == player2) {
      activePlayer.score = player2.score = snake[1];
      document.querySelector(`.c${snake[0]}`).style.backgroundColor =
        'lightcoral';
      setTimeout(() => {
        document.querySelector(`.c${snake[0]}`).style.backgroundColor =
          'rgba(256, 256, 256, 0.4)';
      }, 2000);
      document.querySelector('.obstruction-message').innerHTML =
        'Player 2 got bitten at ' + snake[0];
    }
  }
};

const updatePlayerLocation = () => {
  //  remove image from current cell
  if (activePlayer.id == player1.id) {
    if (player1.location == player2.location)
      player2.location.src = '/assets/player2.png';
    else player1.location.style.visibility = 'hidden';
  } else {
    if (player2.location == player1.location)
      player1.location.src = '/assets/player1.png';
    else player2.location.style.visibility = 'hidden';
  }

  //  get updated cell
  let cell;
  if (activePlayer.score >= 36) cell = document.querySelector('.c36 img');
  else cell = document.querySelector(`.c${activePlayer.score} img`);

  if (activePlayer == player1) player1.location = cell;
  else player2.location = cell;

  //  put picture in updated cell
  if (player1.location == player2.location) cell.src = '/assets/playerboth.png';
  else cell.src = `/assets/${activePlayer.id.id}.png`;

  cell.style.visibility = 'visible';
};

const displayScores = () => {
  if (activePlayer == player1)
    player1ScoreBoard.innerHTML = 'Score - ' + activePlayer.score;
  else player2ScoreBoard.innerHTML = 'Score - ' + activePlayer.score;
};

const finishGame = () => {
  alert(
    'Congratulations ' +
      activePlayer.name.toUpperCase() +
      '. You have won the game.'
  );
  window.location.reload();
};
