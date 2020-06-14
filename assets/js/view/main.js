import "../component/explore-bar.js";
import "../component/menu-list.js";
import DataSource from "../data/data-source.js";
const main = () => {
  const inputSearch = document.querySelector("#explore");
  const menuListElement = document.querySelector("menu-list");

  const onButtonSearchClicked = () => {
    //krn callback diubah jd promise dan method diubah statis, jd pke .then utk resolve, .catch utk reject
    DataSource.searchCategory(inputSearch.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = results => {
    menuListElement.meals = results;
  };

  const fallbackResult = message => {
    menuListElement.renderError(message);
  };

  inputSearch.clickEvent = onButtonSearchClicked;
};

export default main;
