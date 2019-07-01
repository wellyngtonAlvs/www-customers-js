document.getElementById('formulario').addEventListener('submit', cadastraCliente)

function cadastraCliente(e) {
    var nomeFantasia = document.getElementById('nomeFantasia').value
    var contatoCliente = document.getElementById('contatoCliente').value
    var data = new Date()

    if(!nomeFantasia && !contatoCliente){
        alert("Favor, preencher campos.. Nome fantasia e Contato")
        return
    }

    cliente = {
        nome: nomeFantasia,
        contato: contatoCliente,
        dia: data.getDay(),
        mes: data.getMonth(),
        ano: data.getFullYear()
    }
    console.log(cliente)

    if (localStorage.getItem('cliente2') === null) {
        var clientes = []
        clientes.push(cliente)
        localStorage.setItem('cliente2', JSON.stringify(clientes))
    } else {
        var clientes = JSON.parse(localStorage.getItem('cliente2'))
        clientes.push(cliente)
        localStorage.setItem('cliente2', JSON.stringify(clientes))
    }

    document.getElementById('formulario').reset()
    mostrarCliente1()
    e.preventDefault();
}

function deletaCli(contato) {
    var clientes = JSON.parse(localStorage.getItem('cliente2'))
    const retorno = window.confirm('Deseja mesmo excluír ?')

    if(!retorno){
        return false;
    }

    for (var i = 0; i < clientes.length; i++) {
        if (clientes[i].contato == contato) {
            clientes.splice(i, 1)
        }

        localStorage.setItem('cliente2', JSON.stringify(clientes))
    }

    mostrarCliente1()
}

function mostrarCliente1() {
    var clientes = JSON.parse(localStorage.getItem('cliente2'))
    var clientesResultado = document.getElementById('resultados')

    clientesResultado.innerHTML = ''

    for (var i = 0; i < clientes.length; i++) {

        var nome = clientes[i].nome
        var contato = clientes[i].contato
        var dia = clientes[i].dia
        var mes = clientes[i].mes
        var ano = clientes[i].ano

        clientesResultado.innerHTML += '<tr><td>' + nome + '</td>' +
            '<td>' + contato + '</td>' +
            '<td>' + dia + '/' + mes + '/' + ano + '</td>' +
            '<td><button class="btn btn-danger" onclick="deletaCli(\'' + contato + '\')">Excluir</button></td>' +
            '</tr>'

    }
}