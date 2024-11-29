let imagens = document.querySelectorAll(".imgs-carrosel"); //variavel que seleciona tudo que tem a classe .imgs-carrosel
let imgPrincipal = document.querySelector("#img-principal"); //variavel que seleciona o container que tem o id #img-principal

imagens.forEach((imagem) => {
  imagem.addEventListener("click", (event) => { // quando clicar
    imgPrincipal.src = event.target.src; // ele pega o valor do id da variavel e troca pelo o que foi clicado
  });
});
