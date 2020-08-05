import { tns } from 'tiny-slider/src/tiny-slider';

const slider = tns({
    container: '.portfolio__slider',
    items: 4,
    navItems: false,
    mouseDrag: true,
    gutter: 30,
    nav: false,
    controlsContainer: ".portfolio__arrows",
});
