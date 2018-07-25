//CHANGE HEADER

const base = document.querySelector("#base")

const depart = document.querySelector("#depart")
const depart_blc = document.querySelector("#depart_blc")

const arrive = document.querySelector("#arrive")
const arrive_blc = document.querySelector("#arrive_blc")

const aller = document.querySelector("#aller")
const aller_blc = document.querySelector("#aller_blc")

const retour = document.querySelector("#retour")
const retour_blc = document.querySelector("#retour_blc")

const persons = document.querySelector("#persons")
const persons_blc = document.querySelector("#persons_blc")


depart.addEventListener("click", function () {
  depart_blc.style.display = "block"
  base.style.display = "none"
  arrive_blc.style.display = "none"
  aller_blc.style.display = "none"
  retour_blc.style.display = "none"
  persons_blc.style.display = "none"
})

arrive.addEventListener("click", function () {
  arrive_blc.style.display = "block"
  base.style.display = "none"
  depart_blc.style.display = "none"
  aller_blc.style.display = "none"
  retour_blc.style.display = "none"
  persons_blc.style.display = "none"
})

aller.addEventListener("click", function () {
  aller_blc.style.display = "block"
  base.style.display = "none"
  depart_blc.style.display = "none"
  arrive_blc.style.display = "none"
  retour_blc.style.display = "none"
  persons_blc.style.display = "none"
})

retour.addEventListener("click", function () {
  retour_blc.style.display = "block"
  base.style.display = "none"
  depart_blc.style.display = "none"
  arrive_blc.style.display = "none"
  aller_blc.style.display = "none"
  persons_blc.style.display = "none"
})

persons.addEventListener("click", function () {
  persons_blc.style.display = "block"
  base.style.display = "none"
  depart_blc.style.display = "none"
  arrive_blc.style.display = "none"
  aller_blc.style.display = "none"
  retour_blc.style.display = "none"
})

//PLUS D'AMOUR
function plus_d_amour() {

  const tweet = document.getElementById("tweet");
  tweet.style.display = "flex";

  const button = document.getElementById("button");
  button.style.display = "none";
}

//POPIN
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})