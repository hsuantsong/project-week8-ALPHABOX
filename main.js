import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

window.bootstrap = bootstrap;//引入bootstrap方可js 控制

const myCarousel = document.querySelector("#intro-carousel");

const carousel = new bootstrap.Carousel(myCarousel, {

    interval: 2000, //自動播放時的間隔時長

    wrap: false,

    //   ride: "carousel", 打開會自動播放到最後一張

});