'use strict';
document.querySelectorAll('.dropdown-menu > div').forEach(el => {
    el.addEventListener('click', ev => {
        if (ev.target != null) {
            const element = ev.target;
            const navSelection = document.querySelector('.selected');
            // console.log( element );
            // console.log( element.getAttribute( 'id' ) );
            // console.log( element.className );
            navSelection.classList.remove('selected');
            element.classList.add('selected');
            selectProject(element);
        }
        ;
    });
});
document.querySelectorAll('.nav-content').forEach(el => {
    el.addEventListener('click', ev => {
        console.log(ev.target);
        let projects = document.getElementById('projects');
    });
});
const selectProject = (select) => {
    // console.log( 'select', select );
    document.querySelectorAll('.content').forEach(el => {
        // el.style.opacity = '0'; // make .content invisible
        el.style.display = 'none'; // make .content invisible
    });
    let showProject = select.getAttribute('id')?.split('-')[1];
    let sampleProject = document.getElementById(showProject);
    let projects = document.getElementById('projects');
    if (sampleProject != null && projects != null) {
        projects.style.opacity = '1';
        sampleProject.style.display = 'initial';
    }
    ;
    // closeDropdown();
};
