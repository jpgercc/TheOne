// Função para salvar a lista no localStorage
function salvarLista() {
    var lista = document.getElementById('listaFuncionarios');
    var itens = [];
    for (var i = 0; i < lista.children.length; i++) {
        var item = lista.children[i];
        var textoItem = item.firstChild.textContent;
        itens.push(textoItem);
    }
    localStorage.setItem('listaFuncionarios', JSON.stringify(itens));
}

// Função para carregar a lista do localStorage
function carregarLista() {
    var lista = document.getElementById('listaFuncionarios');
    var itens = JSON.parse(localStorage.getItem('listaFuncionarios'));
    if (itens) {
        for (var i = 0; i < itens.length; i++) {
            var novoItem = document.createElement('li');
            novoItem.textContent = itens[i];

            var botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.className = 'remover';
            botaoRemover.addEventListener('click', function() {
                lista.removeChild(novoItem);
                salvarLista();
            });

            novoItem.appendChild(botaoRemover);
            lista.appendChild(novoItem);
        }
    }
}

// Adiciona o evento de clique ao botão de adicionar funcionário
document.getElementById('adicionarFuncionario').addEventListener('click', function() {
    var lista = document.getElementById('listaFuncionarios');
    
    var nome = document.getElementById('nomeFuncionario').value.trim();
    var salario = document.getElementById('salarioFuncionario').value.trim();
    var funcao = document.getElementById('funcaoFuncionario').value.trim();
    
    if (nome !== '' && salario !== '' && funcao !== '') {
        var novoItem = document.createElement('li');
        novoItem.textContent = `Nome: ${nome}, Salário: R$${salario}, Função: ${funcao}`;
        
        var botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.className = 'remover';
        botaoRemover.addEventListener('click', function() {
            lista.removeChild(novoItem);
            salvarLista();
        });

        novoItem.appendChild(botaoRemover);
        lista.appendChild(novoItem);

        document.getElementById('nomeFuncionario').value = '';
        document.getElementById('salarioFuncionario').value = '';
        document.getElementById('funcaoFuncionario').value = '';

        salvarLista();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Carrega a lista ao carregar a página
window.onload = carregarLista;
