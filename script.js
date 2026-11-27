document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('btn-comprar');
    const cartBadge = document.getElementById('cart-badge');
    const toast = document.getElementById('toast');
    const languageButtons = document.querySelectorAll('.language-btn');
    let cartCount = 0;
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
            toast: '¡Producto agregado al carrito exitosamente!'
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
            toast: 'Product added to cart!'
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
        document.querySelector('.btn-icon').setAttribute('aria-label', copy.cart);
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
        languageButtons.forEach(button => {
            const active = button.dataset.lang === language;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    buyButton.addEventListener('click', () => {
        cartCount++;
        cartBadge.textContent = cartCount;
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
