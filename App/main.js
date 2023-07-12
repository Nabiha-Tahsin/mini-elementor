/**
 * For Content And Style Menu Tab
 */

const content = document.querySelector('.content')
const style_menu = document.querySelector('.style-menu')

const title = document.querySelector('.title');
const style = document.querySelector('.style');


content.onclick = (event) => { 
    style.style.display = 'none';
    title.style.display = 'block';
    content.style.borderBottom = '3px solid #000';
    style_menu.style.borderBottom = '3px solid transparent';
};

style_menu.onclick = (event) => { 
    style.style.display = 'block';
    title.style.display = 'none';
    content.style.borderBottom = '3px solid transparent';
    style_menu.style.borderBottom = '3px solid #000';
};



/**
 * If Click Pen Icon Show Typography Menu
 */

const menu_show = document.querySelector('.menu-show');
const typography_menu = document.querySelector('.typography-menu');


menu_show.onclick = (event) => { 
    typography_menu.style.display = 'block';
};





