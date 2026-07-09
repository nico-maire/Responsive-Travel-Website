// src/script/pages/login.js

export function initLoginPage() {
  console.log("Initializing Login Page Logic...");

  // Use .off() to prevent duplicate listeners if the app router re-runs this
  $('#loginForm').off('submit').submit(function (e) {
    e.preventDefault(); // Stop page reload

    // 1. Get values from the inputs
    const email = $('#email').val().trim().toLowerCase();
    const password = $('#password').val();

    // 2. Basic Validation
    if (!email || !password) {
      alert("Por favor, introduce tu email y contraseña.");
      return;
    }

    // 3. Retrieve the "Database" of users
    // (This was created in register.js)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 4. Search for the user
    const foundUser = users.find(user =>
      user.email === email && user.password === password
    );

    if (foundUser) {
      // === SUCCESS ===

      // Save the active session so utils.js/header.js can find it
      localStorage.setItem('currentUser', JSON.stringify(foundUser));

      console.log("Login Successful:", foundUser.nombre);

      // Redirect to Home
      window.location.href = "index.html";

    } else {
      // === ERROR ===
      alert("Email o contraseña incorrectos. Inténtalo de nuevo.");

      // Optional: Clear password field
      $('#password').val('');
    }
  });
}