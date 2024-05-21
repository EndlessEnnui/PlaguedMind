document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('background-music');
    var playButton = document.getElementById('play-music-button');

    function playMusic() {
        music.play().catch(function(error) {
            console.log('Audio playback failed:', error);
            playButton.style.display = 'block'; 
        });
    }

   
    playMusic();


    playButton.addEventListener('click', function() {
        music.play();
        playButton.style.display = 'none'; // Hide the button after playing
    });
});