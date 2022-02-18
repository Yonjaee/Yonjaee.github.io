const background = document.querySelector("body");

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function changeColor() {
  const color1 = colors[Math.floor(Math.random() * 18)];
  const color2 = colors[Math.floor(Math.random() * 18)];
  const color3 = colors[Math.floor(Math.random() * 18)];
  const color4 = colors[Math.floor(Math.random() * 18)];
  const color5 = colors[Math.floor(Math.random() * 18)];
  const color6 = colors[Math.floor(Math.random() * 18)];
  const deg1 = Math.floor(Math.random() * 361);
  const deg2 = Math.floor(Math.random() * 361);
  const deg3 = Math.floor(Math.random() * 361);
  background.style = `background: linear-gradient(${deg1}deg, ${color1}, ${color2}),
  linear-gradient(${deg2}deg, ${color3}, ${color4}),
  linear-gradient(${deg3}deg, ${color5}, ${color6})`;
}

changeColor();
