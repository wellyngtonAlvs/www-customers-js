// Sistema de Gerenciamento de Clientes
// Versão 2.0 - Código melhorado e modernizado

// Constantes
const STORAGE_KEY = 'clientes';
const FORM_ID = 'formulario';
const RESULTS_ID = 'resultados';

// Elementos DOM
const form = document.getElementById(FORM_ID);
const resultsContainer = document.getElementById(RESULTS_ID);

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', cadastrarCliente);
    mostrarClientes();
});

/**
 * Cadastra um novo cliente
 * @param {Event} e - Evento do formulário
 */
function cadastrarCliente(e) {
    e.preventDefault();
    
    const nomeFantasia = document.getElementById('nomeFantasia').value.trim();
    const contatoCliente = document.getElementById('contatoCliente').value.trim();
    
    // Validação melhorada
    if (!validarCampos(nomeFantasia, contatoCliente)) {
        return;
    }
    
    const cliente = {
        id: gerarId(),
        nome: nomeFantasia,
        contato: contatoCliente,
        dataCadastro: new Date().toISOString(),
        timestamp: {
            hora: new Date().getHours().toString().padStart(2, '0'),
            minuto: new Date().getMinutes().toString().padStart(2, '0'),
            segundo: new Date().getSeconds().toString().padStart(2, '0')
        }
    };
    
    try {
        salvarCliente(cliente);
        form.reset();
        mostrarClientes();
        mostrarMensagem('Cliente cadastrado com sucesso!', 'success');
    } catch (error) {
        console.error('Erro ao cadastrar cliente:', error);
        mostrarMensagem('Erro ao cadastrar cliente. Tente novamente.', 'error');
    }
}

/**
 * Valida os campos do formulário
 * @param {string} nome - Nome da empresa
 * @param {string} contato - Contato do cliente
 * @returns {boolean} - True se válido, false caso contrário
 */
function validarCampos(nome, contato) {
    if (!nome || nome.length < 2) {
        mostrarMensagem('Nome da empresa deve ter pelo menos 2 caracteres.', 'error');
        return false;
    }
    
    if (!contato || contato.length < 3) {
        mostrarMensagem('Contato deve ter pelo menos 3 caracteres.', 'error');
        return false;
    }
    
    return true;
}

/**
 * Gera um ID único para o cliente
 * @returns {string} - ID único
 */
function gerarId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Salva o cliente no localStorage
 * @param {Object} cliente - Dados do cliente
 */
function salvarCliente(cliente) {
    const clientes = obterClientes();
    clientes.push(cliente);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clientes));
}

/**
 * Obtém todos os clientes do localStorage
 * @returns {Array} - Array de clientes
 */
function obterClientes() {
    const clientes = localStorage.getItem(STORAGE_KEY);
    return clientes ? JSON.parse(clientes) : [];
}

/**
 * Exclui um cliente
 * @param {string} id - ID do cliente
 */
function deletarCliente(id) {
    const confirmacao = window.confirm('Tem certeza que deseja excluir este cliente?');
    
    if (!confirmacao) {
        return;
    }
    
    try {
        const clientes = obterClientes();
        const clientesFiltrados = clientes.filter(cliente => cliente.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(clientesFiltrados));
        mostrarClientes();
        mostrarMensagem('Cliente excluído com sucesso!', 'success');
    } catch (error) {
        console.error('Erro ao excluir cliente:', error);
        mostrarMensagem('Erro ao excluir cliente. Tente novamente.', 'error');
    }
}

/**
 * Exibe todos os clientes na tabela
 */
