let count = 1
document.getElementById("radio1").checked = true

setInterval(function(){
    nexImage();
}   ,5000)

function nexImage(){
    count++
    if(count>10){
        count = 1;
    }
    
    document.getElementById("radio" + count).checked = true  
}
function prevImage(){
    count--
    if(count<1){
        count = 10;
    }
    
    document.getElementById("radio" + count).checked = true  
}

function updateVariavel(evt) {
    count = evt.target.classList[0]
}

function menuShow(){
    let menuMobile = document.querySelector('.barraLateral');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open');
    } 
}