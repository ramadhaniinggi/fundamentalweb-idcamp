class ExploreBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  //   setter utk fungsi event pada button
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  //   getter utk mendapatkan value dari input
  get value() {
    return this.shadowDOM.querySelector(".search").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .container {
      max-width: 1170px;
      margin: auto;
      padding: 0;
    }
    :host {
      display: block;
      padding-top: 60px;
    }
    .explore-item {
      box-shadow: 0px 5px 6px 0px grey;
      text-align: center;
      padding: 40px 20px 20px 20px;
      background-color: #f5cd79;
    }
    
    .search,
    .btn-search {
      height: 50px;
      padding: 10px;
      margin: 0 5px;
      border-radius: 4px;
      font-family: "PatrickHand-Regular";
      font-size: 20px;
    }
    
    .search {
      width: 400px;
      border: 1px solid #bdc3c7;
    }
    
    .btn-search {
      color: white;
      background-color: #c23616;
      border: none;
      cursor: pointer;
    }

    @media all and (max-width: 1024px) {
      .container,
      footer {
        padding: 0 40px;
      }
    }

    @media all and (max-width: 425px) {
      .search {
        width: 150px;
      }
      .search,
      .btn-search {
        font-size: 16px;
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
          <div class="explore-item">
            <input
              class="search"
              type="search"
              placeholder="Search by category"
            />
            <button class="btn-search" type="submit">Search</button>
          </div>
        </div>
        `;

    this.shadowDOM
      .querySelector(".btn-search")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("explore-bar", ExploreBar);
