
let currentWeapon = ''; 

document.addEventListener('DOMContentLoaded', (event) => {
    const selectedWeapon = localStorage.getItem('selectedWeapon');
    if (selectedWeapon) {
        showDescription(selectedWeapon);
        document.getElementById('clear-selection').style.display = 'inline-block';
    }
});

function showDescription(weapon) {
    currentWeapon = weapon; 

    let description = '';

    switch(weapon) {
        case 'báculo':
            description = 'El báculo es una herramienta mágica que canaliza poderes místicos.';
            break;
        case 'hacha':
            description = 'El hacha es un arma poderosa, ideal para cortar a través de enemigos con fuerza bruta.';
            break;
        case 'espada':
            description = 'La espada es un arma versátil, ligera y rápida, usada en el combate cuerpo a cuerpo.';
            break;
        case 'daga':
            description = 'La daga es un arma pequeña y ágil, perfecta para ataques rápidos y letales.';
            break;
        case 'arco':
            description = 'El arco permite atacar a larga distancia con precisión y rapidez.';
            break;
        case 'lanza':
            description = 'La lanza es un arma larga que proporciona ventaja en combate de alcance.';
            break;
    }

    const descriptionContainer = document.getElementById('weapon-description');
    descriptionContainer.innerHTML = `
        <p>${description}</p>
        <button class="choose-weapon-btn" onclick="saveWeapon()">Elegir Arma</button>
    `;
    descriptionContainer.style.display = 'block';
}

function saveWeapon() {
    localStorage.setItem('selectedWeapon', currentWeapon); 
    alert('Has elegido: ' + currentWeapon);
    document.getElementById('clear-selection').style.display = 'inline-block';
}

function clearSelection() {
    localStorage.removeItem('selectedWeapon');
    currentWeapon = '';
    document.getElementById('weapon-description').style.display = 'none';
    document.getElementById('clear-selection').style.display = 'none';
}