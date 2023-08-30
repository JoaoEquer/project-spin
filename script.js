document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
