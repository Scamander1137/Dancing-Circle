const circle = document.getElementById("circle");
const counter = document.getElementById("counter");

let db = false;
let i = 0;

function wait(second) {
    return new Promise(resolve => setTimeout(resolve, second * 1000));
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

circle.addEventListener("click", async () => {

    if (db) {return;}
    db = true;

    i++;
    counter.textContent = i;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = random(15, width - 45) / width * 100;
    const y = random(15, height - 45) / height * 100;

    circle.style.background = "red";
    circle.style.opacity = 0.7;
    circle.style.left = `${x}%`;
    circle.style.top = `${y}%`;

    await wait(0.2);

    circle.style.opacity = 1;
    circle.style.background = "white";

    db = false;

})