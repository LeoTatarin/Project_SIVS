// Pegando os elementos do HTML
const textarea = document.getElementById("mensage"); // Campo de texto da mensagem
const btnAdd = document.getElementById("btnAdd");    // Botão "Adicionar comunicação"
const listaMensagens = document.getElementById("mensagens"); // Área onde as mensagens serão exibidas

// Evento que é disparado sempre que o usuário digita no textarea
textarea.addEventListener("input", function () {
    // Se o campo estiver vazio (ou só com espaços), desabilita o botão
    btnAdd.disabled = textarea.value.trim() === "";
});

// Evento que é disparado quando o usuário clica no botão
btnAdd.addEventListener("click", function () {
    // Pega o texto digitado, removendo espaços extras no começo e fim
    const texto = textarea.value.trim();

    // Só adiciona a mensagem se o campo não estiver vazio
    if (texto !== "") {
        // Cria um novo elemento <div> para a nova mensagem
        const novaMensagem = document.createElement("div");

        // Adiciona as classes Bootstrap que deixam o estilo igual ao exemplo
        novaMensagem.classList.add("container", "border", "rounded", "m-0", "mb-2");

        // Define o conteúdo HTML da nova mensagem
        novaMensagem.innerHTML = `
            <b>--nome de usuario--</b>
            <p class="mb-0 w-100">${texto}</p>
        `;

        // Adiciona a nova mensagem no final da lista
        listaMensagens.appendChild(novaMensagem);

        // Limpa o campo de texto para o usuário digitar outra mensagem
        textarea.value = "";

        // Desabilita o botão novamente até que o usuário digite algo novo
        btnAdd.disabled = true;
    }
});