let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Esconde todas as slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Volta para o primeiro slide
    }
    slides[slideIndex - 1].style.display = "block"; // Mostra o slide atual
    setTimeout(showSlides, 7000); // Muda a imagem a cada 15 segundos
}

function plusSlides(n) {
    slideIndex += n; // Incrementa ou decrementa o índice do slide
    if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1; // Se passar do número de slides, volta ao primeiro
    } else if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("mySlides").length; // Se for menor que 1, vai para o último slide
    }
    showSlidesManual();
}

function showSlidesManual() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Esconde todas as slides
    }
    slides[slideIndex - 1].style.display = "block"; // Mostra o slide atual
}