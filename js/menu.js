'use strict';
document.addEventListener('click', ev => {
    if (ev != null && ev.target != null) {
        const element = ev.target;
        const isDropdownButton = element.matches('[data-dropdown-button]');
        let currentDropdown;
        if (isDropdownButton) {
            currentDropdown = element.closest('[data-dropdown]');
            // console.log( currentDropdown );
            if (currentDropdown != null)
                currentDropdown.classList.toggle('active');
        }
        ;
        // change dropdown menu
        document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
            // console.log( dropdown );
            if (dropdown === currentDropdown)
                return;
            dropdown.classList.remove('active');
        });
        // close dropwdown menu
        document.querySelectorAll('.dropdown-bullet').forEach(el => {
            el.addEventListener('click', ev => {
                let dropdown = document.querySelector('[data-dropdown]');
                dropdown?.classList.remove('active');
            });
        });
    }
    ;
});
