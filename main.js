// Auto-switch from Welcome Screen to Game Screen after 3 seconds
setTimeout(() => {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'flex';
}, 3000);
