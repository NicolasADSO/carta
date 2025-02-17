// script.js
document.querySelector('.btn').addEventListener('click', function() {
    // Ocultar contenido original
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.message').style.display = 'none';
    document.querySelector('.image').style.display = 'none';
    document.querySelector('.btn').style.display = 'none'; // Ocultar el primer botón

    // Crear nueva sección con mensaje sorpresa
    const nuevaSeccion = document.createElement('div');
    nuevaSeccion.classList.add('nueva-seccion');
    nuevaSeccion.innerHTML = `
        <h2>¡Aquí está la sorpresa! 🎁</h2>
        <p>Me gustas demasiado y quiero ser la persona que lleve de tu mano en mi vida.</p>
        <img src="bonita.jpeg" alt="Sorpresa" class="imagen-sorpresa">
        `;

    document.querySelector('.container').appendChild(nuevaSeccion);

    // Crear el botón para volver al inicio
    const volverBtn = document.createElement('button');
    volverBtn.classList.add('volver-btn');
    volverBtn.textContent = "Volver al inicio";
    document.querySelector('.container').appendChild(volverBtn);

    // Función para volver al inicio
    volverBtn.addEventListener('click', function() {
        // Mostrar contenido original
        document.querySelector('.title').style.display = 'block';
        document.querySelector('.message').style.display = 'block';
        document.querySelector('.image').style.display = 'block';
        document.querySelector('.btn').style.display = 'block'; // Mostrar el primer botón

        // Ocultar nueva sección y el botón "Volver al inicio"
        nuevaSeccion.style.display = 'none';
        volverBtn.style.display = 'none';
    });
});
