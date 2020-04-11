let firstNav = document.querySelector('nav'); //first nav tag of <body>
let menu = document.querySelector('nav.menu');
let topCenterLogo = document.querySelector('#logo-topCenter');

// MENU SCROLL
window.addEventListener('scroll', function() {
    let top = window.pageYOffset || document.documentElement.scrollTop; //detecta o nº de pixels "scrollados" na pagina

    if (top == 0) { //esconde o menu horizontal e faz aparecer o menu lateral
        // menu.classList.add('collapse');
        // firstNav.classList.remove('collapse');
        // topCenterLogo.classList.remove('collapse');
        menu.classList.remove('bg-light');
        menu.classList.remove('menu-links-light')
        menu.classList.add('menu-links-dark')
    } else if (window.innerWidth >= 768 && top >= 5) { //esconde o menu lateral e passa a mostrar o menu horizontal
        // firstNav.classList.add('collapse');
        // topCenterLogo.classList.add('collapse');
        // menu.classList.remove('collapse');
        menu.classList.add('bg-light');
        menu.classList.add('menu-links-light')
        menu.classList.remove('menu-links-dark')
    }

})


//SLICK SLIDER
//## TO DO: FIX THE SLIDER ##
$('.slick-container').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
  variableWidth: false,
  arrows:false,
});