document.addEventListener('DOMContentLoaded', function () {
    
    fetch('weapons.json')
        .then(response => response.json())
        .then(data => {
            const weaponsContainer = document.getElementById('weapons-container');

            
            data.forEach(weapon => {
                const img = document.createElement('img');
                img.src = weapon.image;
                img.alt = weapon.name;
                img.classList.add('weapon');
                img.dataset.id = weapon.id;
                weaponsContainer.appendChild(img);

                
                img.addEventListener('click', function () {
                    showWeaponDetails(weapon);
                });
            });
        });

    
    function showWeaponDetails(weapon) {
        const descriptionContainer = document.getElementById('description-container');
        const weaponDescription = document.getElementById('weapon-description');
        const chooseWeaponButton = document.getElementById('choose-weapon');
        const clearSelectionButton = document.getElementById('clear-selection');

        weaponDescription.textContent = weapon.description;
        descriptionContainer.classList.add('visible');

        chooseWeaponButton.onclick = function () {
            localStorage.setItem('selectedWeapon', JSON.stringify(weapon));
            clearSelectionButton.style.display = 'block';
        };

        clearSelectionButton.onclick = function () {
            localStorage.removeItem('selectedWeapon');
            clearSelectionButton.style.display = 'none';
            descriptionContainer.classList.remove('visible');
        };

        
        if (localStorage.getItem('selectedWeapon')) {
            clearSelectionButton.style.display = 'block';
        }
    }

    
    Swal.fire({
        title: '¿Estás listo?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO',
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById('weapons-container').style.display = 'flex';
        } else if (result.isDenied) {
            Swal.fire({
                title: '¡Gallina!',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5MEs6BsC8BhZLkjENgZTPEWYgKJsL0cHwA&s',
                imageWidth: 400,
                imageHeight: 200,
                confirmButtonText: 'OK',
                onClose: () => window.close()
            });
        }
    });
});