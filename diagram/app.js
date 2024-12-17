const data = {
  categories: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  series: [
    {
      label: '2022',
      data: [4.017, 6.135, 7.091, 5.841, 5.036, 4.547, 3.467, 3.970, 6.313, 3.595, 9.207, 5.945],
      borderWidth: 3,
      backgroundColor: 'rgba(255, 99, 132, 0.3)',
      borderColor: 'rgba(255, 99, 132, 1)',
      barPercentage: 0.8,
    },
    {
      label: '2023',
      data: [2.416, 4.136, 7.935, 8.004, 9.505, 5.026, 6.108, 6.343, 9.404, 9.280, 9.287, 8.689],
      borderWidth: 3,
      backgroundColor: 'rgba(75, 192, 192, 0.3)',
      borderColor: 'rgba(75, 192, 192, 1)',
      barPercentage: 0.8,
    }
  ]
};

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.categories,
    datasets: data.series,
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: 'Perbandingan Penjualan 2022-2023 (dalam Miliar)',
        font: {
          size: 18
        },
        padding: 20
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': Rp ' + context.raw.toFixed(3) + ' M';
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12
          },
          callback: function(value) {
            return 'Rp ' + value.toFixed(1) + ' M';
          }
        },
        title: {
          display: true,
          text: 'Penjualan (Miliar Rupiah)',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Bulan',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        ticks: {
          font: {
            size: 12
          }
        },
        grid: {
          display: false
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart'
    }
  }
});
