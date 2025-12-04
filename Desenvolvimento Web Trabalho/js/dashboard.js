const API_KEY = "ltjlXQlsh3/xIZC3PqsZ8g==rMSD4h2c8spEerMn";

async function carregarFrase() {
    try {
        const response = await fetch("https://api.api-ninjas.com/v2/quotes?categories=art", {
            headers: { "X-Api-Key": API_KEY
 }
        });

        const data = await response.json();

        if (data && data.length > 0) {
            document.getElementById("quoteText").textContent = `"${data[0].quote}"`;
            document.getElementById("quoteAuthor").textContent = `– ${data[0].author}`;
        } else {
            document.getElementById("quoteText").textContent = "Não foi possível carregar a frase.";
        }
    } catch (error) {
        document.getElementById("quoteText").textContent = "Erro ao carregar frase.";
    }
}

carregarFrase();

async function carregarClima() {
    const apiKey = "d9d25de51e14d88c1b682405ac79bbe3"; 
    const cityName = "Blumenau";

    const lat = -26.9194;
    const lon = -49.0661;

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );

        const data = await response.json();

        if (data.main) {
            const temperatura = (data.main.temp - 273.15).toFixed(1);
            const humidade = data.main.humidity;

            document.getElementById("tempAtual").textContent = `${temperatura}°C`;
            document.getElementById("umidadeAtual").textContent = `${humidade}%`;
            document.getElementById("cidadeClima").textContent = cityName;
        } else {
            document.getElementById("tempAtual").textContent = "Error";
            document.getElementById("umidadeAtual").textContent = "--";
        }
    } catch (error) {
        console.error("Error loading weather:", error);
        document.getElementById("tempAtual").textContent = "Error";
        document.getElementById("umidadeAtual").textContent = "--";
    }
}

carregarClima();

$(document).ready(function() {
    $('#tabelaProximosAgendamentos').DataTable({
        pageLength: 3,
        lengthChange: false,
        searching: false,
        info: false,
        language: {
            url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json"
        }
    });
});

document.querySelectorAll(".btn-excluir").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Erro: Não é possível excluir este registro!");
    });
});