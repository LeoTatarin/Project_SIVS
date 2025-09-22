// pega elementos principais
const btnAlterarStatus = document.getElementById("alterar-status");
const modalStatus = document.getElementById("modal-status");
const spansStatus = document.querySelectorAll(".span_status");

// função para abrir o modal
btnAlterarStatus.addEventListener("click", () => {
    modalStatus.style.display = "flex"; // mostra o modal
});

// função para fechar o modal
function fecharModalStatus() {
    modalStatus.style.display = "none";
}

// função para trocar o status
function trocarStatus(ativoId) {
    spansStatus.forEach(span => {
        span.style.display = "none"; // esconde todos
    });
    const ativo = document.getElementById(ativoId);
    if (ativo) ativo.style.display = "inline-flex"; // mostra só o selecionado
    fecharModalStatus(); // fecha modal depois da escolha
}

// botões do modal
document.getElementById("muda_con").addEventListener("click", () => trocarStatus("status_con"));
document.getElementById("muda_cnf").addEventListener("click", () => trocarStatus("status_cnf"));
document.getElementById("muda_cra").addEventListener("click", () => trocarStatus("status_cra"));
document.getElementById("muda_cnp").addEventListener("click", () => trocarStatus("status_cnp"));
document.getElementById("muda_nada").addEventListener("click", fecharModalStatus);