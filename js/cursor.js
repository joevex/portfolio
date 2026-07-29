const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

    cursor.animate({

        left:e.clientX+"px",

        top:e.clientY+"px"

    },{

        duration:120,

        fill:"forwards"

    });

});

document.querySelectorAll("a,button").forEach(el=>{

    el.addEventListener("mouseenter",()=>{

        cursor.classList.add("active");

    });

    el.addEventListener("mouseleave",()=>{

        cursor.classList.remove("active");

    });

});