/* ==========================================
        script.js (Part 1)
        For Nila 💖
========================================== */

// ---------------------------
// Loader
// ---------------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 1800);

});

// ---------------------------
// Elements
// ---------------------------

const music = document.getElementById("music");

const musicToggle = document.getElementById("musicToggle");

const openButton = document.getElementById("openButton");

const typedText = document.getElementById("typedText");

const counter = document.getElementById("daysCounter");

// ---------------------------
// Music
// ---------------------------

music.volume = 0.35;

let musicStarted = false;

function startMusic() {

    if (musicStarted) return;

    music.play().catch(() => {});

    musicStarted = true;

    musicToggle.innerHTML = "🔊";

}

musicToggle.addEventListener("click", () => {

    if (music.paused) {

        music.play().catch(() => {});

        musicToggle.innerHTML = "🔊";

    }

    else {

        music.pause();

        musicToggle.innerHTML = "🔇";

    }

});

// ---------------------------
// Letter
// ---------------------------

const letter = `Dear Nila,

I don't think I say this enough, but I truly appreciate you.

You have this incredible way of making ordinary moments feel special.

Your smile, your kindness, your laugh, and even the smallest things about you have made memories I'll never forget.

Every conversation with you is something I look forward to.

Thank you for always being yourself.

Pink will always remind me of you.

Every little hamster I see reminds me of your adorable personality. 🐹💖

No matter where life takes us, I hope you always remember how truly amazing you are.

You deserve to be appreciated every single day.

This website is only a tiny reminder of how thankful I am that I met you.

Thank you for being you.

Love,

Tahmid ❤️`;

let currentCharacter = 0;

let typingStarted = false;

function typeWriter() {

    if (currentCharacter >= letter.length)
        return;

    typedText.textContent +=
        letter.charAt(currentCharacter);

    currentCharacter++;

    setTimeout(typeWriter, 32);

}

// ---------------------------
// Open Button
// ---------------------------

openButton.addEventListener("click", () => {

    document.getElementById("letter").scrollIntoView({

        behavior: "smooth"

    });

    startMusic();

    if (!typingStarted) {

        typingStarted = true;

        typeWriter();

    }

});

// ---------------------------
// Days Counter
// ---------------------------

const startDate =
    new Date("2025-10-26T00:00:00");

function updateCounter() {

    const now = new Date();

    const difference =
        now - startDate;

    const totalDays =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const totalHours =
        Math.floor(
            difference /
            (1000 * 60 * 60)
        );

    const totalMinutes =
        Math.floor(
            difference /
            (1000 * 60)
        );

    const totalSeconds =
        Math.floor(
            difference /
            1000
        );

    counter.innerHTML = `
        ${totalDays} Days
        <br>
        <span style="font-size:20px;font-weight:400;">
            ${totalHours.toLocaleString()} Hours
            <br>
            ${totalMinutes.toLocaleString()} Minutes
            <br>
            ${totalSeconds.toLocaleString()} Seconds
        </span>
    `;

}

updateCounter();

setInterval(updateCounter, 1000);
/* ==========================================
        script.js (Part 2)
        For Nila 💖
========================================== */

// ---------------------------
// Floating Hearts & Hamsters
// ---------------------------

const heartContainer = document.getElementById("hearts");

const icons = [
    "💖",
    "💕",
    "💗",
    "💝",
    "✨",
    "🌸",
    "🐹"
];

function createFloatingIcon() {

    if (body.classList.contains("ending-active")) {

        return;

    }

    const icon = document.createElement("div");

    icon.classList.add("heart");

    icon.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];

    icon.style.left =
        Math.random() * 100 + "vw";

    icon.style.fontSize =
        (18 + Math.random() * 22) + "px";

    icon.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    icon.style.opacity =
        0.45 + Math.random() * 0.5;

    heartContainer.appendChild(icon);

    setTimeout(() => {

        icon.remove();

    }, 10000);

}

setInterval(createFloatingIcon, 220);

// ---------------------------
// Stars
// ---------------------------

const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

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

    stars.appendChild(star);

}

const endingObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            setEndingState(true);

        } else {

            setEndingState(false);

        }

    });

}, {

    threshold: 0.45

});

endingObserver.observe(endingSection);

// ---------------------------
// Cursor Glow
// ---------------------------

const cursorGlow = document.createElement("div");

cursorGlow.style.position = "fixed";
cursorGlow.style.width = "18px";
cursorGlow.style.height = "18px";
cursorGlow.style.borderRadius = "50%";
cursorGlow.style.background = "#ff5fa8";
cursorGlow.style.filter = "blur(10px)";
cursorGlow.style.pointerEvents = "none";
cursorGlow.style.zIndex = "999999";
cursorGlow.style.opacity = ".75";

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", e => {

    cursorGlow.style.left =
        (e.clientX - 9) + "px";

    cursorGlow.style.top =
        (e.clientY - 9) + "px";

});

// ---------------------------
// Reveal Sections
// ---------------------------

const sections =
    document.querySelectorAll(".glass");

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0px)";

            }

        });

    }, {

        threshold: 0.15

    });

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(70px)";

    section.style.transition =
        "all 1s ease";

    observer.observe(section);

});

// ---------------------------
// Surprise Message
// ---------------------------

const surpriseButton =
    document.getElementById("surpriseButton");

const secretMessage =
    document.getElementById("secretMessage");

if (surpriseButton && secretMessage) {

    surpriseButton.addEventListener("click", () => {

        secretMessage.style.display = "block";

        secretMessage.animate(

            [

                {
                    opacity: 0,
                    transform: "translateY(30px)"
                },

                {
                    opacity: 1,
                    transform: "translateY(0px)"
                }

            ],

            {

                duration: 900,
                fill: "forwards"

            }

        );

    });

}

// ---------------------------
// Hero Button Pulse
// ---------------------------

setInterval(() => {

    openButton.animate(

        [

            {
                transform: "scale(1)"
            },

            {
                transform: "scale(1.08)"
            },

            {
                transform: "scale(1)"
            }

        ],

        {

            duration: 1400

        }

    );

}, 3500);

// ---------------------------
// Navbar Fade
// ---------------------------

const navbar =
    document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 150) {

        navbar.style.background =
            "rgba(255,255,255,.85)";

        navbar.style.backdropFilter =
            "blur(18px)";

    }

    else {

        navbar.style.background =
            "rgba(255,255,255,.28)";

    }

});

// ---------------------------
// Scroll Progress Bar
// ---------------------------

const progress =
    document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.width = "0%";
progress.style.zIndex = "999999";
progress.style.background =
    "linear-gradient(to right,#ff5fa8,#ff8fc8)";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progress.style.width =
        (scrollTop / height) * 100 + "%";

});

// ---------------------------
// Footer
// ---------------------------

const footer =
    document.querySelector("footer");

footer.innerHTML = `

Made with all my heart ❤️<br>

Thank you for being you.<br><br>

Love,<br>

Tahmid 💖

`;

// ---------------------------
// Console Easter Egg
// ---------------------------

console.clear();

console.log(`

███████╗ ██████╗ ██████╗ 
██╔════╝██╔═══██╗██╔══██╗
█████╗  ██║   ██║██████╔╝
██╔══╝  ██║   ██║██╔══██╗
██║     ╚██████╔╝██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═╝

        💖 FOR NILA 💖

If you're reading this...

I hope this website made you smile.

❤️

`);g