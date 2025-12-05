// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');
const hero = document.querySelector('.hero');
const logo = document.querySelector('.logo');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
    
    // Скрываем/показываем hero и logo при открытии/закрытии меню
    if (navLinks.classList.contains('active')) {
        hero.style.opacity = '0';
        hero.style.visibility = 'hidden';
        logo.style.opacity = '0';
        logo.style.visibility = 'hidden';
    } else {
        hero.style.opacity = '1';
        hero.style.visibility = 'visible';
        logo.style.opacity = '1';
        logo.style.visibility = 'visible';
    }
});

// Mobile Dropdown Toggle
navItems.forEach(item => {
    if (item.querySelector('.dropdown')) {
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    }
});

// Color Picker - обновленный код для Mercedes
const colorOptions = document.querySelectorAll('.color-option');

// Маппинг цветов к названиям файлов изображений для Mercedes
const colorImageMap = {
    '1': { // Mercedes A-Class
        'Черный': 'black-a-class.jfif',
        'Серебристый': 'grey-a-class.jfif',
        'Синий': 'blue-a-class.jfif',
        'Белый': 'white-a-class.jfif'
    },
    '2': { // Mercedes C-Class
        'Черный': 'black-c-class.jfif',
        'Серебристый': 'grey-c-class.jfif',
        'Синий': 'blue-c-class.jfif',
        'Белый': 'white-c-class.jfif'
    },
    '3': { // Mercedes E-Class
        'Черный': 'black-e-class.jfif',
        'Серебристый': 'grey-e-class.jfif',
        'Синий': 'blue-e-class.jfif',
        'Белый': 'white-e-class.jfif'
    }
};

colorOptions.forEach(option => {
    option.addEventListener('click', function() {
        const modelId = this.getAttribute('data-model');
        const colorName = this.getAttribute('data-color-name');
        
        // Remove active class from all options in this model group
        const modelOptions = document.querySelectorAll(`.color-option[data-model="${modelId}"]`);
        modelOptions.forEach(opt => {
            opt.classList.remove('active');
        });
        
        // Add active class to clicked option
        this.classList.add('active');
        
        // Change car image based on color
        const carImage = document.getElementById(`model-${modelId}-img`);
        if (carImage && colorImageMap[modelId] && colorImageMap[modelId][colorName]) {
            // Add loading state
            carImage.style.opacity = '0.7';
            
            setTimeout(() => {
                carImage.src = colorImageMap[modelId][colorName];
                carImage.alt = `Mercedes ${modelId === '1' ? 'A-Class' : modelId === '2' ? 'C-Class' : 'E-Class'} ${colorName}`;
                
                // Remove loading state
                setTimeout(() => {
                    carImage.style.opacity = '1';
                }, 300);
            }, 300);
        }
    });
});

// Gallery functionality
const gallerySlider = document.querySelector('.gallery-slider');
const gallerySlides = document.querySelectorAll('.gallery-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const galleryDots = document.querySelectorAll('.gallery-dot');

let currentSlide = 0;
const totalSlides = gallerySlides.length;

function goToSlide(n) {
    if (n < 0) {
        currentSlide = totalSlides - 1;
    } else if (n >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = n;
    }
    
    gallerySlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    galleryDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

// Auto slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto slide on hover
gallerySlider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

gallerySlider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Event listeners for gallery controls
if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    // Reset auto slide timer
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
});

if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    // Reset auto slide timer
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
});

// Event listeners for dots
galleryDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
        // Reset auto slide timer
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });
});

// Price Calculator
const calculatorForm = document.getElementById('price-calculator');
const totalPriceElement = document.getElementById('total-price');

if (calculatorForm && totalPriceElement) {
    function calculateTotalPrice() {
        let totalPrice = 0;
        
        // Base model price
        const modelSelect = document.getElementById('model');
        totalPrice += parseInt(modelSelect.value);
        
        // Color price
        const colorSelect = document.getElementById('color');
        totalPrice += parseInt(colorSelect.value);
        
        // Interior price
        const interiorSelect = document.getElementById('interior');
        totalPrice += parseInt(interiorSelect.value);
        
        // Wheels price
        const wheelsSelect = document.getElementById('wheels');
        totalPrice += parseInt(wheelsSelect.value);
        
        // Additional options
        const panorama = document.getElementById('panorama');
        if (panorama && panorama.checked) totalPrice += parseInt(panorama.value);
        
        const premiumSound = document.getElementById('premium-sound');
        if (premiumSound && premiumSound.checked) totalPrice += parseInt(premiumSound.value);
        
        const assistPackage = document.getElementById('assist-package');
        if (assistPackage && assistPackage.checked) totalPrice += parseInt(assistPackage.value);
        
        const amgPackage = document.getElementById('amg-package');
        if (amgPackage && amgPackage.checked) totalPrice += parseInt(amgPackage.value);
        
        // Format and display total price
        totalPriceElement.textContent = totalPrice.toLocaleString('ru-RU') + ' ₽';
        
        // Add animation effect
        totalPriceElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            totalPriceElement.style.transform = 'scale(1)';
        }, 300);
    }

    // Add event listeners to all form elements
    const formElements = calculatorForm.querySelectorAll('select, input');
    formElements.forEach(element => {
        element.addEventListener('change', calculateTotalPrice);
        element.addEventListener('input', calculateTotalPrice);
    });

    // Initialize calculator
    calculateTotalPrice();
}

