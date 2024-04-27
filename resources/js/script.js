function menuDropdown(idMenu, image, idImage, clickOut = false) 
{
    var menu = document.getElementById(idMenu);
    var imagemMenuDash = document.getElementById(idImage);
    
    menu.classList.toggle('show');

    document.addEventListener('click', function(event) {
        if ( !clickOut && !menu.contains(event.target) && !imagemMenuDash.contains(event.target)) {
            menu.classList.remove('show');
            imagemMenuDash.setAttribute('src', image + 'arrow-left.svg');
        }
    });
    
    if (menu.classList.contains('show')) {
        imagemMenuDash.setAttribute('src', image + 'arrow-down.svg');
    } else {
        imagemMenuDash.setAttribute('src', image + 'arrow-left.svg');
    }
}

function menuHamburguer(idMenu, image, idImage, clickOut = false) 
{
    var menu = document.getElementById(idMenu);
    var imagemMenuDash = document.getElementById(idImage);
    
    menu.classList.toggle('show');

    document.addEventListener('click', function(event) {
        if ( !clickOut && !menu.contains(event.target) && !imagemMenuDash.contains(event.target)) {
            menu.classList.remove('show');
            imagemMenuDash.setAttribute('src', image + 'mobile-menu.svg');
        }
    });
    
    if (menu.classList.contains('show')) {
        imagemMenuDash.setAttribute('src', image + 'close.svg');
    } else {
        imagemMenuDash.setAttribute('src', image + 'mobile-menu.svg');
    }
}