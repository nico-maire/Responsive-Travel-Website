import { TRANSLATIONS } from './data/index.js';

// The key you used in register.js
const USER_KEY = 'currentUser';

// LocalStorage Helper
export const storage = {
  get: (key) => JSON.parse(localStorage.getItem(key) || 'null'),
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key)
};

// --- AUTHENTICATION ---

export const getUser = () => {
  // 1. Retrieve the data saved by register.js
  const user = storage.get(USER_KEY);

  if (!user) return null;

  // 2. Return object formatted for your Header
  // register.js saved 'nombre', but header.js expects 'name'
  return {
    ...user,
    name: user.nombre,
    // Provide a default image since register.js only saved text (Camera/Gallery)
    avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  };
};

export const login = (email, password) => {
  if (email && password) {
    // Mock login logic
    const mockUser = { nombre: 'Demo User', email };
    storage.set(USER_KEY, mockUser);
    return true;
  }
  return false;
};

export const logout = () => {
  storage.remove(USER_KEY);
  window.location.href = 'index.html';
};

// --- LANGUAGES (Unchanged) ---
export const getLang = () => localStorage.getItem('wanderlust_lang') || 'es';

export const t = (key) => {
  const lang = getLang();
  return (TRANSLATIONS && TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) ? TRANSLATIONS[lang][key] : key;
};

export const toggleLang = () => {
  const current = getLang();
  localStorage.setItem('wanderlust_lang', current === 'es' ? 'en' : 'es');
  location.reload();
};