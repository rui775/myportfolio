document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggleSm = document.getElementById("dark-mode-toggle");
    const darkModeToggle = document.getElementById("dark-mode-toggle1");
    const body = document.body;

    darkModeToggleSm.addEventListener("click", function () {
        // Toggle dark mode by adding/removing a 'dark-mode' class to the body
        body.classList.toggle("dark-mode");

        // Save user preference in local storage
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
    });

    darkModeToggle.addEventListener("click", function () {
        // Toggle dark mode by adding/removing a 'dark-mode' class to the body
        body.classList.toggle("dark-mode");

        // Save user preference in local storage
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
    });

    // Check if user has previously set dark mode preference
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
        body.classList.add("dark-mode");
    }
});

