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