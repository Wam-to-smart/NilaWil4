"use strict";

const body = document.body;

const loader = document.getElementById("loader");

const music = document.getElementById("music");

const musicToggle = document.getElementById("musicToggle");

const openButton = document.getElementById("openButton");

const typedText = document.getElementById("typedText");

const daysCounter = document.getElementById("daysCounter");

const navbar = document.querySelector("nav");

window.addEventListener("load", () => {

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1400);

});

let musicStarted = false;

if (music) {

    music.volume = 0.35;

}

function playMusic() {

    if (!music || musicStarted) return;

    music.play().catch(() => {});

    musicStarted = true;

    if (musicToggle) {

        musicToggle.textContent = "🔊";

    }

}

function toggleMusic() {

    if (!music) return;

    if (music.paused) {

        music.play().catch(() => {});

        if (musicToggle) {

            musicToggle.textContent = "🔊";

        }

    } else {

        music.pause();

        if (musicToggle) {

            musicToggle.textContent = "🔇";

        }

    }

}

if (musicToggle) {

    musicToggle.addEventListener("click", toggleMusic);

}

const letter = `Dear Nila,

I don't think I say this enough, but I truly appreciate you.

You have a way of making ordinary moments unforgettable.

Your smile, your kindness, your laugh, and even the smallest things about you have made memories I'll always treasure.

Pink will always remind me of you.

Every little hamster reminds me of your adorable personality. 🐰💖

Thank you for being exactly who you are.

No matter where life takes us, I hope you always remember how appreciated you are.

This little website could never fully express everything I feel, but I hope it reminds you just how special you are to me.

Love,

Tahmid ❤️`;

let typingStarted = false;

let letterIndex = 0;

function typeLetter() {

    if (!typedText) return;

    if (letterIndex >= letter.length) return;

    typedText.textContent += letter.charAt(letterIndex);

    letterIndex++;

    setTimeout(typeLetter, 28);

}

if (openButton) {

    openButton.addEventListener("click", () => {

        playMusic();

        if (!typingStarted) {

            typingStarted = true;

            typeLetter();

        }

        const letterSection = document.getElementById("letter");

        if (letterSection) {

            letterSection.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}

const relationshipDate = new Date("2025-10-26T00:00:00");

function updateCounter() {

    if (!daysCounter) return;

    const now = new Date();

    const diff = now - relationshipDate;

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor((totalSeconds % 86400) / 3600);

    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const seconds = totalSeconds % 60;

    daysCounter.innerHTML = `
        ${days} Days
        <br>
        <span style="font-size:18px;font-weight:400;">
            ${hours}h ${minutes}m ${seconds}s
        </span>
    `;

}

updateCounter();

setInterval(updateCounter, 1000);

console.log("✅ Part 1 Loaded");
const heartContainer = document.getElementById("hearts");

const starsContainer = document.getElementById("stars");

const sections = document.querySelectorAll(".glass");

const floatingIcons = [
    "💖",
    "💕",
    "💗",
    "❤️",
    "🌸",
    "✨",
    "🐰"
];

function createFloatingIcon() {

    if (!heartContainer) return;

    if (body.classList.contains("ending-active")) return;

    const icon = document.createElement("div");

    icon.className = "heart";

    icon.textContent =
        floatingIcons[Math.floor(Math.random() * floatingIcons.length)];

    icon.style.left =
        Math.random() * 100 + "vw";

    icon.style.fontSize =
        (18 + Math.random() * 22) + "px";

    icon.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    icon.style.opacity =
        (.35 + Math.random() * .55).toString();

    heartContainer.appendChild(icon);

    setTimeout(() => {

        icon.remove();

    }, 11000);

}

setInterval(createFloatingIcon, 220);

if (starsContainer) {

    for (let i = 0; i < 180; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "vw";

        star.style.top =
            Math.random() * 100 + "vh";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.opacity =
            Math.random().toString();

        starsContainer.appendChild(star);

    }

}

const cursorGlow = document.createElement("div");

cursorGlow.style.position = "fixed";
cursorGlow.style.width = "18px";
cursorGlow.style.height = "18px";
cursorGlow.style.borderRadius = "50%";
cursorGlow.style.background = "#ff69b4";
cursorGlow.style.filter = "blur(12px)";
cursorGlow.style.pointerEvents = "none";
cursorGlow.style.zIndex = "999999";
cursorGlow.style.opacity = ".75";
cursorGlow.style.left = "0";
cursorGlow.style.top = "0";
cursorGlow.style.transition = "transform .05s linear";

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", e => {

    cursorGlow.style.transform =
        `translate(${e.clientX - 9}px, ${e.clientY - 9}px)`;

});

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0px)";

        }

    });

}, {

    threshold: .15

});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(60px)";

    section.style.transition =
        "opacity .9s ease, transform .9s ease";

    revealObserver.observe(section);

});

console.log("✅ Part 2 Loaded");
const surpriseButton = document.getElementById("surpriseButton");

const secretMessage = document.getElementById("secretMessage");

