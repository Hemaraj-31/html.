document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const revealButton = document.getElementById('revealButton');
    const hideButton = document.getElementById('hideButton');
    
    revealButton.addEventListener('click', () => {
        card.classList.add('flipped');
    });
    
    hideButton.addEventListener('click', () => {
        card.classList.remove('flipped');
    });
});
