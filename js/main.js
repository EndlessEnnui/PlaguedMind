const entries = document.querySelectorAll('.entry');
let currentEntryIndex = 0;

function showEntry(index) {
    entries.forEach((entry, i) => {
        if (i === index) {
            entry.style.display = 'block';
            document.body.style.backgroundImage = `url('assets/entry${index + 1}_bg.jpg')`;
        } else {
            entry.style.display = 'none';
        }
       
    });
}


document.addEventListener('keydown', (event) => {
    const flipSound = new Audio('../audio/page_flip.wav');
    if (event.key === 'ArrowRight') {
        currentEntryIndex = Math.min(currentEntryIndex + 1, entries.length - 1);
        showEntry(currentEntryIndex);
        flipSound.play();
    } else if (event.key === 'ArrowLeft') {
        currentEntryIndex = Math.max(currentEntryIndex - 1, 0);
        showEntry(currentEntryIndex);
        flipSound.play();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const pauseButton = document.getElementById('pause-button');

    pauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            pauseButton.textContent = 'Pause Audio';
        } else {
            audio.pause();
            pauseButton.textContent = 'Play Audio';
        }
    });
});


