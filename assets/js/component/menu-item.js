class MenuItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  set item(item) {
    //   properti dari objek disimpan
    this._item = item;
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
    <style>
    p,
h3 {
  font-size: 20px;
}
    .menu-img {
      height: 300px;
      width: 300px;
      box-shadow: 0 2px 6px 0 grey;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    
    :host {
      display: block;
      float: left;
      width: 50%;
      padding: 20px 0 60px 0;
      margin: 20px 0;
      border-bottom: 1px solid white;
    }

    @media all and (max-width: 1024px) {
      :host {
        width: 100%;
      }
    }

    @media all and (max-width: 768px) {
      :host {
        width: 100%;
      }
    }

    @media all and (max-width: 425px) {
      .menu-img {
        height: 200px;
        width: 200px;
      }
    }
    </style>
    <h3> ${this._item.strMeal} </h3>
    <p> id meal ${this._item.idMeal} </p>
    <img class="menu-img" src="${this._item.strMealThumb}" alt="${this._item.strMeal}">
    `;
  }
}

customElements.define("menu-item", MenuItem);
