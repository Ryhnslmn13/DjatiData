const togglePassword = document.querySelector(".toggle-password");
  const passwordField = document.getElementById("password");
  const eyeIcon = document.getElementById("eye-icon");

  togglePassword.addEventListener("click", () => {
    const isPassword = passwordField.type === "password";
    passwordField.type = isPassword ? "text" : "password";
    eyeIcon.classList.toggle("fa-eye-slash");
    eyeIcon.classList.toggle("fa-eye");
  });