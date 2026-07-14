let discoSelecionado = null; //guarda disco selecionado
let torreSelecionada = null; //guarda torre selecionada

function selecionaDisco(disco) {
  /*função para selecionar disco*/
  if (discoSelecionado === null) {//seleciona disco caso nada esteja selecionado
    discoSelecionado = disco;
    discoSelecionado.classList.add("selecionado");
    console.log(`${disco.id} selecionado`); //confirmação visual
  } else {
    if (discoSelecionado === disco) {//deseleciona disco caso o mesmo ja esteja selecionado
      discoSelecionado.classList.remove("selecionado");
      discoSelecionado = null;
      console.log(`${disco.id} deselecionado`); //confirmação visual

    } else{
        console.log(`Disco anterior ${discoSelecionado.id} / Novo disco ${disco.id}`);//confirmação visual
        discoSelecionado.classList.remove("selecionado"); //deseleciona disco anterior*
        disco.classList.add("selecionado"); //seleciona disco clickado
        discoSelecionado = disco;
    }
  }
}

let discos =document.querySelectorAll('.disco'); //cria uma variavel que guarda todos os discos

discos.forEach(disco => {//adiciona evento para todos os discos
    disco.addEventListener('click',function(event){
        event.stopPropagation();// corrige bug de selecionar disco e torre ao mesmo tempo
        selecionaDisco(this);//chama a função selecionaDisco passando disco como parametro
    });
    
});


/*TORRES*/

let torres = document.querySelectorAll('.torre'); // Pega todas as torres

torres.forEach(torre => {
    torre.addEventListener('click', function() {moverDisco(this);});//chama a função moverDisco passando torre como parametro
});

function moverDisco (torre){
    if(discoSelecionado===null){//caso nenhum disco esteja selecionado
        console.log(`Nenhum disco selecionado`);
        return;
    }
    torre.appendChild(discoSelecionado);//move disco selecionado para torre selecionada
        console.log(`disco ${discoSelecionado.id} movido`)
    discoSelecionado.classList.remove('selecionado');
    discoSelecionado=null;
}
