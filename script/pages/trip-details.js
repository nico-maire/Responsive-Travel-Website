// src/pages/trip-details.js

import { TRIPS } from '../../data/tripsData.js';

export function initTripDetailsPage() {
  console.log("✈️ Initializing Trip Details...");

  // 1. Get ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const tripId = urlParams.get('id');

  if (!tripId) {
    alert("Trip ID not found. Redirecting to home.");
    window.location.href = 'index.html';
    return;
  }

  // 2. Load trips from localStorage first
  const storedTrips = JSON.parse(localStorage.getItem('wanderlust_trips_db')) || TRIPS;

  // 3. Find the trip
  const trip = storedTrips.find(t => t.id === tripId);

  if (!trip) {
    document.querySelector('.product-info').innerHTML = "<h1>Viaje no encontrado</h1>";
    return;
  }

  // 4. Inject Main Info
  const imgEl = document.getElementById('detail-image');
  if (imgEl) imgEl.src = trip.image;

  setText('detail-title', trip.title);
  setText('detail-price', trip.price);
  setText('detail-days', trip.days);
  setText('detail-description', trip.description || "Sin descripción disponible.");

  // 5. Render Reviews
  renderReviews(trip.reviews);

  // 6. Render review form if eligible
  renderReviewForm(trip);

  // 7. Setup UI Interactions
  setupInteractions(trip);
}


// --- Helper Functions ---
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
}

// Render existing reviews
function renderReviews(reviews) {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  if (!reviews || reviews.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; color: #777;">Aún no hay opiniones para este viaje. ¡Sé el primero!</p>';
    return;
  }

  // Sort newest first (by date descending)
  const sortedReviews = [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));

  const html = sortedReviews.map(review => `
        <article class="review-card">
            <div class="stars">${getStars(review.rating)}</div>
            <h3 class="review-title">${review.comment.substring(0, 20)}...</h3>
            <p class="review-body">${review.comment}</p>
            <div class="user-info">
                <div class="avatar-circle"></div>
                <div class="user-text">
                    <span class="user-name">${review.user}</span>
                    <span class="user-date">${review.date}</span>
                </div>
            </div>
        </article>
    `).join('');

  container.innerHTML = html;
}


// Helper to display stars
function getStars(rating) {
  return '★'.repeat(Math.floor(rating)) + (rating % 1 !== 0 ? '½' : '') + '☆'.repeat(5 - Math.ceil(rating));
}

// Render review form for eligible users
function renderReviewForm(trip) {
  const container = document.getElementById('review-form-container');
  if (!container) return;

  // Check if current user has a paid booking for this trip
  const userStr = localStorage.getItem('currentUser');
  const currentUser = userStr ? JSON.parse(userStr) : null;

  const canReview = currentUser && Array.isArray(currentUser.bookings) &&
    currentUser.bookings.some(
      b => b.tripId === trip.id && b.status === 'paid'
    );

  if (!canReview) {
    container.innerHTML = '<p style="color:#777;">Reserva el viaje para poder dejar tu opinión.</p>';
    return;
  }

  // Render the review form
  container.innerHTML = `
    <h3>Deja tu opinión</h3>
    <form id="review-form">
      <label for="rating">Calificación:</label>
      <select id="rating" required>
        <option value="">Selecciona...</option>
        <option value="1">★</option>
        <option value="2">★★</option>
        <option value="3">★★★</option>
        <option value="4">★★★★</option>
        <option value="5">★★★★★</option>
      </select>
      <label for="comment">Comentario:</label>
      <textarea id="comment" rows="3" required></textarea>
      <button type="submit" class="btn-dark">Enviar</button>
    </form>
  `;

  // Add submit handler
  const form = document.getElementById('review-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitReview(trip, currentUser);
  });
}

// Handle review submission
function submitReview(trip, currentUser) {
  const rating = parseInt(document.getElementById('rating').value);
  const comment = document.getElementById('comment').value.trim();

  if (!rating || !comment) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const newReview = {
    user: currentUser.name || currentUser.email || "Usuario",
    date: new Date().toISOString(), // ISO format for proper sorting
    rating,
    comment
  };

  // Load trips from localStorage
  const trips = JSON.parse(localStorage.getItem('wanderlust_trips_db')) || [];
  const tripIndex = trips.findIndex(t => t.id === trip.id);

  if (tripIndex !== -1) {
    if (!Array.isArray(trips[tripIndex].reviews)) trips[tripIndex].reviews = [];
    trips[tripIndex].reviews.push(newReview);
    localStorage.setItem('wanderlust_trips_db', JSON.stringify(trips));

    // Update the in-memory trip object so page immediately reflects new review
    if (!trip.reviews) trip.reviews = [];
    trip.reviews.push(newReview);
  }

  // Render reviews (newest first)
  renderReviews(trip.reviews);

  // Clear form
  document.getElementById('review-form').reset();
  alert("¡Gracias por tu opinión!");
}


// Setup UI Interactions
function setupInteractions(trip) {
  // Accordion Logic
  const toggle = document.getElementById('accordion-toggle');
  const content = document.getElementById('accordion-body');
  const icon = document.getElementById('accordion-icon');

  if (toggle && content) {
    toggle.addEventListener('click', () => {
      content.classList.toggle('hidden');
      if (icon) icon.classList.toggle('rotate-icon');
    });
  }

  // Buy Button Logic
  const btnBuy = document.getElementById('btn-buy');

  if (btnBuy) {
    const userStr = localStorage.getItem('currentUser');
    const currentUser = userStr ? JSON.parse(userStr) : null;
    let isAlreadyBought = false;

    if (currentUser && Array.isArray(currentUser.bookings)) {
      isAlreadyBought = currentUser.bookings.some(
        b => b.tripId === trip.id && b.status === 'paid'
      );
    }

    if (isAlreadyBought) {
      btnBuy.innerText = "¡Viaje ya reservado!";
      btnBuy.style.backgroundColor = "#4CAF50";
      btnBuy.style.cursor = "default";
      btnBuy.disabled = true;
      return;
    }

    btnBuy.addEventListener('click', () => {
      if (!currentUser || !currentUser.email || currentUser.isAnonymous) {
        alert("Debes iniciar sesión o registrarte para poder reservar un viaje.");
        window.location.href = 'login.html';
        return;
      }

      if (!Array.isArray(currentUser.bookings)) currentUser.bookings = [];

      const newBooking = {
        bookingId: Date.now(),
        tripId: trip.id,
        title: trip.title,
        price: trip.price,
        image: trip.image,
        dateAdded: new Date().toISOString(),
        status: 'draft'
      };

      currentUser.bookings.push(newBooking);
      currentUser.currentDraftId = newBooking.bookingId;

      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      window.location.href = 'booking.html';
    });
  }
}
