const form = document.querySelector(".form");
const errorElement = document.getElementById("email-error");
const signUp = document.querySelector(".sign-up");
const success = document.querySelector(".success");

if (form) {
  form.addEventListener("submit", (e) => {
    const emailInput = document.getElementById("email");
    e.preventDefault();

    if (emailInput.validity.valid) {
      signUp.classList.toggle("hidden");
      success.classList.toggle("hidden");
      emailInput.classList.remove("form-input--error");
      errorElement.textContent = "";
    } else {
      errorElement.textContent = "Valid email required";
      emailInput.classList.add("form-input--error");
    }
  });
}

const dismissButton = document.querySelector(".success .content .button");
if (dismissButton) {
  dismissButton.addEventListener("click", () => {
    signUp.classList.toggle("hidden");
    success.classList.toggle("hidden");
    form.reset();
  });
}
