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

showEntry(currentEntryIndex);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentEntryIndex = Math.min(currentEntryIndex + 1, entries.length - 1);
        showEntry(currentEntryIndex);
    } else if (event.key === 'ArrowLeft') {
        currentEntryIndex = Math.max(currentEntryIndex - 1, 0);
        showEntry(currentEntryIndex);
    }
});
