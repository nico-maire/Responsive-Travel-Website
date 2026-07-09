export const renderHeroSlide = (trip, isActive) => `
  <div class="carousel-slide ${isActive ? 'active' : ''}" data-id="${trip.id}">
    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: var(--color-gray-100);">
      <img src="${trip.image}" alt="${trip.title}">
      <div class="carousel-placeholder">
        <!-- Círculo decorativo original -->
        <div style="width: 6rem; height: 6rem; border: 4px solid rgba(255, 255, 255, 0.5); border-radius: 999px;"></div>
      </div>
    </div>
  </div>
`;