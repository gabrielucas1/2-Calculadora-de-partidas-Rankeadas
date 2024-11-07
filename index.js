function amoutOfWins(victories, defeats){ //criei uma função para calcular a quantidade de vitoria menos derrota
    let results = victories - defeats
    return results
}


function myElo(win){ // aq foi uma função para saber qual o elo se baseando de acordo com a quantidade de vitorias 
    let elo = ""
    if(win < 10){
        elo = "Ferro"
    }
    else if(win > 10 && win <= 20){
        elo = "Bronze"
    }
    else if( win > 20 && win <= 50){
        elo = "Prata"
    }
    else if(win > 50 && win <= 80){
        elo = "ouro"
    }
    else if( win > 80 && win <= 90){
        elo = "Diamante"
    }
    else if(win > 90 && win <= 100){
        elo = "Lendario"
    }
    else if( win >= 101){
        elo = "Imortal"
    }


    return elo;
}


function myRaked(victories, defeats){ // aqui foi uma função que vai receber como parametro vitoria e derrota
    const win = amoutOfWins(victories,defeats) // aqui win vai receber o metodo amoutOfWins que tem o calculado para saber o resultado de vitoria - derrota 
    const elin = myElo(win) // aqui elin recebe o meto my elo como parametro o win( que tem o valor do resultado) para saber qual o elo
    console.log("O Heroi tem de saldo de "+ win + " e está no nivel de " + elin) // é a mensagem concatenada 

}


myRaked(55,10) // chama a função myRanked colocando como parametro a quantidade de vitoria e derrotas