import img from "../../img/logo.png";

class HeaderBar extends HTMLElement {
  // buat shadow root dalam constructor
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  // akan terpanggil ketika element sdh ditetapkan pd dom
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      box-sizing: border-box;
     
    }
    a {
      text-decoration: none;
    }

    .container {
      max-width: 1170px;
      margin: auto;
      padding: 0;
    }
    
    :host {
      display: block;
      height: 60px;
      background-color: #c23616;
      margin: 0;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 20px;
      font-weight: bold;
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 10;
    }
    
    :host a {
      color: white;
      text-transform: uppercase;
      margin-right: 30px;
      float: left;
    }
    
    .menu-nav {
      line-height: 60px;
    }
    
    :host a:hover {
      color: #fdcb6e;
    }
    
    .logo {
      height: 60px;
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
      a,
      p {
        font-size: 18px;
      }
    }
    
    </style>

      <div class="container">
          <a href="#">
            <img src="${img}" class="logo" alt="brand" />
          </a>
          <div class="menu-nav">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="clear"></div>
        </div>
      `;
  }
}

customElements.define("header-bar", HeaderBar);
