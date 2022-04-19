'use strict';
document.addEventListener('click', ev => {
    if (ev != null && ev.target != null) {
        const element = ev.target;
        const isDropdownButton = element.matches('[data-dropdown-button]');
        let currentDropdown;
        if (isDropdownButton) {
            currentDropdown = element.closest('[data-dropdown]');
            if (currentDropdown != null)
                currentDropdown.classList.toggle('active');
        }
        ;
        document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
            if (dropdown === currentDropdown)
                return;
            dropdown.classList.remove('active');
        });
        document.querySelectorAll('.dropdown-bullet').forEach(el => {
            el.addEventListener('click', ev => {
                let dropdown = document.querySelector('[data-dropdown]');
                dropdown?.classList.remove('active');
            });
        });
    }
    ;
});
