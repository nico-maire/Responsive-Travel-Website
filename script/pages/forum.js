// src/script/forum.js

import { INITIAL_FORUM_DATA } from '../../data/forumData.js';

// --- CONSTANTS ---
const POSTS_STORAGE_KEY = 'wanderlust_forum_posts_list';
const THREADS_STORAGE_KEY = 'wanderlust_forum_threads_db';
const INSIGNIAS_STORAGE_KEY = 'wanderlust_insignias';

// --- INITIALIZATION ---
export function initForumListPage() {
  console.log("💬 Initializing Forum List...");

  const container = $('#forum-posts-container');
  const searchInput = $('#forumSearch');

  // Modal Elements
  const modal = $('#create-post-modal');
  const btnOpenModal = $('#btn-open-modal');
  const btnCancelModal = $('#btn-cancel-modal');
  const formNewPost = $('#new-post-form');

  // --- A. LOAD DATA LOGIC ---
  // Check if we already have data in LocalStorage
  let storedPosts = JSON.parse(localStorage.getItem(POSTS_STORAGE_KEY));

  // If NO data in LocalStorage, load the imported data
  if (!storedPosts || storedPosts.length === 0) {
    console.log("📂 LocalStorage empty. Loading default data...");

    const postsList = []; // For forum.html list
    const threadsDB = {}; // For forum-thread.html details

    INITIAL_FORUM_DATA.forEach(item => {
      // ✅ Calculate real participant count based on message array length
      const realCount = item.messages ? item.messages.length : 0;

      // Extract Summary Info for the List Page
      postsList.push({
        id: item.id,
        title: item.title,
        excerpt: item.excerpt,
        date: item.date,
        participants: realCount // Dynamic count
      });

      // Extract Messages Info for the Thread Page
      threadsDB[item.id] = item.messages;
    });

    // Save to LocalStorage
    localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(postsList));
    localStorage.setItem(THREADS_STORAGE_KEY, JSON.stringify(threadsDB));

    // Update variable to render immediately
    storedPosts = postsList;
  }

  // Render Posts
  renderPosts(storedPosts, container);

  // --- B. SEARCH LOGIC ---
  searchInput.on('keyup', function () {
    const value = $(this).val().toLowerCase();
    const currentPosts = JSON.parse(localStorage.getItem(POSTS_STORAGE_KEY)) || [];

    const filteredPosts = currentPosts.filter(post =>
      post.title.toLowerCase().includes(value) ||
      post.excerpt.toLowerCase().includes(value)
    );

    renderPosts(filteredPosts, container);
  });

  // --- C. NAVIGATION ---
  $(document).on('click', '.btn-read-more', function () {
    const postId = $(this).data('id');
    window.location.href = `forum-thread.html?id=${postId}`;
  });

  // --- D. MODAL LOGIC ---
  btnOpenModal.on('click', () => modal.css('display', 'flex').hide().fadeIn(200));
  btnCancelModal.on('click', () => modal.fadeOut(200));

  formNewPost.on('submit', function (e) {
    e.preventDefault();
    const title = $('#post-title').val().trim();
    const content = $('#post-content').val().trim();

    if (title && content) {
      createNewPost(title, content, container);
      $('#post-title').val('');
      $('#post-content').val('');
      modal.fadeOut(200);
    }
  });
}

// --- HELPER: CREATE POST ---
function createNewPost(title, content, container) {
  const newId = Date.now();
  const dateStr = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase();

  const newPost = {
    id: newId,
    title: title,
    excerpt: content.substring(0, 100) + (content.length > 100 ? '...' : ''),
    date: dateStr,
    participants: 1 // Starts with 1 message (the creator's text)
  };

  // 1. Update List in LS
  let posts = JSON.parse(localStorage.getItem(POSTS_STORAGE_KEY)) || [];
  posts.unshift(newPost);
  localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(posts));

  // 2. Update DB with first message in LS
  let threadsDB = JSON.parse(localStorage.getItem(THREADS_STORAGE_KEY)) || {};
  threadsDB[newId] = [{
    id: Date.now() + 1,
    type: 'sent',
    layout: 'text',
    text: content
  }];
  localStorage.setItem(THREADS_STORAGE_KEY, JSON.stringify(threadsDB));

  // 3. Render
  renderPosts(posts, container);

  // 4. ✅ ADD INSIGNIA LOGIC (Only if not present)
  let currentInsignias = JSON.parse(localStorage.getItem(INSIGNIAS_STORAGE_KEY)) || [];
  const insigniaName = "Forum participant";

  if (!currentInsignias.includes(insigniaName)) {
    currentInsignias.push(insigniaName);
    localStorage.setItem(INSIGNIAS_STORAGE_KEY, JSON.stringify(currentInsignias));
    console.log(`🏅 New Insignia Unlocked: ${insigniaName}`);
    alert(`Congratulations! You've unlocked the "${insigniaName}" insignia!`);
  }
}

// --- HELPER: RENDER ---
function renderPosts(posts, container) {
  container.empty();
  if (!posts || posts.length === 0) {
    container.html('<p style="text-align:center;color:#666;">No hay posts aún.</p>');
    return;
  }

  const html = posts.map(post => `
    <article class="forum-card">
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <div class="meta-info">
        <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
        <span>•</span>
        <span><i class="fa-solid fa-users"></i> ${post.participants} participantes</span>
      </div>
      <button class="btn-read-more" data-id="${post.id}">Leer más</button>
    </article>
  `).join('');

  container.html(html);
}

$('#forum-search').on('input', function () {
  const q = $(this).val().toLowerCase().trim();
  $('.forum-card').each(function () {
    const text = $(this).text().toLowerCase();
    const show = q === '' || text.indexOf(q) !== -1;
    $(this).toggle(show);
  });
});