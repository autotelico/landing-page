document.addEventListener("DOMContentLoaded", function() {
    const spellButton = document.getElementById('spell-button');
    const magicSound = document.getElementById('magic-sound');

    function playMagicSound() {
        magicSound.play();
        setTimeout(function(){
            alert('You\'re a real magician 🧝🏻✨✨✨');
        }, 100);   
    }
    
    spellButton.addEventListener('click', playMagicSound);
})