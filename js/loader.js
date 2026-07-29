/* =========================================
   PORTFOLIO LOADER
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.querySelector(".loader");

    if (!loader) {
        console.warn("Loader element not found.");
        return;
    }

    // Prevent scrolling while loader is visible
    document.body.classList.add("loading");

    // Minimum display time
    const minimumTime = 1800;

    // Wait until page assets are ready
    const startTime = performance.now();

    const hideLoader = () => {

        const elapsed = performance.now() - startTime;
        const remaining = Math.max(0, minimumTime - elapsed);

        setTimeout(() => {

            loader.classList.add("loader-hidden");

            document.body.classList.remove("loading");

            // Remove loader completely after animation
            setTimeout(() => {
                loader.remove();
            }, 800);

        }, remaining);
    };

    if (document.readyState === "complete") {
        hideLoader();
    } else {
        window.addEventListener("load", hideLoader, {
            once: true
        });
    }

    // Safety fallback
    setTimeout(() => {

        if (document.body.contains(loader)) {

            loader.classList.add("loader-hidden");
            document.body.classList.remove("loading");

            setTimeout(() => {
                if (document.body.contains(loader)) {
                    loader.remove();
                }
            }, 800);

        }

    }, 5000);

});