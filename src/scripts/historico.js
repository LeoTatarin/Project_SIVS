// ==================== HISTÓRICO ====================

// Pegamos o <tbody> da tabela de histórico
const tabelaHistorico = document
    .getElementById("tabela-historico")
    .querySelector("tbody");

/**
 * Função para adicionar uma entrada no histórico
 *
 * @param {string} usuario   -> Quem fez a ação
 * @param {string} acao      -> O que foi feito
 * @param {number} latitude  -> Coordenada do local
 * @param {number} longitude -> Coordenada do local
 */
function adicionarHistorico(usuario, acao, latitude, longitude) {
    const agora = new Date();
    const dataHora = agora.toLocaleString("pt-BR");

    const novaLinha = document.createElement("tr");

  // Coluna informações
    const tdInfo = document.createElement("td");
    tdInfo.setAttribute("data-label", "Histórico");
    tdInfo.style.padding = "8px";
    tdInfo.innerHTML = `
    <div><strong>Usuário:</strong> ${usuario}</div>
    <div><strong>Data:</strong> ${dataHora}</div>
    <div><strong>Ação:</strong> ${acao}</div>
    `;

  // Coluna local
    const tdLocal = document.createElement("td");
    tdLocal.setAttribute("data-label", "Local");
    tdLocal.style.textAlign = "center";
    tdLocal.innerHTML = `
        <a id="world-icon href="https://www.google.com/maps?q=${latitude},${longitude}"
            target="_blank"
            title="Abrir no Google Maps">
            🌐
        </a>
    `;

    novaLinha.appendChild(tdInfo);
    novaLinha.appendChild(tdLocal);
    tabelaHistorico.appendChild(novaLinha);
}

// ==================== BOTÕES QUE GERAM HISTÓRICO ====================

// Aqui você define o usuário logado (pode vir de login, backend, etc.)
const usuarioAtual = "Leonardo"; 

// Pega coordenadas (se não tiver geolocalização real, pode usar fixo)
function getLocalizacao(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        (pos) => {
            callback(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
        // fallback caso usuário negue permissão
            callback(-23.55052, -46.633308); // exemplo: São Paulo
        }
        );
    } else {
        callback(-23.55052, -46.633308);
    }
}

// Mapeamento de botões → ações
const acoesBotoes = {
    "alterar-status": "status alterado",
    "ass-devolucao": "assinatura de devolução",
    "add-certificado": "adicionou certificado",
    "enviar-email": "enviou por email",
    "imprimir": "imprimiu",
    "salvar_os": "salvou alteração",
    "btnAdd": "enviou comunicação",
    "btn-add-peca": "adicionou pedido de peça",
    "btn-add-arq": "anexou arquivo",
    "btn-salvar-cliente": "registrou assinatura de cliente",
    "btn-ass-tecnico": "assinou ordem de serviço",
};

// Atacha listeners dinamicamente
for (const [idBotao, acao] of Object.entries(acoesBotoes)) {
    const botao = document.getElementById(idBotao);
    if (botao) {
        botao.addEventListener("click", () => {
            getLocalizacao((lat, lng) => {
                adicionarHistorico(usuarioAtual, acao, lat, lng);
            });
        });
    }
}