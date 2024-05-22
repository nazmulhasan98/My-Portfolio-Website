




/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .skills__data, .skills__img,
            .portfolio__data, .portfolio__img,
            .review__data,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})