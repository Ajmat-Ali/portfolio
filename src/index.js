document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");
  const navLinksList = document.querySelectorAll(".nav-links li"); // New

  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  navLinksList.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("show");
    });
  });
});

const phrases = ["Front-end Developer", "Problem Solver"];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentPhrase = phrases[index];
  const role = document.getElementById("role");

  if (isDeleting) {
    role.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    role.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentPhrase.length + 1) {
    isDeleting = true;
    setTimeout(typeText, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % phrases.length;
    setTimeout(typeText, 500);
  } else {
    setTimeout(typeText, isDeleting ? 50 : 150);
  }
}

typeText();
//   _____________________________________________________________________ Project In Js Starts

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("cardContainer");
  const cards = cardContainer.querySelectorAll(".card");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  // Assuming all cards have the same width
  const cardWidth =
    cards[0].offsetWidth + parseFloat(getComputedStyle(cards[0]).marginRight);

  nextButton.addEventListener("click", () => {
    cardContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  prevButton.addEventListener("click", () => {
    cardContainer.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });
});
