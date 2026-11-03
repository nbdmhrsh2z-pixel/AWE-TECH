// AWE TECH - WEBSITE INTERACTIONS

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Welcome message in the browser console
    console.log("Welcome to Awe Tech!");
    console.log("BUILD • DEVELOP • INNOVATE");

});
// AWE TECH CLIENT ENQUIRY FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("clientName").value;
        const email = document.getElementById("clientEmail").value;
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value;

        const whatsappMessage =
            "Hello Awe Tech!\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Service: " + service + "\n" +
            "Project details: " + message;

        const whatsappURL =
            "https://wa.me/27685859873?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");
    });
}
// MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");

        menuToggle.textContent =
            mainNav.classList.contains("active") ? "✕" : "☰";
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("active");
            menuToggle.textContent = "☰";
        });
    });
}