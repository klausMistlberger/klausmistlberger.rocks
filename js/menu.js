'use strict';
document.addEventListener( 'click', ev => {
    const isDropdownButton = ev.target.matches( '[data-dropdown-button]' );
    if ( !isDropdownButton && ev.target.closest( '[data-dropdown]' ) != null ) return

    let currentDropdown;
    if ( isDropdownButton ) {
        currentDropdown = ev.target.closest( '[data-dropdown]' );
        currentDropdown.classList.toggle( 'active' );
    };

    document.querySelectorAll( '[data-dropdown].active' ).forEach( dropdown => {
        if ( dropdown === currentDropdown ) return;
        dropdown.classList.remove( 'active' );
    });
});

