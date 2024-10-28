// import images as relative image path won't work with vite/vercel.
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

// Menu Mobile
const headerMenu = document.getElementById('header-menu'),
      headerMenuMobile = document.getElementById('header-menu-mobile')

if (headerMenuMobile) {
  headerMenuMobile.addEventListener('click', () => {
    headerMenu.classList.toggle('active')
  })
}

import AOS from "aos"
import 'aos/dist/aos.css';

// init AOS animation
function initAOS() {
  AOS.init({
    duration: 1000,
    offset: 100,
  });
}

// Initialisation AOS une fois que le DOM est prêt
// Permet aux animations de s'initialiser lors des rafraîchissemnts de page
requestAnimationFrame(() => {
  setTimeout(() => {
    initAOS();
  }, 500); // Ajoute un léger délai pour s'assurer de la bonne initialisation
});

// Pour gérer les rechargements via Vite HMR
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    initAOS();
  });
}


const trendingSushis = [
  'Make Sushi',
  'Nigiri Sushi',
  'Oshizushi',
  'Temaki Sushi',
  'Uramaki Sushi',
  'Inari Sushi'
];

const trendingDrinks = [
  "Oruncha",
  "Ofukucha",
  "Sakura Tea",
  "Kombu-cha",
  "Aojiru",
  "Mugicha",
]

const cards = [
  {
    imgSrc: sushi12,
    alt: "sushi-12",
    title: "Chezu Sushi",
    rating: "4.8",
    price: "21.00€"
  },
  {
    imgSrc: sushi11,
    alt: "sushi-11",
    title: "Originale Sushi",
    rating: "5.0",
    price: "16.00€",
    active: true
  },
  {
    imgSrc: sushi10,
    alt: "sushi-10",
    title: "Ramen Legendo",
    rating: "4.6",
    price: "11.00€"
  }
];