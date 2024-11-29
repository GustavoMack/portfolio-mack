document.getElementById("button").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "curriculo.pdf";
  link.download = "curriculo-gustavomack.pdf";
  link.click();
});
