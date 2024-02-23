function verificarVelocidade() {
    var velocidade = document.getElementById("velocidadeInput").value;
    velocidade = parseFloat(velocidade);
    var mensagemDiv = document.getElementById("mensagem");

    if (velocidade > 60) {
        mensagemDiv.innerHTML = "Condutor ultrapassou a velocidade da via e foi multado.";
        mensagemDiv.style.backgroundColor = "red";
    } else {
        mensagemDiv.innerHTML = "Condutor não foi multado.";
        mensagemDiv.style.backgroundColor = "green";
    }
}
