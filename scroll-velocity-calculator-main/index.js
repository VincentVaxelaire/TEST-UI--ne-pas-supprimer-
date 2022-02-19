let speed = 0;
let position = 0;
let rounded;

const body = document.body

window.addEventListener("wheel", (e) => {
  speed += e.deltaY * 0.0003;
});

const tick = () => {
  position += speed;
  speed *= 0.7;

  rounded = Math.round(position);
  
  let diff = (rounded - position);
  // force à appliquer sur la roue de la souris
  position += diff*0.005;

  
  // CECI EST UN EXEMPLE PAS OUF mais mon lre les posibiliée.
  if (rounded === 0) {
    body.style.background = "red"
  } else if (rounded === 1) {
    body.style.background = "green"
  } else if (rounded === 2) {
    body.style.background = "blue"
  } else if (rounded === 3) {
    body.style.background = "yellow"
  } else if (rounded === 4) {
    body.style.background = "brown"
  } else if (rounded === 5) {
    position = 0
  } else if (rounded === -1){
    position = 4
  }

  console.log(rounded)
  window.requestAnimationFrame(tick);
};
tick();