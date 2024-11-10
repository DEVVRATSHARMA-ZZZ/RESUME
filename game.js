

let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let cube = document.querySelectorAll(".box");

let boxes = document.querySelectorAll(".boxes");
let banner = document.querySelector(".banner");
let turn = 0;

let main = cube.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn == 0) {
      box.innerHTML = "0";
      turn = 1;
    } else {
      box.innerHTML = "x";
      turn = 0;
    }
    box.disabled = true;
    checkwinner();
  });
});
const show = (winner) => {
  msg.innerHTML =`congrats the winner is ${winner}`;
  msgcontainer.classList.remove("hide");
};

let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];
const checkwinner = () => {
  for (el of win) {
    let x = cube[el[0]].innerHTML;
    let y = cube[el[1]].innerHTML;
    let z = cube[el[2]].innerHTML;

    if (x != "" && y != "" && z != "") {
      if (x == y && y == z && z == x) {
        show(x);
      } else {
        continue;
      }
    }
  }
};
let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  location.reload();
});
