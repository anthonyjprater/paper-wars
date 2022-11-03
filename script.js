// function hamburger() {
//   let x = document.getElementById("hamburger-menu-nav");
//   if (x.style.display === "flex") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "flex";
//   }
// }
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const synopsisBtn = document.getElementById("synopsis-btn");

document.getElementById("icon").addEventListener("click", function () {
  let x = document.getElementById("mobile-menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  x.classList.toggle("active-menu");
});

document
  .getElementById("exit-mobile-menu")
  .addEventListener("click", function () {
    let x = document.getElementById("mobile-menu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
    x.classList.toggle("active-menu");
  });

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

synopsisBtn.addEventListener("click", function () {
  modal.style.display = "block";
});
