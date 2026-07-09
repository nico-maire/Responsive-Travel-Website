import { TRIPS, REVIEWS } from '../data/index.js';
import { renderHeroSlide, renderTripCard } from '../components/index.js';

export const initHomePage = () => {
  // A. Renderizar Carrusel
  const $carouselContainer = $('#hero-carousel');
  if ($carouselContainer.length) {
    const slidesHTML = TRIPS.slice(0, 3).map((trip, idx) => renderHeroSlide(trip, idx === 0)).join('');
    $carouselContainer.html(slidesHTML);

    // Lógica del Carrusel (Intervalo + Botones)
    let currentSlide = 0;
    const totalSlides = 3;

    const changeSlide = (direction) => {
      // Ocultar actual
      $('.carousel-slide').eq(currentSlide).removeClass('active').css('opacity', 0);

      // Calcular nuevo índice
      currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

      // Mostrar nuevo
      $('.carousel-slide').eq(currentSlide).addClass('active').css('opacity', 1);
    };

    // Botones
    $('#carousel-next').click(() => changeSlide(1));
    $('#carousel-prev').click(() => changeSlide(-1));

    // Auto-play cada 5 segundos
    setInterval(() => changeSlide(1), 5000);
  }

  // B. Renderizar Viajes Populares
  const $tripsContainer = $('#popular-trips');
  if ($tripsContainer.length) {
    $tripsContainer.html(TRIPS.slice(0, 3).map(renderTripCard).join(''));
  }

  // C. Renderizar Reviews
  const $reviewsContainer = $('#reviews-section');
  if ($reviewsContainer.length) {
    // Usamos datos reales de reviews
    const reviewsHTML = REVIEWS.map(r => `
      <div class="review-card">
        <div class="review-stars">★★★★★</div>
        <h3 class="review-title">${r.title}</h3>
        <p class="review-body">${r.body}</p>
        <div class="review-author">
           <strong>${r.user}</strong> <span style="font-size:0.8rem; color:#888">${r.date}</span>
        </div>
      </div>
    `).join('');
    $reviewsContainer.html(reviewsHTML);
  }
};