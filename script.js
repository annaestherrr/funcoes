//1 - crie uma função que exiba uma mensagem no console

function exibirMensagem() {
    console.log("Olá, Mundo!")
}

exibirMensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function exibirNome(nome) {
    console.log(`Olá ${nome}`)
}

exibirNome("Anna")


//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console
function mostrarDados(name, numero, estilomusical) {
    console.log(`o seu nome é ${name} o seu numero é ${numero} e o seu estilo musical é ${estilomusical}`)
}

mostrarDados("Anna Luiza", "12", "sertanejo")


//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function mostrarGostos(filme, musica) {
    console.log(`o filme é ${filme} a musica é ${musica}`)
}

mostrarGostos("Ponte para Terabitia", "Nota de Repúdio")

//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)
function triple(num) {
    return num * 3
}

console.log(triple(10))