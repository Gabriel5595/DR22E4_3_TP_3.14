const elemento = document.querySelector("#container")


elemento.addEventListener('click', function() {
  elemento.children[0].innerText = "Teste"
})