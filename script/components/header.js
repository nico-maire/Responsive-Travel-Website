import { t, getUser, getLang } from '../utils.js';

export const renderHeader = () => {
  const user = getUser();
  console.log("Current User:", user);

  const currentLang = getLang();
  const langFlag = currentLang === 'en' ? '🇬🇧' : '🇪🇸';

  const path = window.location.pathname;

  // 1. Get photo or fallback
  const userPhoto = user?.photo || user?.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  // 2. Render Auth Buttons
  // CHANGES: Wrapped img and span in an <a> tag. Added styles to remove underline.
  const renderAuthButtons = () => user
    ? `<div class="user-profile" style="display: flex; align-items: center; gap: 15px;">
         
         <!-- CLICKABLE PROFILE AREA (Goes to profile.html) -->
         <a href="profile.html" title="Ir a mi perfil" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit;">
             <img 
                src="${userPhoto}" 
                alt="${user.name}" 
                style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #ddd;"
             >
             <span class="desktop-only" style="font-weight: 500; cursor: pointer;">${user.name}</span>
         </a>

         <!-- LOGOUT BUTTON (Separate action) -->
         <button id="btn-logout" class="btn-icon" title="Salir" style="cursor: pointer;">Log out</button>
       </div>`
    : `<div class="auth-buttons">
         <a href="login.html" class="btn-secondary">${t('auth_signin')}</a>
         <a href="register.html" class="btn-primary">${t('auth_register')}</a>
       </div>`;

  return `
    <div class="header-container">
      <div class="header-content">
        <!-- LEFT: LOGO -->
        <div class="logo-container">
          <a href="index.html" class="logo" aria-label="Wanderlust - Inicio">
            <img src="images/logo.png" alt="Wanderlust logo" class="site-logo">
          </a>
        </div>

        <!-- CENTER: NAV DESKTOP -->
        <nav class="nav-desktop">
          <a href="index.html" class="${path.includes('index') ? 'active' : ''}">${t('nav_home')}</a>
          <a href="destinations.html" class="${path.includes('destinations') ? 'active' : ''}">${t('nav_destinations')}</a>
          <a href="gems.html" class="${path.includes('gems') ? 'active' : ''}">${t('nav_gems')}</a>
          <a href="blog.html" class="${path.includes('community') ? 'active' : ''}">${t('nav_community')}</a>
        </nav>

        <!-- RIGHT: ACTIONS -->
        <div class="header-actions">
        <!-- Language flag -->
        <button id="btn-lang" class="btn-lang-flag" title="${currentLang === 'en' ? 'English' : 'Español'}">
  <span style="font-size: 1.2rem;">${langFlag}</span>
</button>

        <!-- Hamburger -->
        <button id="btn-menu-toggle" class="hamburger-btn" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Desktop Auth outside header-actions -->
      <div class="desktop-auth">
        ${renderAuthButtons()}
      </div>
      </div>

      <!-- MOBILE MENU -->
      <div id="mobile-menu-overlay" class="mobile-menu hidden">
        <div class="mobile-scroll-container">
          
          <div class="mobile-auth-section">
             ${renderAuthButtons()}
          </div>

          <nav class="mobile-nav-links">
            <a href="index.html" class="mobile-link">Inicio</a>
            <a href="destinations.html" class="mobile-link">Viajes <span class="arrow">›</span></a>
            <a href="destinations.html" class="mobile-link">Explorar Destinos</a>
            <a href="gems.html" class="mobile-link">Gemas Ocultas</a>
            <a href="community.html" class="mobile-link">Comunidad <span class="arrow">›</span></a>
            <a href="profile.html" class="mobile-link">Mi Perfil <span class="arrow">›</span></a>
            <a href="#" class="mobile-link last-item">Contacto</a>
          </nav>
        </div>
      </div>
    </div>
  `;
};

// Initialize events (No changes needed here, but kept for completeness)
export const setupHeader = () => {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#btn-menu-toggle');
    if (btn) {
      const menu = document.getElementById('mobile-menu-overlay');
      if (menu) {
        menu.classList.toggle('hidden');
        btn.classList.toggle('open');
        document.body.style.overflow = menu.classList.contains('hidden') ? '' : 'hidden';
      }
    }

    const logoutBtn = e.target.closest('#btn-logout');
    if (logoutBtn) {
      localStorage.removeItem('currentUser');
      window.location.href = 'index.html';
    }
  });
};