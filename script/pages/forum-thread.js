// src/script/forum-thread.js

import { INITIAL_FORUM_DATA } from '../../data/forumData.js';

// --- CONSTANTS ---
const THREADS_DB_KEY = 'wanderlust_forum_threads_db';
const POSTS_LIST_KEY = 'wanderlust_forum_posts_list';
const CURRENT_USER_KEY = 'currentUser'; // Key for the user data
const BADGE_NAME = 'Mensajero del Foro'; // The specific badge name

// --- INITIALIZATION ---
export function initForumThreadPage() {
  console.log("💬 Initializing Thread View...");

  const urlParams = new URLSearchParams(window.location.search);
  const threadId = urlParams.get('id');

  // Redirect if no ID
  if (!threadId) {
    window.location.href = 'forum.html';
    return;
  }

  const container = $('#thread-messages');
  const titleHeader = $('#thread-main-title');

  // 1. ENSURE DATA EXISTS (Load from file if missing in LocalStorage)
  ensureDataExists(threadId);

  // 2. GET TITLE (Read from updated LS)
  const postsList = JSON.parse(localStorage.getItem(POSTS_LIST_KEY)) || [];
  // Use '==' because ID in URL is string, but ID in data might be number
  const currentPost = postsList.find(p => p.id == threadId);

  if (currentPost) {
    titleHeader.text(currentPost.title);
    document.title = `${currentPost.title} - Foro`;
  } else {
    titleHeader.text("Conversación");
  }

  // 3. GET MESSAGES
  const threadsDB = JSON.parse(localStorage.getItem(THREADS_DB_KEY)) || {};
  const currentMessages = threadsDB[threadId] || [];

  // 4. RENDER
  renderMessages(currentMessages, container);
  scrollToBottom();

  // --- EVENTS ---

  // Close Button
  $('#btn-close-thread').on('click', () => window.location.href = 'forum.html');

  // Send Message Logic
  $('#msg-input').off('keypress').on('keypress', function (e) {
    if (e.which === 13 && $(this).val().trim() !== "") {

      const newMsg = {
        id: Date.now(),
        type: 'sent', // User replies are always 'sent' (Right side)
        layout: 'text',
        text: $(this).val()
      };

      // A. Save Message to Thread DB
      let db = JSON.parse(localStorage.getItem(THREADS_DB_KEY)) || {};
      if (!db[threadId]) db[threadId] = [];
      db[threadId].push(newMsg);
      localStorage.setItem(THREADS_DB_KEY, JSON.stringify(db));

      // B. ✅ Update Participant Count in Main List
      let list = JSON.parse(localStorage.getItem(POSTS_LIST_KEY)) || [];
      const postIndex = list.findIndex(p => p.id == threadId);
      if (postIndex !== -1) {
        list[postIndex].participants = (list[postIndex].participants || 0) + 1;
        localStorage.setItem(POSTS_LIST_KEY, JSON.stringify(list));
      }

      // ==========================================
      // C. 🏆 BADGE LOGIC: Award "Mensajero del Foro"
      // ==========================================
      let currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));

      // Check if user is logged in
      if (currentUser) {
        // Ensure badges array exists
        if (!currentUser.badges) {
          currentUser.badges = [];
        }

        // Check if they already have the badge. If not, add it.
        if (!currentUser.badges.includes(BADGE_NAME)) {
          currentUser.badges.push(BADGE_NAME);

          // Save updated user back to localStorage
          localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));

          console.log(`Badge Awarded: ${BADGE_NAME}`);
          alert(`¡Felicidades! Has ganado la insignia: ${BADGE_NAME}`);
        }
      }
      // ==========================================


      // D. Update UI
      // Pass 'false' because a new reply is never the Topic Starter
      container.append(createMessageHTML(newMsg, false));
      $(this).val('');
      scrollToBottom();
    }
  });
}

// --- DATA HELPER ---
function ensureDataExists(threadId) {
  let threadsDB = JSON.parse(localStorage.getItem(THREADS_DB_KEY)) || {};
  let postsList = JSON.parse(localStorage.getItem(POSTS_LIST_KEY)) || [];

  const threadExists = threadsDB[threadId];
  const titleExists = postsList.find(p => p.id == threadId);

  // If missing in LS, grab from imported file
  if (!threadExists || !titleExists) {
    const foundData = INITIAL_FORUM_DATA.find(item => item.id == threadId);
    if (foundData) {
      // Restore Title Info
      if (!titleExists) {
        const realCount = foundData.messages ? foundData.messages.length : 0;
        postsList.push({
          id: foundData.id,
          title: foundData.title,
          excerpt: foundData.excerpt,
          date: foundData.date,
          participants: realCount
        });
        localStorage.setItem(POSTS_LIST_KEY, JSON.stringify(postsList));
      }
      // Restore Messages
      if (!threadExists) {
        threadsDB[threadId] = foundData.messages;
        localStorage.setItem(THREADS_DB_KEY, JSON.stringify(threadsDB));
      }
    }
  }
}

// --- RENDER HELPERS ---
function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function renderMessages(data, container) {
  container.empty();
  if (data.length === 0) {
    container.html('<p style="text-align:center;color:#999;margin-top:50px;">Sé el primero en responder.</p>');
    return;
  }

  // Map messages to HTML
  const html = data.map((msg, index) => {
    // The very first message (index 0) is the "Topic Starter"
    const isTopicStarter = (index === 0);
    return createMessageHTML(msg, isTopicStarter);
  }).join('');

  container.html(html);
}

function createMessageHTML(msg, isTopicStarter) {
  const svgIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;
  const avatarHTML = `<div class="avatar"><i class="fa-solid fa-user"></i></div>`;

  let contentHTML = '';

  // 1. Content Layout
  if (msg.layout === 'text-image') {
    contentHTML = `<div class="bubble has-image-layout"> <div class="text-content">${msg.text}</div> <div class="image-content"><div class="image-placeholder-icon">${svgIcon}</div></div> </div>`;
  } else if (msg.layout === 'image-only') {
    contentHTML = `<div class="bubble image-only"> <div class="big-image-placeholder">${svgIcon}</div> </div>`;
  } else {
    contentHTML = `<div class="bubble">${msg.text}</div>`;
  }

  // 2. Row Class Logic

  // A. Topic Starter (First message, Left, Blue)
  if (isTopicStarter) {
    return `<div class="message-row topic-starter">${avatarHTML}${contentHTML}</div>`;
  }

  // B. My Reply (Sent, Right, Dark)
  if (msg.type === 'sent') {
    return `<div class="message-row sent">${contentHTML}</div>`;
  }

  // C. Others Reply (Received, Left, Grey)
  else {
    return `<div class="message-row received">${avatarHTML}${contentHTML}</div>`;
  }
}