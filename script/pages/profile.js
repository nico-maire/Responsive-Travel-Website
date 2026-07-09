export const initProfilePage = () => {
  console.log("Initializing Profile Page...");

  // --- 1. CONFIGURATION ---
  const KEYS = {
    USER: 'currentUser'
  };

  const getFromStorage = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error(`Error parsing ${key}`, e);
      return null;
    }
  };

  const saveUser = (userData) => {
    localStorage.setItem(KEYS.USER, JSON.stringify(userData));
  };

  let user = getFromStorage(KEYS.USER);

  // Handle Anonymous
  if (!user) {
    user = {
      nombre: "Usuario",
      apellidos: "Anónimo",
      email: "",
      pais: "---",
      instagram: "---",
      bio: "No has iniciado sesión.",
      isAnonymous: true,
      bookings: [],
      badges: []
    };
  }

  // Ensure arrays exist
  if (!user.bookings) user.bookings = [];
  if (!user.badges) user.badges = [];

  // --- 2. LOGIC: CHECK FOR PAID TRIPS & GENERATE INSIGNIA ---

  // Filter only PAID trips
  const paidTrips = user.bookings.filter(booking => booking.status === 'paid');

  // Logic: First Travel Badge
  if (!user.isAnonymous && paidTrips.length > 0) {
    const badgeName = "First Travel";
    const hasBadge = user.badges.includes(badgeName);

    if (!hasBadge) {
      // Add badge
      user.badges.push(badgeName);

      // Save updated user to storage immediately
      saveUser(user);
      console.log(`🏅 New Badge Unlocked: ${badgeName}`);

      // Optional: Alert the user
      // alert("¡Felicidades! Has desbloqueado la insignia: First Travel");
    }
  }


  // --- 3. RENDER BASIC INFO ---

  // Name
  let displayName = "Usuario Anónimo";
  if (user.nombre || user.apellidos) {
    const full = `${user.nombre || ''} ${user.apellidos || ''}`.trim();
    if (full !== "") displayName = full;
  } else if (user.email) {
    displayName = user.email.split('@')[0];
  }
  $('.profile-name').text(displayName);

  // Avatar
  const photoUrl = user.photo || user.avatar || user.image;

  if (photoUrl) {
    const isValidPhoto = photoUrl.startsWith('http') || photoUrl.startsWith('data:image') || photoUrl.startsWith('blob:');
    if (isValidPhoto) {
      $('.profile-pic-wrapper').html(`
        <img src="${photoUrl}" class="profile-pic" alt="Profile" style="object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      `);
    } else {
      $('.profile-pic-wrapper').html(`
        <div class="default-avatar" style="width: 100px; height: 100px; border-radius: 50%; background: #ccc; display: flex; align-items: center; justify-content: center; font-size: 40px; color: #666;">
          ${displayName.charAt(0).toUpperCase()}
        </div>
      `);
    }
  } else {
    const initials = displayName.split(' ').map(n => n.charAt(0)).join('').toUpperCase();
    $('.profile-pic-wrapper').html(`
      <div class="default-avatar" style="width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; font-size: 40px; color: white; font-weight: bold;">
        ${initials.substring(0, 2)}
      </div>
    `);
  }

  // Buttons (Country & Instagram)
  const $buttons = $('.action-buttons .btn-grey');

  // Country
  const $countryBtn = $buttons.eq(0);
  if ($countryBtn.length) {
    const countryIcon = $countryBtn.find('svg').length ? $countryBtn.find('svg')[0].outerHTML : '🌍';
    $countryBtn.html(`${countryIcon} ${user.pais || "Sin País"}`);
  }

  // Instagram
  const $instaBtn = $buttons.eq(1);
  if ($instaBtn.length) {
    const instaIcon = $instaBtn.find('svg').length ? $instaBtn.find('svg')[0].outerHTML : '📸';
    $instaBtn.html(`${instaIcon} ${user.instagram || "No Instagram"}`);
  }


  // --- 4. BIO SECTION WITH EDITING ---
  const bioText = user.bio || "Escribe algo sobre ti...";
  const $bioParagraph = $('.about-section p');
  $bioParagraph.text(bioText);

  if (!user.isAnonymous) {
    const $aboutHeader = $('.about-section h3');
    if ($('#btn-edit-bio').length === 0) {
      $aboutHeader.append(`<button id="btn-edit-bio" style="border:none; background:none; cursor:pointer; margin-left:10px; opacity:0.5; font-size:1rem;">✏️</button>`);

      if ($('#bio-edit-container').length === 0) {
        $('.about-section').append(`
          <div id="bio-edit-container" style="display:none; margin-top:10px;">
            <textarea id="bio-textarea" style="width:100%; height:100px; padding:10px; margin-bottom:10px;" aria-label="Edita la biograf'ia"></textarea>
            <div style="display:flex; gap:10px;">
              <button id="btn-save-bio" class="btn-primary" style="padding:5px 15px; font-size:0.9rem;">Guardar</button>
              <button id="btn-cancel-bio" style="padding:5px 15px; cursor:pointer;">Cancelar</button>
            </div>
          </div>
        `);
      }

      $('#btn-edit-bio').off('click').click(function () {
        $bioParagraph.hide();
        $(this).hide();
        $('#bio-textarea').val(user.bio || "");
        $('#bio-edit-container').fadeIn(200);
      });

      $('#btn-cancel-bio').off('click').click(function () {
        $('#bio-edit-container').hide();
        $bioParagraph.fadeIn();
        $('#btn-edit-bio').fadeIn();
      });

      $('#btn-save-bio').off('click').click(function () {
        const newBio = $('#bio-textarea').val();
        $bioParagraph.text(newBio).fadeIn();
        $('#bio-edit-container').hide();
        $('#btn-edit-bio').fadeIn();
        user.bio = newBio;
        saveUser(user);
      });
    }
  }


  // --- 5. RENDER INSIGNIAS (BADGES) ---
  const $badgesContainer = $('.badges-grid');
  $badgesContainer.empty();

  if (user.isAnonymous) {
    $badgesContainer.html('<p style="color:#999;">Inicia sesión para ver tus insignias.</p>');
  }
  else if (user.badges && user.badges.length > 0) {
    // Medal Icon SVG

    const badgesHtml = user.badges.map(badge => `
      <div class="badge-item">
        <div class="badge-circle" style="background:#fff9c4;">
          <i class="fa-solid fa-medal"></i>
        </div>
        <span>${badge}</span>
      </div>
    `).join('');

    $badgesContainer.html(badgesHtml);
  }
  else {
    $badgesContainer.html('<p style="color:#666; font-style:italic;">Aún no tienes insignias. ¡Reserva tu primer viaje o haz un post en el foro para conseguir una!</p>');
  }


  // --- 6. RENDER PAID TRIPS ---
  // Remove existing trips-section if function is re-run
  $('.trips-section').remove();

  if (!user.isAnonymous && paidTrips.length > 0) {
    const tripsHtml = paidTrips.map(trip => `
      <!-- Added onclick and cursor:pointer -->
      <div 
        onclick="window.location.href='trip-details.html?id=${trip.tripId}'"
        style="display:flex; align-items:center; gap:15px; margin-bottom:15px; background:#f9f9f9; padding:15px; border-radius:10px; border:1px solid #eee; cursor:pointer; transition: background 0.2s;"
        onmouseover="this.style.background='#f0f0f0'" 
        onmouseout="this.style.background='#f9f9f9'"
      >
        <img src="${trip.image}" style="width:70px; height:70px; border-radius:8px; object-fit:cover;" onerror="this.src='https://via.placeholder.com/70'">
        <div style="flex-grow:1;">
          <h4 style="font-weight:700; font-size:1.1rem; margin:0; color:#333;">${trip.title}</h4>
          <span style="color:#666; font-size:0.85rem;">Comprado el: ${new Date(trip.dateAdded).toLocaleDateString()}</span>
        </div>
        <!-- Added € symbol -->
        <div style="font-weight:bold; color:#2c3e50; font-size:1.1rem;">${trip.price}€</div>
      </div>
    `).join('');

    // Inject after the badges section
    $('.badges-section').after(`
      <div class="section trips-section">
        <h3>Mis Viajes Comprados (${paidTrips.length})</h3>
        <div class="trips-list">${tripsHtml}</div>
      </div>
    `);
  }
};

