// Smooth scrolling functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initializePage();
    
    // Add scroll event listeners
    addScrollListeners();
    
    // Add gift download functionality
    initializeGiftDownload();
    
    // Initialize dynamic flowers
    initializeDynamicFlowers();
    
    // Add flower interaction
    addFlowerInteraction();
    
    // Initialize flower animations
    initializeFlowerAnimations();
    
    // Start falling flowers
    startFallingFlowers();
});

function initializePage() {
    // Add entrance animations
    const sections = document.querySelectorAll('.section');
    
    // Observe sections for scroll animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Trigger specific animations for each section
                    if (entry.target.id === 'section2') {
                        animateWishCards();
                    }
                }
            });
        },
        {
            threshold: 0.3
        }
    );
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

function addScrollListeners() {
    // Add click handlers for scroll hints
    const scrollHints = document.querySelectorAll('.scroll-hint');
    
    scrollHints.forEach((hint, index) => {
        hint.addEventListener('click', () => {
            const nextSection = document.querySelector(`#section${index + 2}`);
            if (nextSection) {
                nextSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === ' ') {
            e.preventDefault();
            scrollToNextSection();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            scrollToPreviousSection();
        }
    });
}

function getCurrentSection() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            return i;
        }
    }
    return 0;
}

function scrollToNextSection() {
    const currentSection = getCurrentSection();
    const nextSection = document.querySelector(`#section${currentSection + 2}`);
    
    if (nextSection) {
        nextSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToPreviousSection() {
    const currentSection = getCurrentSection();
    if (currentSection > 0) {
        const prevSection = document.querySelector(`#section${currentSection}`);
        if (prevSection) {
            prevSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

function animateWishCards() {
    const wishCards = document.querySelectorAll('.wish-card');
    
    wishCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'slideIn 0.6s ease-out forwards';
        }, index * 200);
    });
}

function initializeGiftDownload() {
    const downloadButton = document.getElementById('downloadGift');
    
    downloadButton.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Download PDF gift
        downloadPdfGift();
        
        // Trigger confetti animation
        triggerConfetti();
    });
}

function downloadPdfGift() {
    // Open PDF in new tab
    window.open('HappyBirthday!.pdf', '_blank');
    
    // Show success message
    showDownloadSuccess();
}

