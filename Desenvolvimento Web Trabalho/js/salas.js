const formSala = document.getElementById("formSala");

if (formSala) {
    formSala.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Sala salva com sucesso!");
        formSala.reset();
    });
}

$(document).ready(function () {
    $('#tabelaSalas').DataTable({
        responsive: true,
        pageLength: 5,
        language: {
            url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json"
        }
    });
});

document.querySelectorAll(".btn-excluir").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Erro: Não é possível excluir este registro!");
    });
});
