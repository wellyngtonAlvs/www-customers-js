# Sistema de Clientes

Um sistema simples de gerenciamento de clientes desenvolvido em HTML, CSS e JavaScript.

## 📋 Descrição

Este projeto é um sistema web para cadastro e gerenciamento de clientes com as seguintes funcionalidades:

- ✅ Cadastro de clientes (empresa e contato)
- ✅ Listagem de clientes em tabela
- ✅ Exclusão de clientes
- ✅ Armazenamento local (localStorage)
- ✅ Interface responsiva com Bootstrap
- ✅ Timestamp automático de cadastro

## 🚀 Funcionalidades

### Principais
- **Cadastro**: Adicionar novos clientes com empresa e contato
- **Listagem**: Visualizar todos os clientes cadastrados
- **Exclusão**: Remover clientes com confirmação
- **Persistência**: Dados salvos no navegador (localStorage)

### Técnicas
- Interface responsiva
- Validação de formulário
- Confirmação antes de excluir
- Timestamp automático

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização e layout
- **JavaScript (ES5)**: Lógica da aplicação
- **Bootstrap 4**: Framework CSS para responsividade
- **Google Fonts**: Tipografia (Anton, Bitter)
- **localStorage**: Armazenamento local dos dados

## 📁 Estrutura do Projeto

```
www-customers-js/
├── css/
│   ├── bootstrap.css      # Framework Bootstrap
│   └── style.css          # Estilos customizados
├── img/
│   └── g.jpg              # Imagem de fundo
├── js/
│   ├── app.js             # Lógica principal da aplicação
│   └── jquery.js          # Biblioteca jQuery (não utilizada)
└── index.html             # Página principal
```

## 🎯 Como Usar

1. **Clone ou baixe** o projeto
2. **Abra** o arquivo `index.html` em qualquer navegador moderno
3. **Cadastre** clientes preenchendo os campos obrigatórios
4. **Visualize** os clientes na tabela
5. **Exclua** clientes clicando no botão "Excluir"

## 📝 Funcionalidades Detalhadas

### Cadastro de Cliente
- Campo "Empresa" (obrigatório)
- Campo "Contato" (obrigatório)
- Timestamp automático de cadastro
- Validação de campos obrigatórios

### Listagem
- Tabela responsiva com Bootstrap
- Exibição de: Razão Social, Contato, Hora, Ações
- Ordenação por horário de cadastro

### Exclusão
- Confirmação antes de excluir
- Remoção permanente do localStorage
- Atualização automática da lista

## 🔧 Melhorias Implementadas

### Versão Atual
- ✅ Melhoria na validação de formulário
- ✅ Melhor estrutura de dados
- ✅ Interface mais moderna

### Sugestões para Próximas Versões
- 🔄 Busca e filtros
- 🔄 Edição de clientes
- 🔄 Exportação de dados
- 🔄 Paginação
- 🔄 Temas claro/escuro
- 🔄 Backup/restore de dados
- 🔄 Validação mais robusta
- 🔄 Testes automatizados

## 🎨 Personalização

### Cores e Estilos
O projeto usa um esquema de cores personalizado definido em `css/style.css`:
- Fundo com imagem personalizada
- Tipografia Google Fonts
- Bordas arredondadas
- Sombras sutis

### Modificações
Para personalizar:
1. Edite `css/style.css` para mudar cores e estilos
2. Modifique `js/app.js` para alterar funcionalidades
3. Atualize `index.html` para mudar estrutura

## 📱 Responsividade

O projeto é totalmente responsivo graças ao Bootstrap:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)

## 🔒 Armazenamento

Os dados são salvos no `localStorage` do navegador:
- Chave: `cliente2`
- Formato: JSON
- Persistência: Até limpeza do navegador

## 🐛 Limitações Conhecidas

- Dados perdidos ao limpar cache do navegador
- Sem backup automático
- Limitação de armazenamento local
- Sem sincronização entre dispositivos

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Implemente as melhorias
4. Teste todas as funcionalidades
5. Envie um pull request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

Desenvolvido como projeto de estudo em JavaScript.

## 📞 Suporte

Para dúvidas ou sugestões:
- Abra uma issue no repositório
- Entre em contato via email

---

**Versão**: 1.0.0  
**Última atualização**: Julho 2025 