function mostrarClientes() {
    const clientes = obterClientes();
    
    if (clientes.length === 0) {
        resultsContainer.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-muted">
                    Nenhum cliente cadastrado ainda.
                </td>
            </tr>
        `;
        return;
    }
    
    // Ordena por data de cadastro (mais recente primeiro)
    const clientesOrdenados = clientes.sort((a, b) => 
        new Date(b.dataCadastro) - new Date(a.dataCadastro)
    );
    
    resultsContainer.innerHTML = clientesOrdenados.map(cliente => `
        <tr>
            <td><i class="fas fa-building mr-2"></i>${escapeHtml(cliente.nome)}</td>
            <td><i class="fas fa-user mr-2"></i>${escapeHtml(cliente.contato)}</td>
            <td><i class="fas fa-clock mr-2"></i>${cliente.timestamp.hora}:${cliente.timestamp.minuto}:${cliente.timestamp.segundo}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deletarCliente('${cliente.id}')" title="Excluir cliente">
                    <i class="fas fa-trash"></i> Excluir
                </button>
            </td>
        </tr>
    `).join('');
    
    atualizarEstatisticas(clientes.length);
}

/**
 * Escapa HTML para prevenir XSS
 * @param {string} text - Texto a ser escapado
 * @returns {string} - Texto escapado
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Exibe mensagens para o usuário
 * @param {string} mensagem - Mensagem a ser exibida
 * @param {string} tipo - Tipo da mensagem (success, error, warning)
 */
function mostrarMensagem(mensagem, tipo = 'info') {
    // Remove mensagens anteriores
    const mensagensExistentes = document.querySelectorAll('.alert');
    mensagensExistentes.forEach(msg => msg.remove());
    
    const alertClass = tipo === 'success' ? 'alert-success' : 
                      tipo === 'error' ? 'alert-danger' : 
                      tipo === 'warning' ? 'alert-warning' : 'alert-info';
    
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${alertClass} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${mensagem}
        <button type="button" class="close" data-dismiss="alert">
            <span>&times;</span>
        </button>
    `;
    
    // Insere a mensagem antes do formulário
    const container = document.querySelector('.jumbotron');
    container.insertBefore(alertDiv, container.firstChild);
    
    // Remove a mensagem automaticamente após 5 segundos
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

/**
 * Limpa todos os dados do localStorage
 */
function limparTodosDados() {
    const confirmacao = window.confirm('Tem certeza que deseja limpar todos os dados? Esta ação não pode ser desfeita.');
    
    if (confirmacao) {
        localStorage.removeItem(STORAGE_KEY);
        mostrarClientes();
        mostrarMensagem('Todos os dados foram limpos!', 'success');
    }
}

// Função de compatibilidade para manter a função antiga
function mostrarCliente1() {
    mostrarClientes();
}

function deletaCli(contato) {
    const clientes = obterClientes();
    const cliente = clientes.find(c => c.contato === contato);
    if (cliente) {
        deletarCliente(cliente.id);
    }
}

/**
 * Filtra clientes baseado no termo de busca
 */
function filtrarClientes() {
    const termoBusca = document.getElementById('campoBusca').value.toLowerCase().trim();
    const todosClientes = obterClientes();
    
    if (!termoBusca) {
        exibirClientesNaTabela(todosClientes);
        atualizarEstatisticas(todosClientes.length);
        return;
    }
    
    const clientesFiltrados = todosClientes.filter(cliente => 
        cliente.nome.toLowerCase().includes(termoBusca) ||
        cliente.contato.toLowerCase().includes(termoBusca)
    );
    
    exibirClientesNaTabela(clientesFiltrados);
    atualizarEstatisticas(clientesFiltrados.length, todosClientes.length);
}

/**
 * Exibe clientes na tabela com filtro opcional
 * @param {Array} clientes - Array de clientes a exibir
 */
function exibirClientesNaTabela(clientes) {
    if (clientes.length === 0) {
        resultsContainer.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-muted">
                    <i class="fas fa-inbox fa-2x mb-2"></i><br>
                    Nenhum cliente encontrado.
                </td>
            </tr>
        `;
        return;
    }
    
    // Ordena por data de cadastro (mais recente primeiro)
    const clientesOrdenados = clientes.sort((a, b) => 
        new Date(b.dataCadastro) - new Date(a.dataCadastro)
    );
    
    resultsContainer.innerHTML = clientesOrdenados.map(cliente => `
        <tr>
            <td><i class="fas fa-building mr-2"></i>${escapeHtml(cliente.nome)}</td>
            <td><i class="fas fa-user mr-2"></i>${escapeHtml(cliente.contato)}</td>
            <td><i class="fas fa-clock mr-2"></i>${cliente.timestamp.hora}:${cliente.timestamp.minuto}:${cliente.timestamp.segundo}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deletarCliente('${cliente.id}')" title="Excluir cliente">
                    <i class="fas fa-trash"></i> Excluir
                </button>
            </td>
        </tr>
    `).join('');
}

/**
 * Atualiza as estatísticas na interface
 * @param {number} totalFiltrado - Total de clientes filtrados
 * @param {number} totalGeral - Total geral de clientes (opcional)
 */
function atualizarEstatisticas(totalFiltrado, totalGeral = null) {
    const elementoEstatisticas = document.getElementById('totalClientes');
    
    if (totalGeral && totalFiltrado !== totalGeral) {
        elementoEstatisticas.textContent = `${totalFiltrado} de ${totalGeral}`;
    } else {
        elementoEstatisticas.textContent = totalFiltrado;
    }
}
