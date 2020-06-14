class CategoryBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="container">
          <div class="hero">
            <h1>What do you want to eat <span>?</span></h1>
            <p>We have the list that you need.</p>
            <a class="btn-explore" href="#explore">Explore</a>
          </div>

          <div class="category">
            <h2>Category</h2>
            <div class="flex-column">
              <div class="flex-row"></div>
            </div>
          </div>
        </div>
    `;
  }
}

customElements.define("category-bar", CategoryBar);
