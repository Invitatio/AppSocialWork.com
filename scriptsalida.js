document.getElementById('generar-archivo').addEventListener('click', generarPDF);

function generarPDF() {
    const nombre = document.getElementById('nombre').value;
    const semestre = document.getElementById('semestre').value;
    const grupo = document.getElementById('grupo').value;
    const especialidad = document.getElementById('especialidad').value;
    const familiar = document.querySelector('input[name="asunto-familiar"]').checked;
    const salud = document.querySelector('input[name="asunto-salud"]').checked;
    const personal = document.querySelector('input[name="asunto-personal"]').checked;
    const horaSalida = document.getElementById('hora-salida').value;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar la imagen
    const img = new Image();
    img.onload = function() {
        // Ajusta las coordenadas y el tamaño de la imagen según tus necesidades
        doc.addImage(img, 'PNG', 10, 10, 50, 50); // x, y, ancho, alto

        doc.setFontSize(16);
        doc.text('Pase de Salida', doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });
        doc.setFontSize(12);

        let y = 70; // Ajusta la posición Y para que no se superponga con la imagen

        doc.text(`Nombre del Alumno: ${nombre}`, 20, y);
        y += 10;
        doc.text(`Semestre: ${semestre} Grupo: ${grupo} Especialidad: ${especialidad}`, 20, y);
        y += 10;
        doc.text('Asunto:', 20, y);
        y += 10;

        let asuntos = [];
        if (familiar) asuntos.push('Familiar');
        if (salud) asuntos.push('Salud');
        if (personal) asuntos.push('Personal');

        doc.text(`Asuntos: ${asuntos.join(', ')}`, 20, y);
        y += 10;
        doc.text(`Hora de Salida: ${horaSalida}`, 20, y);

        doc.save('pase_salida.pdf');
    };
    img.onerror = function() {
        console.error("Error al cargar la imagen.");
        // Si la imagen no se carga, aún puedes generar el PDF sin ella
        doc.setFontSize(16);
        doc.text('Pase de Salida', doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });
        doc.setFontSize(12);

        let y = 40; // Posición inicial en el eje Y

        doc.text(`Nombre del Alumno: ${nombre}`, 20, y);
        y += 10;
        doc.text(`Semestre: ${semestre} Grupo: ${grupo} Especialidad: ${especialidad}`, 20, y);
        y += 10;
        doc.text('Asunto:', 20, y);
        y += 10;

        let asuntos = [];
        if (familiar) asuntos.push('Familiar');
        if (salud) asuntos.push('Salud');
        if (personal) asuntos.push('Personal');

        doc.text(`Asuntos: ${asuntos.join(', ')}`, 20, y);
        y += 10;
        doc.text(`Hora de Salida: ${horaSalida}`, 20, y);

        doc.save('pase_salida.pdf');
    };
    img.src = 'tu_imagen.png'; // Reemplaza 'tu_imagen.png' con el nombre de tu archivo de imagen
}