const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicButton.textContent = 'Pause Music';
    } else {
        backgroundMusic.pause();
        musicButton.textContent = 'Play Music';
    }
}