/* eslint-disable max-len */
import heroImage from '../../../public/images/hero/hero-image_4.webp';

class AboutResto extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const About = `
      <style>
      .about-us {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        align-items: center;
        padding: 30px;
        background-color: #333;
        margin: 0px;
      }
      
      .about-text {
        padding: 120px;
      }

      @media only screen and (max-width: 1200px) {
       .about-us {
        display: flex;
        flex-direction: column;
        margin-top: 0px;
        width: auto;
       }

       .about-text {
        padding: 5px;
       }

       p {
        margin: 10px;
       }
    }
      
      img {
        width: 100%;
        height: 450px;
        object-fit: cover;
        border-radius: 10px;
        filter: brightness(1.1) sepia(0.43);
      }
      
      h1 {
        font-family: 'Merienda', cursive;
        color: #ddac42;
        font-size: 5em;
        margin-bottom: 50px;
      }
      
      p {
        color: #dfdfdf;
        font-size: 18px;
        font-weight: 200;
        text-align: justify;
        word-break: break-all;
      }
      
      p::first-letter {
          margin-left:1.3em;
      }
      
  
      
    </style>
  
   
    <div class="about-us">
    <img src="${heroImage.src}" alt="banner 4">
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
