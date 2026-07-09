# Responsive Travel Website

> *Espejo público para portafolio: versión optimizada de un proyecto universitario para su difusión libre sin conflictos de derechos ni versiones.*

## Title & Description

A fully responsive, front-end travel and backpacking platform built from scratch. This project simulates a comprehensive community-driven travel website, emphasizing semantic HTML5, modern CSS3 styling, and modular JavaScript architecture.

The primary goal is to deliver a seamless user experience across all devices (mobile, tablet, and desktop) without relying on heavy front-end frameworks like React or Bootstrap, focusing instead on pure, vanilla web technologies and responsive design principles.

## Architecture & Technical Implementation

The project follows a component-based directory structure to separate styling, logic, and data, ensuring maintainability and scalability:

* **Semantic HTML Structure (`*.html`)**:


* Multi-page architecture including `index.html`, `destinations.html`, `community.html`, `booking.html`, `forum.html`, and user authentication pages (`login.html`, `register.html`).


* Heavy use of semantic tags (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`) for accessibility and SEO.




* **Modular CSS Architecture (`styles/`)**:


* **Base:** `reset.css` for cross-browser normalization and `variables.css` for consistent theming (colors, typography, breakpoints).


* **Layout:** Shared structural components (`header.css`, `footer.css`).


* **Components:** Reusable UI elements (`cards.css`, `carrusel.css`, `forms.css`, `reviews.css`).


* **Pages:** Page-specific overrides (`index.css`, `destinations.css`, `profile.css`).




* **Vanilla JavaScript Logic (`script/`)**:


* **Data Layer (`script/data/`):** Mock JSON/JS databases representing the backend state (`tripsData.js`, `blog-posts.js`, `forum.js`, `reviews.js`).


* **Component Logic (`script/components/`):** Reusable scripts for dynamic UI elements like the hero slider (`hero-slide.js`) and trip cards (`trip-card.js`).


* **Page Controllers (`script/pages/`):** Specific logic to hydrate views with data and handle DOM events per page.





## Tech Stack

* **Markup:** HTML5 (Semantic & Accessible)


* **Styling:** CSS3 (Flexbox, CSS Grid, Custom Properties/Variables, Media Queries)


* **Logic:** Vanilla JavaScript (ES6 Modules, DOM Manipulation, Event Handling)


* **Data:** JSON and JS Objects (Mock backend API)



## Key Challenges & Learnings

1. **Responsive Design without Frameworks:** Building a fluid layout that gracefully degrades from desktop to mobile screens using raw CSS Grid and Flexbox, carefully managing breakpoints in `variables.css`.


2. **State & Data Hydration in Vanilla JS:** Structuring the JavaScript to act almost like a lightweight framework. The challenge was injecting dynamic data (like lists of trips or forum posts) from the `script/data/` modules into the DOM securely and efficiently.


3. **Modular CSS Management:** Avoiding "CSS soup" by strictly adhering to a component-based styling approach, ensuring that changes to a card on the `destinations.html` page wouldn't break the layout on the `index.html` page.



## Academic Context

This project was developed as a comprehensive front-end design assignment. It has been mirrored here to demonstrate foundational web development skills, showing the ability to architect and build a complex user interface from the ground up without relying on external libraries or frameworks.

## Installation & Usage

1. **Clone the repository:**

```bash
git clone https://github.com/nico-maire/Responsive-Travel-Website.git
cd Responsive-Travel-Website

```

2. **Run the project locally:**
Since this is a static front-end project, no build step or node server is strictly required. However, due to the use of ES6 modules (`import/export` in the JavaScript files), you must serve the files over HTTP rather than opening them directly via `file://`.

You can use a simple local server:

```bash
# Using Python 3
python -m http.server 8000

```

3. **View the website:**
Open your browser and navigate to `http://localhost:8000` to interact with the platform.
