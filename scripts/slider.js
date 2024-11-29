let imagens = document.querySelectorAll(".imgs-carrosel");
let imgPrincipal = document.querySelector("#img-principal");

imagens.forEach((imagem) => {
  imagem.addEventListener("click", (event) => {
    imgPrincipal.src = event.target.src; // Use o nome correto da variável
  });
});
