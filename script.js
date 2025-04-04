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

    // Form Events
    const formEvent = document.getElementById('formEvent');
    const formMessage = document.getElementById('formMessage');

    formEvent.addEventListener('submit', (y) => {
        y.preventDefault(); //So page does not reload
        formMessage.textContent = "Form has been submitted!"
    })

    // Focus/Blur Events
    const focusEventInput = document.getElementById('focusEvent');
    const focusMessage = document.getElementById('focusMessage');

    focusEventInput.addEventListener('focus', () => {
        focusMessage.textContent = "Input field is so FOCUSED!";
    });

    focusEventInput.addEventListener('blur', () => {
        focusMessage.textContent = "Input field is so BLURRED!";
    });
});