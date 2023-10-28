document.addEventListener("DOMContentLoaded", function() {
    const spellButton = document.getElementById('spell-button');
    const magicSound = document.getElementById('magic-sound');

    function playMagicSound() {
        magicSound.play();
        alert('You\'re a real magician 🧝🏻✨✨✨');
    }
    
    spellButton.addEventListener('click', playMagicSound);
})