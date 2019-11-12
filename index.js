$(document).ready(function () {
    //wait for reading the document
    //starting
    let controller = new ScrollMagic.Controller();
    //set the moving in the panels
    let cleanAnimation = new TimelineMax()
    .fromTo('section.container--about', 1, { x: '100%' }, { x: '0%', ease: Linear.easeNone }) //right direction
    //create the scene to pin up and add the animation
    let scene = new ScrollMagic.Scene({
        triggerElement: '#container',
        triggerHook: 'onLeave',
        duration: '200%',
        reverse: 'true'
    })
        .setPin('#container')
        .setTween(cleanAnimation)
        .addTo(controller);
    
});
const tablet = window.matchMedia('screen and (max-width:768px');
const lapto = window.matchMedia('screen and (max-width:768px');
const container = document.querySelector('#container');
tablet.addListener( validation );

function validation(event) {
    if (event.matches) {
        console.log('responsive');
        container.id = 'containerResponsive';
        
    }else {
        container.id = 'container';
    }
}
