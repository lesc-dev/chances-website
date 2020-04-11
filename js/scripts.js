let firstNav = document.querySelector('nav'); //first nav tag of <body>
let menu = document.querySelector('nav.menu');
let topCenterLogo = document.querySelector('#logo-topCenter');

// MENU SCROLL
window.addEventListener('scroll', function() {
    let top = window.pageYOffset || document.documentElement.scrollTop; //detecta o nº de pixels "scrollados" na pagina

    if (top == 0) { //esconde o menu horizontal e faz aparecer o menu lateral
        menu.classList.add('collapse');
        firstNav.classList.remove('collapse');
        topCenterLogo.classList.remove('collapse');
    } else if (window.innerWidth >= 768 && top >= 5) { //esconde o menu lateral e passa a mostrar o menu horizontal
        firstNav.classList.add('collapse');
        topCenterLogo.classList.add('collapse');
        menu.classList.remove('collapse');
    }

})


//SLICK SLIDER
//## TO DO: FIX THE SLIDER ##
$('.slick-container').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    centerMode: false,
});