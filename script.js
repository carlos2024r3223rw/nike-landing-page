document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejo del botón de compra
    const btnComprar = document.getElementById('btn-comprar');

    if (btnComprar) {
        btnComprar.addEventListener('click', () => {
            const originalText = btnComprar.innerText;
            btnComprar.innerText = '¡Añadido al carrito! ✓';
            btnComprar.style.backgroundColor = '#10b981'; // Verde de éxito
            
            setTimeout(() => {
                btnComprar.innerText = originalText;
                btnComprar.style.backgroundColor = ''; 
            }, 2000);
        });
    }

    // 2. Interacción de las tallas (UI Feedback)
    const sizeButtons = document.querySelectorAll('.size-btn:not(.out-of-stock)');
    
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover la clase selected de todos
            sizeButtons.forEach(b => b.classList.remove('selected'));
            // Añadirla al clickeado
            btn.classList.add('selected');
        });
    });

    // 3. Interacción de colores
    const colorButtons = document.querySelectorAll('.color-btn');
    
    colorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover la clase selected de todos
            colorButtons.forEach(b => b.classList.remove('selected'));
            // Añadirla al clickeado
            btn.classList.add('selected');
        });
    });

    // 4. Lógica del Acordeón Técnico
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Cerrar los otros acordeones (Opcional, hace que se vea más limpio)
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            item.classList.toggle('active');
        });
    });
});
