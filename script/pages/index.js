import { TRIPS } from '../../data/tripsData.js';

// --- CONSTANTS ---
const TRIPS_STORAGE_KEY = 'wanderlust_trips_db';
const CAROUSEL_INTERVAL = 3000;

// IDs of the trips we want to highlight in "Viajes Populares"
// 1: Bali, 6: Iceland, 8: Kenya, 11: New York, 15: Machu Picchu, 18: New Zealand
const POPULAR_IDS = ['1', '6', '8', '11', '15', '18'];

// --- INITIALIZATION ---
export function initHomePage() {
    console.log("🏠 Initializing Home Page...");

    initCarousel();
    initTripsGrid();
}

// --- A. CAROUSEL LOGIC ---
function initCarousel() {
    const track = document.getElementById('track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!track || !prevBtn || !nextBtn) return;

    const slides = Array.from(track.children);
    const totalSlides = slides.length;
    let currentIndex = 0;
    let autoPlayId = null;

    const updateTrack = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateTrack();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateTrack();
    };

    const resetTimer = () => {
        if (autoPlayId) clearInterval(autoPlayId);
        autoPlayId = setInterval(nextSlide, CAROUSEL_INTERVAL);
    };

    nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
    prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });

    resetTimer();
}

// --- B. TRIPS GRID LOGIC ---
function initTripsGrid() {
    const container = document.querySelector('.trips-grid');
    if (!container) return;

    // 1. ALWAYS Refresh LocalStorage with the new Imported Data 
    // (This fixes the issue of seeing old "Viaje popular 1" data)
    localStorage.setItem(TRIPS_STORAGE_KEY, JSON.stringify(TRIPS));

    // 2. Get data back
    const storedTrips = JSON.parse(localStorage.getItem(TRIPS_STORAGE_KEY));

    // 3. Filter only the specific IDs we want for the "Popular" section
    const popularTrips = storedTrips.filter(trip => POPULAR_IDS.includes(trip.id));

    // 4. Render
    renderTrips(popularTrips, container);
}

// Helper: Render HTML
function renderTrips(trips, container) {
    container.innerHTML = '';

    if (trips.length === 0) {
        container.innerHTML = '<p>No se encontraron viajes.</p>';
        return;
    }

    const html = trips.map(trip => `
        <article class="trip-card">
            <div class="card-image">
                <img src="${trip.image}" alt="${trip.title}" />
            </div>
            <h3 class="card-title">${trip.title}</h3>
            
            <div style="font-size: 13px; color: #555; margin-bottom: 8px;">
                <span><i class="fa fa-map-marker"></i> ${trip.continent}</span>
            </div>

            <div style="display: flex; justify-content: space-between; width: 100%; font-size: 14px; margin-bottom: 12px; padding: 0 10px;">
                <span>${trip.days} días</span>
                <span style="font-weight: bold;">$${trip.price}</span>
            </div>

            <div style="margin-bottom: 15px; color: #916300ff; font-size: 14px;">
                ${getStarRating(trip.rating)}
            </div>
            
            <button class="btn-dark" onclick="window.location.href='trip-details.html?id=${trip.id}'">
                Ver más
            </button>
        </article>
    `).join('');

    container.innerHTML = html;
}

// Helper: Generate stars
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    let stars = '★'.repeat(fullStars);
    if (hasHalf) stars += '½';
    return stars;
}