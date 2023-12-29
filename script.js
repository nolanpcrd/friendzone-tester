document.getElementById('noms').addEventListener('submit', function(e) {
    e.preventDefault();
    var nom = document.getElementById('nom').value;
    var bebou = document.getElementById('bebou').value;
    var pourcentage = Math.floor(Math.random() * 100) + 1;
    save(nom, bebou, pourcentage);
});

function save(nom, bebou, pourcentage) {
    localStorage.setItem('username', nom);
    localStorage.setItem('bebouname', bebou);
    localStorage.setItem('pourcentage', pourcentage);
    window.location.href = 'result.html';
}