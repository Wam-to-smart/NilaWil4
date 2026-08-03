

// ----------------------
// Loading Screen
// ----------------------

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 1000);

    }, 1800);

});

// ----------------------
// Letter
// ----------------------

const letter = `Dear Nila,

I don't think I say this enough, but I truly appreciate you.

You have this incredible way of making ordinary moments feel special.

Your smile, your kindness, your laugh, and even the smallest things about you have made memories I'll never forget.

Every conversation with you is something I look forward to.

Thank you for being patient with me, for making me smile, and for simply being yourself.

Pink will always remind me of you.

Every little hamster I see reminds me of your adorable personality. 🐹💖

No matter where life takes us, I hope you always remember how truly amazing you are.

You deserve to be appreciated every single day.

This website is only a tiny reminder of how thankful I am that I met you.

Thank you for being you.

❤️`;

let index = 0;
let started = false;

function typeWriter() {

    if (index < letter.length) {

        document.getElementById("typedText").textContent += letter.charAt(index);

        index++;

        setTimeout(typeWriter, 32);

    }

}

// ----------------------
// Open Button
// ----------------------

const openButton = document.getElementById("openButton");

openButton.addEventListener("click", () => {

    document.getElementById("letter").scrollIntoView({

        behavior: "smooth"

    });

    if (!started) {

        started = true;

        typeWriter();

        const music = document.getElementById("music");

        music.volume = 0.35;

        music.play().catch(() => {});

    }

});

// ----------------------
// Days Since Meeting
// ----------------------

const startDate = new Date("2025-10-26T00:00:00");

function updateCounter() {

    const now = new Date();

    const difference = now - startDate;

    const totalDays = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    document.getElementById("daysCounter").textContent =
        totalDays + " Days";

}

updateCounter();

setInterval(updateCounter, 1000);

// ----------------------
// Surprise Button
// ----------------------

const surpriseButton = document.getElementById("surpriseButton");

surpriseButton.addEventListener("click", () => {

    const message = document.getElementById("secretMessage");

    message.style.display = "block";

    message.scrollIntoView({

        behavior: "smooth"

    });

});
/* =====================================
        script.js (Part 2)
===================================== */

// ----------------------
// Floating Hearts & Hamsters
// ----------------------

const heartContainer = document.getElementById("hearts");

function createFloatingIcon() {

    const icon = document.createElement("div");

    icon.classList.add("heart");

    const icons = [
        "💖",
        "💕",
        "💗",
        "💝",
        "🌸",
        "✨",
        "🐹"
    ];

    icon.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];

    icon.style.left =
        Math.random() * 100 + "vw";

    icon.style.fontSize =
        (20 + Math.random() * 24) + "px";

    icon.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    icon.style.opacity =
        0.5 + Math.random() * 0.5;

    heartContainer.appendChild(icon);

    setTimeout(() => {

        icon.remove();

    }, 10000);

}

setInterval(createFloatingIcon, 250);

// ----------------------
// Twinkling Stars
// ----------------------

const starContainer = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left =
        Math.random() * 100 + "vw";

    star.style.top =
        Math.random() * 100 + "vh";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    star.style.opacity =
        Math.random();

    starContainer.appendChild(star);

}

// ----------------------
// Cursor Glow
// ----------------------

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "18px";
glow.style.height = "18px";
glow.style.borderRadius = "50%";
glow.style.background = "#ff66b3";
glow.style.pointerEvents = "none";
glow.style.zIndex = "99999";
glow.style.opacity = ".65";
glow.style.filter = "blur(8px)";
glow.style.transition = "transform .05s linear";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX - 9 + "px";
    glow.style.top = e.clientY - 9 + "px";

});

// ----------------------
// Fade Sections In
// ----------------------

const sections = document.querySelectorAll(".glass");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "1s";

    observer.observe(section);

});

// ----------------------
// Hero Button Pulse
// ----------------------

setInterval(() => {

    const btn = document.getElementById("openButton");

    btn.animate([
        {
            transform: "scale(1)"
        },
        {
            transform: "scale(1.08)"
        },
        {
            transform: "scale(1)"
        }
    ], {
        duration: 1500
    });

}, 3000);

// ----------------------
// Footer Year
// ----------------------

const footer = document.querySelector("footer");

footer.innerHTML =
`
Made with ❤️ especially for Nilitoes<br>
By TaHMID<br><br>
${new Date().getFullYear()}
`;

// ----------------------
// Console Easter Egg
// ----------------------

console.log(`
========================================

        💖 FOR NILA 💖

If you're reading this...

You mean more to me than
this code could ever express.

🐹❤️

========================================
`);