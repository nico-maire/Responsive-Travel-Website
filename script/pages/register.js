// ✅ Export the function so app.js can import it
export function initRegisterPage() {

  console.log("Initializing Register Page Logic...");

  // Variable to store selected photo method and the actual photo data (Base64)
  let photoMethod = "None";
  let userPhotoData = "";

  // --- 1. Handle "Galería" Button Logic ---

  // A. When "Galería" button is clicked, trigger the hidden file input
  $('#btnGallery').off('click').click(function () {
    $('#galleryInput').click(); // Opens system file picker
  });

  // B. When "Camera" is clicked (Visual only for now unless using a camera API)
  $('#btnCamera').off('click').click(function () {
    alert("Función de cámara no disponible en este ejemplo (usar Galería).");
    photoMethod = "Camera";
    $('.photo-buttons button').css('border', 'none');
    $(this).css('border', '2px solid #333');
  });

  // C. Handle the file selection from Gallery
  $('#galleryInput').off('change').change(function (e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // 1. Save the Base64 string
        userPhotoData = e.target.result;
        photoMethod = "Gallery";

        // 2. Show Preview
        $('#photoPreview').attr('src', userPhotoData).show();

        // 3. Update Button Styles
        $('.photo-buttons button').css('border', 'none');
        $('#btnGallery').css('border', '2px solid #333');
      };

      // Read the file as a Data URL (Base64)
      reader.readAsDataURL(file);
    }
  });


  // --- 2. Handle Form Submission ---
  $('#registerForm').off('submit').submit(function (e) {
    e.preventDefault(); // Stop page reload

    // Get values
    const nombre = $('#nombre').val().trim();
    const apellidos = $('#apellidos').val().trim();
    const email = $('#email').val().trim().toLowerCase();
    const pais = $('#pais').val();
    const instagram = $('#instagram').val().trim();
    const password = $('#password').val();
    const rePassword = $('#re-password').val();
    const privacy = $('#privacy').is(':checked');

    // --- 3. Validations ---
    if (!nombre || !apellidos || !email || !password || !rePassword) {
      alert("Por favor, rellena todos los campos obligatorios.");
      return;
    }

    if (password !== rePassword) {
      alert("Las contraseñas no coinciden.");
      $('#password').val('');
      $('#re-password').val('');
      return;
    }

    if (!privacy) {
      alert("Debes aceptar la política de privacidad.");
      return;
    }

    // --- 4. LocalStorage Logic ---
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if unique
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      alert("Este correo electrónico ya está registrado. Por favor, inicia sesión.");
      return;
    }

    // Use default placeholder if no photo was uploaded
    if (!userPhotoData) {
      // Create a basic default avatar or leave empty
      userPhotoData = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    }

    // Create user object
    const newUser = {
      id: Date.now(),
      nombre: nombre,
      apellidos: apellidos,
      email: email,
      pais: pais,
      instagram: instagram,
      photoMethod: photoMethod,
      photo: userPhotoData, // Store the actual image here
      password: password
    };

    // Save
    // NOTE: LocalStorage has size limits (usually 5MB). Large photos might fail to save.
    try {
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      localStorage.setItem('currentUser', JSON.stringify(newUser));

      console.log("New User Registered:", newUser);
      alert("¡Registro exitoso! Redirigiendo...");
      window.location.href = "index.html";

    } catch (error) {
      alert("La imagen es demasiado grande para guardar en el navegador. Por favor intenta con una imagen más pequeña.");
      console.error("Storage limit reached:", error);
    }
  });
}