/Users/admin/happy-birthday/script.js
// --- Happy Birthday Script ---
// Соблюдены принципы DRY, KISS, SRP

document.addEventListener('DOMContentLoaded', () => {
    initializePageAnimations();
    initializeScrollNavigation();
    initializeGiftDownload();
    initializeFlowerEffects();
    initializeFlowerInteraction();
    injectDynamicStyles();
});

// --- Section Animations ---
function initializePageAnimations() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (entry.target.id === 'section2') animateWishCards();
                }
            });
        },
        { threshold: 0.3 }
    );
    sections.forEach(section => observer.observe(section));
}

function animateWishCards() {
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach((card, idx) => {
        setTimeout(() => {
            card.style.animation = 'slideIn 0.6s ease-out forwards';
        }, idx * 200);
    });
}

// --- Scroll Navigation ---
function initializeScrollNavigation() {
    const scrollHints = document.querySelectorAll('.scroll-hint');
    scrollHints.forEach((hint, idx) => {
        hint.addEventListener('click', () => {
            const nextSection = document.querySelector(`#section${idx + 2}`);
            if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown' || e.key === ' ') {
            e.preventDefault();
            scrollToSection(getCurrentSectionIndex() + 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            scrollToSection(getCurrentSectionIndex() - 1);
        }
    });
}

function getCurrentSectionIndex() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    for (let i = 0; i < sections.length; i++) {
        const top = sections[i].offsetTop;
        const bottom = top + sections[i].offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) return i;
    }
    return 0;
}

function scrollToSection(index) {
    const sections = document.querySelectorAll('.section');
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// --- Gift Download ---
function initializeGiftDownload() {
    const downloadBtn = document.getElementById('downloadGift');
    if (!downloadBtn) return;
    downloadBtn.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => { this.style.transform = ''; }, 150);
        window.open('HappyBirthday!.pdf', '_blank');
        showDownloadSuccess();
        triggerConfetti();
    });
}

function showDownloadSuccess() {
    const notification = document.createElement('div');
    notification.className = 'download-success';
    notification.innerHTML = '🎁 PDF подарок открыт! 🎉';
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-in forwards';
        setTimeout(() => {
            if (document.body.contains(notification)) document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// --- Confetti Animation ---
function triggerConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    if (!confettiContainer) return;
    const confettiEmojis = ['🎊', '✨', '🎉', '💫', '⭐'];
    for (let i = 0; i < 10; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.animationDelay = Math.random() * 2 + 's';
        piece.innerHTML = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
        confettiContainer.appendChild(piece);
        setTimeout(() => {
            if (confettiContainer.contains(piece)) confettiContainer.removeChild(piece);
        }, 3000);
    }
}

// --- Flower Effects ---
function initializeFlowerEffects() {
    setInterval(createFallingFlower, 3000);
    setInterval(createSparkleEffect, 2000);
}

function createFallingFlower() {
    const section1 = document.getElementById('section1');
    if (!section1) return;
    const flowerEmojis = ['🌸', '🌺', '🌻', '🌹', '🌷', '🌼', '🏵️'];
    const flower = document.createElement('div');
    flower.className = 'dynamic-falling-flower';
    flower.innerHTML = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    flower.style.left = Math.random() * 100 + '%';
    flower.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
    flower.style.animationDuration = (8 + Math.random() * 4) + 's';
    flower.style.animationDelay = '0s';
    section1.appendChild(flower);
    setTimeout(() => {
        if (section1.contains(flower)) section1.removeChild(flower);
    }, 12000);
}

function createSparkleEffect() {
    const flowersDecoration = document.querySelector('.flowers-decoration');
    if (!flowersDecoration) return;
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-effect';
    sparkle.innerHTML = '✨';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.fontSize = (0.8 + Math.random() * 0.7) + 'rem';
    flowersDecoration.appendChild(sparkle);
    setTimeout(() => {
        if (flowersDecoration.contains(sparkle)) flowersDecoration.removeChild(sparkle);
    }, 2000);
}

// --- Flower Interaction ---
function initializeFlowerInteraction() {
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('flower')) {
            createBloomBurst(e.target);
        }
    });
}

function createBloomBurst(flowerElement) {
    const rect = flowerElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const petals = ['🌸', '🌺', '🌻', '🌹', '🌷', '🌼'];
    for (let i = 0; i < 6; i++) {
        const burstPetal = document.createElement('div');
        burstPetal.className = 'burst-petal';
        burstPetal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
        burstPetal.style.position = 'fixed';
        burstPetal.style.left = centerX + 'px';
        burstPetal.style.top = centerY + 'px';
        burstPetal.style.fontSize = '1.5rem';
        burstPetal.style.pointerEvents = 'none';
        burstPetal.style.zIndex = '1000';
        document.body.appendChild(burstPetal);

        // Animate burst
        const angle = (360 / 6) * i;
        const distance = 100;
        const endX = centerX + Math.cos(angle * Math.PI / 180) * distance;
        const endY = centerY + Math.sin(angle * Math.PI / 180) * distance;
        burstPetal.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0.8)`, opacity: 0 }
        ], { duration: 800, easing: 'ease-out' });

        setTimeout(() => {
            if (document.body.contains(burstPetal)) document.body.removeChild(burstPetal);
        }, 800);
    }
    // Temporary glow
    flowerElement.style.textShadow = '0 0 20px rgba(255, 182, 193, 1)';
    setTimeout(() => { flowerElement.style.textShadow = ''; }, 1000);
}

// --- Dynamic Styles ---
function injectDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideOut {
            to {
                opacity: 0;
                transform: translate(-50%, -70%);
            }
        }
        .download-success {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #4CAF50, #45a049);
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 10px;
            font-size: 1.2rem;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            animation: slideIn 0.5s ease-out;
        }
        .dynamic-falling-flower {
            position: absolute;
            top: -10vh;
            animation: dynamic-fall 12s linear forwards;
            pointer-events: none;
            z-index: 1;
            opacity: 0.7;
        }
        @keyframes dynamic-fall {
            0% { transform: translateY(0) rotate(0deg); opacity: 0; }
            10% { opacity: 0.7; }
            90% { opacity: 0.3; }
            100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .sparkle-effect {
            position: absolute;
            animation: sparkle-twinkle 2s ease-in-out forwards;
            pointer-events: none;
            z-index: 2;
        }
        @keyframes sparkle-twinkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            20% { opacity: 0.8; transform: scale(1.2); }
            80% { opacity: 0.4; transform: scale(1); }
        }
        .confetti-piece {
            position: absolute;
            top: 0;
            font-size: 2rem;
            animation: confetti-fall 3s linear forwards;
            pointer-events: none;
            z-index: 10;
        }
        @keyframes confetti-fall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        .burst-petal {
            will-change: transform, opacity;
        }
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-flower {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }
    `;
    document.head.appendChild(style);
}
