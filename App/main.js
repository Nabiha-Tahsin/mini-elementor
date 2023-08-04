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

/**
 * heading From Textarea
 */

const getHeading = document.querySelector('.title textarea');
const heading_title = document.querySelector('.heading-title h2');

//If If Textarea Alredy Have a Value 
heading_title.innerHTML = getHeading.value;

//After User Put a Value
getHeading.oninput = () => {
    const headingValue = getHeading.value;
    heading_title.innerHTML = headingValue;
}


/**
 * Heading Color
 */

const color = document.querySelector('.color input');

color.oninput = () => {
    const heading_color = color.value;
    heading_title.style.color = heading_color;
}



/**
 * Heading Font Size
 */

const fontSize = document.querySelector('.range  input.rg');
const fontSizeShow = document.querySelector('.range  input.fz-value');




fontSize.oninput = () => {
    const heading_fz = fontSize.value;

    fontSizeShow.value = fontSize.value;
    
    heading_title.style.fontSize = `${heading_fz}px`;
}



/**
 * Heading Font Family
 */

const font = document.querySelector('.font select');


font.onclick = () => {
    const fontType = font.value;

    heading_title.style.fontFamily = fontType;
    console.log(fontType);
};


