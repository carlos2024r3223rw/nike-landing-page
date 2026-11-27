# Nike Alphafly Next% Landing Page

A responsive product landing page built as a front-end portfolio project. It presents a Nike Alphafly Next% concept with product information, visual purchase cues, and lightweight interactions using HTML, CSS, and JavaScript.

> This is an independent UI concept, not an official Nike website or a functioning store. Prices, ratings, reviews, availability, shipping claims, and payment messaging are sample content. There is no checkout, backend, or real order processing.

## Features

- Responsive product layout with a shoe image, pricing, specifications, and a prominent call to action.
- Selectable EU shoe sizes and color swatches; the unavailable size is disabled.
- Demo add-to-cart interaction with a visual count, temporary button state, and toast notification.
- Expandable product details accordion.
- Static customer review examples and trust badges as part of the page design.

## Tech stack

- Semantic HTML
- CSS with custom properties, Flexbox, Grid, transitions, and a responsive breakpoint
- Vanilla JavaScript for the UI interactions

## Run locally

No package manager, build step, or dependencies are required.

1. Clone the repository:

   ```bash
   git clone https://github.com/carlos2024r3223rw/nike-landing-page.git
   cd nike-landing-page
   ```

2. Open `index.html` in a browser.

You can also download the repository ZIP and open `index.html` directly.

## Screenshots

Screenshots will be added here. The page currently includes the product artwork at `assets/shoe.png`; that image is not a screenshot of the interface.

## Project structure

```text
nike-landing-page/
├── assets/
│   └── shoe.png
├── index.html
├── script.js
├── styles.css
└── README.md
```

## Notes

The cart count is kept in browser memory for the current page session. Selecting a size or color changes its visual state; it does not update inventory, price, or the product image. The page content is currently in Spanish.
