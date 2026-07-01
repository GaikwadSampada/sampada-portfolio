const menuBtn = document.getElementById("menuBtn");
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});
if (navLinks.classList.contains("active")) {

    document.body.style.overflow = "hidden";

    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");

} else {

    document.body.style.overflow = "auto";

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");

}

// ==============================
// EMAIL JS
// ==============================

emailjs.init({
    publicKey: "VI_M5Aj2ybDnIyWwB"
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const formData = {

        name: this.name.value,

        email: this.email.value,

        subject: this.subject.value,

        message: this.message.value,

        time: new Date().toLocaleString()

    };

 emailjs.send(
    "service_tq9y59a",
    "template_0lrt2ps",
    formData,
    "VI_M5Aj2ybDnIyWwB"
)

  .then(() => {

    const success = document.getElementById("successMessage");

    success.style.display = "block";
    success.textContent = "✅ Message Sent Successfully!";

    contactForm.reset();

    setTimeout(() => {
        success.style.display = "none";
    }, 3000);

})

  .catch((error) => {

    console.log(error);
    console.log(error.status);
    console.log(error.text);

    alert("Failed to send");

});

});