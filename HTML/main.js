/*=====MENU Show y Hidden====*/
/*const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-colse')

/*====Menu show=======*/
/*======valoidate if constant exists=====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*===menu hidding===*/
if(navClose){
    navClose.addEventListener('click', () =>{
       navMenu.classList.remove('show-menu') 
    })
}

/*======Remove menu mobile=======*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*========According Skills=======*/
const skillscontent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleskills(){
    let itemClass = this.parentNode.ClassName
    for(i = 0; i < skillsContaint.length; i++){
        skillscontent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.perentNode.className = 'skills__content skills__open'
    
    }
}
skillsHeader.forEach((eL) =>{
    eL.addEventListener('click', toggleskills)
})

/*==========Qualification Tabs========*/
const tabs = document.querySelectorAll('[data-target]'),
      tabconttents = document.querySelectorAll('[data-content]')

tabconttents.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabcontents.forEach(tabContents =>{
            tabcontent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/*----========Portfoliio swiper======*/

let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
  
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
