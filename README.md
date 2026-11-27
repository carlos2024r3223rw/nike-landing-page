# Nike Alphafly Next% Landing Page

A responsive product landing page built as a front-end portfolio project. It presents a Nike Alphafly Next% concept with product information, visual purchase cues, and lightweight interactions using HTML, CSS, and JavaScript.

> This is an independent UI concept, not an official Nike website or a functioning store. Prices, ratings, reviews, availability, shipping claims, and payment messaging are sample content. The checkout is a front-end simulation; there is no backend, payment processing, or real order.

## Features

- Responsive product layout with a shoe image, pricing, specifications, and a prominent call to action.
- Selectable EU shoe sizes and color swatches; the unavailable size is disabled.
- Demo cart with selected size and color, item quantities, subtotal, and a simulated purchase confirmation. No payment details are collected.
- Expandable product details accordion.
- EN/ES language switch for the page content and interaction feedback.
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

| Home | Simulated payment |
| :---: | :---: |
| <img width="1832" height="952" alt="Nike Alphafly Next% landing page home" src="https://github.com/user-attachments/assets/34427fa8-a0d1-40fb-aa55-65c186905591" /> | <img width="707" height="511" alt="Simulated payment confirmation" src="https://github.com/user-attachments/assets/ccc9aa10-fe0c-46ec-bd06-22563b93c658" /> |

The product artwork used in the page is stored at `assets/shoe.png`.

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

Cart items are kept in browser memory for the current page session. Selecting a size or color changes the cart variant; it does not update inventory, price, or the product image. The page opens in Spanish and has an EN/ES switch in the header. Language selection is reset when the page reloads.
