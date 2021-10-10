const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const mainContainer = document.getElementById("mainContainer");

signUpButton?.addEventListener("onClick", () => {
  mainContainer.classList.add("right-panel-active");
});

signInButton?.addEventListener("onClick", () => {
  mainContainer.classList.remove("right-panel-active");
});
