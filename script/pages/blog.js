import { BLOG_POSTS } from '../data/index.js';
import { t } from '../utils.js';

export const initBlogListPage = () => {
  const $grid = $('#blog-grid');
  const $filters = $('.blog-filter-btn');
  const $searchInput = $('#blog-search');

  // Estado local para filtros
  let currentCategory = 'all';
  let searchTerm = '';

  // Función de renderizado centralizada
  const render = () => {
    // Filtrar datos
    const filtered = BLOG_POSTS.filter(post => {
      const matchCategory = currentCategory === 'all' || post.category === currentCategory;
      const matchSearch = post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm);
      return matchCategory && matchSearch;
    });

    // Generar HTML
    if (filtered.length > 0) {
      const html = filtered.map(post => `
        <article class="blog-card">
          <img src="${post.image}" alt="${post.title}" class="blog-card-img">
          <div class="blog-card-content">
            <span class="blog-card-category">${t('filter_' + post.category) || post.category}</span>
            <h3 class="blog-card-title">${post.title}</h3>
            <p class="blog-card-excerpt">${post.excerpt}</p>
            <div class="blog-card-footer">
              <span>${post.date}</span>
              <a href="blog-detail.html?id=${post.id}" 
                 class="blog-read-more"
                 aria-label="${t('read_more_aria')}: ${post.title}" 
                 data-i18n="read_more">
                 ${t('read_more')} &rarr;
              </a>
            </div>
          </div>
        </article>
      `).join('');

      $grid.html(html).hide().fadeIn(300);
    } else {
      $grid.html('<p style="text-align:center; grid-column:1/-1;">No se encontraron artículos.</p>');
    }
  };

  // Render inicial
  render();

  // Evento: Clic en Filtros de Categoría
  $filters.click(function () {
    $filters.removeClass('active');
    $(this).addClass('active');

    currentCategory = $(this).data('category');
    render();
  });

  // Evento: Búsqueda
  $searchInput.on('keyup', function () {
    searchTerm = $(this).val().toLowerCase();
    render();
  });

  // Evento: Cargar más (Simulado)
  $('#blog-load-more').click(function () {
    $(this).text('Cargando...').prop('disabled', true);
    setTimeout(() => {
      alert('No hay más artículos antiguos por ahora.');
      $(this).text('Cargar más artículos').prop('disabled', false);
    }, 1000);
  });
};