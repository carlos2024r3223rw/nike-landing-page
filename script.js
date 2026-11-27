document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('btn-comprar');
    const cartBadge = document.getElementById('cart-badge');
    const toast = document.getElementById('toast');
    const cartTrigger = document.querySelector('.cart-trigger');
    const cartDialog = document.getElementById('cart-dialog');
    const cartContent = document.getElementById('cart-content');
    const checkoutButton = document.getElementById('checkout-button');
    const cartItems = [];
    let orderCompleted = false;
    const languageButtons = document.querySelectorAll('.language-btn');
    let currentLanguage = 'es';
    let addedTimeout;
    let toastTimeout;

    const translations = {
        es: {
            title: 'Nike Alphafly Next% - Página de producto',
            description: 'Descubre la nueva colección de zapatillas Nike. Rápidas, ligeras y con el mejor estilo.',
            navigation: ['Hombres', 'Mujeres', 'Niños', 'Ofertas'],
            cart: 'Carrito',
            rating: '4.8/5 (120 opiniones verificadas)',
            subtitle: 'Diseñadas para romper récords. Velocidad, ligereza y el máximo retorno de energía en cada paso.',
            specs: ['Uso: Competición / Maratón', 'Drop: 8 mm', 'Peso: 210g (Talla 42)', 'Amortiguación: ZoomX + Cápsulas de aire'],
            size: 'Selecciona tu talla (EU)',
            sizeGuide: 'Guía de tallas',
            color: 'Color disponible',
            colors: ['Gris Claro/Blanco', 'Negro', 'Verde Neón'],
            buy: 'Agregar al carrito',
            added: '¡Agregado!',
            badges: ['Envío gratis', 'Devolución 30 días', 'Pago 100% seguro'],
            shoe: 'Zapatillas Nike Alphafly Next% flotando',
            sections: ['Detalles del Producto', 'Opiniones'],
            details: ['Innovación ZoomX', 'Placa de Fibra de Carbono', 'Material AtomKnit'],
            detailCopy: [
                'Nuestra espuma Nike ZoomX es increíblemente reactiva y ligera. Te brinda un mayor retorno de energía para ayudarte a alcanzar tus metas, desde tus entrenamientos diarios hasta el día de la carrera.',
                'Una placa de fibra de carbono completa proporciona una sensación de propulsión que te ayuda a realizar transiciones suaves en cada zancada. Es el secreto detrás de los récords mundiales.',
                'La parte superior AtomKnit forma parte de la familia Flyknit. El material se estira, se moldea a la forma del pie y brinda un ajuste ligero y transpirable que absorbe menos sudor.'
            ],
            reviewTitles: ['Mejores tiempos garantizados', 'Comodidad y Reactividad', 'Muy rápidas pero delicadas'],
            reviews: [
                'Increíble sensación de propulsión. Logré mi mejor marca personal en la media maratón gracias a estas zapatillas. Se sienten muy ligeras.',
                'La amortiguación ZoomX es de otro mundo. Sientes que flotas. El único detalle es que hay que acostumbrarse al arco elevado, pero valen cada centavo.',
                'Son para competir, no para el día a día. El desgaste de la suela es un poco rápido si las usas en entrenamientos normales. ¡Pero en carrera vuelan!'
            ],
            authors: ['Por Carlos M. - 12 Jul 2026 ✔ Comprador Verificado', 'Por Elena G. - 28 Jun 2026 ✔ Comprador Verificado', 'Por Roberto D. - 05 Jun 2026 ✔ Comprador Verificado'],
            toast: '¡Producto agregado al carrito!',
            cartTitle: 'Tu carrito',
            cartEyebrow: 'COMPRA DE DEMOSTRACIÓN',
            closeCart: 'Cerrar carrito',
            emptyCart: 'Tu carrito está vacío. Elige una talla y un color para comenzar.',
            sizeLabel: 'Talla EU',
            colorLabel: 'Color',
            quantityLabel: 'Cantidad',
            subtotal: 'Subtotal',
            checkout: 'Simular compra',
            demoNote: 'Demostración: no se realiza ningún pago ni pedido real.',
            successTitle: '¡Compra simulada completada!',
            successBody: 'Gracias por probar esta experiencia. No se ha cobrado dinero ni realizado un pedido real.'
        },
        en: {
            title: 'Nike Alphafly Next% - Product Landing Page',
            description: 'Explore a Nike running shoe product page concept with a responsive design and interactive details.',
            navigation: ['Men', 'Women', 'Kids', 'Offers'],
            cart: 'Cart',
            rating: '4.8/5 (120 verified reviews)',
            subtitle: 'Built to break records. Speed, lightness, and maximum energy return with every stride.',
            specs: ['Use: Racing / Marathon', 'Drop: 8 mm', 'Weight: 210g (Size EU 42)', 'Cushioning: ZoomX + Air units'],
            size: 'Select your size (EU)',
            sizeGuide: 'Size guide',
            color: 'Available colors',
            colors: ['Light Gray/White', 'Black', 'Neon Green'],
            buy: 'Add to cart',
            added: 'Added!',
            badges: ['Free shipping', '30-day returns', '100% secure payment'],
            shoe: 'Floating Nike Alphafly Next% running shoe',
            sections: ['Product Details', 'Reviews'],
            details: ['ZoomX Innovation', 'Carbon Fiber Plate', 'AtomKnit Material'],
            detailCopy: [
                'Nike ZoomX foam is responsive and lightweight. It offers energy return to support your goals, from everyday training to race day.',
                'A full-length carbon fiber plate creates a propulsive feel and smooth transitions with every stride.',
                'The AtomKnit upper is part of the Flyknit family. It stretches to fit your foot, providing a lightweight, breathable feel.'
            ],
            reviewTitles: ['A new personal best', 'Comfort and responsiveness', 'Fast but delicate'],
            reviews: [
                'The propulsion feels incredible. I ran a personal best in the half marathon in these shoes, and they feel very light.',
                'ZoomX cushioning feels great. The raised arch takes some getting used to, but the shoes feel responsive.',
                'Great for racing, though the outsole wears faster during daily training. They shine on race day.'
            ],
            authors: ['By Carlos M. - Jul 12, 2026 ✔ Verified Buyer', 'By Elena G. - Jun 28, 2026 ✔ Verified Buyer', 'By Roberto D. - Jun 05, 2026 ✔ Verified Buyer'],
            toast: 'Product added to cart!',
            cartTitle: 'Your cart',
            cartEyebrow: 'DEMO PURCHASE',
            closeCart: 'Close cart',
            emptyCart: 'Your cart is empty. Choose a size and color to get started.',
            sizeLabel: 'EU size',
            colorLabel: 'Color',
            quantityLabel: 'Quantity',
            subtotal: 'Subtotal',
            checkout: 'Complete demo purchase',
            demoNote: 'Demo only: no payment is taken and no real order is placed.',
            successTitle: 'Demo purchase complete!',
            successBody: 'Thanks for trying this experience. No payment was taken and no real order was placed.'
        }
    };

    function setText(selector, value) {
        const element = document.querySelector(selector);
        if (element) element.textContent = value;
    }

    function setMany(selector, values) {
        document.querySelectorAll(selector).forEach((element, index) => {
            if (values[index] !== undefined) element.textContent = values[index];
        });
    }

    function setLanguage(language) {
        if (!translations[language]) return;
        currentLanguage = language;
        const copy = translations[language];
        document.documentElement.lang = language;
        document.title = copy.title;
        document.querySelector('meta[name="description"]').content = copy.description;
        setMany('.nav-links a', copy.navigation);
        cartTrigger.setAttribute('aria-label', copy.cart);
        setText('.rating-text', copy.rating);
        setText('.subtitle', copy.subtitle);
        document.querySelectorAll('.specs li').forEach((item, index) => {
            const [label, value] = copy.specs[index].split(': ');
            const strong = item.querySelector('strong');
            strong.textContent = label + ':';
            item.replaceChildren(strong, document.createTextNode(' ' + value));
        });
        setText('.options-header h3', copy.size);
        setText('.size-guide', copy.sizeGuide);
        document.querySelectorAll('.options h3')[1].textContent = copy.color;
        document.querySelectorAll('.color-btn').forEach((button, index) => {
            button.setAttribute('aria-label', copy.colors[index]);
        });
        setText('.btn-primary', buyButton.classList.contains('added') ? copy.added : copy.buy);
        document.querySelectorAll('.trust-badges .badge').forEach((badge, index) => {
            const icon = badge.querySelector('.icon');
            badge.replaceChildren(icon, document.createTextNode(' ' + copy.badges[index]));
        });
        document.querySelector('.floating-shoe').alt = copy.shoe;
        setText('.technical-accordion h2', copy.sections[0]);
        setText('.reviews-header h2', copy.sections[1]);
        document.querySelectorAll('.accordion-header').forEach((header, index) => {
            header.firstChild.nodeValue = copy.details[index] + ' ';
        });
        setMany('.accordion-content p', copy.detailCopy);
        setMany('.review-title', copy.reviewTitles);
        setMany('.review-text', copy.reviews);
        setMany('.review-author', copy.authors);
        toast.textContent = copy.toast;
        setText('#cart-title', copy.cartTitle);
        setText('#cart-eyebrow', copy.cartEyebrow);
        setText('#demo-note', copy.demoNote);
        setText('#checkout-button', copy.checkout);
        document.querySelector('.cart-close').setAttribute('aria-label', copy.closeCart);
        if (cartDialog.open) renderCart();
        languageButtons.forEach(button => {
            const active = button.dataset.lang === language;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    function renderCart() {
        const copy = translations[currentLanguage];
        cartContent.replaceChildren();
        checkoutButton.hidden = orderCompleted || cartItems.length === 0;

        if (orderCompleted) {
            const heading = document.createElement('h3');
            heading.className = 'cart-success-title';
            heading.textContent = copy.successTitle;
            const message = document.createElement('p');
            message.textContent = copy.successBody;
            cartContent.append(heading, message);
            return;
        }

        if (cartItems.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'cart-empty';
            empty.textContent = copy.emptyCart;
            cartContent.append(empty);
            return;
        }

        const groups = new Map();
        cartItems.forEach(item => {
            const key = item.size + '-' + item.color;
            const group = groups.get(key) || { ...item, quantity: 0 };
            group.quantity++;
            groups.set(key, group);
        });

        groups.forEach(item => {
            const row = document.createElement('div');
            row.className = 'cart-item';
            const image = document.createElement('img');
            image.src = 'assets/shoe.png';
            image.alt = '';
            const details = document.createElement('div');
            const name = document.createElement('strong');
            name.textContent = 'Nike Alphafly Next%';
            const variant = document.createElement('p');
            variant.textContent = copy.sizeLabel + ' ' + item.size + ' · ' + copy.colorLabel + ': ' + copy.colors[item.color];
            const quantity = document.createElement('p');
            quantity.textContent = copy.quantityLabel + ': ' + item.quantity;
            details.append(name, variant, quantity);
            const price = document.createElement('strong');
            price.textContent = '$' + (275 * item.quantity).toFixed(2);
            row.append(image, details, price);
            cartContent.append(row);
        });

        const total = document.createElement('div');
        total.className = 'cart-subtotal';
        const label = document.createElement('span');
        label.textContent = copy.subtotal;
        const amount = document.createElement('strong');
        amount.textContent = '$' + (275 * cartItems.length).toFixed(2);
        total.append(label, amount);
        cartContent.append(total);
    }

    function openCart() {
        renderCart();
        if (!cartDialog.open) cartDialog.showModal();
    }

    cartTrigger.addEventListener('click', openCart);
    document.querySelector('.cart-close').addEventListener('click', () => cartDialog.close());
    cartDialog.addEventListener('click', event => {
        if (event.target === cartDialog) cartDialog.close();
    });
    checkoutButton.addEventListener('click', () => {
        if (cartItems.length === 0) return;
        cartItems.length = 0;
        orderCompleted = true;
        cartBadge.textContent = '0';
        cartBadge.classList.remove('active');
        renderCart();
    });

    buyButton.addEventListener('click', () => {
        const selectedSize = document.querySelector('.size-btn.selected');
        const selectedColor = document.querySelector('.color-btn.selected');
        const colorButtons = [...document.querySelectorAll('.color-btn')];
        cartItems.push({
            size: selectedSize.textContent.trim(),
            color: colorButtons.indexOf(selectedColor)
        });
        orderCompleted = false;
        cartBadge.textContent = cartItems.length;
        cartBadge.classList.add('active');
        cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => { cartBadge.style.transform = 'scale(1)'; }, 200);

        clearTimeout(toastTimeout);
        toast.classList.add('show');
        toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);

        clearTimeout(addedTimeout);
        buyButton.classList.add('added');
        buyButton.textContent = translations[currentLanguage].added;
        buyButton.style.backgroundColor = '#10b981';
        addedTimeout = setTimeout(() => {
            buyButton.classList.remove('added');
            buyButton.textContent = translations[currentLanguage].buy;
            buyButton.style.backgroundColor = '';
        }, 2000);
        openCart();
    });

    const sizeButtons = document.querySelectorAll('.size-btn:not(.out-of-stock)');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(item => item.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            colorButtons.forEach(item => item.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            document.querySelectorAll('.accordion-item').forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    setLanguage('es');
});
