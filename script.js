document.addEventListener('DOMContentLoaded', () => {

    // Mouse Events
    const hoverBtn = document.getElementById('hover-btn');
    const mouseMessage = document.getElementById('mouseMessage');

    hoverBtn.addEventListener('mouseover', () => {
        mouseMessage.textContent = "Your mouse is hovering the button";
    });

    hoverBtn.addEventListener('mouseleave', () => {
        mouseMessage.textContent = ('');
    });


    // Keyboard Events
    const keyInput = document.getElementById('keyInput');
    const keyDisplay = document.getElementById('keyDisplay');

    keyInput.addEventListener('keyup', (x) => {
        keyDisplay.textContent = x.key;
    });
});