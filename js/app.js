const menuSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuElements = document.querySelectorAll('.menu li');
    var menu_open = false;

    burger.addEventListener('click', ()=>{
        // slide open the menu
        menu.classList.toggle('menu-active');

        // change burger shape
        burger.classList.toggle('menu-toggle');

        // slide elements
        menu_open = !menu_open;
        menuElements.forEach((element, index) =>{
            if(!menu_open){
                element.style.animation = '';
            }
            else{
                element.style.animation = `menuElementsAppear 0.5s ease forwards ${index/7 + 0.3}s`;
            }
        });
    });
}

menuSlide();
