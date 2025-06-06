const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    const emailData = data.email;

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const errorElement = document.getElementById("email-error");
    const emailInput = document.getElementById("email");
    if (emailData.match(emailRegex)) {
      // errorElement.textContent = "";
      // emailInput.classList.remove("form-input--error");

      const signUp = document.querySelector(".sign-up");
      const success = document.querySelector(".success");
      signUp.classList.toggle("hidden");
      success.classList.toggle("hidden");
    } else {
      errorElement.textContent = "Valid email is required";
      emailInput.classList.add("form-input--error");
    }
  });
}
