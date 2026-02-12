document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate Name
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        isValid = false;
    }
    // script.js
const img = document.getElementById('my-photo');

// Change the image source programmatically
img.src = 'new-image-path.jpeg';

    // Validate Message
    if (message.length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
        isValid = false;
    }

    // If valid, simulate sending
    if (isValid) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    }
});