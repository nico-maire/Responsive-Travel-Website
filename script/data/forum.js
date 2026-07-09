export const FORUM_THREADS = [
  { id: 1, title: '¿Mejor época para visitar Japón?', category: 'help', author: 'Carlos88', replies: 12, date: 'Hace 2 horas' },
  { id: 2, title: 'Busco compañeros para la Patagonia', category: 'general', author: 'AnaTravels', replies: 5, date: 'Hace 5 horas' },
  { id: 3, title: 'Truco para vuelos baratos', category: 'tips', author: 'FlyMaster', replies: 34, date: 'Ayer' },
  { id: 4, title: 'Mi experiencia en Marruecos', category: 'general', author: 'Sofia_M', replies: 8, date: 'Ayer' },
  { id: 5, title: 'Ayuda con visado para China', category: 'help', author: 'Pedro_P', replies: 2, date: 'Hace 2 días' }
];

export const FORUM_MESSAGES = {
  1: [ // Thread ID 1 (Japón)
    { id: 101, author: 'Carlos88', avatar: 'C', text: 'Hola a todos, estoy planeando ir a Japón en 2026. ¿Cuál es la mejor época para ver los cerezos pero sin tanta gente?', date: 'Ayer, 10:00', isMe: false },
    { id: 102, author: 'Takeshi K.', avatar: 'img', image: 'https://placehold.co/100', text: 'Hola Carlos. La temporada de Sakura suele ser a finales de marzo. Si quieres evitar multitudes, te recomiendo ir al norte (Tohoku) a mediados de abril.', date: 'Ayer, 10:30', isMe: false },
    { id: 103, author: 'Carlos88', avatar: 'C', text: '¡Muchas gracias Takeshi! ¿Y qué tal el clima en octubre?', date: 'Ayer, 11:15', isMe: false }
  ],
  2: [ // Thread ID 2 (Patagonia)
    { id: 201, author: 'AnaTravels', avatar: 'A', text: 'Busco gente para hacer el trekking W en Torres del Paine en Enero.', date: 'Hace 5 horas', isMe: false }
  ]
};