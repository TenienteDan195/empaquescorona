// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos el botón del menú y la lista de enlaces
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Escuchamos el clic en el botón
    menuBtn.addEventListener('click', () => {
        // La clase 'active' controla si el menú se muestra u oculta en CSS
        navLinks.classList.toggle('active');
        
        // Cambiamos el icono para dar feedback visual al usuario
        if (navLinks.classList.contains('active')) {
            menuBtn.innerHTML = '✕'; // Botón de cerrar
        } else {
            menuBtn.innerHTML = '☰'; // Botón de menú
        }
    });
});