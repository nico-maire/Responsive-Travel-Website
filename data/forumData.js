// src/data/forum-data.js

export const INITIAL_FORUM_DATA = [
    {
        id: 1,
        title: "¿Cuál es la mejor época para viajar a Japón?",
        excerpt: "Estoy planeando un viaje para el próximo año y estoy indeciso entre la temporada de los cerezos (Sakura) o el otoño para ver el momiji.",
        date: "23 NOV 2025",
        participants: 42,
        messages: [
            { id: 101, type: "sent", layout: "text", text: "Estoy planeando un viaje para el próximo año y estoy indeciso entre la temporada de los cerezos (Sakura) o el otoño para ver el momiji. ¿Alguien ha ido en ambas épocas?" },
            { id: 102, type: "received", avatar: "user", text: "Yo fui en Sakura y es precioso, pero hay muchísima gente. Si te agobian las multitudes, ve en otoño." },
            { id: 103, type: "received", avatar: "user", text: "El Momiji en Kioto es espectacular. Los colores rojos son increíbles.", layout: "text-image" },
            { id: 104, type: "received", avatar: "user", text: "Coincido. Noviembre es la mejor fecha." }
        ]
    },
    {
        id: 2,
        title: "Ruta de 15 días por Italia: Consejos",
        excerpt: "Hola a todos, tengo pensado hacer Roma, Florencia y Venecia, pero me gustaría añadir algún pueblo de la Toscana que no sea muy turístico.",
        date: "22 NOV 2025",
        participants: 25,
        messages: [
            { id: 201, type: "sent", layout: "text", text: "Hola a todos, tengo pensado hacer Roma, Florencia y Venecia. ¿Qué pueblos de la Toscana recomendáis?" },
            { id: 202, type: "received", avatar: "user", text: "San Gimignano es famoso pero vale la pena. Intenta ir a Volterra, es más tranquilo." },
            { id: 203, type: "received", avatar: "user", text: "No te olvides de Siena. Es imprescindible." }
        ]
    },
    {
        id: 3,
        title: "Mochileros en el Sudeste Asiático",
        excerpt: "Busco compañeros de viaje para empezar una ruta por Tailandia, Vietnam y Camboya en enero. Presupuesto ajustado.",
        date: "20 NOV 2025",
        participants: 12,
        messages: [
            { id: 301, type: "sent", layout: "text", text: "Busco compañeros de viaje para ruta por Tailandia, Vietnam y Camboya en enero. ¿Alguien se apunta?" },
            { id: 302, type: "received", avatar: "user", text: "¡Yo estaré en Bangkok el 15 de enero! Podríamos coincidir." },
            { id: 303, type: "received", avatar: "user", text: "Te recomiendo los hostales de la cadena Mad Monkey, son geniales para conocer gente." }
        ]
    },
    {
        id: 4,
        title: "Gemas ocultas en el norte de España",
        excerpt: "Más allá de los Picos de Europa y San Sebastián, ¿qué rincones secretos recomendáis en Asturias o Cantabria?",
        date: "18 NOV 2025",
        participants: 8,
        messages: [
            { id: 401, type: "sent", layout: "text", text: "¿Qué rincones secretos recomendáis en Asturias o Cantabria para amantes de la fotografía?" },
            { id: 402, "type": "received", "avatar": "user", "text": "Tienes que ir a la Playa del Silencio en Asturias. Al atardecer es mágica." },
            { id: 403, type: "received", avatar: "user", layout: "image-only" }
        ]
    },
    {
        id: 5,
        title: "Seguridad viajando sola por Marruecos",
        excerpt: "Es mi primer viaje sola fuera de Europa y Marruecos me llama mucho la atención. ¿Alguna viajera que pueda compartir su experiencia?",
        date: "15 NOV 2025",
        participants: 56,
        messages: [
            { id: 501, type: "sent", layout: "text", text: "Es mi primer viaje sola fuera de Europa. ¿Alguna viajera que pueda compartir su experiencia reciente en Marruecos?" },
            { id: 502, type: "received", avatar: "user", text: "Fui el año pasado sola. Marrakech puede ser intenso, pero la gente es muy hospitalaria." },
            { id: 503, type: "received", avatar: "user", text: "Vístete de forma modesta para evitar miradas incómodas y disfruta, es un país seguro." }
        ]
    },
    {
        id: 6,
        title: "Mejor seguro de viaje para deportes extremos",
        excerpt: "Voy a hacer trekking en Nepal y necesito un seguro que cubra rescate en helicóptero a más de 3000 metros.",
        date: "12 NOV 2025",
        participants: 19,
        messages: [
            { id: 601, type: "sent", layout: "text", text: "Necesito seguro para trekking en Nepal con rescate en helicóptero. ¿IATI o WorldNomads?" },
            { id: 602, type: "received", avatar: "user", text: "IATI Mochilero cubre hasta 5400 metros, yo lo usé en el campo base del Everest." },
            { id: 603, type: "received", avatar: "user", text: "WorldNomads es más caro pero tienen muy buena reputación internacional." }
        ]
    },
    {
        id: 7,
        title: "Roadtrip por Islandia: ¿4x4 necesario?",
        excerpt: "Vamos a hacer la Ring Road en verano. ¿Realmente necesitamos un 4x4 o con un coche normal es suficiente?",
        date: "10 NOV 2025",
        participants: 33,
        messages: [
            { id: 701, type: "sent", layout: "text", text: "Vamos a hacer la Ring Road en verano. ¿Es necesario alquilar un 4x4?" },
            { id: 702, type: "received", avatar: "user", text: "Si solo haces la Ring Road (carretera 1), un coche normal basta." },
            { id: 703, type: "received", avatar: "user", text: "Exacto. Pero si quieres entrar a las tierras altas (carreteras F), el 4x4 es obligatorio por ley." }
        ]
    },
    {
        id: 8,
        title: "Nómadas Digitales en Bali",
        excerpt: "Estoy pensando en mudarme a Canggu un par de meses para trabajar remoto. ¿Cómo está el tema del internet y visados?",
        date: "08 NOV 2025",
        participants: 60,
        messages: [
            { id: 801, type: "sent", layout: "text", text: "¿Cómo está el internet y los visados en Bali actualmente para trabajar remoto?" },
            { id: 802, type: "received", avatar: "user", text: "El internet en los coworkings de Canggu vuela. En las villas depende." },
            { id: 803, type: "received", avatar: "user", text: "El visado B211A es el que usa la mayoría ahora, te da 6 meses." }
        ]
    },
    {
        id: 9,
        title: "Patagonia: ¿Chilena o Argentina?",
        excerpt: "Solo tengo 10 días y no sé si centrarme en Torres del Paine (Chile) o El Chaltén/Perito Moreno (Argentina).",
        date: "05 NOV 2025",
        participants: 28,
        messages: [
            { id: 901, type: "sent", layout: "text", "text": "Solo tengo 10 días. ¿Torres del Paine o El Chaltén?" },
            { id: 902, type: "received", avatar: "user", "text": "Con 10 días yo haría El Calafate y El Chaltén. Es más relajado y barato." },
            { id: 903, type: "received", avatar: "user", "text": "Torres del Paine requiere reservar refugios con meses de antelación. Argentina es más flexible." }
        ]
    },
    {
        id: 10,
        title: "Nueva York con presupuesto bajo",
        excerpt: "¿Es posible sobrevivir en NY con 50$ al día (sin contar alojamiento)? Busco sitios baratos para comer.",
        date: "01 NOV 2025",
        participants: 95,
        messages: [
            { id: 1001, type: "sent", layout: "text", "text": "¿Es posible comer en NY con 50$ al día? Busco recomendaciones baratas." },
            { id: 1002, type: "received", avatar: "user", "text": "Sí! Pizza de 1$ (ahora son 1.50$), Halal Guys y bagels." },
            { id: 1003, type: "received", avatar: "user", "text": "En Chinatown puedes comer dumplings por muy poco dinero. Evita los restaurantes de Times Square." }
        ]
    }
];