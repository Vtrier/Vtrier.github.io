const formEquipamento = document.getElementById("formEquipamento");

if (formEquipamento) {
    formEquipamento.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Equipamento salvo com sucesso!");
        formEquipamento.reset();
    });
}

$(document).ready(function() {
    $('#tabelaEquipamentos').DataTable({
        pageLength: 5,
        lengthMenu: [5, 10, 20],
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