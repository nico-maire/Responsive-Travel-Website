// src/data/tripsData.js

export const TRIPS = [
    // --- ASIA ---
    {
        id: '1',
        title: 'Aventura en Bali',
        continent: 'Asia',
        price: 1200,
        days: 10,
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        description: 'Explora templos antiguos, selvas exuberantes y playas paradisíacas en la isla de los dioses.',
        reviews: [
            { user: "Laura G.", date: "12 AGO 2025", rating: 5, comment: "¡Increíble! Los templos de Ubud son mágicos. El guía fue excelente y nos explicó toda la historia." },
            { user: "Marc P.", date: "05 SEP 2025", rating: 4, comment: "Muy bien organizado. Los hoteles eran de lujo, aunque el tráfico en la isla es un poco caótico." },
            { user: "Sofia R.", date: "20 SEP 2025", rating: 5, comment: "La mejor experiencia de mi vida. Las playas de Nusa Penida son de otro mundo." },
            { user: "Javier T.", date: "01 OCT 2025", rating: 5, comment: "La comida balinesa es exquisita. Recomiendo este tour al 100%." }
        ]
    },
    {
        id: '2',
        title: 'Kyoto Místico',
        continent: 'Asia',
        price: 2100,
        days: 9,
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        description: 'Sumérgete en la tradición japonesa visitando santuarios sintoístas y bosques de bambú.',
        reviews: [
            { user: "Carlos M.", date: "10 OCT 2025", rating: 5, comment: "Japón es fascinante. El itinerario en Kyoto fue perfecto para ver lo tradicional sin prisas." },
            { user: "Ana B.", date: "15 OCT 2025", rating: 5, comment: "El bosque de bambú al amanecer no tiene precio. Una paz increíble." },
            { user: "Roberto S.", date: "22 OCT 2025", rating: 4, comment: "Todo genial, aunque me hubiera gustado tener más tiempo libre en Gion." }
        ]
    },
    {
        id: '3',
        title: 'Playas de Phuket',
        continent: 'Asia',
        price: 950,
        days: 7,
        image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        description: 'Relájate en las aguas cristalinas de Tailandia y disfruta de la mejor gastronomía local.',
        reviews: [] // <--- THIS IS THE TRIP WITH NO REVIEWS
    },

    // --- EUROPA ---
    {
        id: '4',
        title: 'París Romántico',
        continent: 'Europa',
        price: 1400,
        days: 5,
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        description: 'Pasea por el Sena, visita el Louvre y disfruta de una cena inolvidable frente a la Torre Eiffel.',
        reviews: [
            { user: "Pierre L.", date: "01 NOV 2025", rating: 5, comment: "La cena en la Torre Eiffel fue inolvidable. Muy romántico." },
            { user: "Marta D.", date: "12 NOV 2025", rating: 4, comment: "París es precioso, pero había demasiada gente en el Louvre." },
            { user: "Elena F.", date: "20 NOV 2025", rating: 5, comment: "El hotel estaba súper céntrico, pudimos ir andando a todos lados." }
        ]
    },
    {
        id: '5',
        title: 'Roma Histórica',
        continent: 'Europa',
        price: 1100,
        days: 6,
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        description: 'Camina por las huellas de los gladiadores en el Coliseo y descubre los secretos del Vaticano.',
        reviews: [
            { user: "Luigi R.", date: "05 SEP 2025", rating: 5, comment: "El guía del Vaticano sabía muchísimo. Aprendimos un montón." },
            { user: "Carmen S.", date: "10 SEP 2025", rating: 4, comment: "Mucha caminata, llevad calzado cómodo. El Coliseo impresiona." },
            { user: "David V.", date: "15 SEP 2025", rating: 5, comment: "La pasta y la pizza... ¡madre mía! Volvería solo por la comida." }
        ]
    },
    {
        id: '6',
        title: 'Auroras en Islandia',
        continent: 'Europa',
        price: 2800,
        days: 8,
        image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        description: 'Una experiencia única cazando auroras boreales y bañándote en aguas termales naturales.',
        reviews: [
            { user: "Olaf J.", date: "10 ENE 2025", rating: 5, comment: "Vimos las auroras dos noches seguidas. Lloré de la emoción." },
            { user: "Sarah K.", date: "15 ENE 2025", rating: 5, comment: "Hace frío, pero los trajes térmicos que te dan funcionan de maravilla." },
            { user: "Mike T.", date: "20 ENE 2025", rating: 5, comment: "Los paisajes parecen de otro planeta. Las cascadas congeladas son brutales." },
            { user: "Nuria P.", date: "25 ENE 2025", rating: 4, comment: "Es caro, pero vale cada céntimo. Experiencia única." }
        ]
    },
    {
        id: '7',
        title: 'Santorini de Lujo',
        continent: 'Europa',
        price: 2300,
        days: 6,
        image: 'https://images.unsplash.com/photo-1613395877344-13d4c2ce5d47?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        description: 'Disfruta de los atardeceres más famosos del mundo desde tu villa blanca frente al mar Egeo.',
        reviews: [
            { user: "Helen W.", date: "05 JUL 2025", rating: 5, comment: "El atardecer en Oia es tal cual sale en las fotos. Precioso." },
            { user: "James B.", date: "12 JUL 2025", rating: 5, comment: "Nuestro hotel tenía piscina privada. Relax total." }
        ]
    },

    // --- ÁFRICA ---
    {
        id: '8',
        title: 'Safari en Kenia',
        continent: 'África',
        price: 3500,
        days: 12,
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        description: 'Avista a los "Cinco Grandes" en su hábitat natural durante un safari inolvidable por la sabana.',
        reviews: [
            { user: "Simba fan", date: "12 AGO 2025", rating: 5, comment: "Vimos leones cazando. Fue intenso y emocionante." },
            { user: "Elena R.", date: "18 AGO 2025", rating: 5, comment: "Dormir en las tiendas de campaña de lujo escuchando a los animales es increíble." },
            { user: "Tom H.", date: "25 AGO 2025", rating: 4, comment: "El viaje en jeep cansa un poco, pero merece la pena." }
        ]
    },
    {
        id: '9',
        title: 'Pirámides de Egipto',
        continent: 'África',
        price: 1600,
        days: 8,
        image: 'https://images.unsplash.com/photo-1539650116455-251d93d5ce0d?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        description: 'Descubre los misterios de los faraones en Giza y navega por el legendario río Nilo.',
        reviews: [
            { user: "Cleo P.", date: "02 NOV 2025", rating: 5, comment: "Entrar en la gran pirámide agobia un poco, pero es historia pura." },
            { user: "Mark A.", date: "08 NOV 2025", rating: 4, comment: "Los vendedores son muy insistentes, pero el crucero por el Nilo es relajante." }
        ]
    },
    {
        id: '10',
        title: 'Ciudad del Cabo',
        continent: 'África',
        price: 1900,
        days: 10,
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        description: 'Naturaleza impresionante, pingüinos en la playa y la majestuosa Montaña de la Mesa.',
        reviews: [
            { user: "Jenny L.", date: "10 DIC 2025", rating: 5, comment: "¡Los pingüinos en la playa son adorables! Y la comida es excelente." },
            { user: "Rick G.", date: "15 DIC 2025", rating: 4, comment: "Subir a la Table Mountain en teleférico tiene unas vistas espectaculares." }
        ]
    },

    // --- NORTEAMÉRICA ---
    {
        id: '11',
        title: 'Nueva York Urbano',
        continent: 'Norteamérica',
        price: 2000,
        days: 7,
        image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TnVldmElMjBZb3JrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.5,
        description: 'La ciudad que nunca duerme te espera con Broadway, Times Square y Central Park.',
        reviews: [
            { user: "Alicia K.", date: "20 DIC 2025", rating: 5, comment: "Ver Nueva York en Navidad es un sueño hecho realidad." },
            { user: "Ben S.", date: "26 DIC 2025", rating: 4, comment: "Hacía muchísimo frío, pero Central Park nevado es precioso." },
            { user: "Carla T.", date: "02 ENE 2026", rating: 5, comment: "Fuimos a ver el Rey León a Broadway. ¡Impresionante!" }
        ]
    },
    {
        id: '12',
        title: 'Montañas de Banff',
        continent: 'Norteamérica',
        price: 1800,
        days: 9,
        image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        description: 'Lagos color turquesa y picos nevados en el corazón de las Montañas Rocosas canadienses.',
        reviews: [
            { user: "CanadianFan", date: "10 JUL 2025", rating: 5, comment: "El lago Louise es tal cual sale en Instagram. El agua es turquesa de verdad." },
            { user: "Paul W.", date: "15 JUL 2025", rating: 5, comment: "Vimos osos negros desde el autobús. Naturaleza en estado puro." }
        ]
    },
    {
        id: '13',
        title: 'Caribe Mexicano',
        continent: 'Norteamérica',
        price: 1300,
        days: 8,
        image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        description: 'Ruinas mayas, cenotes sagrados y playas de arena blanca en la Riviera Maya.',
        reviews: [
            { user: "Maria J.", date: "05 MAY 2025", rating: 5, comment: "Tulum es precioso. Bañarse en los cenotes es muy refrescante." },
            { user: "Jose L.", date: "12 MAY 2025", rating: 4, comment: "El hotel todo incluido estaba genial, comida y bebida sin fin." }
        ]
    },

    // --- SUDAMÉRICA ---
    {
        id: '14',
        title: 'Trekking Patagonia',
        continent: 'Sudamérica',
        price: 2200,
        days: 14,
        image: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        description: 'La aventura definitiva para los amantes del senderismo entre glaciares y montañas épicas.',
        reviews: [
            { user: "Hiker Joe", date: "15 ENE 2025", rating: 5, comment: "El Fitz Roy te deja sin aliento (literal y figuradamente por la subida)." },
            { user: "Clara M.", date: "20 ENE 2025", rating: 5, comment: "El glaciar Perito Moreno ruge cuando se rompe el hielo. Impresionante." }
        ]
    },
    {
        id: '15',
        title: 'Machu Picchu',
        continent: 'Sudamérica',
        price: 1750,
        days: 10,
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        description: 'Sigue el Camino Inca hasta la ciudad perdida en las nubes de los Andes peruanos.',
        reviews: [
            { user: "Lara C.", date: "01 AGO 2025", rating: 5, comment: "Llegar a la puerta del sol y ver la ciudad abajo es mágico." },
            { user: "Diego F.", date: "05 AGO 2025", rating: 4, comment: "La altura pega fuerte en Cusco, tomad mate de coca." },
            { user: "Sam P.", date: "10 AGO 2025", rating: 5, comment: "Las llamas están por todas partes y son súper fotogénicas." }
        ]
    },
    {
        id: '16',
        title: 'Rio de Janeiro',
        continent: 'Sudamérica',
        price: 1500,
        days: 7,
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        description: 'Samba, fútbol y vistas increíbles desde el Cristo Redentor y el Pan de Azúcar.',
        reviews: [
            { user: "Ronaldinho fan", date: "12 FEB 2025", rating: 5, comment: "El carnaval es la mejor fiesta del mundo. ¡Qué energía!" },
            { user: "Lucia G.", date: "18 FEB 2025", rating: 4, comment: "Las vistas desde el Cristo son las mejores de la ciudad." }
        ]
    },

    // --- OCEANÍA ---
    {
        id: '17',
        title: 'Sídney y Arrecife',
        continent: 'Oceanía',
        price: 3200,
        days: 15,
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        description: 'Desde la Ópera de Sídney hasta bucear en la Gran Barrera de Coral.',
        reviews: [
            { user: "Nemo", date: "01 MAR 2025", rating: 5, comment: "Bucear en la barrera de coral es como estar dentro de una pecera gigante." },
            { user: "Steve I.", date: "10 MAR 2025", rating: 4, comment: "Sídney es muy cosmopolita, me encantó el ambiente del puerto." }
        ]
    },
    {
        id: '18',
        title: 'Nueva Zelanda',
        continent: 'Oceanía',
        price: 2900,
        days: 14,
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        description: 'El destino definitivo para los amantes de la adrenalina y los paisajes de fantasía.',
        reviews: [
            { user: "Frodo B.", date: "15 ABR 2025", rating: 5, comment: "Visitamos Hobbiton y fue mágico. Los paisajes son realmente de la Tierra Media." },
            { user: "Adrenaline Junkie", date: "20 ABR 2025", rating: 5, comment: "Hice puenting en Queenstown. ¡Brutal!" },
            { user: "Mila K.", date: "25 ABR 2025", rating: 5, comment: "Los fiordos de Milford Sound bajo la lluvia son místicos. Precioso país." }
        ]
    },
    // --- EUROPE ---

    // Vienna, Austria
    {
        id: '19',
        title: 'Viena Imperial',
        continent: 'Europa',
        price: 1700,
        days: 6,
        image: 'https://images.unsplash.com/photo-1731223832507-ebe5373129e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmllbmElMkMlMjBhdXRyaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Descubre la ciudad imperial con museos, música clásica y palacios barrocos como Schönbrunn.',
        reviews: []
    },

    // Bruges, Belgium
    {
        id: '20',
        title: 'Brujas Medieval',
        continent: 'Europa',
        price: 1250,
        days: 5,
        image: 'https://plus.unsplash.com/premium_photo-1661963659103-9602b3811297?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        rating: 4.8,
        description: 'Pasea por canales bordeados de árboles y plazas adoquinadas en este centro medieval perfectamente conservado.',
        reviews: []
    },

    // Copenhagen, Denmark
    {
        id: '21',
        title: 'Copenhague Nórdica',
        continent: 'Europa',
        price: 1900,
        days: 7,
        image: 'https://plus.unsplash.com/premium_photo-1691414363231-836e2e1bf0ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29wZW5oYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.6,
        description: 'Equilibrio entre diseño contemporáneo y tradición nórdica en Nyhavn, Tívoli y barrios ciclistas.',
        reviews: []
    },

    // Ljubljana, Slovenia
    {
        id: '22',
        title: 'Liubliana Escénica',
        continent: 'Europa',
        price: 1100,
        days: 4,
        image: 'https://images.unsplash.com/photo-1611576191056-3e6696029388?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGl1YmxpYW5hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.5,
        description: 'Capital pequeña con casco peatonal, cafés junto al río y castillo en lo alto, base para explorar los Alpes Julianos.',
        reviews: []
    },

    // Barcelona, Spain
    {
        id: '23',
        title: 'Barcelona Modernista',
        continent: 'Europa',
        price: 1600,
        days: 6,
        image: 'https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyY2Vsb25hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.8,
        description: 'Modernismo de Gaudí, mar y montaña conviven en La Sagrada Familia, Park Güell y barrios llenos de vida.',
        reviews: []
    },

    // Seville, Spain
    {
        id: '24',
        title: 'Sevilla Monumental',
        continent: 'Europa',
        price: 1300,
        days: 5,
        image: 'https://images.unsplash.com/photo-1559564477-6e8582270002?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2V2aWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Casco histórico con Alcázar, Catedral y barrio de Santa Cruz, sumado a la cultura de tapas y flamenco.',
        reviews: []
    },

    // Tallinn, Estonia
    {
        id: '25',
        title: 'Tallin Medieval',
        continent: 'Europa',
        price: 1150,
        days: 5,
        image: 'https://images.unsplash.com/photo-1709862366377-54b16f3e51f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFsbGlufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.4,
        description: 'Ciudad vieja medieval amurallada con torres y tejados de colores, vistas al Báltico desde Toompea.',
        reviews: []
    },

    // Paris, France
    {
        id: '26',
        title: 'París Romántico',
        continent: 'Europa',
        price: 1800,
        days: 7,
        image: 'https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.9,
        description: 'Romance urbano en el Sena, bulevares y museos icónicos. Barrios con identidad y cafés a pie de calle.',
        reviews: []
    },

    // Budapest, Hungary
    {
        id: '27',
        title: 'Budapest Termal',
        continent: 'Europa',
        price: 1400,
        days: 6,
        image: 'https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QnVkYXBlc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Arquitectura Art Nouveau, baños termales y paseos nocturnos sobre el Danubio. Parlamento iluminado.',
        reviews: []
    },

    // Florence, Italy
    {
        id: '28',
        title: 'Florencia Renacentista',
        continent: 'Europa',
        price: 1750,
        days: 6,
        image: 'https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmVuY2lhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.8,
        description: 'Cuna del Renacimiento: Duomo, Uffizi y artesanías en el Oltrarno. Ciudad-museo viva con esculturas y palacios.',
        reviews: []
    },

    // Rome, Italy
    {
        id: '29',
        title: 'Roma Eterna',
        continent: 'Europa',
        price: 1650,
        days: 7,
        image: 'https://images.unsplash.com/photo-1529154036614-a60975f5c760?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.9,
        description: 'Ruinas clásicas, plazas barrocas y vida de barrio. Del Panteón a la Fontana di Trevi, historia viva.',
        reviews: []
    },

    // Venice, Italy
    {
        id: '30',
        title: 'Venecia Acuática',
        continent: 'Europa',
        price: 1950,
        days: 5,
        image: 'https://plus.unsplash.com/premium_photo-1661963047742-dabc5a735357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVuZWNpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Trazado acuático único sin coches. Canales, palacios y puentes conectan islas desde San Marcos a barrios tranquilos.',
        reviews: []
    },

    // Valletta, Malta
    {
        id: '31',
        title: 'La Valeta Fortificada',
        continent: 'Europa',
        price: 1200,
        days: 5,
        image: 'https://images.unsplash.com/photo-1560365337-6f42f70dd874?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGElMjB2YWxldGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.5,
        description: 'Fortificada y barroca con miradores al Gran Puerto. Palacios, iglesias y museos en casco compacto caminable.',
        reviews: []
    },

    // Bergen, Norway
    {
        id: '32',
        title: 'Bergen y Fiordos',
        continent: 'Europa',
        price: 2200,
        days: 8,
        image: 'https://images.unsplash.com/photo-1643193388440-50fae300e1da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVyZ2VuJTIwbm9ydWVnYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.6,
        description: 'Casas de madera en Bryggen, puerto vivo y montañas que caen a fiordos. Punto de partida para rutas escénicas.',
        reviews: []
    },

    // Amsterdam, Netherlands
    {
        id: '33',
        title: 'Ámsterdam de Canales',
        continent: 'Europa',
        price: 1700,
        days: 6,
        image: 'https://plus.unsplash.com/premium_photo-1661878122586-2d75a86f3400?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUMzJTgxbXN0ZXJkYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.8,
        description: 'Canales Patrimonio UNESCO, gables estrechos y cultura ciclista. Museos de primer nivel y barrios verdes.',
        reviews: []
    },

    // Porto, Portugal
    {
        id: '34',
        title: 'Oporto y Vino',
        continent: 'Europa',
        price: 1350,
        days: 5,
        image: 'https://plus.unsplash.com/premium_photo-1677344087971-91eee10dfeb1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3BvcnRvJTIwcG9ydHVnYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Azulejos, puentes sobre el Duero y bodegas de vino de Oporto. Librería Lello y arquitectura contemporánea.',
        reviews: []
    },

    // London, UK
    {
        id: '35',
        title: 'Londres Cosmopolita',
        continent: 'Europa',
        price: 2100,
        days: 7,
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZHJlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.8,
        description: 'Historia y vanguardia a orillas del Támesis. Museos gratuitos, parques inmensos y escena cultural inagotable.',
        reviews: []
    },

    // Edinburgh, UK
    {
        id: '36',
        title: 'Edimburgo Histórico',
        continent: 'Europa',
        price: 1550,
        days: 5,
        image: 'https://images.unsplash.com/photo-1569668444050-b7bc2bfec0c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWRpbmJ1cmdvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Royal Mile, castillo y colinas verdes. Arthur\'s Seat regala panorámica excepcional sobre la ciudad de piedra.',
        reviews: []
    },

    // Prague, Czech Republic
    {
        id: '37',
        title: 'Praga Gótica',
        continent: 'Europa',
        price: 1450,
        days: 6,
        image: 'https://plus.unsplash.com/premium_photo-1661963067279-2f7bf970c49c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJhZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.8,
        description: 'Cúpulas y torres góticas sobre casco antiguo fotogénico. Puente de Carlos al amanecer y cafés históricos.',
        reviews: []
    },

    // Lucerne, Switzerland
    {
        id: '38',
        title: 'Lucerna Alpina',
        continent: 'Europa',
        price: 1950,
        days: 6,
        image: 'https://images.unsplash.com/photo-1635855296516-837d8b00cae7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THVjZXJuYSUyMHN1aXphfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Lago, montes cercanos y Kapellbrücke como postal. Tejados medievales y aire alpino a minutos de rutas.',
        reviews: []
    },

    // Zurich, Switzerland
    {
        id: '39',
        title: 'Zúrich Moderna',
        continent: 'Europa',
        price: 2050,
        days: 5,
        image: 'https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
        rating: 4.6,
        description: 'Casco antiguo elegante junto al lago, museos, galerías y vida junto al agua. Eficiencia suiza en cada detalle.',
        reviews: []
    },

    // Reykjavik, Iceland
    {
        id: '40',
        title: 'Reikiavik y Auroras',
        continent: 'Europa',
        price: 2450,
        days: 7,
        image: 'https://plus.unsplash.com/premium_photo-1661962984700-16b03ecda58a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVpa2lhdmlrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.8,
        description: 'Arquitectura moderna entre paisajes volcánicos. Base para auroras boreales y baños termales cercanos.',
        reviews: []
    },

    // --- ASIA ---

    // Beijing, China
    {
        id: '41',
        title: 'Beijing Imperial',
        continent: 'Asia',
        price: 1850,
        days: 8,
        image: 'https://plus.unsplash.com/premium_photo-1723433351351-0f6cd5d21537?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVpamluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Capital imperial con Ciudad Prohibida, hutongs y Gran Muralla cercana. Cocina regional riquísima.',
        reviews: []
    },

    // Hong Kong, China
    {
        id: '42',
        title: 'Hong Kong Vibrante',
        continent: 'Asia',
        price: 1950,
        days: 7,
        image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZyUyMGtvbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.8,
        description: 'Horizonte denso en puerto lleno de ferris. Montañas, islas y reservas naturales a minutos del centro financiero.',
        reviews: []
    },

    // Seoul, South Korea
    {
        id: '43',
        title: 'Seúl Contrastes',
        continent: 'Asia',
        price: 1750,
        days: 7,
        image: 'https://plus.unsplash.com/premium_photo-1661936414165-3039a8d906f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2V1bHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Rascacielos y palacios, mercados nocturnos y metro impecable. Bukchon y Myeongdong muestran tradición y moda.',
        reviews: []
    },

    // Jaipur, India
    {
        id: '44',
        title: 'Jaipur Rosa',
        continent: 'Asia',
        price: 1250,
        days: 6,
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SmFpcHVyJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.6,
        description: 'La "Ciudad Rosa" con Hawa Mahal, fuertes y bazares color salmón. Artesanías y gastronomía del Rajastán.',
        reviews: []
    },

    // Kyoto, Japan
    {
        id: '45',
        title: 'Kioto Tradicional',
        continent: 'Asia',
        price: 2100,
        days: 8,
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2lvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.9,
        description: 'Templos, santuarios y jardines clásicos. Hanami en primavera y posibilidad de ver geishas en Gion.',
        reviews: []
    },

    // Luang Prabang, Laos
    {
        id: '46',
        title: 'Luang Prabang Espiritual',
        continent: 'Asia',
        price: 1150,
        days: 7,
        image: 'https://plus.unsplash.com/premium_photo-1661882477461-20d16af70819?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8THVhbmclMjBQcmFiYW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.5,
        description: 'Patrimonio UNESCO junto a ríos. Procesiones de monjes al amanecer, cascadas y arquitectura colonial-budista.',
        reviews: []
    },

    // Beirut, Lebanon
    {
        id: '47',
        title: 'Beirut Mediterráneo',
        continent: 'Asia',
        price: 1450,
        days: 6,
        image: 'https://plus.unsplash.com/premium_photo-1661963342411-11bc8489a1fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVpcnV0JTIwbGliYW5vfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.4,
        description: 'Playas, clubes y azoteas frente a mezquitas y zocos históricos. Gastronomía y vida nocturna levantina.',
        reviews: []
    },

    // Muscat, Oman
    {
        id: '48',
        title: 'Mascate Árabe',
        continent: 'Asia',
        price: 1650,
        days: 7,
        image: 'https://images.unsplash.com/photo-1725600462847-0317804cc466?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWFzY2F0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.6,
        description: 'Bahías y montañas enmarcando mezquitas, zocos y fuertes portugueses. Paseos costeros junto al Golfo de Omán.',
        reviews: []
    },

    // Doha, Qatar
    {
        id: '49',
        title: 'Doha Futurista',
        continent: 'Asia',
        price: 1800,
        days: 6,
        image: 'https://images.unsplash.com/photo-1539475314840-751cecc1dacd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9oYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.5,
        description: 'Corniche con skyline futurista, Souq Waqif y Museo de Arte Islámico. Mezcla de tradición y nuevas áreas culturales.',
        reviews: []
    },

    // Chiang Mai, Thailand
    {
        id: '50',
        title: 'Chiang Mai del Norte',
        continent: 'Asia',
        price: 950,
        days: 8,
        image: 'https://plus.unsplash.com/premium_photo-1661929242720-140374d97c94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpYW5nJTIwTWFpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Templos en la ladera, cafés y mercados creativos. Punto de partida para naturaleza del norte y experiencias culinarias.',
        reviews: []
    },

    // Hanoi, Vietnam
    {
        id: '51',
        title: 'Hanoi Tradicional',
        continent: 'Asia',
        price: 1050,
        days: 7,
        image: 'https://plus.unsplash.com/premium_photo-1691960159290-6f4ace6e6c4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFub2l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.6,
        description: 'Lagos, templos y barrio francés con aire romántico. Calles angostas con cafés tradicionales y mercados vibrantes.',
        reviews: []
    },

    // Singapore, Singapore
    {
        id: '52',
        title: 'Singapur Ciudad-Jardín',
        continent: 'Asia',
        price: 1950,
        days: 6,
        image: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.8,
        description: 'Selva urbana, Jardín Botánico y Gardens by the Bay. Templos, casas patrimoniales y logística impecable.',
        reviews: []
    },

    // --- AFRICA ---

    // Chefchaouen, Morocco
    {
        id: '53',
        title: 'Chefchaouen Azul',
        continent: 'África',
        price: 950,
        days: 5,
        image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        rating: 4.7,
        description: 'Medina azul entre montañas del Rif. Callejuelas pintadas, puertas artesanales y miradores cercanos.',
        reviews: []
    },

    // Cape Town, South Africa
    {
        id: '54',
        title: 'Ciudad del Cabo Natural',
        continent: 'África',
        price: 1850,
        days: 9,
        image: 'https://plus.unsplash.com/premium_photo-1697730061063-ad499e343f26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2l1ZGFkJTIwZGVsJTIwQ2Fib3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.8,
        description: 'Table Mountain, playas con pingüinos y barrios coloridos como Bo-Kaap. Viñedos cercanos y rutas panorámicas.',
        reviews: []
    },

    // --- OCEANIA ---

    // Sydney, Australia
    {
        id: '55',
        title: 'Sídney Icónica',
        continent: 'Oceanía',
        price: 2850,
        days: 10,
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UyVDMyVBRGRuZXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Ópera icónica, bahía navegable y playas urbanas como Bondi. Ferris cotidianos y parques frente al agua.',
        reviews: []
    },

    // Queenstown, New Zealand
    {
        id: '56',
        title: 'Queenstown Aventura',
        continent: 'Oceanía',
        price: 2450,
        days: 8,
        image: 'https://images.unsplash.com/photo-1600466403153-50193d187dde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UXVlZW5zdG93bnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.9,
        description: 'Capital de la adrenalina entre lago y montañas. Miradores naturales, aventuras y paisajes cinematográficos.',
        reviews: []
    },

    // --- NORTH AMERICA ---

    // Quebec City, Canada
    {
        id: '57',
        title: 'Quebec Amurallada',
        continent: 'Norteamérica',
        price: 1750,
        days: 6,
        image: 'https://images.unsplash.com/photo-1576771304215-6d4d30f7bb63?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENpdWRhZCUyMGRlJTIwUXVlYmVjfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Casco amurallado en altura con vistas al San Lorenzo. Ambiente europeo, tejados empinados y puestas de sol rosadas.',
        reviews: []
    },

    // Havana, Cuba
    {
        id: '58',
        title: 'La Habana Colonial',
        continent: 'Norteamérica',
        price: 1250,
        days: 7,
        image: 'https://images.unsplash.com/photo-1570299437488-d430e1e677c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGElMjBIYWJhbmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.6,
        description: 'Arquitectura colonial de tonos pastel, música en cada esquina y paseos marítimos. La Habana Vieja y el Malecón.',
        reviews: []
    },

    // New York, USA
    {
        id: '59',
        title: 'Nueva York Urbana',
        continent: 'Norteamérica',
        price: 2200,
        days: 8,
        image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TnVldmElMjBZb3JrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.8,
        description: 'Arquitectura icónica, Central Park y escena artística incomparable. Energía urbana que no se apaga.',
        reviews: []
    },

    // San Francisco, USA
    {
        id: '60',
        title: 'San Francisco Vibrante',
        continent: 'Norteamérica',
        price: 1950,
        days: 7,
        image: 'https://images.unsplash.com/photo-1719858403364-83f7442a197e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2FuJTIwRnJhbmNpc2NvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Golden Gate, colinas y casas victorianas. Museos de talla mundial y barrios con carácter propio.',
        reviews: []
    },

    // San Miguel de Allende, Mexico
    {
        id: '61',
        title: 'San Miguel Colonial',
        continent: 'Norteamérica',
        price: 1350,
        days: 6,
        image: 'https://plus.unsplash.com/premium_photo-1697729800872-866107ce82c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2FuJTIwTWlndWVsJTIwZGUlMjBBbGxlbmRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Centro colonial con parroquia neogótica rosada. Calles adoquinadas, patios y arte en galerías y talleres.',
        reviews: []
    },

    // --- SOUTH AMERICA ---

    // Buenos Aires, Argentina
    {
        id: '62',
        title: 'Buenos Aires de Tango',
        continent: 'Sudamérica',
        price: 1550,
        days: 7,
        image: 'https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVlbm9zJTIwQWlyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Barrios con identidad (Recoleta, San Telmo, La Boca), arquitectura variada y vida cultural intensa.',
        reviews: []
    },

    // Rio de Janeiro, Brazil
    {
        id: '63',
        title: 'Río de Janeiro Playero',
        continent: 'Sudamérica',
        price: 1650,
        days: 7,
        image: 'https://plus.unsplash.com/premium_photo-1671211307997-f4f552b0601c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UiVDMyVBRG8lMjBkZSUyMEphbmVpcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.8,
        description: 'Playas míticas, selva urbana y Cristo Redentor vigilando bahías. Ritmo de samba en calles y plazas.',
        reviews: []
    },

    // Cartagena, Colombia
    {
        id: '64',
        title: 'Cartagena Colonial',
        continent: 'Sudamérica',
        price: 1400,
        days: 6,
        image: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FydGFnZW5hJTIwY29sb21iaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.7,
        description: 'Murallas, plazas y casonas coloniales cubiertas de buganvillas. Getsemaní y Bocagrande muestran caras creativa y moderna.',
        reviews: []
    },

    // Quito, Ecuador
    {
        id: '65',
        title: 'Quito Andino',
        continent: 'Sudamérica',
        price: 1250,
        days: 6,
        image: 'https://plus.unsplash.com/premium_photo-1697729921570-a7e324d7baac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UXVpdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.6,
        description: 'Casco histórico dorado bajo volcanes andinos. Vistas desde la Basílica del Voto Nacional y mercados tradicionales.',
        reviews: []
    },

    // Cusco, Peru
    {
        id: '66',
        title: 'Cuzco Inca',
        continent: 'Sudamérica',
        price: 1200,
        days: 5,
        image: 'https://images.unsplash.com/photo-1609944433409-81bda5323abc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3V6Y298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        rating: 4.8,
        description: 'Antigua capital inca con plazas, conventos y calles empedradas. Punto de partida a Machu Picchu y miradores cercanos.',
        reviews: []
    },
];