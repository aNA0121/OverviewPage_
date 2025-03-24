// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Destruir gráfico previo si ya existe
    if (window.myChart instanceof Chart) {
        window.myChart.destroy();
    }

    // Crear el gráfico de líneas
    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Today',
                    data: [10, 20, 15, 25, 30, 40],
                    borderColor: 'blue',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'Yesterday',
                    data: [5, 15, 10, 20, 25, 35],
                    borderColor: 'gray',
                    borderWidth: 2,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Evita crecimiento infinito
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
