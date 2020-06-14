import "../component/category-bar.js";
import CategorySource from "../data/category-source.js";

// import categories from "../data/categoryMenu-source.js";
const categoryMenu = () => {
  const itemElement = document.querySelector(".flex-row");

  const renderCategory = categories => {
    itemElement.innerHTML = "";
    categories.forEach(element => {
      const { strCategory, strCategoryThumb } = element;

      const itemSubElement = document.createElement("div");
      itemSubElement.setAttribute("class", "item");

      itemSubElement.innerHTML = `
          <img src="${strCategoryThumb}" alt="${strCategory}"/>
          <p> ${strCategory} </p>
          `;

      itemElement.appendChild(itemSubElement);
    });
  };
  CategorySource.showCategory().then(renderCategory);
};

export default categoryMenu;
