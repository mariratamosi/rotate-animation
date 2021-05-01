let L = 240;
let F = 10;
let opacityFactor = F / (2 * L);
let opacity = 0.3;

window.addEventListener("DOMContentLoaded", (event) => {
  for (let i = L; i >= 0; i -= F) {
    opacity += opacityFactor;
    createRect(i, opacity);
  }
});

function createRect(w, opacity) {
  console.log(opacity);
  var node = document.createElement("div");
  node.className = "rect";
  node.style.width = w + "px";
  node.style.height = w + "px";
  node.style.opacity = opacity;
  node.style.transform = "rotate(" + w + "deg)";
  node.style["margin-left"] = "-" + w / 2 + "px";
  node.style["margin-top"] = "-" + w / 2 + "px";
  document.getElementById("all-rect").appendChild(node);
}
