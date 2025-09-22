const btnArquivo = document.getElementById("btn-arquivo");
const formArquivo = document.getElementById("form-arquivo");
const tabelaArquivos = document.getElementById("tabela-arquivos");

// mostrar formulário
if (btnArquivo && formArquivo) {
    btnArquivo.addEventListener("click", () => {
    formArquivo.style.display = "block";
    btnArquivo.style.display = "none";
    });
}

// ao enviar o formulário
if (formArquivo && tabelaArquivos) {
    formArquivo.addEventListener("submit", (event) => {
        event.preventDefault();

        const fileInput = document.getElementById("fileInput");
        const descricao = document.getElementById("descricaoArquivo")?.value.trim();

        if (fileInput?.files.length > 0 && descricao) {
            const arquivo = fileInput.files[0]; // pega o arquivo enviado
            const nomeArquivo = arquivo.name;

      // cria uma URL temporária para permitir download
            const urlDownload = URL.createObjectURL(arquivo);

      // cria a nova linha da tabela
            const novaLinha = document.createElement("tr");

      // helper para criar célula com data-label
        const createCell = (label, value, isHTML = false) => {
            const td = document.createElement("td");
            td.setAttribute("data-label", label);
            td.style.padding = "8px";
            if (isHTML) {
                td.innerHTML = value;
            } else {
                td.textContent = value;
            }
            return td;
        };

      // monta as células
    novaLinha.appendChild(createCell("Arquivo", nomeArquivo));
    novaLinha.appendChild(createCell("Descrição", descricao));
    novaLinha.appendChild(
        createCell(
            "Download",
            `<a id="download-icon" href="${urlDownload}" download="${nomeArquivo}" style="padding:8px;">⬇️</a>`,
            true
        )
    );

      // adiciona na tabela
    tabelaArquivos.appendChild(novaLinha);

      // limpa e esconde formulário
    formArquivo.reset();
    formArquivo.style.display = "none";
    btnArquivo.style.display = "block";
        }
    });
}
