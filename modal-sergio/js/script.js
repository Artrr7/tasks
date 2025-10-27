document.addEventListener("DOMContentLoaded", function () {
  const modal = new bootstrap.Modal(document.getElementById('myModal'));
  modal.show();

  setTimeout(function () {
    modal.hide()
    console.log("depois de 12s")
  }, 12000)
});

let barra = document.getElementById("bp")
let carga = 0
let intBarra = setInterval(function(){
  barra.style.width = carga + "%"
  carga++
},115)
