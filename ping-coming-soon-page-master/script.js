const emailInput = document.getElementById("emailInput");
const notifyButton = document.getElementById("notifyButton");
const errorMsg = document.getElementById("errorMsg");

notifyButton.addEventListener("click", function() {
  const email = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    emailInput.classList.add("error-input");
  } else {
    errorMsg.textContent = "";
    emailInput.classList.remove("error-input");
  }
});
