const togglePassword = document.querySelector(".toggle-password");
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    togglePassword.addEventListener("click", () => {
        const isPassword = passwordField.type === "password";
        passwordField.type = isPassword ? "text" : "password";
        eyeIcon.classList.toggle("fa-eye-slash");
        eyeIcon.classList.toggle("fa-eye");
});

document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector('button[type="submit"]');

    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username && password) {
            window.location.href = "beranda.html";
        } else {
            alert("Mohon isi username dan password.");
        }
    });
});
