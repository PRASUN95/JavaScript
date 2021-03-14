const moving_div = document.getElementsByClassName("moving__div")[0];
const inputrange = document.getElementsByClassName("slider")[0];
moving_div.style.width = "300px";
moving_div.style.height = "300px";
moving_div.style.backgroundColor = "blue";
console.log(moving_div);
console.log(inputrange);

var x = 100,
  y = 100;

inputrange.addEventListener("change", () => {
  moving_div.style.width = inputrange.value + "px";
  moving_div.style.height = inputrange.value + "px";
});

function IncreasedivSize() {
  x += 50;
  y += 50;
  if (x > 900) {
    x = 100;
    y = 100;
  }
  moving_div.style.width = x + "px";
  moving_div.style.height = y + "px";
  moving_div.style.backgroundColor =
    "#" + Math.round(0xffffff * Math.random()).toString(16); // Random color
}

function movethediv() {
  var posx = (Math.random() * 100).toFixed();
  var posy = (Math.random() * 100).toFixed();
  console.log(posx, posy);
  moving_div.style.top = posx + "px";
  moving_div.style.left = posy + "px";
  moving_div.style.backgroundColor =
    "#" + Math.round(0xffffff * Math.random()).toString(16); // Random color
  moving_div.style.position = "absolute";
}

setInterval(movethediv, 1000);
