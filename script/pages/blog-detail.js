import { BLOG_POSTS } from '../../data/blogData.js';


export const initBlogDetailPage = () => {
  console.log("📖 Initializing Blog Detail Page...");

  // 1. Obtener ID de la URL (ej: blog-detail.html?id=1)
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('id');

  // 2. Validar que el ID existe
  if (!blogId) {
    showErrorPage('No se especificó un artículo para mostrar.');
    return;
  }

  // 3. Buscar el post correspondiente en BLOG_POSTS
  const post = BLOG_POSTS.find(blog => blog.id === blogId);

  if (post) {
    // 4. Inyectar contenido con jQuery
    $('#blog-title').text(post.title);
    $('#blog-author').text(post.author);
    $('#blog-date').text(post.date);
    $('#blog-category').text(post.category);
    $('#blog-excerpt').text(post.excerpt);
    $('#blog-content').html(post.content);

    // 5. Imagen con fade in
    $('#blog-hero-image')
      .attr('src', post.image)
      .attr('alt', post.title)
      .removeClass('hidden')
      .hide()
      .fadeIn(500);

    // 6. Actualizar título de la pestaña del navegador
    document.title = `${post.title} - Wanderlust Blog`;

    // 7. Opcional: Configurar botón de volver
    $('#back-to-blog-btn').on('click', () => {
      window.location.href = 'blog.html';
    });

    // 8. Opcional: Configurar botones de navegación (anterior/siguiente)
    setupNavigationButtons(blogId);

    // 9. Opcional: Configurar compartir en redes sociales
    setupSocialSharing(post);

    // 10. Opcional: Actualizar URL en el navegador sin recargar
    history.replaceState({}, '', `blog-detail.html?id=${blogId}`);

  } else {
    // Caso de error: Artículo no encontrado
    showErrorPage(`El artículo con ID "${blogId}" no fue encontrado.`);
  }
};

// Función para configurar botones de navegación (anterior/siguiente)
function setupNavigationButtons(currentId) {
  const currentIndex = BLOG_POSTS.findIndex(blog => blog.id === currentId);

  // Botón anterior
  if (currentIndex > 0) {
    const prevPost = BLOG_POSTS[currentIndex - 1];
    $('#prev-blog-btn')
      .removeClass('disabled')
      .off('click')
      .on('click', () => {
        window.location.href = `blog-detail.html?id=${prevPost.id}`;
      })
      .find('.post-title')
      .text(prevPost.title)
      .end()
      .find('.post-excerpt')
      .text(prevPost.excerpt);
  } else {
    $('#prev-blog-btn').addClass('disabled');
  }

  // Botón siguiente
  if (currentIndex < BLOG_POSTS.length - 1) {
    const nextPost = BLOG_POSTS[currentIndex + 1];
    $('#next-blog-btn')
      .removeClass('disabled')
      .off('click')
      .on('click', () => {
        window.location.href = `blog-detail.html?id=${nextPost.id}`;
      })
      .find('.post-title')
      .text(nextPost.title)
      .end()
      .find('.post-excerpt')
      .text(nextPost.excerpt);
  } else {
    $('#next-blog-btn').addClass('disabled');
  }
}

// Función para configurar compartir en redes sociales
function setupSocialSharing(post) {
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(`Lee "${post.title}" en Wanderlust Blog: ${post.excerpt}`);

  // Botón de Facebook
  $('#share-facebook').on('click', () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
  });

  // Botón de Twitter
  $('#share-twitter').on('click', () => {
    window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, '_blank');
  });

  // Botón de LinkedIn
  $('#share-linkedin').on('click', () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank');
  });

  // Botón de copiar enlace
  $('#share-copy').on('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      // Mostrar notificación de copiado
      $('#copy-notification').fadeIn().delay(2000).fadeOut();
    });
  });
}

// Función para mostrar página de error
function showErrorPage(message) {
  $('.blog-content-container').html(`
        <div class="error-container" style="text-align:center; padding: 4rem 0;">
            <i class="fas fa-exclamation-circle" style="font-size: 4rem; color: #ff6b6b; margin-bottom: 1rem;"></i>
            <h2 style="color: #333; margin-bottom: 1rem;">Artículo no encontrado</h2>
            <p style="color: #666; margin-bottom: 2rem; max-width: 500px; margin-left: auto; margin-right: auto;">
                ${message}
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <a href="blog.html" class="btn-primary">Volver al Blog</a>
                <a href="index.html" class="btn-secondary">Ir al Inicio</a>
            </div>
        </div>
    `);

  document.title = 'Artículo no encontrado - Wanderlust Blog';
}