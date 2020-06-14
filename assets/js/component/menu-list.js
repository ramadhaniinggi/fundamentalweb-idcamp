// karena menggunakan element menu-item yang ditulis di menu-item.js
import "./menu-item.js";
class MenuList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  // utk menetapkan properti this._meals
  set meals(meals) {
    this._meals = meals;
    this.render();
  }
  //   ketika pencarian tdk ditemukan
  renderError(message) {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.innerHTML += `<h3> ${message} </h3>`;
  }
  render() {
    this.shadowDOM.innerHTML = `<style>
    :host {
      display: block;
    }
    </style>`;
    //! parameter item itu berhubungan dengan yg di menu-item.js
    this._meals.forEach(item => {
      const menuItemElement = document.createElement("menu-item");
      menuItemElement.item = item;
      this.shadowDOM.appendChild(menuItemElement);
    });
  }
}

customElements.define("menu-list", MenuList);
