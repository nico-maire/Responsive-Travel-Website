import { t } from './../utils.js';

export const renderTripCard = (trip) => `
  <div class="card trip-item">
    <div class="card-image">
      <img src="${trip.image}" alt="${trip.title}">
    </div>
    <div class="card-footer">
      <div>
        <h3 class="card-title">${trip.title}</h3>
        <small>${trip.continent} • ${trip.days} días</small>
      </div>
      <!-- CAMBIO AQUÍ: Usamos data-i18n en vez de ${t()} -->
      <a href="trip-details.html?id=${trip.id}" class="btn-card" data-i18n="view_more">Ver más</a>
    </div>
  </div>
`;