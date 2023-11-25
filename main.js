const logo = document.querySelector('.logo__imagem');

function onClickLogo() {
    document.location.pathname = '/';
}
logo.addEventListener('click', onClickLogo);

const logo1 = document.querySelector('.footer__image--01');

function onClickLogo() {
    document.location.pathname = '/';
}
logo1.addEventListener('click', onClickLogo);

const banner = document.querySelector(".quadrado__propaganda");
if (banner) {
    const images = banner.getElementsByTagName("img");
    let currentImageIndex = 0;

    function showImage(index) {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        images[index].style.display = "block";
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos
    showImage(currentImageIndex);
}