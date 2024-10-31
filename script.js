window.addEventListener("scroll", function() {
    var topbar = document.querySelector("#topbar");
    if (topbar) {
        topbar.classList.toggle("sticky", window.scrollY > 0);
    } else {
        console.error("Elemento com ID 'topbar' não encontrado.");
    }
});
