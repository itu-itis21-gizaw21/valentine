const buttonHeight = 50;
const buttonWidth = 150;

const windowHeight = window.innerHeight - buttonHeight -50;
const maxWidth = window.innerWidth - buttonWidth -50;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('moveButton');
    const button2 = document.getElementById('stick');
    let prevLeft = 0;
    let prevTop = 0;
     
    button.style.transition = 'left 0.5s, top 0.5s'; // Smooth transition for left and top properties
    button.addEventListener('mouseover', () => {

        let newLeft, newTop;
        do {
            newLeft = Math.floor(Math.random() * maxWidth);
            newTop = Math.floor(Math.random() * windowHeight);
        } while (Math.abs(newLeft - prevLeft) < 100 || Math.abs(newTop - prevTop) < 100); // Ensure new position is at least 100 pixels away from previous position
        
        button.style.left = newLeft + 'px';
        button.style.top = newTop + 'px';
        prevLeft = newLeft;
        prevTop = newTop;
    });

    button2.addEventListener('click', () => {

        const confettiContainer = document.getElementById('confetti-container');
        const congratsMessage = document.getElementById('congrats-message');

        congratsMessage.style.display = 'flex';


        // Generate confetti
        button.style.display = 'none';
        for (let i = 0; i < 100; i++) {

            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration between 2 to 5 seconds
            confettiContainer.appendChild(confetti);
        }
       
    });
});
