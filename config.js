/**
 * Configurações do Sistema de Clientes
 * Centraliza todas as constantes e configurações da aplicação
 */

const CONFIG = {
    // Chaves de armazenamento
    STORAGE: {
        CLIENTES: 'clientes',
        CONFIGURACOES: 'configuracoes_sistema'
    },
    
    // IDs dos elementos DOM
    ELEMENTOS: {
        FORMULARIO: 'formulario',
        RESULTADOS: 'resultados',
        CAMPO_BUSCA: 'campoBusca',
        TOTAL_CLIENTES: 'totalClientes',
        NOME_FANTASIA: 'nomeFantasia',
        CONTATO_CLIENTE: 'contatoCliente'
    },
    
    // Validações
    VALIDACAO: {
        NOME_MIN_LENGTH: 2,
        CONTATO_MIN_LENGTH: 3,
        NOME_MAX_LENGTH: 100,
        CONTATO_MAX_LENGTH: 200
    },
    
    // Mensagens
    MENSAGENS: {
        SUCESSO: {
            CLIENTE_CADASTRADO: 'Cliente cadastrado com sucesso!',
            CLIENTE_EXCLUIDO: 'Cliente excluído com sucesso!',
            DADOS_LIMPOS: 'Todos os dados foram limpos!'
        },
        ERRO: {
            CAMPOS_OBRIGATORIOS: 'Por favor, preencha todos os campos obrigatórios.',
            NOME_INVALIDO: 'Nome da empresa deve ter pelo menos 2 caracteres.',
            CONTATO_INVALIDO: 'Contato deve ter pelo menos 3 caracteres.',
            ERRO_CADASTRAR: 'Erro ao cadastrar cliente. Tente novamente.',
            ERRO_EXCLUIR: 'Erro ao excluir cliente. Tente novamente.'
        },
        CONFIRMACAO: {
            EXCLUIR_CLIENTE: 'Tem certeza que deseja excluir este cliente?',
            LIMPAR_DADOS: 'Tem certeza que deseja limpar todos os dados? Esta ação não pode ser desfeita.'
        }
    },
    
    // Configurações de interface
    UI: {
        AUTO_HIDE_ALERTS: true,
        ALERT_TIMEOUT: 5000, // 5 segundos
        ANIMATION_DURATION: 600,
        ITEMS_PER_PAGE: 10
    },
    
    // Configurações de data/hora
    TIMESTAMP: {
        FORMATO: 'HH:mm:ss',
        TIMEZONE: 'America/Sao_Paulo'
    }
};

// Exporta para uso em outros arquivos (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 
