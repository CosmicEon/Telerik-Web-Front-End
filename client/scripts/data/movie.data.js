import * as requester from 'requester';

function getByCategory(category) {
  return requester.get(`/movies/category/${category}`);
}
function getByCategoryAndSubcategory(category, subcategory) {
  return requester.get(`/movies/category/${category}/${subcategory}`);
}

export {
  getByCategory,
  getByCategoryAndSubcategory,
};
