'use strict';
document.querySelectorAll( '.dropdown-menu > div' ).forEach( el => {
    el.addEventListener( 'click', ev => {
        if ( ev.target != null ) {
            const element = ev.target as HTMLElement;
            const navSelection = document.querySelector( '.selected' ) as HTMLElement;

            // console.log( element );
            // console.log( element.getAttribute( 'id' ) );
            // console.log( element.className );
            
            navSelection.classList.remove( 'selected' );
            element.classList.add( 'selected' );
            selectProject( element );
        };
    });
});

document.querySelectorAll( '.nav-content' ).forEach( el => {
    el.addEventListener( 'click', ev => {
        console.log( ev.target );
        let projects = document.getElementById( 'projects' as string );

    });
});

const selectProject = (select: HTMLElement) => {
    // console.log( 'select', select );
    document.querySelectorAll<HTMLElement>( '.content' ).forEach( el => {
        // el.style.opacity = '0'; // make .content invisible
        el.style.display = 'none'; // make .content invisible
    });

    let showProject = select.getAttribute( 'id' )?.split( '-' )[1];
    let sampleProject = document.getElementById( showProject as string );
    let projects = document.getElementById( 'projects' as string );
   
    if ( sampleProject != null && projects != null ) {
        projects.style.opacity = '1';
        sampleProject.style.display = 'initial';
    }
    ;
    // closeDropdown();
};

