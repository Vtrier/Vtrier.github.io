const formCliente = document.getElementById("formCliente");

if (formCliente) {
    formCliente.addEventListener("submit", function(e) {
        alert("Cliente salvo com sucesso!");
        formCliente.reset();
    });
}

$(document).ready(function () {
    $('#tabelaClientes').DataTable({
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