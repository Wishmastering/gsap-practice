const hamburger = document.querySelector('.hamburger')

const lineOne = hamburger.querySelector('.line-one')
const lineTwo = hamburger.querySelector('.line-two')
const lineThree = hamburger.querySelector('.line-three')

const lines = [lineOne, lineTwo, lineThree]

const tlm = new TimelineMax({});

const toggleMenu = new TimelineMax({paused: true, reversed: true})

toggleMenu
    .to(lineTwo, .125, {scaleX:0}, 0)
    .to(lineOne,  .125, {rotation:45, transformOrigin: "50% 50%", y: 8}, "cross")
    .to(lineThree, .125, {rotation:-45, transformOrigin: "50% 50%", y: -8}, "cross" );

    hamburger.addEventListener('click', _=>{
        hamburger.classList.toggle('js-x');
        toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse()
    })

// ABAJO ANIMACION CON STAGGER para mover las lineas 

hamburger.addEventListener('mouseenter', _ =>{
    if(hamburger.classList.contains('js-x')){
        return
    }
    tlm.staggerTo(lines,  .25, {scaleX: 1.5, repeat: 1, yoyo:true}, 0.1)
})


// ANIMACION PRUEBA  

// gsap.from(hamburger, {duration: 10, x: 50} )


// ABAJO ES SIN USAR STAGGER

// hamburger.addEventListener('mouseenter', _ =>{
//     tlm
//         .to(lineOne, {duration: .25, scaleX: 1.5})
//         .to(lineOne, {duration: .25, scaleX: .75})
//         .to(lineOne, {duration: .25, scaleX: 1})
//         .to(lineTwo, {duration: .25, scaleX: 1.5})
//         .to(lineTwo, {duration: .25, scaleX: .75})
//         .to(lineTwo, {duration: .25, scaleX: 1})
//         .to(lineThree, {duration: .25, scaleX: 1.5})
//         .to(lineThree, {duration: .25, scaleX: .75})
//         .to(lineThree, {duration: .25, scaleX: 1})
// })


