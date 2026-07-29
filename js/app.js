/* =========================================
   APPLICATION INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* Register GSAP */
    if (typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined") {

        gsap.registerPlugin(ScrollTrigger);

    }

    /* =====================================
       LENIS SMOOTH SCROLL
    ===================================== */

    if (typeof Lenis !== "undefined") {

        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.2,
            infinite: false
        });

        if (typeof ScrollTrigger !== "undefined") {
            lenis.on("scroll", ScrollTrigger.update);
        }

        if (typeof gsap !== "undefined") {

            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });

            gsap.ticker.lagSmoothing(0);

        }

        window.portfolioLenis = lenis;

    }


    /* =====================================
       VANILLA TILT
    ===================================== */

    if (typeof VanillaTilt !== "undefined") {

        VanillaTilt.init(
            document.querySelectorAll(".glass-card, .project-showcase"),
            {
                max: 5,
                speed: 500,
                glare: true,
                "max-glare": 0.12
            }
        );

    }


    /* =====================================
       SCROLL PROGRESS
    ===================================== */

    const progress =
        document.querySelector(".scroll-progress");

    if (progress) {

        window.addEventListener("scroll", () => {

            const scrollTop = window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const percentage =
                documentHeight > 0
                    ? (scrollTop / documentHeight) * 100
                    : 0;

            progress.style.width = `${percentage}%`;

        });

    }

});