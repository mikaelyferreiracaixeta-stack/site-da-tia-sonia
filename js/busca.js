const formBusca = document.querySelector(".busca");
const campoBusca = document.querySelector(".busca__campo");
const itensCatalogo = document.querySelectorAll(".bordados");
// verificar se o formulario de busca existe na pagina
if (formBusca) {
    formBusca.addEventListener("submit", function (event) {
        event.preventDefault();
    })
}
// agora vamos verivicar o texto que foi digitado
campoBusca.addEventListener("input", function () {

// converter o texo para minúsculo para facilitar a comparação
const termoBusca = campoBusca.value.toLowerCase()
// vamos verificar todas as seceções de bordados 
itensCatalogo.forEach(function (item) {

    // pegar o elemento que tem o texto bordado 
    const titulo = item.querySelector('h3').innerText.toLowerCase();
    // verificar se o termo de busca é igual ao título
    if (titulo.includes(termoBusca)) {
        item.style.display = 'block'; //Mostrar o item


    } else {
        item.style.display = 'none'; // Ocultar o item
    }



})
})