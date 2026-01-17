// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Dropdown menu functionality
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                menu.classList.remove('active');
            }
        });
    }
});

// Contact form handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const formMessage = document.getElementById('formMessage');
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            phone: document.getElementById('phone').value,
            stage: document.getElementById('stage').value,
            challenge: document.getElementById('challenge').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };
        
        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Create mailto link with form data
        const subject = encodeURIComponent('New Contact Form Submission from ' + formData.name);
        const body = encodeURIComponent(
            `New contact form submission:\n\n` +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Company: ${formData.company || 'Not provided'}\n` +
            `Phone: ${formData.phone || 'Not provided'}\n` +
            `Stage: ${formData.stage || 'Not selected'}\n` +
            `Primary Challenge: ${formData.challenge}\n\n` +
            `Message:\n${formData.message}\n\n` +
            `Submitted: ${new Date().toLocaleString()}`
        );
        
        // Store form data in localStorage for your reference
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        submissions.push(formData);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you for your message! We\'ll contact you within 24 hours. You can also email us directly at prishant@proficient-professionals.com';
        
        // Open email client (optional - you can comment this out if you don't want it)
        window.location.href = `mailto:prishant@proficient-professionals.com?subject=${subject}&body=${body}`;
        
        // Reset form
        contactForm.reset();
        
        // Re-enable button
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }, 2000);
        
        // Hide message after 10 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
            formMessage.textContent = '';
        }, 10000);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
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
document.querySelectorAll('.value-card, .service-card, .case-content, .service-detail').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});