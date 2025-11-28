let menu = document.querySelector('#menu-icon');
let list = document.querySelector('.list');

const sr = ScrollReveal ({
    distance: '65px',
    duratiom: 2600,
    delay: 4500,
    reset: true
});

sr.reveal ('.f1-text', {delay:200, origin:'top'});
sr.reveal ('f1-img', {delay:450, origin:'top'});
sr.reveal ('.icons', {delay:500, origin:'left'});
sr.reveal ('.sc-down', {delay:500, origin:'right'});
sr.reveal ('sc-two', {delay:500, origin:'right'});