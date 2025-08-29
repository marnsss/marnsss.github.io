document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";

    if (darkModeEnabled) {
        body.classList.add("dark-mode");
        if (toggleButton) toggleButton.textContent = "☀️ Light Mode";
    }

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                toggleButton.textContent = "☀️ Light Mode";
            } else {
                localStorage.setItem("darkMode", "disabled");
                toggleButton.textContent = "🌙 Dark Mode";
            }
        });
    }
});
