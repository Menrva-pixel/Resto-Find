import logoImage from '../../../public/images/logo.png';
import sponsor1 from '../../../public/images/fake-sponsor1.png';
import sponsor2 from '../../../public/images/fake-sponsor2.png';

/* eslint-disable max-len */
class FooterInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const FooterInfoHtml = `
        <style>
        .footer-info {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            color: #ddac42;
            text-align: center;
            background: #333;
            border-radius: 16px 16px 0 0;
          }
          
          .footer-info > div {
            flex-basis: 33.33%;
            margin-bottom: 20px;
          }
          
          .footer-info h3 {
            font-family: 'Merienda', cursive;
            color: #dfdfdf;
            margin-top: 0;
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 10px;
          }
          
          .footer-info ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          .footer-info ul li {
            margin-bottom: 5px;
          }
          
          .footer-info .social li {
            display: inline-block;
            margin-right: 10px;
          }
          
          .footer-info .social li:last-child {
            margin-right: 0;
          }
          
          .footer-info .social img {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }

          .footer-info .social img:hover {
            transform: scale(1.2);
          }
          
          .footer-info .sponsor-logos li {
            display: inline-block;
            margin-right: 10px;
          }
          
          .footer-info .sponsor-logos li:last-child {
            margin-right: 0;
          }
          
          .footer-info .sponsor-logos img {
            width: 100px;
            height: 100px;
            object-fit: contain;
          }

          img {
            height: 110px;
          }

          a {
            font-family: 'Merienda', cursive;
            color: #dfdfdf;
            font-size: 18px;
          }

          .social li a {
            display: block;
            width: 50px;
            height: 50px;
            padding: 0;
            margin: 0;
          }
          
          .copyright {
            background-color: #202020;
            padding: 20px;
            text-align: center;
          }

          span {
            font-size: 16px;
            color: #999;
          }
    
         span a {
            text-decoration: none;
            color: #dfdfdf;
            padding: 15px 0;
          }
    
          a:hover {
            color: #ddac42;
          }

          @media (max-width: 600px) {

            .footer-info {
              padding: 10px;
              font-size: 12px;
            }
            
            .footer-info > div {
              flex-basis: 100%;
              margin-bottom: 10px;
            }
            
            .footer-info h3 {
              font-size: 14px;
              margin-bottom: 5px;
            }
            
            .footer-info .social li {
              margin-right: 5px;
            }
            
            .footer-info .social img {
              width: 50px;
              height: 50px;
            }
            
            .footer-info .sponsor-logos li {
              margin-right: 5px;
            }
            
            .footer-info .sponsor-logos img {
              width: 50px;
              height: 50px;
            }
          
            img {
              height: 120px;
            }
            
            a {
              font-size: 14px;
            }      
          }


          
        </style>
        <div class="footer-info">
          <div slot="logo">
              <ul>
              <li><img src="${logoImage.src}" alt="Logo" loading="lazy"></li>
              <li><a>Restofind</a></li>
              </ul>
          </div>
          <div slot="contact">
            <h3>Contact Us</h3>
                <ul>
                  <li>Email: bherdyanto26@gmail.com</li>
                  <li>Phone: +62 877 8060 XXX</li>
                </ul>
            <h3>Follow Us</h3>
              <ul class="social">
                <li><a href="https://github.com/Menrva-pixel" target="_blank"><img src="https://img.icons8.com/fluency/48/null/github.png" alt="GitHub"></a></li>
                <li><a href="https://www.linkedin.com/in/barkah-herdyanto-sejati-636840258" target="_blank"><img src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png" alt="LinkedIn"></a></li>
                <li><a href="https://www.instagram.com/herdyanto26n" target="_blank"><img src="https://img.icons8.com/fluency/48/null/instagram-new.png" alt="Instagram"></a></li>
              </ul>
          </div>
          <div slot="sponsor">
            <h3>Sponsored By</h3>
                <ul class="sponsor-logos">
                <li><img src="${sponsor1.src}" alt="Fake Sponsor 1" loading="lazy"></li>
                <li><img src="${sponsor2.src}" alt="Fake Sponsor 2" loading="lazy"></li>
                </ul>
          </div>
        </div>
        <div class="copyright">
            <span>&copy; Copyright 2023, RestoFind by <a href="https://github.com/Menrva-pixel" target="_blank">bherdyanto</span>
        </div>
      `;
    this.shadowRoot.innerHTML = FooterInfoHtml;
  }
}

customElements.define('footer-info', FooterInfo);
