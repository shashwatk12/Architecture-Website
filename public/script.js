// script.js

// smooth-scroll.js

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});


function sendMessage() {
    alert("Your message has been sent!");
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const commentInput = document.getElementById('comment');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Validate form inputs
        const isValid = validateForm();
        
        if (isValid) {
            // If form is valid, submit the form (or perform other actions)
            sendMessage();
        }
    });

    function validateForm() {
        let isValid = true;

        // Reset error messages
        resetErrorMessages();

        // Validate name
        if (nameInput.value.trim() === '') {
            isValid = false;
            displayErrorMessage('name-error', 'Please enter your name.');
        }

        // Validate email
        if (!isValidEmail(emailInput.value.trim())) {
            isValid = false;
            displayErrorMessage('email-error', 'Please enter a valid email address.');
        }

        // Validate subject
        if (subjectInput.value.trim() === '') {
            isValid = false;
            displayErrorMessage('subject-error', 'Please enter a subject.');
        }

        // Validate comment
        if (commentInput.value.trim() === '') {
            isValid = false;
            displayErrorMessage('comment-error', 'Please enter a comment.');
        }

        return isValid;
    }

    function isValidEmail(email) {
        // Regular expression for validating email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayErrorMessage(id, message) {
        const errorMessageElement = document.getElementById(id);
        errorMessageElement.textContent = message;
    }

    function resetErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(errorMessage => {
            errorMessage.textContent = '';
        });
    }

    function sendMessage() {
        // Code to send message (e.g., AJAX request)
        alert("Your message has been sent!");
        // Reset form after successful submission
        contactForm.reset();
    }
});

