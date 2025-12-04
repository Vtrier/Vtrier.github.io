const toggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "Modo Claro";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggle.textContent = "Modo Claro";
    } else {
        localStorage.setItem("darkMode", "disabled");
        toggle.textContent = "Modo Escuro";
    }
});