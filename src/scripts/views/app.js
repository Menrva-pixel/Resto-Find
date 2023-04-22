import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({ navBar, contentContainer }) {
    this._navBar = navBar;
    this._contentContainer = contentContainer;
    this._appShellInit();
  }

  _appShellInit() {
    this._navBar.setMenu([
      { url: '#/', label: 'Home' },
      { url: '#/favorite', label: 'Favorite' },
      { url: 'https://github.com/Menrva-pixel', label: 'About', target: '_blank' },
    ]);
  }

  async renderContent() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    if (url === '/main-content') {
      return;
    }
    window.scrollTo(0, 0);

    const presenter = routes[url]();
    const contentElement = presenter.view;

    this._navBar.changeActiveMenuItem(url);
    this._navBar.background = contentElement.isHasHeroElement;

    this._contentContainer.innerHTML = '';
    this._contentContainer.appendChild(contentElement);

    await presenter.showContent();
  }
}

export default App;
