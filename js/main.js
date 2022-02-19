const toggles = document.getElementsByClassName("toggle");
const toggleBtn = document.getElementById("toggle-btn");

function toggleElements() {
  [].map.call(toggles, (e) => {
    e.classList.toggle("on");
  });
}

function offElements() {
  [].map.call(toggles, (e) => {
    e.classList.remove("on");
  });
}

toggleBtn.addEventListener("click", toggleElements);

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    offElements();
  }
});
