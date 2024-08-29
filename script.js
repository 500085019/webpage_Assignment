// Toggle Theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Form Validation
function validateForm(form) {
    const email = form.querySelector('input[type="email"]')?.value;
    const password = form.querySelector('input[type="password"]').value;

    if (email && !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    return true;
}

// Email validation
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Search Poet Function (Mock)
function searchPoet() {
    const query = document.getElementById('search-input').value;
    alert(`Searching for poets with query: ${query}`);
}
