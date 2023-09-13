document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.getElementById("hamburger-btn");
    const navList = document.querySelector(".Nav");

    hamburgerButton.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});
