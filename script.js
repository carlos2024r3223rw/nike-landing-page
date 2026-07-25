document.addEventListener('DOMContentLoaded', () => {
    const btnComprar = document.getElementById('btn-comprar');

    if (btnComprar) {
        btnComprar.addEventListener('click', () => {
            const originalText = btnComprar.innerText;
            btnComprar.innerText = '¡Añadido al carrito! ✓';
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
