const draggables = document.querySelectorAll('.image');
let dragSource = null;

// Add event listeners for drag events
draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', handleDragStart);
    draggable.addEventListener('dragover', handleDragOver);
    draggable.addEventListener('drop', handleDrop);
    draggable.addEventListener('dragend', handleDragEnd);
});

function handleDragStart(e) {
    dragSource = this; // Store the source element
    e.dataTransfer.effectAllowed = 'move';
    this.classList.add('dragging'); // Add a visual cue
}

function handleDragOver(e) {
    e.preventDefault(); // Prevent default to allow drop
    e.dataTransfer.dropEffect = 'move';
}

function handleDrop(e) {
    e.preventDefault();

    if (dragSource !== this) {
        // Swap the background images of the source and target elements
        const tempBg = dragSource.style.backgroundImage;
        dragSource.style.backgroundImage = this.style.backgroundImage;
        this.style.backgroundImage = tempBg;
    }
}

function handleDragEnd() {
    dragSource = null; // Clear the source element
    draggables.forEach((draggable) => draggable.classList.remove('dragging'));
}
