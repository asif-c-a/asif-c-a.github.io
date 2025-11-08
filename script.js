const wins = document.getElementsByClassName("window");
let isDragging = false;
let offX, offY;
let currentWin = null;
let topZ = 1;
const ANIM_DURATION = 200;

Array.from(wins).forEach(win => {
  win.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("window-close")) return;

    isDragging = true;
    currentWin = win;
    offX = event.offsetX;
    offY = event.offsetY;

    Array.from(wins).forEach(w => w.classList.remove("active"));
    win.classList.add("active");

    topZ++;
    win.style.zIndex = topZ;
  });
});

document.addEventListener("mousemove", (event) => {
  if (!isDragging || !currentWin) return;
  currentWin.style.left = (event.clientX - offX) + "px";
  currentWin.style.top = (event.clientY - offY) + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  currentWin = null;
});

const deckItems = document.querySelectorAll(".deck-item");
const windows = document.querySelectorAll(".window");
const closeButtons = document.querySelectorAll(".window-close");

windows.forEach(win => win.style.display = "none");

deckItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const win = windows[index];

    if (win.style.display !== "none") {
      win.style.top = `calc(20% + ${index * 25}px)`;
      win.style.left = `calc(20% + ${index * 25}px)`;
      topZ++;
      win.style.zIndex = topZ;

      windows.forEach(w => w.classList.remove("active"));
      win.classList.add("active");
      return;
    }

    win.style.display = "flex";
    win.classList.remove("closing");

    void win.offsetWidth;

    win.classList.add("open");
    win.style.position = "absolute";
    win.style.top = `calc(20% + ${index * 25}px)`;
    win.style.left = `calc(20% + ${index * 25}px)`;

    topZ++;
    win.style.zIndex = topZ;

    windows.forEach(w => w.classList.remove("active"));
    win.classList.add("active");
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const parentWin = btn.closest(".window");

    if (parentWin) {
      parentWin.classList.remove("open");
      parentWin.classList.add("closing");

      setTimeout(() => {
        parentWin.classList.remove("closing");
        parentWin.style.display = "none";
      }, ANIM_DURATION);
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const aboutWin = document.querySelector(".window.about");
  if (!aboutWin) return;

  aboutWin.style.display = "flex";
  aboutWin.classList.remove("closing");

  void aboutWin.offsetWidth;

  aboutWin.classList.add("open");
  aboutWin.style.position = "absolute";
  aboutWin.style.top = "20%";
  aboutWin.style.left = "20%";

  topZ++;
  aboutWin.style.zIndex = topZ;
  aboutWin.classList.add("active");
});
