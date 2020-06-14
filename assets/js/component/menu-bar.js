class MenuBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <div class="container">
          <div class="sub-menu">
            <menu-list></menu-list>
            <div class="clear"></div>
          </div>
        </div>
        `;
  }
}
customElements.define("menu-bar", MenuBar);
