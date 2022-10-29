//variaveis: valores que são guardados em locais reutilizaveis
// var nome = chris
// nome = Caique
// const numero = 20
// numero = 16 nao vai deixar
// let == var
// var eu consigo acessar e modificar de qualquer lugar do codigo
// let eu só consigo acessar e modificar dentro do mesmo bloco {}
// var == roupa de sair... você pode sair de casa ou então dormir com essa roupa que ninguem vai achar estranho
// let = pijama... você pode dormir com ele confortavelmente, mas é estranho quando sai com ele na rua.

/* 
Sistema de Cadastro de Peças
-  Permitir o cadastro da peça somente se ela pesar mais de 100g.
- Número de peças na lista é de 10 unidades, caso tenha 10 ou mais peças, usuário receberá mensagem: lista de peças está lotada.
- Validar se o nome da peça possui mais de 3 caracteres. 
*/

// MODELO 1
//let peso2 = 50
//if (peso2 >= 100) {
//    console.log("A peça possui o tamanho adequado")
//} else {
//    console.log("A peça deve ter no mínimo 100g")
//}

// MODELO 2
let peso = 50
if (peso < 100) {
    console.log("A peça deve ter no mínimo 100g")
} else {
    console.log("A peça possui o tamanho adequado")
}



let listaDePecas = ["Lanterna", "Motor", "Amortecedor", "Cambio", "Painel", "Cabeçote"]
if (listaDePecas.length < 10) {
    //É possível 
    console.log("Cadastrado com sucesso!")
} else {
    //Não é possivel 
    console.log("Não é possível cadastrar! Espaço insuficiente.")
}

let nomePeca = "Disco de Freio"
if (nomePeca.length > 3) {
    console.log("Nome da peça adequado para o cadastro!")
} else {
    console.log("Espaço insuficiente!")
}

switch (nomePeca.length) {
    case 0:
        console.log("O nome não pode ser vazio")
        break;
    case 1:
        console.log("O nome tem apenas 1 caracter e precisa ser maior que 3!")
        break;
    case 2:
        console.log("O nome tem apenas 1 caracter e precisa ser maior que 3!")
        break;
    case 3:
        console.log("O nome tem apenas 1 caracter e precisa ser maior que 3!")
        break;
    default:
        console.log("O nome foi cadastrado com Sucesso!")
        break;
}


