let form = document.getElementById("myForm");

let validateForm = ((e) => {
    e.preventDefault();

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let website = document.getElementById("web").value;
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("rePassword").value;
    let tick = document.getElementById("tick").checked;

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^\+?\d{0,3}\s?\d{4}\s?\d{3}\s?\d{3}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).+$/;

    let isValid = true;
    let errorMessage = "";

    if (!namePattern.test(fname)) {
        isValid = false;
        errorMessage += "First Name should contain only letters and spaces.\n";
    }
    if (fname.trim() === "") {
        isValid = false;
        errorMessage += "First Name should not be empty.\n";
    }

    if (!namePattern.test(lname)) {
        isValid = false;
        errorMessage += "Last Name should contain only letters and spaces.\n";
    }

    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += "Please enter a valid email address.\n";
    }

    if (!phonePattern.test(phone)) {
        isValid = false;
        errorMessage += "Phone number format: +00 0000 000 000.\n";
    }

    try {
        new URL(website);
    } catch (_) {
        isValid = false;
        errorMessage += 'Please enter a valid URL.\n';
    }

    if (password.length < 6 || !passwordPattern.test(password)) {
        isValid = false;
        errorMessage += 'Password must be at least 6 characters long, contain at least one uppercase letter and one special character.\n';
    }

    if (password !== rePassword) {
        isValid = false;
        errorMessage += 'Passwords do not match.\n';
    }

    if (isValid) {
        alert("Form is valid");
        form.submit();
    } else {
        alert(errorMessage);

    }
});

form.addEventListener('submit', validateForm);