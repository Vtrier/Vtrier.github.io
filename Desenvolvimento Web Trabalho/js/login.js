const passInput = document.getElementById("senha");
const togglePass = document.getElementById("toggleSenha");

togglePass.addEventListener("click", () => {
    if (passInput.type === "password") {
        passInput.type = "text";
        togglePass.innerHTML = '<i class="fa-solid fa-eye-low-vision"></i>';
    } else {
        passInput.type = "password";
        togglePass.innerHTML = '<i class="fa-regular fa-eye"></i>';
    }
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const user = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;

    if (user === "admin" && senha === "123") {
        localStorage.setItem("logado", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("errorMsg").classList.remove("d-none");
    }
});
