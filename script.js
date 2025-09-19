// Smooth scroll function (you can remove this old one if unused)
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Particles.js
particlesJS('particles-js', {
    particles: {
        number:{ value:80, density:{ enable:true, value_area:800 } },
        color:{ value:"#00d4ff" },
        shape:{ type:"circle" },
        opacity:{ value:0.5, random:true },
        size:{ value:3, random:true },
        line_linked:{ enable:true, distance:150, color:"#00d4ff", opacity:0.4, width:1 },
        move:{ enable:true, speed:2, direction:"none", random:false, straight:false, out_mode:"out" }
    },
    interactivity: {
        detect_on:"canvas",
        events:{ onhover:{ enable:true, mode:"repulse" }, onclick:{ enable:true, mode:"push" } },
        modes:{ repulse:{ distance:100 }, push:{ particles_nb:4 } }
    },
    retina_detect:true
});

// Fade-in effect for projects
window.addEventListener("scroll", () => {
    document.querySelectorAll(".project-card").forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 150); // staggered animation
        }
    });
});

// ✅ Smooth Scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});