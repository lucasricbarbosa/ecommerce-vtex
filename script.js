const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 62,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
      },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    },

    // And if we need scrollbar

});

let swiper2 = new Swiper('#swiper-container2', {
    slidesPerView: 1,
    spaceBetween: 20,

    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',

    },

});



function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para verificar quais itens estão na tela e aplicar a classe 'visible'
function checkScroll() {
    const items = document.querySelectorAll('.swiper, .categories-container');
    items.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
        }
    });
}

// Evento que verifica a rolagem da página e chama a função checkScroll
window.addEventListener('scroll', checkScroll);

// Chamar a função checkScroll uma vez após o carregamento da página para animar os itens que já estão visíveis inicialmente.
window.addEventListener('load', checkScroll);

const btnMobile = document.querySelector('#btn-mobile')

function toggleMenu(e) {
    if(e.type === 'touchstart') e.preventDefault()
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
