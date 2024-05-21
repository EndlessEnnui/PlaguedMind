document.addEventListener('DOMContentLoaded', function() {
let music = document.getElementById('background-music');
let playButton = document.getElementById('play-music-button');
music.volume = .5;
playButton.volume = .5;
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