function showDownloadSuccess() {
    // Create success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
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
    `;
    notification.innerHTML = '🎁 PDF подарок открыт! 🎉';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-in forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

function triggerConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    
    // Create additional confetti pieces
    for (let i = 0; i < 10; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.animationDelay = Math.random() * 2 + 's';
        confettiPiece.innerHTML = ['🎊', '✨', '🎉', '💫', '⭐'][Math.floor(Math.random() * 5)];
        
        confettiContainer.appendChild(confettiPiece);
        
        // Remove after animation
        setTimeout(() => {
            if (confettiContainer.contains(confettiPiece)) {
                confettiContainer.removeChild(confettiPiece);
            }
        }, 3000);
    }
}

function initializeFlowerAnimations() {
    // Initialize dynamic flowers
function initializeDynamicFlowers() {
    // Create additional falling flowers periodically
    setInterval(() => {
        createFallingFlower();
    }, 3000);
Анимируем существующие цветы с зад    
    // Create sparkle effects around flowers
    setInterval(() => {
        createSparkleEffect();ержками для красивого появления
    const flowers = document.querySelector
    }, 2000);
}

function createFallingFlower() {
    const section1 = document.getElementById('section1');
    if (!section1) return;
    
    const f f

function startFallingFlowers() {
    const000);
    });
}3000 + Math.random() * 2 '');
                }, 1000);
            }
        }, `, pulse-flower 1s ease-in-out`,style.animation = flower.style.animation.replace(-out`;
                setTimeout(() => {
                    flower.-flower 1s ease-inanimation += `, pulse.7) {
                flower.style.Interval(() => {
            if (Math.random() > 0авляем случайные пульсации
        set delay);
        
        // Доб ${delay/1000}s`;
        },4s ease-in-out infinite, blooming-float bloom 2s ease-out forwards {
            flower.style.animation = `;
        
        setTimeout(() =>lowowerrsContainer = document.querySelector('.flowers-decoration');
    const flowerEmojis = ['🌸', '🌺', '🌻', '🌹', '🌷', '🌼', '🏵️', '🌻', '🌸', '🌺'];
    
    function createFallingFlower() {
        const flower = document.createElement('div');
    flower.cladiv');
        flower.className = 'dynamic-falling-flower';
    
    conssName = 'falling-flower-dynamic';
        flower.innerHTML = flowerEmojis[Mat flowerTh.floor(Math.random() * flowerEmojis.length)];
        
        // Случайное позиционирование
        flower.stypes = ['🌸', '🌺', '🌻', '🌹', '🌷', '🌼', '🏵️'];
    flower.innerHTML = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    
    // Random starting position
    flower.st100 + %'        flower..left = Math.random() * yle.leffont = Math.random() * 100 + '%';
    flowSizer.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
    flower.style.animationDuration = (8 + Math.random() * 4) + 's';
    flower.style.animationDelay = '0s';
    
    section1.appendChild(flower);
    
    // Remove after animation completes
    setTimeout(() => {
        if (section1.contains(flower)) {
            section1.removeChild(flower);
        }
    }, 12000);
}

function createSparkleEffect() {
    const flowersDecoration 
        seTimeout(());
        
        // Удаляем после анимации + 's';
        
        flowersContainer.appendChild(flower = Math.random() * 24) + 's';
        flower.style.animationDelayationDuration = (6 + Math.random() *  1.5) + 'rem';
        flower.style.anim = (1.5 + Math.random() *=> document.querySelector('.flowers-decoration');
    if (!flowersDecoration) return;
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-effect';
    sparkle.innerHTML = '✨';
    
    // Random position
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.fontSize = (0.8 + Math.random() * 0.7) + 'rem';
    
    flowersDecoration.appendChild(sparkle);
    
    // Remove after animation
    setTimeout(() => {
        if (flowersDecoration.contains(sparkle)) {
            flowersDecoration.removeChild(sparkle);
        }
    }, 2000);
}

function addFlowerInteraction() {
    // Add click effects to flowers
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('flower')) {omBurst(e.target);
        }
    });
}

function createBloomBurst(flowerElement) {
    const rect = flowerElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.to-p + rect.height / 2;
    
    // Creetate burst effel';
        petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
        
        // Случайное позиционирование и размер
        petal.style.left = Math.random() * 100 + '%';
        petal.style.top=Math.random() +* 'px';
        burs100 + '%';
        petPetal.style.top = centeal.style.fontSize = (0.8 + Math.rY + 'px';
        burstPetal.style.fontSize = '1.5rem';
        burdom() * 0.7) + 'rem';
        petal.stPetal.style.pointerEvents = 'none';
        burstPetal.style.zIndex = '1000';
        
        // Random direction tyle.animationDuration = (4 + Math.random() * 3) + 's';
        
        section1.appendChild(petal);
        
        // Удаляем после анимации
        setTimeout(() => {
            if (section1.contains(petal)) {
                section1.r burst
        const angle = (360 / 6) * i;
        const distance = 100;
        const endX = centerX + Math.cos(angle * Math.PI / 180) * distance;
        const endY = centerY + Math.sin(angle * Math.PI / 180) * distance;
        
        docuement.body.appendChild(burstPetal);
        
        // Animate burst
        burstPetal.animate([
            {
                transformoveChild(petal);
            }
        }, 8000);
    }
    
    // Создаем лепестки периодически
    setInterval(createPetal, 1500 + Math.random() * 1000);
}

// Запускаем создание лепестков через 3 секунды после загрузки
setTimeout(createFloatingPetals, 3000);

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        to {
            opacity: 0;
            transform: 'translate(-50%, -50%) scale(0.3)',
                opacity: 1
            },
            {
                transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0.8)`,
                opacity: 0
            }
        ], {
            duration: 800,
            easing: 'ease-out'
        });
        
        // Remove after animation
        setTimeout(() => {
            if (document.body.contains(burstPetal)) {
                document.body.removeChild(burstPetal);
            }
        }, 800);
    }
    
    // Add temporary glow to clicked flower
    flowerElement.style.textShadow = '0 0 20px rgba(255, 182, 193, 1)';
    setTimeout(() => {
        flowerElement.style.textShadow = '';
    }, 1000);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        to {
            opacity: 0;
            transform: translate(-50%, -70%);
        }
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
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.7;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .sparkle-effect {
        position: absolute;
        animation: sparkle-twinkle 2s ease-in-out forwards;
        pointer-events: none;
        z-index: 2;
    }
    
    @keyframes sparkle-twinkle {
        0%, 100% {
            opacity: 0;
            transform: scale(0;
        animation: float-around 6s ease-in-out infinite;
        opacity: 0.6;
        z-index: 0;
        pointer-events: none;
    }
    
    @keyframes float-around {
        0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
        }
        20% {
            opacity: 0.8;
        }
        50% {
            transform: translateY(-30px) translateX(20px) rotate(180deg);
            opacity: 0.6;
        }
        80% {
            opacity: 0.4;
        }
        100% {
            transform: translateY(0px) translateX(40px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes pulse-flower {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
`;
document.head.appendChild(style);