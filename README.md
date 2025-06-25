# Sundown Studio Website

A visually engaging, responsive website for Sundown Studio, showcasing design projects, studio information, and client collaborations.

## Features

- **Modern, Responsive Design:** Clean layout with custom fonts and smooth scrolling.
- **Project Showcase:** Interactive project gallery with hover effects and dynamic image previews.
- **Animated Elements:** Moving text banners, animated backgrounds, and overlays.
- **Client Carousel:** Swiper-powered slider highlighting key clients and collaborations.
- **Custom Footer:** Gradient footer with newsletter signup.

## Project Structure

```
.
├── icon.png
├── index.html
├── script.js
├── style.css
├── test.css
├── test.html
├── video.mp4
├── NeueHaasDisplayMediumItalic.ttf
└── neue-haas-grotesk-display-pro-cufonfonts/
    └── (various font files)
```

- **index.html**: Main website page.
- **test.html**: Alternate or demo page.
- **style.css**: Main styles for layout and design.
- **test.css**: Additional styles for specific sections (e.g., footer, Swiper).
- **script.js**: JavaScript for interactivity (image hover, Swiper, etc.).
- **video.mp4**: Hero/background video.
- **Fonts**: Custom Neue Haas Grotesk font files.

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- [Node.js](https://nodejs.org/) (optional, only if you want to use a local server)

### Running Locally

1. **Clone or Download the Repository**

   Download the project files to your local machine.

2. **Open `index.html`**

   Double-click `index.html` or open it in your browser.

   > **Tip:** For best results (especially with local fonts and video), use a local server.  
   > You can use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code or run:
   > 
   > ```sh
   > npx serve .
   > ```
   > Then open the provided URL in your browser.

### File Overview

- **index.html**: Main landing page with all sections.
- **test.html**: Standalone page for the "Design Project Execution" section.
- **style.css**: Core styles (layout, fonts, colors, animations).
- **test.css**: Styles for Swiper carousel and footer.
- **script.js**: Handles Swiper initialization and image hover logic.

### External Libraries

- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) (for smooth scrolling)
- [Swiper.js](https://swiperjs.com/) (for client carousel)

These are loaded via CDN in `index.html`.

## Customization

- **Fonts:** Uses Neue Haas Grotesk Display (included in the repo).
- **Images:** Project and client images are loaded from Unsplash and external sources.
- **Colors:** Main accent color is `#fe330a` (orange-red).

## Interactivity

- **Project Hover:** Hovering over a project in the gallery shows a large preview image.
- **Swiper Carousel:** Scrolls through client logos and descriptions.
- **Animated Text:** Moving banners and animated backgrounds for visual interest.

## Credits

- **Design & Development:** Sundown Studio
- **Images:** [Unsplash](https://unsplash.com/) and client assets
- **Fonts:** Neue Haas Grotesk Display

## License

This project is for educational and demonstration purposes. For commercial use, ensure you have the appropriate licenses for fonts and images.

---

Feel free to modify this README to fit