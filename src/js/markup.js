import menu from '../menu.json';
import menuItem from '../templates/menu.hbs';

const list = document.querySelector('.js-menu');

const listItem = menuItem(menu);

list.insertAdjacentHTML('beforeend', listItem);
