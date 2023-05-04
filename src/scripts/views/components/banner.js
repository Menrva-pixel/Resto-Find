/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import heroImage from '../../../public/images/hero/hero-image.jpg?sizes[]=425,sizes[]=768,sizes[]=1024,sizes[]=1350';
import heroImageWebp from '../../../public/images/hero/hero-image.jpg?sizes[]=425,sizes[]=768,sizes[]=1024,sizes[]=1350&format=webp';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <picture>
        ${this._createSourceElement(heroImage, 'jpeg')}
        ${this._createSourceElement(heroImageWebp, 'webp')}
        <img
          src="${heroImage.src}"        
          width="${heroImage.width}"
          height="${heroImage.height}"
          loading="lazy"
          alt="Banner Image"
        />
      </picture>
      <h1 class="banner-heading">Temukan Restaurant Terbaik Di Kota</h1>
      <p class="banner-tagline">"Where food and memories are made"</p>
    `;
  }

  _createSourceElement({ images }, type) {
    let elements = '';
    images.forEach(({ path, width }, index) => {
      const mediaQuery = index < images.length - 1
        ? `(max-width: ${width}px)`
        : `(min-width: ${images[index - 1].width}px)`;
      const sourceTag = `<source media="${mediaQuery}" srcset="${path}" type="image/${type}">`;

      elements += sourceTag;
    });
    return elements;
  }
}

customElements.define('hero-element', HeroElement);
