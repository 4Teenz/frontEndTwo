function calcularNumero (){
    let iptValorUm = parseInt(document.querySelector('#iptValor1').value)
    let iptValorDois = parseInt(document.querySelector('#iptValor2').value)

    
    if(iptValorUm > iptValorDois){
        alert('O primeiro campo precisa ser menor')
        return
    }

    console.log(iptValorUm , iptValorDois)
    for(let i = iptValorUm; i < iptValorDois; i++){
        console.log(`Valor de i é: ${i}`)
    }
}