class CategorySource {
  // static supaya nda buat lagi instance
  static showCategory() {
    return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(response => response.json())
      .then(responseJson => Promise.resolve(responseJson.categories));
  }
}

export default CategorySource;
