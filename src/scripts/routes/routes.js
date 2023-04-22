import { detail, favorite, home } from '../views/pages';

const routes = {
  '/': home,
  '/detail/:id': detail,
  '/favorite': favorite,
  '/about-us': () => {
    window.open('https://github.com/Menrva-pixel');
  },
};

export default routes;
