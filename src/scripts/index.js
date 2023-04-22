import 'regenerator-runtime';
import '../styles/style.css';
import './views/components';
import App from './views/app';
import { getElement } from './utils';
import swRegister from './utils/sw-register';

const app = new App({
  navBar: getElement('nav-bar'),
  contentContainer: getElement('#content'),
});

window.addEventListener('load', () => {
  app.renderContent();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderContent();
});
