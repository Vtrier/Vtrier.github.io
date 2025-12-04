const formAgendamento = document.getElementById("formAgendamento");

if (formAgendamento) {
    formAgendamento.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Agendamento salvo com sucesso!");
        formAgendamento.reset();
    });
}

$(document).ready(function() {
    $('#tabelaAgendamentos').DataTable({
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