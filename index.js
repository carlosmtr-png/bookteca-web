$(function(){
  function carregarLivros() {
    fetch("http://localhost:8080/bookteca-api/src/lerlivros.php").then(function(resposta){
      resposta.json().then(function(json){
        let listagem = $("#listagem")
        let coluna4 =$("<div></div>")
        coluna4.addClass("col-4")
        coluna4.append(json[0].titulo)
        listagem.append(coluna4)
        console.log(json)
      })
    })
  }

  carregarLivros()
})
