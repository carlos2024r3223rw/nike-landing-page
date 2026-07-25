document.addEventListener('DOMContentLoaded', () => {
    const btnComprar = document.getElementById('btn-comprar');
    const cartBadge = document.getElementById('cart-badge');
    const toast = document.getElementById('toast');
    let cartCount = 0;

    if (btnComprar) {
        btnComprar.addEventListener('click', () => {
            // Actualizar contador del carrito
            cartCount++;
            cartBadge.innerText = cartCount;
            cartBadge.classList.add('active');
            
            // Pequeña animación pop del contador
            cartBadge.style.transform = 'scale(1.3)';
            setTimeout(() => { cartBadge.style.transform = 'scale(1)'; }, 200);

            // Mostrar el Toast
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);

            // Cambio temporal del estado del botón
            const originalText = btnComprar.innerText;
            btnComprar.innerText = '¡Agregado!';
            btnComprar.style.backgroundColor = '#10b981';
            
            setTimeout(() => {
                btnComprar.innerText = originalText;
                btnComprar.style.backgroundColor = ''; 
            }, 2000);
        });
    }

    const sizeButtons = document.querySelectorAll('.size-btn:not(.out-of-stock)');
    
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    const colorButtons = document.querySelectorAll('.color-btn');
    
    colorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            colorButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            item.classList.toggle('active');
        });
    });
});
