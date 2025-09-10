const form = document.querySelector(".subscribe-form");
const emailInput = form.querySelector(".email-input");
const errorIcon = form.querySelector(".error-icon");
const errorMessage = form.querySelector(".error-message");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const reqEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.length === 0 || !email.match(reqEx)) {
    emailInput.classList.add("error");
    errorIcon.style.display = "inline";
    errorMessage.style.display = "block";
  } else {
    errorIcon.style.display = "none";
    errorMessage.textContent = "your message sent successfully";
    errorMessage.style.display = "block";
    setTimeout(() => {
      form.reset();
      errorMessage.style.display = "none";
    }, 2000);
  }
});
