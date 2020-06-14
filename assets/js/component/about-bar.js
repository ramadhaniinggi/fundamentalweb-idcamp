import img from "../../img/logo.png";
class AboutBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      box-sizing: border-box;
    }

    p,
    h3 {
      font-size: 20px;
    }

    h2 {
      font-size: 30px;
    }

    .container {
      max-width: 1170px;
      margin: auto;
      padding: 0;
    }

    :host {
      padding: 60px 0;
      display: block;
    }

    .about-item {
      box-shadow: 0 2px 6px 0 grey;
      text-align: center;
      padding: 20px 40px 20px 40px;
    }
    .about-item h2 {
      text-transform: uppercase;
    }
    
    .about-item img {
      background-color: #c23616;
    }

    @media all and (max-width: 1024px) {
      .container,
      footer {
        padding: 0 40px;
      }
    }

    @media all and (max-width: 320px) {
      .container,
      footer {
        padding: 0 20px;
      }
    }
    
    </style>
      <div class="container">
      <div class="about-item">
        <h2>About Us</h2>
        <img class="brand-about" src="${img}" alt="brand" />
        <p>
  Smacznego is a company that works in food industry. Our visitors' satisfaction
  is our first priority. We're here to help you find your best meals for
  breakfast, lunch, and dinner. You can decide what kind of meal you would like
  to have, such as beef, chicken, lamb, pasta, pork, goat, seafood, or even
  vegan. We don't only have the list of main course, but also dessert, side, and miscellaneous. We gather the list of meals all around the world, starts from America,
  Britain, Canada, China, Holland, Egypt, France, Grece, India, Irlandia, Italy,
  Jamaica, Japan, Kenya, Malaysia, Mexico, Morocco, Russia, Spain, Thailand,
  Tunisia, Turkey, and Vietnam. We prioritize the taste of meal itself, because we want to give the best list meals for our beloved visitors. Enjoy your meal!
</p>
      </div>
    </div>
      `;
  }
}

customElements.define("about-bar", AboutBar);
