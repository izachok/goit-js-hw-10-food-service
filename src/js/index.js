import menuItemsTemplate from '../templates/menu-items.hbs';
import setupThemeSwither from './themeSwitch';

import dishes from '../data/menu.json';

const menuItemsContainer = document.querySelector('ul.js-menu');
menuItemsContainer.innerHTML = createMenuMarkup(dishes);

setupThemeSwither();

function createMenuMarkup(items) {
  return menuItemsTemplate(items);
}
