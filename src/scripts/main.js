import '/src/scripts/js/bootstrap.bundle.min.js';

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
window.addEventListener("load", () => {
    const modal = document.getElementById("modal-confirmacao");
    if (modal) modal.style.display = "none";
    assinaturaPendente = null;
});

// mostrar formulário ao clicar no botão
btnAssCliente.addEventListener("click", () => {
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

function parar() { desenhando = false; }

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
btnLimparCliente.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("nomeCliente").value = "";
});

// IDs dos campos obrigatórios
const camposObrigatorios = [
    { id: "problema", label: "Problema" },
    { id: "realizado", label: "Serviço Realizado" },
    { id: "sos_causa", label: "Causa SOS" },
    { id: "sos_obs", label: "Observações SOS" },
    { id: "obs_entrada", label: "Observações de Entrada" },
    { id: "hora_entrada", label: "Hora de Entrada" },
    { id: "hora_saida", label: "Hora de Saída" },
    { id: "tempo_viagem", label: "Tempo de Viagem" },
    { id: "kms_rodados", label: "KMs Rodados" }
];

// modal
const modal = document.getElementById("modal-confirmacao");
const modalTexto = document.getElementById("modal-texto");
const modalCancelar = document.getElementById("modal-cancelar");
const modalConfirmar = document.getElementById("modal-confirmar");

// abre o modal centralizado
function abrirModal(camposVazios) {
    let texto = "Deseja confirmar assinatura?";
    if (camposVazios.length > 0) {
        texto += "<br>Os seguintes campos não foram preenchidos:<br><ul>" +
            camposVazios.map(c => `<li>${c}</li>`).join('') +
            "</ul>";
    }
    modalTexto.innerHTML = texto;
    modal.style.display = "flex";
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

// fecha o modal (somente quando clicar em Confirmar ou Cancelar)
function fecharModal() {
    modal.style.display = "none";
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    assinaturaPendente = null;
}

// clique nos botões do modal
modalCancelar.addEventListener("click", fecharModal);

modalConfirmar.addEventListener("click", () => {
    if (assinaturaPendente) {
        salvarAssinatura(assinaturaPendente.nome, assinaturaPendente.dataURL);
    }
    fecharModal();
});

// clique no botão salvar assinatura
btnSalvarCliente.addEventListener("click", () => {
    const nome = document.getElementById("nomeCliente").value.trim();
    if (!nome) {
        alert("Digite o nome do responsável!");
        return;
    }

    const camposVazios = camposObrigatorios
        .filter(c => !document.getElementById(c.id).value.trim())
        .map(c => c.label);

    const dataURL = canvas.toDataURL();
    assinaturaPendente = { nome, dataURL };

    abrirModal(camposVazios); // abre modal, só fecha se Confirmar ou Cancelar
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

    // desabilitar campos verificados, mantendo os valores
    camposObrigatorios.forEach(campo => {
        const el = document.getElementById(campo.id);
        if (el) el.disabled = true;
    });

    // desabilitar botão de salvar OS
    const btnSalvarOS = document.getElementById("salvar_os");
    if (btnSalvarOS) btnSalvarOS.disabled = true;
}

// -------------------------------
// ASSINATURA TECNICO
// -------------------------------

const btnAssTecnico = document.getElementById("btn-ass-tecnico");
const btnAssTecnico2 = document.getElementById("btn-ass-tecnico2");
const imgTecnico = document.getElementById("img-tecnico");

btnAssTecnico.addEventListener("click", () => {
    imgTecnico.style.display = "block";

    let infoTec = document.getElementById("info-ass-tecnico");
    if (!infoTec) {
        infoTec = document.createElement("div");
        infoTec.id = "info-ass-tecnico";
        infoTec.style.marginTop = "5px";
        imgTecnico.parentElement.appendChild(infoTec);
    }

    const agora = new Date();
    const dataHoraFormatada = agora.toLocaleString();
    infoTec.textContent = `Assinatura do técnico registrada em ${dataHoraFormatada}`;

    btnAssTecnico.style.display = "none";
    btnAssTecnico2.style.display = "none";
});


// -------------------------------
// PULAR PARA AREA DE ASSINATURAS
// -------------------------------

const tituloAssinaturas = document.getElementById("assinaturas");

function rolarParaAssinaturas() {
    if (tituloAssinaturas) {
        const y = tituloAssinaturas.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: y - 500,        // 500px acima do elemento
            behavior: "smooth"
        });
    }
}

if (btnAssCliente2) {
    btnAssCliente2.addEventListener("click", rolarParaAssinaturas);
}

if (btnAssTecnico2) {
    btnAssTecnico2.addEventListener("click", rolarParaAssinaturas);
}


