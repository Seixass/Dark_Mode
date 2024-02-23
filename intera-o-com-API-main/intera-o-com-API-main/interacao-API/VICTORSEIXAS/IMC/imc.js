function calcularIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let IMC = peso / (altura * altura);

    if(IMC < 16.9){
        alert("Muito abaixo do peso\n"+IMC.toFixed(2));
    } 
    else if(IMC >= 17 && IMC < 18.4){
        alert("Abaixo do peso\n"+IMC.toFixed(2));
    }
     else if(IMC >= 18.5 && IMC < 24.9){
        alert("IMC normal\n"+IMC.toFixed(2));
    }
     else if(IMC >= 25 && IMC < 29.9){
        alert("Acima do peso\n"+IMC.toFixed(2));
    }
     else if(IMC >= 30.0 && IMC < 34.9){
        alert("Obesidade grau I\n"+IMC.toFixed(2));
    }
     else if(IMC >= 35 && IMC < 40){
        alert("Obesidade grau II\n"+IMC.toFixed(2));
    }
     else if(IMC >= 40){
        alert("Obesidade grau III\n"+IMC.toFixed(2));
    }
}


