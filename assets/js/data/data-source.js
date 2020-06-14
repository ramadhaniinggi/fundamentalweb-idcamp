class DataSource {
  // static supaya nda buat lagi instance
  static searchCategory(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}
    `)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} category is not found`);
        }
      });
  }
}

export default DataSource;
