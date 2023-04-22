/* eslint-disable max-len */
import heroImage from '../../../public/images/hero/hero-image.webp';

class HeroElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    banner {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 500px;
      background-color: #333;
      color: white;
      position: relative;
    }
    
    .image-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    
    .text-container {
      text-align: center;
      z-index: 1;
    }
    
    .text {
      font-family: 'Merienda', cursive;
      color: #ddac42;
      font-size: 48px;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      margin-bottom: 20px;
    }
    
    small {
      font-size: 24px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    
    /* Responsif untuk layar berukuran kecil */
    @media (max-width: 576px) {
      .text {
        font-size: 36px;
      }
      small {
        font-size: 20px;
      }
    }
    
    /* Responsif untuk layar berukuran sedang */
    @media (min-width: 576px) and (max-width: 992px) {
      .text {
        font-size: 42px;
      }
      small {
        font-size: 22px;
      }
    }
    
    /* Responsif untuk layar berukuran besar */
    @media (min-width: 992px) and (max-width: 1200px) {
      .text {
        font-size: 48px;
      }
      small {
        font-size: 24px;
      }
    }
    
    /* Responsif untuk layar berukuran sangat besar */
    @media (min-width: 1200px) {
      .text {
        font-size: 56px;
      }
      small {
        font-size: 28px;
      }
    }
    
      </style>
    <banner>
      <div class="image-container">
        <img src="${heroImage.src}" alt="Banner-image">
      </div>
      <div class="text-container">
        <div class="text">Temukan Restaurant Terbaik Di Kota</div>
        <small>"Where food and memories are made"</small>
      </div>
    </banner>
    `;

    const banner = this.shadowDOM.querySelector('.image-container img');
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      const parallaxPosition = scrollPosition * 0.5;
      banner.style.transform = `translate3d(0, ${parallaxPosition}px, 0)`;
    });
  }
}

customElements.define('hero-element', HeroElement);
