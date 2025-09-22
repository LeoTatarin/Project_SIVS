// pega os elementos
const btnAdicionar = document.getElementById("btn-adicionar");
const formPeca = document.getElementById("form-peca");
const tabela = document.getElementById("tabela-pecas");

// quando clicar no botão, mostra o formulário
if (btnAdicionar && formPeca) {
    btnAdicionar.addEventListener("click", () => {
        formPeca.style.display = "block"; // exibe o form
        btnAdicionar.style.display = "none"; // esconde o botão
    });
}

// quando enviar o formulário
if (formPeca && tabela) {
    formPeca.addEventListener("submit", (event) => {
        event.preventDefault(); // evita recarregar a página

        // pega os valores digitados
        const nome = document.getElementById("nome")?.value.trim() || "";
        const quantidade = document.getElementById("quantidade")?.value.trim() || "";
        const partnumber = document.getElementById("partnumber")?.value.trim() || "";

        // se todos os campos estiverem vazios, não adiciona
        if (!nome && !quantidade && !partnumber) return;

        // cria uma nova linha <tr>
        const novaLinha = document.createElement("tr");

        // função para criar as células já com data-label
        const createCell = (label, value) => {
            const td = document.createElement("td");
            td.setAttribute("data-label", label); // usado pelo CSS no mobile
            td.style.padding = "8px";
            td.textContent = value;
            return td;
        };

        // adiciona as células
        novaLinha.appendChild(createCell("Nome", nome));
        novaLinha.appendChild(createCell("Quantidade", quantidade));
        novaLinha.appendChild(createCell("Part Number", partnumber));

        // adiciona a linha na tabela
        tabela.appendChild(novaLinha);

        // limpa o formulário
        formPeca.reset();

        // esconde o formulário e mostra o botão de novo
        formPeca.style.display = "none";
        btnAdicionar.style.display = "block";
    });
}