// Smooth scrolling functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initializePage();
    
    // Add scroll event listeners
    addScrollListeners();
    
    // Add gift download functionality
    initializeGiftDownload();
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
        
        // Create a simple gift message
        createGiftMessage();
        
        // Trigger confetti animation
        triggerConfetti();
    });
}

function createGiftMessage() {
    // Create a blob with a birthday message
    const giftMessage = `
🎉 С Днем Рождения, Настя! 🎉

Дорогая Настя!

В этот особенный день мы хотим пожелать тебе:

✨ Пусть каждый новый день приносит радость и счастье
🌟 Пусть все твои мечты сбываются
💫 Пусть рядом всегда будут близкие и любящие люди
🎈 Пусть жизнь будет полна ярких моментов и приключений

Желаем тебе крепкого здоровья, безграничного счастья,
успехов во всех делах и исполнения самых заветных желаний!

Пусть этот новый год жизни станет самым лучшим!

С любовью и наилучшими пожеланиями! 💖

P.S. Это только начало твоих подарков! 🎁
    `;
    
    const blob = new Blob([giftMessage], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Подарок_для_Насти.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
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
    notification.innerHTML = '🎁 Подарок скачан! 🎉';
    
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

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        to {
            opacity: 0;
            transform: translate(-50%, -70%);
        }
    }
`;
document.head.appendChild(style);