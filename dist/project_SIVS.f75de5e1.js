// -------------------------------
// COMUNICAÇÃO
// -------------------------------
// Pegando os elementos do HTML
const textarea = document.getElementById("mensage"); // Campo de texto da mensagem
const btnAdd = document.getElementById("btnAdd"); // Botão "Adicionar comunicação"
const listaMensagens = document.getElementById("mensagens"); // Área onde as mensagens serão exibidas
// Evento que é disparado sempre que o usuário digita no textarea
textarea.addEventListener("input", function() {
    // Se o campo estiver vazio (ou só com espaços), desabilita o botão
    btnAdd.disabled = textarea.value.trim() === "";
});
// Evento que é disparado quando o usuário clica no botão
btnAdd.addEventListener("click", function() {
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
// -------------------------------
// SOLICITAÇÃO DE PEÇAS (novo trecho)
// -------------------------------
// pega os elementos
const btnAdicionar = document.getElementById("btn-adicionar");
const formPeca = document.getElementById("form-peca");
const tabela = document.getElementById("tabela-pecas");
// quando clicar no botão, mostra o formulário
if (btnAdicionar) btnAdicionar.addEventListener("click", ()=>{
    formPeca.style.display = "block"; // exibe o form
    btnAdicionar.style.display = "none"; // esconde o botão
});
// quando enviar o formulário
if (formPeca) formPeca.addEventListener("submit", (event)=>{
    event.preventDefault(); // evita recarregar a página
    // pega os valores digitados
    const nome = document.getElementById("nome").value;
    const quantidade = document.getElementById("quantidade").value;
    const partnumber = document.getElementById("partnumber").value;
    // cria uma nova linha <tr>
    const novaLinha = document.createElement("tr");
    // insere as células <td>
    novaLinha.innerHTML = `
            <td style="padding:8px;">${nome}</td>
            <td style="padding:8px;">${quantidade}</td>
            <td style="padding:8px;">${partnumber}</td>
        `;
    // adiciona a linha na tabela
    tabela.appendChild(novaLinha);
    // limpa o formulário
    formPeca.reset();
    // esconde o formulário e mostra o botão de novo
    formPeca.style.display = "none";
    btnAdicionar.style.display = "block";
});
// -------------------------------
// UPLOAD DE ARQUIVOS
// -------------------------------
const btnArquivo = document.getElementById("btn-arquivo");
const formArquivo = document.getElementById("form-arquivo");
const tabelaArquivos = document.getElementById("tabela-arquivos");
// mostrar formulário
btnArquivo.addEventListener("click", ()=>{
    formArquivo.style.display = "block";
    btnArquivo.style.display = "none";
});
// ao enviar o formulário
formArquivo.addEventListener("submit", (event)=>{
    event.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const descricao = document.getElementById("descricaoArquivo").value.trim();
    if (fileInput.files.length > 0 && descricao) {
        const arquivo = fileInput.files[0]; // pega o arquivo enviado
        const nomeArquivo = arquivo.name;
        // cria uma URL temporária para permitir download
        const urlDownload = URL.createObjectURL(arquivo);
        // cria a nova linha da tabela
        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `
            <td colspan="5" style="padding:8px;">${nomeArquivo}</td>
            <td colspan="10" style="padding:8px;">${descricao}</td>
            <td colspan="1" style="padding:8px;">
            <a href="${urlDownload}" download="${nomeArquivo}" style="padding:8px;">
            \u{2B07}\u{FE0F}
            </a>
            </td>
        `;
        // adiciona na tabela
        tabelaArquivos.appendChild(novaLinha);
        // limpa e esconde formulário
        formArquivo.reset();
        formArquivo.style.display = "none";
        btnArquivo.style.display = "block";
    }
});
// -------------------------------
// ASSINATURA CLIENTE COM VALIDAÇÃO, MODAL E DESABILITAÇÃO
// -------------------------------
// elementos do DOM
const btnAssCliente = document.getElementById("btn-ass-cliente");
const btnAssCliente2 = document.getElementById("btn-ass-cliente2");
const formCliente = document.getElementById("form-cliente");
const btnSalvarCliente = document.getElementById("btn-salvar-cliente");
const btnLimparCliente = document.getElementById("btn-limpar-cliente");
const imgCliente = document.getElementById("img-cliente");
const canvas = document.getElementById("canvas-cliente");
const ctx = canvas.getContext("2d");
// configurar traço do canvas
ctx.lineWidth = 2;
ctx.lineCap = 'round';
ctx.strokeStyle = '#000';
let desenhando = false;
let assinaturaPendente = null; // guarda dados temporários
// garantir que modal comece escondido ao carregar a página
window.addEventListener("load", ()=>{
    const modal = document.getElementById("modal-confirmacao");
    if (modal) modal.style.display = "none";
    assinaturaPendente = null;
});
// mostrar formulário ao clicar no botão
btnAssCliente.addEventListener("click", ()=>{
    formCliente.style.display = "block";
    btnAssCliente.style.display = "none";
});
// iniciar desenho
canvas.addEventListener("mousedown", iniciar);
canvas.addEventListener("touchstart", iniciar);
function iniciar(e) {
    desenhando = true;
    ctx.beginPath();
    ctx.moveTo(getX(e), getY(e));
    e.preventDefault();
}
// desenhar
canvas.addEventListener("mousemove", desenhar);
canvas.addEventListener("touchmove", desenhar);
function desenhar(e) {
    if (!desenhando) return;
    ctx.lineTo(getX(e), getY(e));
    ctx.stroke();
    e.preventDefault();
}
// parar desenho
canvas.addEventListener("mouseup", parar);
canvas.addEventListener("mouseleave", parar);
canvas.addEventListener("touchend", parar);
function parar() {
    desenhando = false;
}
// pegar coordenadas do mouse ou touch
function getX(e) {
    if (e.touches) return e.touches[0].clientX - canvas.getBoundingClientRect().left;
    return e.clientX - canvas.getBoundingClientRect().left;
}
function getY(e) {
    if (e.touches) return e.touches[0].clientY - canvas.getBoundingClientRect().top;
    return e.clientY - canvas.getBoundingClientRect().top;
}
// limpar canvas
btnLimparCliente.addEventListener("click", ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("nomeCliente").value = "";
});
// IDs dos campos obrigatórios
const camposObrigatorios = [
    {
        id: "problema",
        label: "Problema"
    },
    {
        id: "realizado",
        label: "Servi\xe7o Realizado"
    },
    {
        id: "sos_causa",
        label: "Causa SOS"
    },
    {
        id: "sos_obs",
        label: "Observa\xe7\xf5es SOS"
    },
    {
        id: "obs_entrada",
        label: "Observa\xe7\xf5es de Entrada"
    },
    {
        id: "hora_entrada",
        label: "Hora de Entrada"
    },
    {
        id: "hora_saida",
        label: "Hora de Sa\xedda"
    },
    {
        id: "tempo_viagem",
        label: "Tempo de Viagem"
    },
    {
        id: "kms_rodados",
        label: "KMs Rodados"
    }
];
// modal
const modal = document.getElementById("modal-confirmacao");
const modalTexto = document.getElementById("modal-texto");
const modalCancelar = document.getElementById("modal-cancelar");
const modalConfirmar = document.getElementById("modal-confirmar");
function abrirModal(camposVazios) {
    let texto = "Deseja confirmar assinatura?";
    if (camposVazios.length > 0) texto += "<br>Os seguintes campos n\xe3o foram preenchidos:<br><ul>" + camposVazios.map((c)=>`<li>${c}</li>`).join('') + "</ul>";
    modalTexto.innerHTML = texto;
    modal.style.display = "flex";
}
function fecharModal() {
    modal.style.display = "none";
    assinaturaPendente = null;
}
modalCancelar.addEventListener("click", fecharModal);
modalConfirmar.addEventListener("click", ()=>{
    if (assinaturaPendente) salvarAssinatura(assinaturaPendente.nome, assinaturaPendente.dataURL);
    fecharModal();
});
// clique no botão salvar assinatura
btnSalvarCliente.addEventListener("click", ()=>{
    const nome = document.getElementById("nomeCliente").value.trim();
    if (!nome) {
        alert("Digite o nome do respons\xe1vel!");
        return;
    }
    const camposVazios = camposObrigatorios.filter((c)=>!document.getElementById(c.id).value.trim()).map((c)=>c.label);
    const dataURL = canvas.toDataURL();
    assinaturaPendente = {
        nome,
        dataURL
    };
    abrirModal(camposVazios); // abre modal, confirma ou cancela
});
// função que realmente salva assinatura
function salvarAssinatura(nome, dataURL) {
    imgCliente.src = dataURL;
    imgCliente.alt = "Assinatura de " + nome;
    imgCliente.style.display = "block";
    let info = document.getElementById("info-ass-cliente");
    if (!info) {
        info = document.createElement("div");
        info.id = "info-ass-cliente";
        info.style.marginTop = "5px";
        imgCliente.parentElement.appendChild(info);
    }
    const agora = new Date();
    const dataHoraFormatada = agora.toLocaleString();
    info.textContent = `Assinatura de ${nome} salva em ${dataHoraFormatada}`;
    // esconder formulário e desabilitar botões de assinatura
    formCliente.style.display = "none";
    btnAssCliente.disabled = true;
    btnAssCliente2.disabled = true;
    btnAssCliente.style.display = "none";
    btnAssCliente2.style.display = "none";
    // DESABILITAR CAMPOS VERIFICADOS, mantendo os valores
    camposObrigatorios.forEach((campo)=>{
        const el = document.getElementById(campo.id);
        if (el) el.disabled = true;
    });
    // DESABILITAR BOTÃO DE SALVAR OS
    const btnSalvarOS = document.getElementById("salvar_os");
    if (btnSalvarOS) btnSalvarOS.disabled = true;
}
// -------------------------------
// ASSINATURA TECNICO
// -------------------------------
const btnAssTecnico = document.getElementById("btn-ass-tecnico");
const btnAssTecnico2 = document.getElementById("btn-ass-tecnico2");
const imgTecnico = document.getElementById("img-tecnico");
btnAssTecnico.addEventListener("click", ()=>{
    // exibe a assinatura do técnico
    imgTecnico.style.display = "block";
    // cria ou atualiza o texto com data/hora
    let infoTec = document.getElementById("info-ass-tecnico");
    if (!infoTec) {
        infoTec = document.createElement("div");
        infoTec.id = "info-ass-tecnico";
        infoTec.style.marginTop = "5px";
        imgTecnico.parentElement.appendChild(infoTec);
    }
    const agora = new Date();
    const dataHoraFormatada = agora.toLocaleString(); // ex: 27/08/2025 09:30:15
    infoTec.textContent = `Assinatura do t\xe9cnico registrada em ${dataHoraFormatada}`;
    // opcional: desabilita o botão para não clicar novamente
    btnAssTecnico.style.display = "none";
    btnAssTecnico2.style.display = "none";
});

//# sourceMappingURL=project_SIVS.f75de5e1.js.map
