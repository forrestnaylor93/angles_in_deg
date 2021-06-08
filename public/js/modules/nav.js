const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.navLinks');

    burger.addEventListener('click', ()=>{
        navLinks.classList.toggle('navActive');
        burger.classList.toggle('burgerActive');
    })
}


export{navSlide};