var bebou = localStorage.getItem('bebouname');
var nom = localStorage.getItem('username');
var pourcentage = localStorage.getItem('pourcentage');
document.getElementById('nom').innerHTML = nom;
document.getElementById('bebou').innerHTML = bebou;
document.getElementById('pourcentage').innerHTML = pourcentage;
document.getElementById('jauge').style.width = pourcentage + '%';