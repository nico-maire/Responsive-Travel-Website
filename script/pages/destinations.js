import { TRIPS, CONTINENTS } from '../data/index.js';
import { renderTripCard } from '../components/index.js';
// 1. IMPORTAR LA FUNCIÓN DE TRADUCCIÓN
import { t } from '../utils.js';

export const initDestinationsPage = () => {
  const $container = $('#trips-container');
  const $tabs = $('.tab-btn');
  const $filtersPanel = $('#filters-panel');

  let state = {
    tab: 'todo',
    search: '',
    continents: [],
    maxPrice: 3000,
    maxDuration: 30
  };

  // 2. Renderizado de Etiquetas (Filtros)
  const renderContinentTags = () => {
    const available = CONTINENTS.filter(c => !state.continents.includes(c));

    // Añadidos aria-labels traducidos para accesibilidad
    $('#available-continents').html(available.map(c =>
      `<button class="tag-btn" data-continent="${c}" aria-label="${t('aria_add_filter')} ${c}">+ ${c}</button>`
    ).join(''));

    $('#selected-continents').html(state.continents.map(c =>
      `<button class="tag-selected" data-continent="${c}" aria-label="${t('aria_remove_filter')} ${c}">${c} ✕</button>`
    ).join(''));
  };

  renderContinentTags();

  // 3. Renderizado Principal
  const renderTrips = () => {
    let filtered = TRIPS.filter(trip => {
      const matchSearch = trip.title.toLowerCase().includes(state.search.toLowerCase());
      const matchPrice = trip.price <= state.maxPrice;
      const matchDuration = trip.days <= state.maxDuration;
      const matchContinent = state.continents.length === 0 || state.continents.includes(trip.continent);
      return matchSearch && matchPrice && matchDuration && matchContinent;
    });

    // --- VISTA: TODO ---
    if (state.tab === 'todo') {
      const popular = TRIPS.filter(t => t.rating >= 4.7);

      // Usamos t() para títulos y aria-labels en flechas
      let html = `
        <h3 class="carousel-section-title" data-i18n="section_popular">${t('section_popular')}</h3>
        <div class="carousel-container">
            <button class="carousel-arrow arrow-prev" aria-label="${t('aria_prev')}">‹</button>
            <div class="carousel-wrapper">
                ${popular.map(t => `<div class="carousel-card">${renderTripCard(t)}</div>`).join('')}
            </div>
            <button class="carousel-arrow arrow-next" aria-label="${t('aria_next')}">›</button>
        </div>

        <h3 class="carousel-section-title" data-i18n="section_all">${t('section_all')}</h3>
        <div class="carousel-container">
            <button class="carousel-arrow arrow-prev" aria-label="${t('aria_prev')}">‹</button>
            <div class="carousel-wrapper">
                ${TRIPS.map(t => `<div class="carousel-card">${renderTripCard(t)}</div>`).join('')}
            </div>
            <button class="carousel-arrow arrow-next" aria-label="${t('aria_next')}">›</button>
        </div>
      `;
      $container.html(html);

    // --- VISTA: CONTINENTES ---
    } else if (state.tab === 'continentes') {
      const groups = {};
      filtered.forEach(t => {
        if (!groups[t.continent]) groups[t.continent] = [];
        groups[t.continent].push(t);
      });

      if (Object.keys(groups).length === 0) {
        $container.html(`<p class="text-center" data-i18n="no_results">${t('no_results')}</p>`);
        return;
      }

      let html = Object.entries(groups).map(([continent, trips]) => `
        <h3 class="carousel-section-title">${continent}</h3>
        <div class="grid grid-cols-3">
          ${trips.map(renderTripCard).join('')}
        </div>
      `).join('');
      $container.html(html);

    // --- VISTA: POPULARES / FILTRADO ---
    } else {
      if (state.tab === 'populares' && state.search === '') {
        filtered = filtered.filter(t => t.rating >= 4.5);
      }

      if (filtered.length === 0) {
        $container.html(`<p class="text-center" data-i18n="no_results">${t('no_results')}</p>`);
        return;
      }

      $container.html(`<div class="grid grid-cols-3">${filtered.map(renderTripCard).join('')}</div>`);
    }
  };

  renderTrips();

  // 4. Eventos
  $tabs.click(function () {
    $tabs.removeClass('active');
    $(this).addClass('active');
    state.tab = $(this).data('tab');

    if (state.tab === 'todo') {
      $filtersPanel.slideUp();
    } else {
      $filtersPanel.slideDown();
    }
    renderTrips();
  });

  $('#price-slider').on('input', function () {
    state.maxPrice = $(this).val();
    $('#price-value').text(`${state.maxPrice}€`);
    renderTrips();
  });

  $('#duration-slider').on('input', function () {
    state.maxDuration = $(this).val();
    // Usamos t('suffix_days') para traducir "días"
    $('#duration-value').text(`${state.maxDuration} ${t('suffix_days')}`);
    renderTrips();
  });

  $('#dest-search').on('keyup', function () {
    state.search = $(this).val();
    renderTrips();
  });

  $(document).on('click', '.tag-btn', function () {
    const continent = $(this).data('continent');
    state.continents.push(continent);
    renderContinentTags();
    renderTrips();
  });

  $(document).on('click', '.tag-selected', function () {
    const continent = $(this).data('continent');
    state.continents = state.continents.filter(c => c !== continent);
    renderContinentTags();
    renderTrips();
  });

  $(document).on('click', '.carousel-arrow', function () {
    const $btn = $(this);
    const $wrapper = $btn.siblings('.carousel-wrapper');
    const scrollAmount = 640; 
    const direction = $btn.hasClass('arrow-next') ? 1 : -1;
    
    const currentScroll = $wrapper.scrollLeft();
    $wrapper.stop().animate({ scrollLeft: currentScroll + (scrollAmount * direction) }, 300);
  });
};