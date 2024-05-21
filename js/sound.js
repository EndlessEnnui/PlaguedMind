let isMusicPlaying = false;
const music = document.getElementById('background-music');
const musicButton = document.getElementById('music-button');

function toggleMusic() {
    if (isMusicPlaying) {
        music.pause();
        musicButton.textContent = 'Play Music';
    } else {
        music.play();
        musicButton.textContent = 'Pause Music';
    }
    isMusicPlaying = !isMusicPlaying;
}

function playMusic() {
    music.play();
    isMusicPlaying = true;
    musicButton.textContent = 'Pause Music';
}