let bebou = localStorage.getItem('bebouname');
let nom = localStorage.getItem('username');
let pourcentage = localStorage.getItem('pourcentage');
let texte = document.querySelector('h2');
texte.innerText = "Bravo " + nom + " tu es dans la friendzone de " + bebou + " à " + pourcentage + "% !";
document.getElementById('jauge').style.width = pourcentage + '%';
