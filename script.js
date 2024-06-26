// import Typed from 'typed.js';

const blackbox = document.querySelector('.blackbox');
const yes = document.querySelector('.yes');

yes.addEventListener('click', () => {
    var responseText = document.getElementById("response");
    responseText.classList.remove("hidden");
    blackbox.classList.add("hidden")
    yes.classList.add("hidden")
    // responseText.classList.toggle("hidden");
})

blackbox.addEventListener("mouseover", (event) => {
    let tp = parseInt(Math.random() * (50 - 1) + 1);
    let lp = parseInt(Math.random() * (50 - 1) + 1);
    console.log(event.offsetX)
    if (event.offsetX === tp) {
        tp = parseInt(Math.random() * (50 - 1) + 1);
    }
    else if (event.offsetY === lp) {
        lp = parseInt(Math.random() * (50 - 1) + 1);
    } else {
        blackbox.style.top = `${tp}%`;
        blackbox.style.left = `${lp}%`;
    }
});



blackbox.addEventListener("mousemove", (event) => {
    let tp = parseInt(Math.random() * (50 - 1) + 1);
    let lp = parseInt(Math.random() * (50 - 1) + 1);
    console.log(event.offsetX)
    if (event.offsetX === tp) {
        tp = parseInt(Math.random() * (50 - 1) + 1);
    }
    else if (event.offsetY === lp) {
        lp = parseInt(Math.random() * (50 - 1) + 1);
    } else {
        blackbox.style.top = `${tp}%`;
        blackbox.style.left = `${lp}%`;
    }
});

var typed = new Typed('.element', {
    strings: ["Taking a Chance: Will You Be My Special Someone?"],
    typeSpeed: 30
});