// Modal
const modal = document.getElementById('contact-modal');
const contactBtn = document.getElementById('contact-btn');
const closeModal = document.querySelector('.close-modal');

if (contactBtn && modal) {
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
}

if (modal) {
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
}

// Form Validation Functions
function validateName(name) {
    return name && name.trim().length >= 2;
}

function validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 11 && cleaned[0] === '7';
}

function validateMessage(message) {
    return message && message.trim().length >= 10;
}

// Error display function
function showError(input, message) {
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    input.classList.remove('error');
    
    if (message) {
        input.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = '#e91e63';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '0.3rem';
        errorElement.textContent = message;
        input.parentNode.appendChild(errorElement);
    }
}

// Enhanced form submission handler
function handleFormSubmit(form, e) {
    e.preventDefault();
    
    const nameInput = form.querySelector('input[type="text"]');
    const phoneInput = form.querySelector('input[type="tel"]');
    const messageInput = form.querySelector('textarea');
    
    let isValid = true;
    
    // Validation
    if (!validateName(nameInput.value)) {
        showError(nameInput, 'Имя должно содержать минимум 2 символа');
        isValid = false;
    } else {
        showError(nameInput, null);
    }
    
    if (!validatePhone(phoneInput.value)) {
        showError(phoneInput, 'Номер телефона должен состоять из 11 цифр и начинаться с 7');
        isValid = false;
    } else {
        showError(phoneInput, null);
    }
    
    if (!validateMessage(messageInput.value)) {
        showError(messageInput, 'Поле "О себе" должно содержать минимум 10 символов');
        isValid = false;
    } else {
        showError(messageInput, null);
    }
    
    if (!isValid) {
        const formMessage = form.querySelector('.form-message') || document.getElementById('form-message');
        if (formMessage) {
            formMessage.textContent = 'Пожалуйста, исправьте ошибки в форме';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
            
            // Scroll to error message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        
        // Show success message
        const formMessage = form.querySelector('.form-message') || document.getElementById('form-message');
        if (formMessage) {
            formMessage.textContent = 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        } else {
            alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
        
        // Reset form
        form.reset();
        
        // Clear error messages
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        const errorInputs = form.querySelectorAll('.error');
        errorInputs.forEach(input => input.classList.remove('error'));
    }, 1500);
}

// Form submission handlers
const contactForm = document.getElementById('contact-form');
const modalContactForm = document.getElementById('modal-contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => handleFormSubmit(contactForm, e));
}

if (modalContactForm) {
    modalContactForm.addEventListener('submit', (e) => handleFormSubmit(modalContactForm, e));
}

// Phone formatting function
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 0 && value[0] === '8') {
        value = '7' + value.slice(1);
    }
    
    if (value.length > 0) {
        let formattedValue = '+7 (';
        
        if (value.length > 1) {
            formattedValue += value.slice(1, 4);
        }
        if (value.length >= 4) {
            formattedValue += ') ' + value.slice(4, 7);
        }
        if (value.length >= 7) {
            formattedValue += '-' + value.slice(7, 9);
        }
        if (value.length >= 9) {
            formattedValue += '-' + value.slice(9, 11);
        }
        
        input.value = formattedValue;
    }
}

// Enhanced input validation with real-time feedback
document.addEventListener('DOMContentLoaded', function() {
    // Name inputs
    const nameInputs = document.querySelectorAll('input[type="text"][name="name"]');
    
    nameInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!validateName(this.value)) {
                showError(this, 'Имя должно содержать минимум 2 символа');
            } else {
                showError(this, null);
            }
        });
        
        input.addEventListener('focus', function() {
            showError(this, null);
        });
    });
    
    // Phone inputs
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.placeholder = '+7 (999) 999-99-99';
        
        input.addEventListener('input', function() {
            formatPhone(this);
        });
        
        input.addEventListener('blur', function() {
            if (!validatePhone(this.value)) {
                showError(this, 'Номер телефона должен состоять из 11 цифр и начинаться с 7');
            } else {
                showError(this, null);
            }
        });
        
        input.addEventListener('focus', function() {
            showError(this, null);
        });
    });
    
    // Message inputs
    const messageInputs = document.querySelectorAll('textarea[name="message"]');
    
    messageInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!validateMessage(this.value)) {
                showError(this, 'Поле "О себе" должно содержать минимум 10 символов');
            } else {
                showError(this, null);
            }
        });
        
        input.addEventListener('focus', function() {
            showError(this, null);
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
                hero.style.opacity = '1';
                hero.style.visibility = 'visible';
                logo.style.opacity = '1';
                logo.style.visibility = 'visible';
            }
        }
    });
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
            hero.style.opacity = '1';
            hero.style.visibility = 'visible';
            logo.style.opacity = '1';
            logo.style.visibility = 'visible';
        }
    });
});

// Close mobile menu on desktop resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
        hero.style.opacity = '1';
        hero.style.visibility = 'visible';
        logo.style.opacity = '1';
        logo.style.visibility = 'visible';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.model-card, .tuning-card, .calculator, .contact-form');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}