const gameBoard = document.getElementById('game-board');
const moveCountDisplay = document.getElementById('move-count');
const gameMessage = document.getElementById('game-message');

const cardSymbols = ['🍎', '🍌', '🍍', '🍓', '🍑', '🍉', '🍇', '🍒'];

let cards = [];
let flippedCards = [];
let matchedCards = [];
let moveCount = 0;

// Create and shuffle the cards
function createGameBoard() {
  // Duplicate and shuffle the card symbols
  let cardSymbolsCopy = [...cardSymbols, ...cardSymbols];
  cardSymbolsCopy = shuffleArray(cardSymbolsCopy);

  cardSymbolsCopy.forEach(symbol => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.symbol = symbol;
    card.innerHTML = '?';
    card.addEventListener('click', handleCardClick);
    gameBoard.appendChild(card);
    cards.push(card);
  });
}

// Shuffle an array (Fisher-Yates algorithm)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Handle card click
function handleCardClick(e) {
  const card = e.target;

  if (card.classList.contains('flip') || flippedCards.length === 2 || card.classList.contains('matched')) {
    return;
  }

  card.classList.add('flip');
  card.innerHTML = card.dataset.symbol;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    moveCount++;
    moveCountDisplay.innerText = moveCount;

    if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
      flippedCards[0].classList.add('matched');
      flippedCards[1].classList.add('matched');
      matchedCards.push(flippedCards[0], flippedCards[1]);

      if (matchedCards.length === cards.length) {
        gameMessage.innerText = `You won in ${moveCount} moves! 🎉`;
      }
    } else {
      setTimeout(() => {
        flippedCards[0].classList.remove('flip');
        flippedCards[1].classList.remove('flip');
        flippedCards[0].innerHTML = '?';
        flippedCards[1].innerHTML = '?';
      }, 1000);
    }

    flippedCards = [];
  }
}

// Initialize the game
function startGame() {
  cards = [];
  flippedCards = [];
  matchedCards = [];
  moveCount = 0;
  moveCountDisplay.innerText = moveCount;
  gameMessage.innerText = '';
  gameBoard.innerHTML = '';
  createGameBoard();
}

startGame();