// -------------------------
// 6. Mostrar Mensajes de Contacto (desde localStorage)
// -------------------------
const CONTACT_KEY = 'contact_messages';

// Escapa texto para evitar inyección HTML
const escapeHtml = (str) => {
  if (!str && str !== 0) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

const getContactMessages = () => {
  try {
    const raw = localStorage.getItem(CONTACT_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch (e) {
    console.error('Error parseando mensajes de contacto:', e);
    return [];
  }
};

const saveContactMessages = (list) => {
  localStorage.setItem(CONTACT_KEY, JSON.stringify(list));
};

const renderContactMessages = (opts = {}) => {
  // opts.limit permite limitar número mostrado (opcional)
  const limit = opts.limit || 10;
  const messages = getContactMessages();

  // Si no existe un contenedor, lo creamos después de .badges-section
  if ($('.profile-contact-messages').length === 0) {
    const containerHtml = `
        <div class="section profile-contact-messages" style="margin-top:20px;">
          <h3>Tickets abiertos</h3>
          <div class="messages-list"></div>
        </div>
      `;
    // Preferimos insertarlo después de .trips-section si existe, si no después de .badges-section
    if ($('.trips-section').length) {
      $('.trips-section').after(containerHtml);
    } else {
      $('.badges-section').after(containerHtml);
    }
  }

  const $list = $('.profile-contact-messages .messages-list');
  if (!$list.length) return;

  if (messages.length === 0) {
    $list.html('<p style="color:#666;">No hay mensajes guardados.</p>');
    return;
  }

  // Mostrar los más recientes primero
  const items = messages.slice().reverse().slice(0, limit).map(msg => {
    const id = escapeHtml(msg.id);
    const email = escapeHtml(msg.email);
    const date = escapeHtml(msg.date);
    const body = escapeHtml(msg.message).replace(/\n/g, '<br>');
    return `
        <div class="profile-message" data-id="${id}" style="border:1px solid #e6e6e6; padding:12px; border-radius:8px; margin-bottom:10px; background:#fff;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <div style="font-weight:600; color:#222;">${email}</div>
            <small style="color:#555;">${date}</small>
          </div>
          <div class="profile-message-body" style="color:#333; margin-bottom:8px;">${body}</div>
          <div style="text-align:right;">
            <button class="btn-delete-contact" data-id="${id}" style="background:#f5f5f5; border:1px solid #ddd; padding:6px 10px; border-radius:6px; cursor:pointer;">Eliminar</button>
          </div>
        </div>
      `;
  }).join('');

  $list.html(items);
};

// Delegación: eliminar mensaje desde el perfil
$(document).off('click', '.btn-delete-contact').on('click', '.btn-delete-contact', function (e) {
  const id = $(this).attr('data-id');
  if (!id) return;
  const current = getContactMessages();
  const filtered = current.filter(m => String(m.id) !== String(id));
  saveContactMessages(filtered);
  renderContactMessages(); // re-render
});

// Llamada inicial para renderizar en la carga de la página
renderContactMessages({ limit: 20 });