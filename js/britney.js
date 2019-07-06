var modal = document.getElementById("modal");
var btn = document.getElementById("myBtn");
var close = document.getElementsByClassName("close")[0];

function showModal() {
  modal.style.display = "block";
}
function toggleModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function toggleAlert() {
    document.getElementById("alert").style.display='none';
}