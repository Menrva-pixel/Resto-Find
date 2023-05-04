/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import heroImage from '../../../public/images/hero/hero-image_4.jpg?sizes[]=425,sizes[]=768,sizes[]=1024,sizes[]=135';

class AboutResto extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const About = `
      <style>
      .about-us {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px;
      }
      
      .about-us img {
        max-width: 100%;
        height: auto;
        width: 50%;
        max-height: 500px;
        border-radius: 5px;
      }
      
      .about-text {
        margin-top: 20px;
        text-align: justify;
        color: #dfdfdf;
        word-break: break-all;
      }
      
      .about-text h1 {
        font-size: 2.5rem;
        color: #ddac42 !important;
        font-family: "merienda", serif;
      }
      
      .about-text p {
        font-size: 1.2rem;
        line-height: 1.5;
      }
      
      @media (min-width: 768px) {
        .about-us {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          text-align: left;
        }
          
        .about-text {
          max-width: 50%;
          margin-left: 20px;
        }
      
        .about-text h1 {
          font-size: 3.5rem;
        }
      
        .about-text p {
          font-size: 1.1rem;
        }
      }
      
      @media (max-width: 768px) {
        .about-text h1 {
          text-align: center;
        }

        .about-us img {
          width: 100%;
          border-radius: 10px;
        }
      }
      
  
      
    </style>
  
   
    <div class="about-us">
    <img src="${heroImage.src}" alt="banner 4" loading="lazy">
      <div class="about-text">
        <h1>RestoFind</h1>
        <p>Restoran adalah tempat yang nyaman dan menyenangkan untuk menikmati makanan enak dengan keluarga dan teman. Kami menyediakan berbagai macam hidangan dari berbagai masakan yang disajikan dengan bahan-bahan segar dan berkualitas tinggi. Selain itu, kami juga mengutamakan pelayanan yang ramah dan profesional untuk memberikan pengalaman makan yang terbaik bagi pelanggan kami.
        Temukan Restoran di sekitar anda untuk di nikmati bersama teman, dan keluarga.</p>
      </div>
    </div>
      `;
    this.shadowRoot.innerHTML = About;
  }
}

customElements.define('about-resto', AboutResto);
