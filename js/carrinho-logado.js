//Vamos verificar se o usuário está logado
const usuarioLogado = localStorage.getItem('usuarioLogado');
//Se o usuário não estiver logado, é direcionado para a página de login
if (!usuarioLogado) {
    document.body.innerHTML =
        '<div class="container text-center mt-5">' +
        '<h2 class="text-danger"><i class="fa-solid fa-lock"></i> Acesso negado</h2>' +
        '<p class="mb-4"><i class="fa-solid fa-lock"></i> Acesso Negado</p>' +
        '<p class="text-muted mb-4">Você precisa estar logado.</p>' +
        '</div>';
 
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2500);
} else {
    // Reunindo as informações do usuário logado
    const carrinho = JSON.parse(localStorage.getItem("itemCarrinho")) || [];
    const listaProdutosHTML = document.getElementById("lista-produtos");
    const textoTotal = document.getElementById("texto-total");
    let valorTotal = 0;
    let textoPedidoPorEmail = "Olá, gostaria de fazer um pedido:\n\n";
 
    if (carrinho.length === 0) {
        listaProdutosHTML.innerHTML =
            '<tr>' +
            '<td colspan="2">Carrinho vazio</td>' +
            '</tr>';
    } else {
        carrinho.forEach(item => {
            listaProdutosHTML.innerHTML +=
                '<tr>' +
                `<td>${item.nome}</td>` +
                `<td>R$ ${item.preco.toFixed(2)}</td>` +
                '</tr>';
            valorTotal += item.preco;
            textoPedidoPorEmail += `- ${item.nome}: R$ ${item.preco.toFixed(2)}\n`;
        });
    }
 // somar o total 
valorTotal += parseFloat(item.preco)

// colocando os itens no e-mail
textoPedidoPorEmail += `-` + item.nome + `: R$`+ item.preco + `/n`
    
}
   textoTotal.innerText = `Total: R$` + valorTotal;
    textoPedidoPorEmail += `\nValor Total: R$` +valorTotal;
 
 