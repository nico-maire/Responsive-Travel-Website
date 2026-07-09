import { renderHeader, renderFooter, renderContact, setupContact, setupHeader } from './components/index.js';
import { toggleLang, logout, login, t } from './utils.js';
import { initHomePage } from './pages/index.js';
import { initDestinationsPage } from './pages/destinations.js';
import { initBlogDetailPage } from './pages/blog-detail.js';
import { initBlogListPage } from './pages/blog.js';
import { initBookingPage } from './pages/booking.js';
import { initCommunityPage } from './pages/community.js';
import { initForumThreadPage } from './pages/forum-thread.js';
import { initForumListPage } from './pages/forum.js';
import { initGemsPage } from './pages/gems.js';
import { initLoginPage } from './pages/login.js';
import { initProfilePage } from './pages/profile.js';
import { initRegisterPage } from './pages/register.js';
import { initTripDetailsPage } from './pages/trip-details.js';
import { initTipsPage } from './pages/tips.js';
import { getLang } from './utils.js';


const translatePage = () => {
  // text nodes
  $('[data-i18n]').each(function () {
    const key = $(this).data('i18n');
    const translated = t(key);
    $(this).text(translated);
  });

  // html (trusted small fragments)
  $('[data-i18n-html]').each(function () {
    const key = $(this).data('i18n-html');
    $(this).html(t(key));
  });

  // placeholders
  $('[data-i18n-placeholder]').each(function () {
    const key = $(this).data('i18n-placeholder');
    $(this).attr('placeholder', t(key));
  });

  // title attribute
  $('[data-i18n-title]').each(function () {
    const key = $(this).data('i18n-title');
    $(this).attr('title', t(key));
  });

  // alt attribute (images)
  $('[data-i18n-alt]').each(function () {
    const key = $(this).data('i18n-alt');
    $(this).attr('alt', t(key));
  });

  // value (inputs / buttons)
  $('[data-i18n-value]').each(function () {
    const key = $(this).data('i18n-value');
    $(this).val(t(key));
  });

  // aria-label
  $('[data-i18n-aria]').each(function () {
    const key = $(this).data('i18n-aria');
    $(this).attr('aria-label', t(key));
  });

  // document title / meta description keys (optional)
  const docTitleKey = $('meta[name="i18n-title"]').attr('content');
  if (docTitleKey) document.title = t(docTitleKey);
  const metaDescKey = $('meta[name="i18n-description"]').attr('content');
  if (metaDescKey) {
    let el = $('meta[name="description"]');
    if (!el.length) {
      $('head').append(`<meta name="description" content="${t(metaDescKey)}">`);
    } else {
      el.attr('content', t(metaDescKey));
    }
  }
};


// ========================================
// INICIALIZACIÓN GLOBAL (jQuery)
// ========================================
$(function () {
  document.documentElement.lang = getLang();
  // 1. Inyectar Layout
  $('header').html(renderHeader());
  $('footer').html(renderFooter());
  setupHeader();


  $('.contact-component').html(renderContact());
  setupContact();
  // 2. Eventos Globales (Delegación)
  $(document).on('click', '#btn-lang', toggleLang);
  $(document).on('click', '#btn-logout', logout);

  const path = window.location.pathname;

  // Log para debug
  console.log('Ruta actual:', path);

  // 3. Router Simple
  if (path.includes('destinations.html') || path.includes('/destinations')) {
    initDestinationsPage();
  } else if (path.includes('blog-detail.html') || path.includes('/blog-detail')) {
    initBlogDetailPage();
  } else if (path.includes('blog.html') || path.includes('/blog')) {
    initBlogListPage();
  } else if (path.includes('booking.html') || path.includes('/booking')) {
    initBookingPage();
  } else if (path.includes('community.html') || path.includes('/community')) {
    initCommunityPage();
  } else if (path.includes('forum-thread.html') || path.includes('/forum-thread')) {
    initForumThreadPage();
  } else if (path.includes('forum.html') || path.includes('/forum')) {
    initForumListPage();
  } else if (path.includes('gems.html') || path.includes('/gems')) {
    initGemsPage();
  } else if (path.includes('login.html') || path.includes('/login')) {
    initLoginPage();
  } else if (path.includes('profile.html') || path.includes('/profile')) {
    initProfilePage();
  } else if (path.includes('register.html') || path.includes('/register')) {
    initRegisterPage();
  } else if (path.includes('trip-details.html') || path.includes('/trip-details')) {
    initTripDetailsPage();
  } else if (path.includes('tips.html') || path.includes('/tips')) {
    initTipsPage();
  } else {
    // Asumimos index.html por defecto o cualquier otra ruta que no coincida
    console.log('Inicializando página principal...');
    initHomePage();
  }

  translatePage()
  window.translatePage = translatePage;
});