if (surpriseButton && secretMessage) {

    surpriseButton.addEventListener("click", () => {

        secretMessage.style.display = "block";

        secretMessage.animate([

            {
                opacity: 0,
                transform: "translateY(30px)"
            },

            {
                opacity: 1,
                transform: "translateY(0)"
            }

        ], {

            duration: 900,
            fill: "forwards",
            easing: "ease"

        });

    });

}

setInterval(() => {

    if (!openButton) return;

    openButton.animate([

        {
            transform: "scale(1)"
        },

        {
            transform: "scale(1.06)"
        },

        {
            transform: "scale(1)"
        }

    ], {

        duration: 1500

    });

}, 3500);

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 120) {

        navbar.style.background = "rgba(255,255,255,.88)";

        navbar.style.backdropFilter = "blur(18px)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

    }

    else {

        navbar.style.background =
            "rgba(255,255,255,.28)";

        navbar.style.boxShadow = "none";

    }

});

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.left = "0";
progressBar.style.top = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.background =
    "linear-gradient(to right,#ff5fa8,#ff97cb)";
progressBar.style.zIndex = "999999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width =
        (scrollTop / scrollHeight) * 100 + "%";

});

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target =
            document.querySelector(link.getAttribute("href"));

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML = `
        Made with all my heart ❤️
        <br><br>
        Thank you for being you.
        <br><br>
        Love,
        <br>
        Tahmid 💖
    `;

}

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
`);
const endingSection =
    document.getElementById("ending");

const endingLines =
    document.querySelectorAll(".ending-line");

const endingSignature =
    document.querySelector(".ending-signature");

let endingTimers = [];

function clearEndingTimers() {

    endingTimers.forEach(timer => clearTimeout(timer));

    endingTimers = [];

}

function resetEnding() {

    if (!endingSection) return;

    clearEndingTimers();

    body.classList.remove("ending-active");

    endingSection.classList.remove("is-active");

    endingLines.forEach(line => {

        line.style.opacity = "0";

        line.style.transform = "translateY(40px)";

    });

    if (endingSignature) {

        endingSignature.classList.remove("is-visible");

        endingSignature.style.opacity = "0";

        endingSignature.style.transform =
            "translateY(30px) scale(.95)";

    }

}

function playEnding() {

    if (!endingSection) return;

    clearEndingTimers();

    body.classList.add("ending-active");

    endingSection.classList.add("is-active");

    endingLines.forEach(line => {

        line.style.opacity = "0";

        line.style.transform = "translateY(40px)";

    });

    if (endingSignature) {

        endingSignature.classList.remove("is-visible");

        endingSignature.style.opacity = "0";

        endingSignature.style.transform =
            "translateY(30px) scale(.95)";

    }

    endingLines.forEach((line, index) => {

        const timer = setTimeout(() => {

            line.style.transition =
                "opacity .9s ease, transform .9s ease";

            line.style.opacity = "1";

            line.style.transform =
                "translateY(0)";

        }, index * 500);

        endingTimers.push(timer);

    });

    const signatureDelay =
        endingLines.length * 500 + 1200;

    endingTimers.push(

        setTimeout(() => {

            if (!endingSignature) return;

            endingSignature.classList.add("is-visible");

            endingSignature.style.opacity = "1";

            endingSignature.style.transform =
                "translateY(0) scale(1)";

        }, signatureDelay)

    );

}

const endingObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            playEnding();

        }

        else {

            resetEnding();

        }

    });

}, {

    threshold: 0.45

});

if (endingSection) {

    endingObserver.observe(endingSection);

}

resetEnding();

console.log("✅ Part 4A Loaded");
let currentEndingLine = 0;

function revealEndingLine() {

    if (currentEndingLine >= endingLines.length) {

        if (endingSignature) {

            endingSignature.classList.add("is-visible");

            endingSignature.animate([

                {
                    opacity: 0,
                    transform: "translateY(30px) scale(.9)"
                },

                {
                    opacity: 1,
                    transform: "translateY(0) scale(1)"
                }

            ], {

                duration: 1200,
                fill: "forwards",
                easing: "ease-out"

            });

        }

        if (typeof createHeartBurst === "function") {

            setTimeout(createHeartBurst, 1200);

        }

        return;

    }

    const line = endingLines[currentEndingLine];

    line.animate([

        {
            opacity: 0,
            transform: "translateY(35px)",
            filter: "blur(10px)"
        },

        {
            opacity: 1,
            transform: "translateY(0)",
            filter: "blur(0px)"
        }

    ], {

        duration: 900,
        easing: "ease-out",
        fill: "forwards"

    });

    line.style.opacity = "1";

    line.style.transform = "translateY(0)";

    currentEndingLine++;

    endingTimers.push(

        setTimeout(

            revealEndingLine,

            700

        )

    );

}

const originalPlayEnding = playEnding;

playEnding = function () {

    originalPlayEnding();

    currentEndingLine = 0;

    endingLines.forEach(line => {

        line.style.opacity = "0";

        line.style.transform = "translateY(35px)";

    });

    if (endingSignature) {

        endingSignature.classList.remove("is-visible");

        endingSignature.style.opacity = "0";

    }

    endingTimers.push(

        setTimeout(

            revealEndingLine,

            500

        )

    );

};

const originalResetEnding = resetEnding;

resetEnding = function () {

    originalResetEnding();

    currentEndingLine = 0;

    endingLines.forEach(line => {

        line.getAnimations().forEach(animation => animation.cancel());

        line.style.opacity = "0";

        line.style.transform = "translateY(35px)";

    });

    if (endingSignature) {

        endingSignature.getAnimations().forEach(animation => animation.cancel());

        endingSignature.classList.remove("is-visible");

        endingSignature.style.opacity = "0";

        endingSignature.style.transform =
            "translateY(30px)";

    }

};

console.log("✅ Part 4B Loaded");
const messageShell =
    document.querySelector(".ending-message-shell");

let sparkleInterval;

function createHeartBurst() {

    if (!messageShell) return;

    const icons = [
        "💖",
        "💕",
        "💗",
        "❤️",
        "✨",
        "🌸"
    ];

    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "ending-particle";

        particle.textContent =
            icons[Math.floor(Math.random() * icons.length)];

        particle.style.left = "50%";

        particle.style.top = "50%";

        particle.style.setProperty(

            "--drift-x",

            (Math.random() * 420 - 210) + "px"

        );

        particle.style.setProperty(

            "--drift-y",

            (-100 - Math.random() * 260) + "px"

        );

        particle.style.fontSize =
            (18 + Math.random() * 18) + "px";

        messageShell.appendChild(particle);

        particle.addEventListener(

            "animationend",

            () => particle.remove()

        );

    }

}

function startSparkles() {

    stopSparkles();

    sparkleInterval = setInterval(() => {

        if (!endingSection) return;

        if (!endingSection.classList.contains("is-active"))
            return;

        const sparkle =
            document.createElement("div");

        sparkle.textContent = "✨";

        sparkle.style.position = "absolute";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.fontSize =
            (10 + Math.random() * 12) + "px";

        sparkle.style.pointerEvents = "none";

        sparkle.style.opacity = ".9";

        sparkle.style.zIndex = "8";

        sparkle.style.transition =
            "2.2s ease";

        endingSection.appendChild(sparkle);

        requestAnimationFrame(() => {

            sparkle.style.transform =
                `translateY(${-40 - Math.random()*60}px)
                 scale(${0.5 + Math.random()})`;

            sparkle.style.opacity = "0";

        });

        setTimeout(() => {

            sparkle.remove();

        }, 2200);

    }, 180);

}

function stopSparkles() {

    if (sparkleInterval) {

        clearInterval(sparkleInterval);

        sparkleInterval = null;

    }

}

const previousPlayEnding = playEnding;

playEnding = function () {

    previousPlayEnding();

    startSparkles();

    endingTimers.push(

        setTimeout(() => {

            createHeartBurst();

        }, endingLines.length * 700 + 1800)

    );

};

const previousResetEnding = resetEnding;

resetEnding = function () {

    previousResetEnding();

    stopSparkles();

    document
        .querySelectorAll(".ending-particle")
        .forEach(particle => particle.remove());

};
const waves =
    document.querySelectorAll(".ending-waves span");

let waveOffset = 0;

function animateWaves() {

    waveOffset += 0.02;

    waves.forEach((wave, index) => {

        const x =
            Math.sin(waveOffset + index) * 30;

        wave.style.transform =
            `translateX(${x}px)`;

    });

    requestAnimationFrame(animateWaves);

}

animateWaves();

const sun =
    document.querySelector(".ending-sun");

let sunPulse = 0;

function animateSun() {

    if (sun) {

        sunPulse += 0.015;

        const scale =
            1 + Math.sin(sunPulse) * 0.04;

        const glow =
            60 + Math.sin(sunPulse) * 25;

        sun.style.transform =
            `translateX(-50%) scale(${scale})`;

        sun.style.boxShadow =
            `0 0 ${glow}px rgba(255,210,120,.65)`;

    }

    requestAnimationFrame(animateSun);

}

animateSun();

const water =
    document.querySelector(".ending-water");

let shimmer = 0;

function animateWater() {

    if (water) {

        shimmer += 0.01;

        const brightness =
            0.9 + Math.sin(shimmer) * 0.08;

        water.style.filter =
            `brightness(${brightness})`;

    }

    requestAnimationFrame(animateWater);

}

animateWater();



window.addEventListener("scroll", () => {

    if (!endingSection) return;

    const rect =
        endingSection.getBoundingClientRect();

    const visible =
        rect.top <
        window.innerHeight * 0.55;

    if (navbar) {

        if (visible) {

            navbar.classList.add("is-hidden");

        }

        else {

            navbar.classList.remove("is-hidden");

        }

    }

    if (footer) {

        footer.style.transition =
            "opacity .8s ease";

        footer.style.opacity =
            visible ? ".35" : "1";

    }

});

window.addEventListener("beforeunload", () => {

    stopSparkles();

    clearEndingTimers();

});

console.log("✅ Part 5B Loaded");