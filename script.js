var invmouse = document.querySelector(".mouse");

document.addEventListener("mousemove", function (e) {
    invmouse.style.left = e.clientX + "px";
    invmouse.style.top = e.clientY + "px";
});