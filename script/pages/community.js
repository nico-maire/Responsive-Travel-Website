import { FORUM_THREADS, BLOG_POSTS, TRAVELERS, TIPS } from '../data/index.js';

/*
  Community page uses the same sources as forum.html and blog.html:
  - For forum preview it prefers the runtime LocalStorage posts set by forum.js
    (key: 'wanderlust_forum_posts_list'). If not present, it falls back to
    the static `FORUM_THREADS` dataset.
  - For blog preview it uses `BLOG_POSTS` as before.
*/

export const initCommunityPage = () => {
  // --- A. SISTEMA DE PESTAÑAS ---
  const $views = $('.community-view');
  const $tabs = $('.tab-btn');

  function switchTab(tabId) {
    // UI Pestañas
    $tabs.removeClass('active');
    $(`.tab-btn[data-tab="${tabId}"]`).addClass('active');

    // UI Vistas
    $views.hide();
    $(`#view-${tabId}`).fadeIn(300);
  }

  // Evento click en pestañas
  $('button.tab-btn').click(function () {
    const tabId = $(this).data('tab');
    switchTab(tabId);
  });

  // Evento click en botones "Ver más" del Dashboard
  $('.switch-tab-btn').click(function () {
    const target = $(this).data('target');

    if (target === 'forum') {
      window.location.href = 'forum.html';
    } else if (target === 'blog') {
      window.location.href = 'blog.html';
    } else {
      switchTab(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // --- B. DATASOURCE HELPERS ---

  const POSTS_STORAGE_KEY = 'wanderlust_forum_posts_list';

  const getForumPosts = () => {
    try {
      const raw = localStorage.getItem(POSTS_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.warn('Error leyendo posts del LocalStorage', e);
    }
    // Fallback al dataset estático si LS no tiene posts
    return Array.isArray(FORUM_THREADS) ? FORUM_THREADS : [];
  };

  // --- C. RENDERIZADO DE VISTAS ---

  // 1. Render FORO (Usado en Dashboard y en Tab Foro)
  const renderForumList = ($container, limit = null) => {
    let data = getForumPosts();
    if (limit) data = data.slice(0, limit);

    if (!data || data.length === 0) {
      $container.html('<p style="text-align:center;color:#666;">No hay discusiones.</p>');
      return;
    }

    const html = data.map(thread => `
      <div class="forum-item">
        <div class="forum-icon" aria-hidden="true">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </div>
        <div class="forum-content">
          <a href="forum-thread.html?id=${thread.id}" class="forum-title">${thread.title}</a>
          <div class="forum-meta">
            ${thread.category ? `<span class="forum-badge">${thread.category}</span>` : ''}
            ${thread.author ? `Por ${thread.author} • ` : ''} ${thread.date || ''} • ${thread.participants ?? thread.replies ?? 0} respuestas
          </div>
        </div>
      </div>
    `).join('');
    $container.html(html);
  };

  // 2. Render BLOG (Usado en Dashboard y Tab Blog)
  const renderBlogList = ($container, limit = null) => {
    let data = BLOG_POSTS;
    if (limit) data = data.slice(0, limit);

    if (!data || data.length === 0) {
      $container.html('<p style="text-align:center;color:#666;">No hay artículos.</p>');
      return;
    }

    const html = data.map(post => `
      <div class="card" style="padding:0">
        <img src="${post.image}" style="height:150px; width:100%; object-fit:cover; border-radius:0.5rem 0.5rem 0 0">
        <div style="padding:1rem">
           <h4 style="font-size:1rem; margin-bottom:0.5rem">${post.title}</h4>
           <a href="blog-detail.html?id=${post.id}" style="font-size:0.85rem; color:#666">Leer artículo</a>
        </div>
      </div>
    `).join('');
    $container.html(html);
  };

  // 3. Render TRAVELERS
  const renderTravelers = ($container, limit = null) => {
    let data = TRAVELERS;
    if (limit) data = data.slice(0, limit);

    const html = data.map(t => `
      <div class="traveler-card">
        <img src="${t.avatar}" class="traveler-avatar" alt="${t.name}">
        <div class="traveler-name">${t.name}</div>
      </div>
    `).join('');
    $container.html(html);
  };

  // 4. Render TIPS
  const renderTips = ($container, limit = null) => {
    let data = TIPS;
    if (limit) data = data.slice(0, limit);

    const html = data.map(tip => `
      <div class="tip-card">
        <div class="tip-title">💡 ${tip.title}</div>
        <div class="tip-text">${tip.text}</div>
      </div>
    `).join('');

    $container.html(html);
  };

  // --- D. INICIALIZACIÓN ---

  // Dashboard Previews (use same sources as forum/blog pages)
  renderForumList($('#dashboard-forum-preview'), 3);
  renderBlogList($('#dashboard-blog-preview'), 2);
  renderTravelers($('#dashboard-travelers-preview'), 4);
  renderTips($('#dashboard-tips-preview'), 2);

  // Full Views
  renderBlogList($('#community-blog-grid'));
  renderTravelers($('#travelers-grid'));
  renderTips($('#tips-list'));
};