// =========================================
// GSAP CONFIG
// =========================================

gsap.registerPlugin(ScrollTrigger);

// =========================================
// HERO INTRO
// =========================================

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});

heroTimeline

.from(".hero-label", {
    opacity: 0,
    y: 30,
    duration: 0.6
})

.from(".hero h1", {
    opacity: 0,
    y: 80,
    duration: 1
}, "-=.2")

.from(".hero-description", {
    opacity: 0,
    y: 40,
    duration: .8
}, "-=.5")

.from(".hero-buttons", {
    opacity: 0,
    y: 40,
    duration: .8
}, "-=.5")

.from(".hero-image", {
    opacity: 0,
    scale: .92,
    duration: 1.2
}, "-=.8")

.from(".scroll-indicator", {
    opacity: 0,
    y: 20,
    duration: .6
}, "-=.4");


// =========================================
// FADE UP
// =========================================

gsap.utils.toArray(".fade-up").forEach((item)=>{

    gsap.from(item,{

        opacity:0,

        y:80,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{
            trigger:item,
            start:"top 85%"
        }

    });

});


// =========================================
// FADE LEFT
// =========================================

gsap.utils.toArray(".fade-left").forEach((item)=>{

    gsap.from(item,{

        opacity:0,

        x:-100,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{
            trigger:item,
            start:"top 85%"
        }

    });

});


// =========================================
// FADE RIGHT
// =========================================

gsap.utils.toArray(".fade-right").forEach((item)=>{

    gsap.from(item,{

        opacity:0,

        x:100,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{
            trigger:item,
            start:"top 85%"
        }

    });

});


// =========================================
// SCALE
// =========================================

gsap.utils.toArray(".scale-in").forEach((item)=>{

    gsap.from(item,{

        opacity:0,

        scale:.8,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{
            trigger:item,
            start:"top 85%"
        }

    });

});


// =========================================
// PARALLAX IMAGE
// =========================================

gsap.to(".hero-image",{

    y:-60,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        scrub:true

    }

});


// =========================================
// STORY PARALLAX
// =========================================

gsap.utils.toArray(".project-image").forEach((img)=>{

    gsap.to(img,{

        y:-80,

        ease:"none",

        scrollTrigger:{

            trigger:img,

            scrub:true

        }

    });

});