'use strict';
// dropdown-bullets
document.querySelectorAll( '.dropdown-menu > div' ).forEach( el => {
    el.addEventListener( 'click', ev => {
        if ( ev.target != null ) {
            const element = ev.target as HTMLElement;
            const navSelection = document.querySelector( '.selected' ) as HTMLElement;
            // console.log( element );
            // console.log( element.getAttribute( 'id' ) );
            navSelection.classList.remove( 'selected' );
            element.classList.add( 'selected' );
            // console.log( element.className );
            selectProject( element );
        };
    }); // EvenListener
}); // qSA


const navContent = document.querySelectorAll<HTMLElement>( '.nav-content' );
const content = document.querySelectorAll<HTMLElement>( '.content' );
// console.log( navContent );
// console.log( content );

navContent.forEach( el => {
    // console.log(el.classList)
    el.addEventListener( 'click', ev => {
        let navTarget = ev.currentTarget as HTMLElement;
        let selector = navTarget.getAttribute( 'data-nav' );
        let sitenav = document.getElementById( selector as string );        
        let projects = document.getElementById( 'projects' );

        // console.log( 'navTarget', navTarget );
        // console.log( 'selector', selector );
        // console.log( 'sitenav', sitenav );

        content.forEach( el => {
            if ( el.id === selector ) return;
            el.style.display = 'none';
        });

        // change .content visibility 
        if ( sitenav != null && projects != null ) {
            projects.style.display = 'none';
            sitenav.style.display = 'flex';
            sitenav.classList.add( 'selected' );
        };

        // remove .selected from active dropdown-bullet
        let dropdownBullet = document.querySelector( '.dropdown-menu > .selected' )
        if ( dropdownBullet != null && selector != 'projects' ) {
            dropdownBullet.classList.remove( 'selected' );
        };
    }); // EventListener
}); // qSA nav-content

// change visibility of selected project 
const selectProject = (select: HTMLElement) => {
    document.querySelectorAll<HTMLElement>( '.content' ).forEach( el => {
        el.style.display = 'none'; // make .content invisible
    });

    document.querySelectorAll<HTMLElement>( '.content-element' ).forEach( el => {
        // console.log( el.classList );
        if ( !el.classList.contains( 'selected' ) ) {
            el.style.display = 'none';
        };
    });

    let projects = document.getElementById( 'projects' as string ); // select div id='projects' in DOM
    let showProject = select.getAttribute( 'id' )?.split( '-' )[1]; // create string for selector
    let sampleProject = document.getElementById( showProject as string ); // select project in dropdown
   
    if ( sampleProject != null && projects != null ) {
        projects.style.display = 'flex';
        projects.style.opacity = '1';
        sampleProject.style.display = 'initial';
        // sampleProject.classList.add( 'active' );
    };

}; // selectProject()
