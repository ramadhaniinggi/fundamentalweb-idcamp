import "regenerator-runtime";
import "./css/style.css";
import "./js/component/header-bar.js";
import "./js/component/category-bar.js";
import "./js/component/menu-bar.js";
import "./js/component/about-bar.js";
import "./js/component/contact-bar.js";

import categoryMenu from "./js/view/categoryMenu.js";
import main from "./js/view/main.js";
document.addEventListener("DOMContentLoaded", categoryMenu);
document.addEventListener("DOMContentLoaded", main);
