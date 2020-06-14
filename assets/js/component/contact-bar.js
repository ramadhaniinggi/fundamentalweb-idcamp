class ContactBar extends HTMLElement {
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

    
h2 {
  font-size: 30px;
}
    .container {
      max-width: 1170px;
      margin:0 auto;
      padding: 0;
    }
    :host {
      padding: 60px 0;
      display: block;
    }
    .contact-item {
      text-align: center;
      padding: 20px;
    }
    
    .contact-item h2 {
      text-transform: uppercase;
    }
    .contact-item input {
      font-family: "PatrickHand-Regular";
      display: block;
      height: 50px;
      width: 400px;
      margin: 20px auto;
      padding: 10px;
      font-size: 20px;
      border-radius: 4px;
    }
    
    .contact-item input[type="text"] {
      border: 1px solid #bdc3c7;
    }
    
    .btn-send {
      color: white;
      background-color: #ffb142;
      box-shadow: 0px 7px #cc8e35;
      border: none;
      cursor: pointer;
    }
    
    .btn-send:active {
      box-shadow: none;
      position: relative;
      top: 7px;
    }
    
    .btn-send:focus {
      outline: 0;
    }

      @media all and (max-width: 1024px) {
        .container,
        footer {
          padding: 0 40px;
        }
      }

      @media all and (max-width: 425px) {
        .contact-item input {
          width: 300px;
        }
      }

      @media all and (max-width: 375px) {
        .contact-item input {
          width: 250px;
        }
      }

      @media all and (max-width: 320px) {
        .container,
        footer {
          padding: 0 20px;
        }
        .contact-item input {
          width: 200px;
        }
      }
    
    
    </style>
    <div class="container">
          <div class="contact-item">
            <h2>Contact</h2>
            <input type="text" placeholder="Your name..." />
            <input type="text" placeholder="Your email..." />
            <input type="text" placeholder="Your message..." />
            <input class="btn-send" type="button" value="Send" />
          </div>
        </div>
        `;
  }
}

customElements.define("contact-bar", ContactBar);
