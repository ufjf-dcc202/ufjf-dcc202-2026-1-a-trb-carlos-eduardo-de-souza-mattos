let discoSelecionado = null; //guarda disco selecionado
let torreSelecionada = null; //guarda torre selecionada

function selecionaDisco(disco) {//função para selecionar disco
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

    if(discoSelecionado===null){//regra1 - O disco deve estar selecionado
        console.log(`Nenhum disco selecionado`);
        return;
    }
        let torreInicial = discoSelecionado.parentElement;//guarda a torre atual do disco selecionado


    if(discoSelecionado!==torreInicial.firstElementChild){//regra2 - O disco para mover deve ser o do topo da lista
    console.log('Não é o disco do topo');
    return;
    }

    const tamanhoSelecionado = Number(discoSelecionado.dataset.tamanho);//variavel tamanho guarda o tamanho de cada disco
    console.log(tamanhoSelecionado);//mostra tamanho no console

    if(torreInicial===torre){//regra3 - disco não deve estar na torre
        console.log(`Disco ja esta na torre`);
        return;
    }

    if(torre.children.length>0){//verifica se a torre selecionada está vazia (correção de bug com torre vazia)
        let topoSelecionado=torre.firstElementChild;//guarda o disco do topo selecionado
        let tamanhoTopoSelecionado = Number(topoSelecionado.dataset.tamanho);// guarda o tamanho do disco do topo selecionado

        if(tamanhoSelecionado>tamanhoTopoSelecionado){//regra4 - O disco selecionado deve ser menor do que o disco da torre selecionada
            console.log('Disco maior que a base');
            return;
        }
    }
    

    torre.prepend(discoSelecionado);//move disco selecionado para torre selecionada de cima para baixo
    console.log(`disco ${discoSelecionado.id} movido`)
    discoSelecionado.classList.remove('selecionado');
    discoSelecionado=null;
}
