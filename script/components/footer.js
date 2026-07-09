import { t } from './../utils.js';

export const renderFooter = () => `
  <div class="footer-wrapper">
    <div class="footer-container">
      
      <div class="f-item area-logo">
          <a href="index.html" class="logo" data-i18n-aria="nav_home" aria-label="Wanderlust - Inicio">
            <img src="images/logo.png" alt="Wanderlust logo" class="site-logo-footer">
          </a>
      </div>

      <div class="f-item area-social">
          <a href="#" data-i18n-aria="social_x" aria-label="X">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" data-i18n-aria="social_insta" aria-label="Instagram">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" data-i18n-aria="social_yt" aria-label="YouTube">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          </a>
      </div>

      <div class="f-item area-dest">
          <h3 data-i18n="footer_destinations">Destinos</h3>
          <ul>
              <li><a href="gems.html" data-i18n="nav_gems">Gemas Ocultas</a></li>
              <li><a href="destinations.html" data-i18n="cont_america">América</a></li>
              <li><a href="destinations.html" data-i18n="cont_asia">Asia</a></li>
              <li><a href="destinations.html" data-i18n="cont_europe">Europa</a></li>
              <li><a href="destinations.html" data-i18n="cont_africa">África</a></li>
          </ul>
      </div>

      <div class="f-item area-comm">
          <h3 data-i18n="footer_community">Comunidad</h3>
          <ul>
              <li><a href="forum.html">Foro</a></li> <!-- Asumiendo que "Foro" es igual en ambos o añades clave -->
              <li><a href="blog.html">Blog</a></li>
              <li><a href="blog.html">Tips</a></li>
              <li><a href="community.html">Viajeros</a></li>
              <li><a href="community.html">Eventos</a></li>
          </ul>
      </div>

      <div class="f-item area-asis">
          <h3 data-i18n="footer_support">Asistencia</h3>
          <ul class="asis-list">
              <li><a href="#" data-i18n="footer_legal">Información Legal</a></li>
              <li><a href="index.html" data-i18n="footer_about">Sobre Nosotros</a></li>
              <li><a href="#" data-i18n="footer_contact">Contacto</a></li>
              <li><a href="#" data-i18n="footer_incidents">Incidencias</a></li>
              <li><a href="profile.html" data-i18n="footer_account">Mi Cuenta</a></li>
          </ul>
      </div>

      <div class="f-item area-copy" data-i18n="footer_rights">
        @ 2025 WanderLust. Todos los derechos reservados
      </div>

    </div>
  </div>
`;