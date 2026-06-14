document.addEventListener('DOMContentLoaded', () => {
    
    // Funcionalidad: Alerta al cerrar el modal de Sostenibilidad
    const btnAccion = document.getElementById('btnAccionInteresante');
    
    if(btnAccion) {
        btnAccion.addEventListener('click', () => {
            setTimeout(() => {
                alert("¡Excelente reflexión sobre sostenibilidad y economía circular!");
            }, 400); // Pequeño retraso para permitir que el modal se cierre visualmente
        });
    }

});