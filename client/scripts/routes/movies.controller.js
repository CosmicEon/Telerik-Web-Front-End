/* globals $ */

import { templateLoader } from 'templates';
import * as movieData from 'movieData';
import * as utils from 'utils';

const $mainContainer = $('#main-content');
const $mainNav = $('.main-paging-bottom');
const $mainAside = $('.aside-widget');
const $footer = $('footer');

const templateHome = 'home/movies';
const templateNav = 'home/nav';
const templateAside = 'home/aside';
const templateFooter = 'footer';
const returnSize = 11;

function getMoviesByCatAndSubcat(params) {
  const category = params.category;
  let subcategory = params.subcategory;
  if (typeof subcategory === 'undefined') {
    subcategory = ''; // only if category is given
  }


  Promise.all([
    templateLoader(templateHome),
    templateLoader(templateNav),
    templateLoader(templateAside),
    templateLoader(templateFooter),
    movieData.getByCategoryAndSubcategory(category, subcategory),
  ])
    .then(([home, nav, aside, footer, data]) => {
      const navMaxLength = Math.ceil(data.length / returnSize) + 1;
      const navData = data.slice(0, navMaxLength);

      data.forEach((item, index) => {
        if (index === 1) {
          item.description = item.description.slice(0, 76);
          return item;
        }
        item.description = item.description.slice(0, 31);
        return item;
      });

      $mainContainer.html(home(data));
      $mainNav.html(nav(navData));
      $mainAside.html(aside); // data can be injected here
      $footer.html(footer); // data can be injected here

      utils.insertAside();
    })
    .catch((err) => {
      return console.log(err);
    });
}

export {
  getMoviesByCatAndSubcat,
};
