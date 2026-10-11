# Personal Portfolio

A lightweight, responsive portfolio website built with vanilla HTML, CSS, and JavaScript.

🔗 **Live Demo:** [https://omar-ibrahim-0i.github.io/Portfolio/](https://omar-ibrahim-0i.github.io/Portfolio/)

---

## Features

- **Responsive Layout:** Mobile-first, fully responsive design using modern CSS Flexbox and media queries.
- **Interactive Navigation:** Smooth-sliding mobile navigation drawer with keyboard and screen reader accessibility (ARIA attributes, Escape key dismiss, outside click detection, and resize stabilization).
- **Interactive Recommendations:** Dynamic testimonial submission form with instant DOM updates and a confirmation modal.
- **Performant & Lightweight:** Built using vanilla web technologies without heavy frontend frameworks or complex build pipelines.
- **Semantic Structure:** Accessible HTML5 structure, clean typography, and responsive typography scaling.

## Tech Stack

- **Markup:** Semantic HTML5
- **Styling:** CSS3 (Custom Properties, Flexbox, Transitions)
- **Scripting:** Vanilla JavaScript (ES6+)
- **Icons:** Font Awesome
- **Hosting:** GitHub Pages

## Project Structure

```text
portfolio/
├── index.html        # Main HTML structure and portfolio sections
├── style.css         # Custom styling, responsive rules, and animations
├── script.js         # Interactive navigation, modal dialogs, and recommendations
├── assets/           # Images, SVGs, and graphic assets
└── README.md         # Project documentation
```

## Local Development

To run this project locally without any build tool:

1. Clone the repository:

   ```bash
   git clone https://github.com/Omar-Ibrahim-0I/Portfolio.git
   cd portfolio
   ```

2. Open the project:
   - Open `index.html` directly in your web browser.
   - Or serve it with a lightweight local HTTP server (such as VS Code Live Server or Python):
     ```bash
     # Using Python 3
     python3 -m http.server 8000
     ```
   - Navigate to `http://localhost:8000` in your browser.

## Customization

To adapt this template to your own profile:

1. Update your name, bio, skills, and contact links in `index.html` file.
2. Showcase your own work in the projects section.
3. Replace images in the `assets/` directory with your own pictures and project thumbnails.
4. Modify color variables in `style.css` file (`:root` custom properties) to match your personal branding.

## License

The source code is licensed under the MIT License. You are welcome to use the code structure, but please replace my personal information, branding, projects, and images with your own.
