let currentIndex = 0;

function updateCarousel() {
    const carouselList = document.getElementById('carouselList');
    const itemWidth = document.querySelector('.carousel').clientWidth;
    carouselList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function autoSlide() {
    const items = document.querySelectorAll('.carousel .item');
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

// Iniciar el carrusel automático
setInterval(autoSlide, 5000); // Cambia cada 5 segundos

// Asegurarse de actualizar el carrusel si el tamaño de la ventana cambia
window.addEventListener('resize', updateCarousel);