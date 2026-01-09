// ===== Smooth Scroll for Internal Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Header Shadow on Scroll =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ===== Contact Form Validation =====
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector('textarea');

        if (name.value.trim() === '' || email.value.trim() === '') {
            alert('Please fill in all required fields.');
            return;
        }

        if (!validateEmail(email.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you! Your message has been submitted.');
        form.reset();
    });
}

// ===== Email Validation Function =====
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
