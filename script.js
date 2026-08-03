

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
const endingSection = document.getElementById("ending");
const endingMessageLines = Array.from(document.querySelectorAll(".ending-line"));
const endingSignature = document.querySelector(".ending-signature");
const nav = document.querySelector("nav");
const music = document.getElementById("music");
const body = document.body;
let endingSequenceTimers = [];

function ensureMusicPlaying() {

    if (!music) return;

    music.volume = 0.35;

    if (music.paused) {

        music.play().catch(() => {});

    }

}

function createFloatingIcon() {

    if (body.classList.contains("ending-active")) {

        return;

    }

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

function createEndingBurst() {

    const messageShell = document.querySelector(".ending-message-shell");
    const sectionRect = endingSection.getBoundingClientRect();
    const shellRect = messageShell.getBoundingClientRect();

    const centerX = shellRect.left + shellRect.width / 2 - sectionRect.left;
    const centerY = shellRect.top + shellRect.height / 2 - sectionRect.top;
    const particleCount = 24;

    for (let i = 0; i < particleCount; i++) {

        const particle = document.createElement("div");

        particle.className = "ending-particle";
        particle.innerHTML = ["♡", "🌅", "💖", "✨"][i % 4];

        const angle = (i / particleCount) * Math.PI * 2;
        const radius = 65 + Math.random() * 90;
        const driftX = Math.cos(angle) * radius;
        const driftY = Math.sin(angle) * radius;

        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        particle.style.setProperty("--drift-x", `${driftX}px`);
        particle.style.setProperty("--drift-y", `${driftY}px`);
        particle.style.fontSize = `${0.9 + Math.random() * 0.6}rem`;
        particle.style.animationDelay = `${Math.random() * 0.15}s`;

        endingSection.appendChild(particle);

    }

    setTimeout(() => {

        endingSection.querySelectorAll(".ending-particle").forEach((particle) => particle.remove());

    }, 3000);

}

function clearEndingSequence() {

    endingSequenceTimers.forEach((timer) => clearTimeout(timer));

    endingSequenceTimers = [];

    endingSignature.classList.remove("is-visible");

}

function setEndingState(active) {

    body.classList.toggle("ending-active", active);
    endingSection.classList.toggle("is-active", active);
    nav.classList.toggle("is-hidden", active);

    if (!active) {

        clearEndingSequence();

        return;

    }

    ensureMusicPlaying();

    endingSignature.classList.remove("is-visible");

    endingMessageLines.forEach((line, index) => {

        line.style.transitionDelay = `${0.1 + index * 0.16}s`;

    });

    endingSequenceTimers.push(setTimeout(() => {

        createEndingBurst();

    }, 2500));

    endingSequenceTimers.push(setTimeout(() => {

        endingSignature.classList.add("is-visible");

    }, 4600));

}

setInterval(createFloatingIcon, 250);

// ----------------------
// Twinkling Stars
// ----------------------

const starContainer = document.getElementById("stars");

for (let i = 0; i < 220; i++) {

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