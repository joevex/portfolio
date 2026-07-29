const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

let particles = [];
const mouse = { x: null, y: null };

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

class Particle {

    constructor() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = (Math.random() - .5) * .3;
        this.vy = (Math.random() - .5) * .3;

        this.size = 2;

    }

    update() {

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = "#5EA2FF";

        ctx.fill();

    }

}

for (let i = 0; i < 90; i++) {

    particles.push(new Particle());

}

function connect() {

    for (let a = 0; a < particles.length; a++) {

        for (let b = a; b < particles.length; b++) {

            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;

            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {

                ctx.beginPath();

                ctx.strokeStyle = `rgba(94,162,255,${1-distance/120})`;

                ctx.lineWidth = .5;

                ctx.moveTo(particles[a].x, particles[a].y);

                ctx.lineTo(particles[b].x, particles[b].y);

                ctx.stroke();

            }

        }

    }

}

function mouseEffect(){

    if(mouse.x===null) return;

    particles.forEach(p=>{

        const dx=p.x-mouse.x;
        const dy=p.y-mouse.y;

        const dist=Math.sqrt(dx*dx+dy*dy);

        if(dist<140){

            p.x+=dx*.01;
            p.y+=dy*.01;

        }

    });

}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        p.update();

        p.draw();

    });

    mouseEffect();

    connect();

    requestAnimationFrame(animate);

}

animate();