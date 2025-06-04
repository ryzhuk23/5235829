document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let startFade = viewportWidth / 6;
    let endFade = viewportWidth / 2;
    
    function updateHeaderOpacity() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollPosition <= startFade) {
            header.style.opacity = '1';
            header.style.pointerEvents = 'auto';
        } else if (scrollPosition >= endFade) {
            header.style.opacity = '0';
            header.style.pointerEvents = 'none';
        } else {
            const opacity = 1 - ((scrollPosition - startFade) / (endFade - startFade));
            header.style.opacity = opacity.toString();
            header.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
        }
    }

    window.addEventListener('scroll', updateHeaderOpacity);
    window.addEventListener('resize', function() {
        viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        startFade = viewportWidth / 6;
        endFade = viewportWidth / 2;
        updateHeaderOpacity();
    });

    const productRoutes = {
        'ubc': '../product_1/index.html'
    };

    document.querySelectorAll('[data-product]').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            if (productRoutes[product]) {
                window.location.href = productRoutes[product];
            }
        });
    });
}); 