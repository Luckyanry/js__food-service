import menu from '../js/menu.json';
import menuItem from '../templates/menu.hbs';

// console.log('menu :>> ', menu);
// console.log('menuItem :>> ', menuItem);

const list = document.querySelector('.js-menu');
const listItem = menuItem(menu);
console.log(listItem);
list.insertAdjacentHTML('beforeend', listItem);
