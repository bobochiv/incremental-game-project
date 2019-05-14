let currency = document.getElementById('currency');
let coins = 0;
let coinButton = document.getElementsByClassName('btn');

const soundeffect = {
  coin: new Audio(
    '/Users/Bobo/Decode/incremental-game-project/sounds/coin.mp3'
  ),
};

function coinClick(number) {
  coins = coins + number;
  document.getElementById('currency').innerHTML = coins;
  playSound('coin');
}

function playSound(sound) {
  soundeffect[sound].currentTime = 0;
  soundeffect[sound].play();
  soundeffect[sound].pause();
}

window.setInterval(function() {
  coinClick(1);
}, 1000);

function buyMiner() {
  const minerCost = 50;
  if (currency >= minerCost) {
    newCurrency = currency - minerCost;
    document.getElementById('currency').innerHTML = newCurrency;
  }
}
const saveGameLoop = window.setInterval(function() {
  localStorage.setItem('incrementalgameSave', JSON.stringify(gameData));
}, 15000);

const savegame = JSON.parse(localStorage.getItem('goldMinerSave'));
if (savegame !== null) {
  gameData = savegame;
}
