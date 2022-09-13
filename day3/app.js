// selecting all the required elements
const toggles = document.querySelectorAll(".faq-toggle");
// traversing through each of them and adding an eventlistener() to manage the click events
toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        // with each click, we are toggling the active class
        toggle.parentNode.classList.toggle("active");
    });
});
