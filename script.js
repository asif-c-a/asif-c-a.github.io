
const playButton = document.getElementById('playButton');

const circle = document.querySelector('.incircle');

const linkTrigger = document.getElementById('linkTrigger');


playButton.addEventListener('click', () => {
    circle.style.animation = 'transNow .8s forwards';
    setTimeout(() => {
        window.location.href = 'aboutMe.html';
    }, 1000);
});