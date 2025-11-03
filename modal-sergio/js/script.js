// modal aparece assim q a tela e carregada
document.addEventListener("DOMContentLoaded", function() {
  const modal = new bootstrap.Modal(document.getElementById('myModal'))
  modal.show();
});

// close sumir e aparece
document.getElementById('btnM').style.display = 'none'
setTimeout(function () {
  document.getElementById('btnM').style.display = 'inline'
}, 12000)

// segundos regressivo
contRegress = setInterval(function() {
  const cronometro = document.getElementById('contRegress').innerHTML
  const soma = parseInt(cronometro) - 1
  if(soma===0){
    document.getElementById('contRegress').innerHTML= "Voce ja pode fechar"
    pararContagem()
  }else{
    document.getElementById('contRegress').innerHTML= soma
  }
}, 1000)

function pararContagem(){
  clearInterval(contRegress)
}

// barra progresso
let barra = document.getElementById("bp")
let carga = 0
let intBarra = setInterval(function() {
  barra.style.width = carga + "%"
  carga++
}, 114)