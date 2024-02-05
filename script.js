const kertas = document.querySelector('.kertas') 
const batu = document.querySelector('.batu') 
const gunting = document.querySelector('.gunting') 
const user = document.querySelector('.user .gambar') 
const comp = document.querySelector('.comp .gambar')
const hasil = document.querySelector('.hasil h2')
const skorComp = document.querySelector('span.comp')
const skorUser = document.querySelector('span.user')
const layarPilihan = document.querySelector('.layar-pilihan')
const startGame = document.querySelector('.start-game')
const buttonMulai = document.querySelector('button#mulai')
const buttonPanduan = document.querySelector('button#panduan')
const buttonPanduanX = document.querySelector('.panduan h1')
const kotakPandu = document.querySelector('.panduan')

var pilihanComp = 0
var pilihanUser = 0
var animGambar = 1
var totalSkorComp = 0
var totalSkorUser = 0

//skor awal


//fungsi acak comp
function compAcak(){
    let i = Math.round(Math.random() * 2 + 1)
    comp.style.backgroundImage = 'url(img/'+ i +'.jpg)'
    pilihanComp = i
    return pilihanComp
}

//animasi comp memilih

function animasiMemilih(){
    var interval = setInterval(function(){
        comp.style.backgroundImage = 'url(img/'+ animGambar +'.jpg)'
        animGambar++
        if(animGambar > 3){
            animGambar = 1
        } 
    }, 100)
    setTimeout(function(){
        clearInterval(interval)
    }, 2000)
}

//hasil permainan
function hasilGame  (){
    if(pilihanUser == pilihanComp){
        hasil.innerHTML = 'seri'
    } else if((pilihanUser == 1 && pilihanComp == 2) || (pilihanUser == 2 && pilihanComp == 3) || (pilihanUser == 3 && pilihanComp == 1)){
        hasil.innerHTML = 'kamu menang'
        totalSkorUser++
    } else if((pilihanUser == 1 && pilihanComp == 3) || (pilihanUser == 2 && pilihanComp == 1) ||(pilihanUser == 3 && pilihanComp == 2) ){
        hasil.innerHTML = 'kamu kalah'
        totalSkorComp++
    }
}

//user memilih
//kertas
kertas.addEventListener('click', function(){
    user.style.backgroundImage = 'url(img/1.jpg)'
    pilihanUser = 1
    hasil.innerHTML = ''
    animasiMemilih()
    setTimeout(function(){
        compAcak()
        hasilGame()
        skorComp.innerHTML = totalSkorComp
        skorUser.innerHTML = totalSkorUser
    }, 2000)
    
});

//batu
batu.addEventListener('click', function(){
    user.style.backgroundImage = 'url(img/2.jpg)'
    pilihanUser = 2
    hasil.innerHTML = ''
    animasiMemilih()
    setTimeout(function(){
        compAcak()
        hasilGame()
        skorComp.innerHTML = totalSkorComp
        skorUser.innerHTML = totalSkorUser
    }, 2000)
});

//gunting
gunting.addEventListener('click', function(){
    user.style.backgroundImage = 'url(img/3.jpg)'
    pilihanUser = 3
    hasil.innerHTML = ''
    animasiMemilih()
    setTimeout(function(){
        compAcak()
        hasilGame()
        skorComp.innerHTML = totalSkorComp
        skorUser.innerHTML = totalSkorUser
    }, 2000)
});

//button
//button start
buttonMulai.addEventListener('click', function(){
    startGame.style.display = "none"
    layarPilihan.style.display = "block"
})

//button panduan
buttonPanduan.addEventListener('click', function(){
    kotakPandu.style.display = "block"
})

//button panduan keluar
buttonPanduanX.addEventListener('click', function(){
    kotakPandu.style.display = "none"
})


