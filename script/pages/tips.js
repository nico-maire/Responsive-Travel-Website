import { TIPS } from '../data/index.js';
import { getUser, storage } from '../utils.js';

const TIPS_KEY = 'wanderlust_tips';

const renderTipCard = (tip) => `
  <div class="tip-card">
    <div class="tip-title">💡 ${tip.title}</div>
    <div class="tip-text" style="margin-top:8px; color:var(--color-gray-800)">${tip.text}</div>
    ${tip.author ? `<div style="margin-top:10px; font-size:0.85rem; color:var(--color-gray-500)">Por ${tip.author}</div>` : ''}
  </div>
`;

const getStoredTips = () => {
  const stored = storage.get(TIPS_KEY);
  if (Array.isArray(stored) && stored.length > 0) return stored;
  // Si no hay nada en storage, devolver el fallback TIPS (importado)
  return Array.isArray(TIPS) ? TIPS : [];
};

const saveStoredTips = (list) => {
  storage.set(TIPS_KEY, list);
};

export const initTipsPage = () => {
  const $container = $('#tips-container');

  const renderTips = (list) => {
    if (!list || list.length === 0) {
      $container.html('<p class="text-center">No hay consejos disponibles.</p>');
      return;
    }

    const html = `
      <div class="tips-grid">
        ${list.map(renderTipCard).join('')}
      </div>
    `;
    $container.html(html);
  };

  // Inicial: cargar desde LS o fallback
  let tips = getStoredTips();
  renderTips(tips);

  // CONTROL: mostrar/ocultar botón Crear según si hay usuario
  const currentUser = getUser();
  if (!currentUser) {
    // Si no hay sesión, ocultar botón (pero el HTML sigue ahí)
    $('#btn-open-tip-modal').hide();
  } else {
    $('#btn-open-tip-modal').show();
  }

  // MODAL: abrir / cerrar
  $('#btn-open-tip-modal').off('click').on('click', () => {
    $('#create-tip-modal').fadeIn(150);
  });
  $('#btn-cancel-tip').off('click').on('click', () => {
    $('#create-tip-modal').fadeOut(120);
    $('#new-tip-form')[0].reset();
  });

  // Submit nuevo tip
  $('#new-tip-form').off('submit').on('submit', function (e) {
    e.preventDefault();

    // Validación
    const title = $('#tip-title').val().trim();
    const text = $('#tip-text').val().trim();

    if (!title || !text) {
      alert('Por favor completa título y contenido.');
      return;
    }

    const user = getUser();
    if (!user) {
      alert('Tienes que iniciar sesión para publicar un consejo.');
      window.location.href = 'login.html';
      return;
    }

    const newTip = {
      id: Date.now(),
      title,
      text,
      author: user.name || user.email || 'Usuario',
      date: new Date().toLocaleString()
    };

    // Guardar: añadimos al inicio (más reciente arriba)
    tips = getStoredTips();
    tips.unshift(newTip);
    saveStoredTips(tips);

    // Re-render y cerrar modal
    renderTips(tips);
    $('#create-tip-modal').fadeOut(120);
    $('#new-tip-form')[0].reset();
  });

  // Búsqueda simple por título o texto
  $(document).off('input', '#tips-search').on('input', '#tips-search', function () {
    const q = $(this).val().toLowerCase().trim();
    if (!q) {
      renderTips(getStoredTips());
      return;
    }
    const filtered = getStoredTips().filter(t => (t.title + ' ' + (t.text || '')).toLowerCase().includes(q));
    renderTips(filtered);
  });
};