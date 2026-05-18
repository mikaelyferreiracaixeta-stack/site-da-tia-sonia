const botoesBordados = document.querySelectorAll('.btn-adicionar')
//Agora vamos criar o carrinho de compras
let carrinho = JSON.parse(localStorage.getItem('itemCarrinho')) || [];
// Função para adicionar itens ao carrinho
botoesBordados.forEach(function(botao) {
    botao.addEventListener('click', function() {
        event.preventDefault()//Evita que a pagina recarregue
        //Recebe dados do botão
        const nomeProduto = botao.getAttribute('data-nome');
        const precoProduto = parseFloat(botao.getAttribute('data-preco'));
        //Criar um objeto para o item do carrinho
        const itemCarrinho = {
            nome: nomeProduto,
            preco: precoProduto,
            quantidade: 1
        };
        // Adicionar o item ao carrinho
        carrinho.push(itemCarrinho);
        // Salvar o carrinho no localStorage
        localStorage.setItem('itemCarrinho', JSON.stringify(carrinho));
        // Exibe uma mensagem de corfirmacao 
    botao.innerText= "adicionado"
    botao.classList.replace("btn-primary", "btn-success")
    // Depois de um tempo a mensagem some
    setTimeout(() => {
        botao.innerText = 'Adicionar ao <i class="fa-solid fa-cart-shopping"></i>'
            botao.classList.replace('btn-success', 'btn-primary')}, 2000)
        })
})

 
