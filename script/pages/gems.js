// src/script/gems.js

import { TRIPS } from '../../data/tripsData.js';
// 1. IMPORTAMOS LA FUNCIÓN DE TRADUCCIÓN
import { t } from '../utils.js';

export async function initGemsPage() {
  console.log("💎 Initializing Gems Page...");

  const container = $('.gems-wrapper');
  container.empty();

  try {
    const response = await fetch('data/ciudades-del-mundo.json');
    if (!response.ok) throw new Error('Could not load the JSON file');

    const data = await response.json();

    renderGems(data, container);

  } catch (error) {
    console.error("Error loading JSON:", error);
    // 2. ERROR TRADUCIDO
    container.html(`<h3 class="text-center">${t('gems_error_loading')}</h3>`);
  }
}

function renderGems(data, container) {

  data.continents.forEach(continent => {
    let allCities = [];

    continent.countries.forEach(country => {
      const citiesWithCountry = country.cities.map(city => {

        let match = TRIPS.find(t => t.image === city.image.url);

        if (!match) {
          match = TRIPS.find(t => t.title.includes(city.name));
        }

        return {
          ...city,
          countryName: country.name,
          realId: match ? match.id : null
        };
      });

      allCities = [...allCities, ...citiesWithCountry];
    });

    if (allCities.length === 0) return;

    // 5. GENERATE HTML
    const cardsHTML = allCities.map(city => {
      if (!city.realId) console.warn(`No ID found for city: ${city.name}`);

      return `
            <article class="gem-card" 
                     data-id="${city.realId}" 
                     style="cursor: pointer;"
                     role="button" 
                     tabindex="0" 
                     aria-label="${t('view_more_aria')} ${city.name}">
                <img src="${city.image.url}" alt="${city.image.alt}" class="card-image" loading="lazy">
                <div class="card-content">
                    <h3>${city.name}</h3>
                    <p>${city.description}</p>
                </div>
            </article>
        `;
    }).join('');

    // 6. SECTION HTML con ARIA-LABELS TRADUCIDOS
    const sectionHTML = `
        <section class="region-section">
            <h2 class="region-title">${continent.name}</h2>
            <div class="gems-carousel">
                <button class="gems-nav-arrow prev" aria-label="${t('aria_prev')}">&#10094;</button>
                <div class="gems-cards-row">${cardsHTML}</div>
                <button class="gems-nav-arrow next" aria-label="${t('aria_next')}">&#10095;</button>
            </div>
        </section>
    `;
    container.append(sectionHTML);
  });

  setupCarouselLogic();
  setupCardClickLogic();
}

function setupCarouselLogic() {
  $(document).off('click', '.gems-nav-arrow').on('click', '.gems-nav-arrow.next', function () {
    const row = $(this).siblings('.gems-cards-row');
    row.animate({ scrollLeft: row.scrollLeft() + 370 }, 300);
  }).on('click', '.gems-nav-arrow.prev', function () {
    const row = $(this).siblings('.gems-cards-row');
    row.animate({ scrollLeft: row.scrollLeft() - 370 }, 300);
  });
}

function setupCardClickLogic() {
  $(document).off('click', '.gem-card').on('click', '.gem-card', function () {
    const cityId = $(this).data('id');

    if (cityId && cityId !== "undefined" && cityId !== "null") {
      console.log(`Navigating to trip-details with ID: ${cityId}`);
      window.location.href = `trip-details.html?id=${cityId}`;
    } else {
      console.error("Error: This card does not have a valid ID linked to tripsData.js");
      // 7. ALERTA TRADUCIDA
      alert(t('gems_details_unavailable'));
    }
  });
}