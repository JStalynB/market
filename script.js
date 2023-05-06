// Obtener el elemento del iframe
var reportSection = document.querySelector('iframe');

// Función para cargar el reporte
function loadReport() {
    reportSection.src = "https://app.powerbi.com/view?r=eyJrIjoiNDM5MGNiYTEtNTc5ZS00YmNlLWEyOGYtOTg5NDhkMzBjNzk4IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9";
}

// Cargar el reporte cuando la página termine de cargar
window.onload = loadReport;

document.getElementById('download-btn').addEventListener('click', function() {
    const pdf = new jsPDF(); // crear un objeto jsPDF
    const iframe = document.querySelector('iframe');
    const iframeWindow = iframe.contentWindow || iframe.contentDocument.defaultView;
    iframeWindow.scrollTo(0, 0); // Asegurarse de que el contenido del iframe esté en la parte superior
    pdf.addHTML(iframe, function() { // Agregar el contenido del iframe al documento PDF
        pdf.save('dashboard.pdf'); // Descargar el documento PDF
    });
});
