window.addEventListener("DOMContentLoaded", (event) => {
  for (let i = 240; i > 0; i -= 10) {
    createRect(i);
  }
});

function createRect(w) {
  console.log(w);
  var node = document.createElement("div");
  node.className = "rect";
  node.style.width = w + "px";
  node.style.height = w + "px";
  node.style.transform = "rotate(" + w + "deg)";
  node.style["margin-left"] = "-" + w / 2 + "px";
  node.style["margin-top"] = "-" + w / 2 + "px";
  console.log(node);

  document.getElementById("all-rect").appendChild(node);
}
