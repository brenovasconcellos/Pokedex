const buttonTheme = document.getElementById("button-change-theme");
const body = document.querySelector("body");
const buttonImgChangeTheme = document.querySelector(".button-image");

buttonTheme.addEventListener("click", () => {
  const activeDarkMode = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (activeDarkMode) {
    buttonImgChangeTheme.setAttribute("src", "/src/imagens/sun.png");
  } else {
    buttonImgChangeTheme.setAttribute("src", "/src/imagens/moon.png");
  }
});
