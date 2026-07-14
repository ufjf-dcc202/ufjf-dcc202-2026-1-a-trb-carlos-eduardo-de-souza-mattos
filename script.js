let discoSelecionado = null; /*guarda disco selecionado*/

function selecionaDisco(disco) {
  /*função para selecionar disco*/
  if (discoSelecionado === null) {
    /*seleciona disco caso nada esteja selecionado*/
    discoSelecionado = disco;
    discoSelecionado.classList.add("selecionado");
    console.log(`${disco.id} selecionado`); /*confirmação visual*/
  } else {
    if (discoSelecionado === disco) {
      /* deseleciona disco caso o mesmo ja esteja selecionado*/
      discoSelecionado.classList.remove("selecionado");
      discoSelecionado = null;
      console.log(`${disco.id} deselecionado`); /*confirmação visual*/

    } else{
        console.log(`Disco anterior ${discoSelecionado.id} / Novo disco ${disco.id}`);/*confirmação visual*/
        discoSelecionado.classList.remove("selecionado"); /* deseleciona disco anterior*/
        disco.classList.add("selecionado"); /*seleciona disco clickado*/
        discoSelecionado = disco;
    }
  }
}

let discos =document.querySelectorAll('.disco'); /*cria uma variavel que guarda todos os discos*/

discos.forEach(disco => {/* adiciona evento para todos os discos*/
    disco.addEventListener('click',function(){selecionaDisco(this);});/*chama a função selecionaDisco passando disco como parametro*/
    
});
