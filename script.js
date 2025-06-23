function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const img = new Image();
    img.onload = function() {
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        doc.addImage(img, 'PNG', 0, 0, pageWidth, pageHeight);
        doc.save('justificante.pdf');
    };
    img.onerror = function() {
        console.error("Error al cargar la imagen.");
    };
    img.src = 'imagen.png';
}