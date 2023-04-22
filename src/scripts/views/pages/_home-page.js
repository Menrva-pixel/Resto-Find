import Page from './page';

class HomePage extends Page {
  constructor() {
    super({
      basePageElement: /* html */`
        <hero-element></hero-element>
        <about-resto></about-resto>
        <h3>Restaurant List</h3>
        <section id="/main-content" class="container"></section>
      `,
      contentElement: 'resto-list',
    });
  }

  get isHasHeroElement() {
    return true;
  }

  _showContent() {
    this.contentElement.restoList = this._data;
  }
}

customElements.define('home-page', HomePage);
