const usuarios = [
    {
        login:'DuDuduEdu',
        pass: '1234'
    },
    {
        login:'Vasco',
        pass: '5678'
    },
    {
        login:'Pedrogameplays',
        pass: '221133'
    },
    {
        login:'TropaRaulGil',
        pass: '98765'
    },
    {
        login:'FazoL',
        pass: '131313'
    }
]

let botao = document.getElementById('btnLogar');

botao.addEventListener('click' , function logar(evt){

    evt.preventDefault()
    let pegaUsuario = document.getElementById('usuario').value;
    let pegaSenha = document.getElementById('senha').value;
    let validaLogin = false

    for(let i in usuarios){
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true
            break
        }
    }

    if(validaLogin == true){
        location.href = './inicioDaSteam/Steam.html'
        // alert('Acerto mizeravi')
    }else{
        alert('Usuario ou senha incorreta')
    }

})

function menuShow(){
    let menuMobile = document.querySelector('.barraLateral');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open');
    } 
}