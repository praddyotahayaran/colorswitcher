// ********* NAVBAR ************

const hamburgerMenu = document.querySelector(".hamburgerMenu")
const navMenu = document.querySelector('.navMenu');

hamburgerMenu.addEventListener('click', function () {
    navMenu.classList.toggle('active');
})

// ******* SWITCH THEME ***********
const colorSwitchBtnEl = document.querySelector('.colorSwitchBtn');
const colorThemesEl = document.querySelector('.colorThemes');
const themesEl = document.querySelectorAll('.themes')


colorSwitchBtnEl.onclick = () => {
    colorThemesEl.classList.toggle('ativated')
}


themesEl.forEach(color => {
    color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--mainColor', dataColor)
    })
})