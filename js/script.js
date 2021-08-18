// DARK THEME
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// PREVIOUSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// OBTAIN CURRENT THEME THAT INTERFACE VALIDATED BY DARK THEME

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// VALIDATE USERS PREVIOUS TOPIC

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// ACTIATE OR DEACTIVATE THE THEME MANUALLY WITH BUTTON

themeButton.addEventListener("click", () => {
  //ADD OR REMOVE THE DARK/LIGHT ICON -- ICON THEME
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // SAVE THEM AND CURRENT ICON USER SELECTED
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

console.log("THEME SETTING IS WORKING!");

// MENU SHOW AND HIDE

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// MENU SHOW
/* Validate if the Constant Exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// MENU SHOW
/* Validate if the Constant Exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

console.log("MENU Y SETTING IS WORKING!");

//REMOVE MENU PROFILE

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // WHEN NAV__LINKS CLICKED, WE REMOVE THE SHOW MENU
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
console.log("Remove Menu Profile is Working");

// TYPEWRITER EFFECT

new Typewriter("#typewriter", {
  strings: ["Omar McIntyre", "An Entrepreneur", "A Web Specialist"],
  autoStart: true,
  loop: true,
  cursor: "|",
});
console.log("Typewriter effect is working properly!");
