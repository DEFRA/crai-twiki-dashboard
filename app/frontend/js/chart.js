import Chart from 'chart.js/auto'

export function barChart (ctx) {
  const chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })

  chartInstance.update()
}

export function lineChart (ctx) {
  const chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })

  chartInstance.update()
}

export function lineChartWithData (ctx, title, data) {
  const labels = data.map(d => d.label)
  const values = data.map(d => d.value)
  const color = getRandomColor()
  const chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: title,
        data: values,
        borderWidth: 1,
        borderColor: color,
        backgroundColor: color + '33',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })

  chartInstance.update()
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export function lineChartWithMultipleData(ctx, title, datasets, type='line') {
  
  const labels = [...new Set(datasets.flatMap(dataset => dataset.data.map(d => d.label)))]

  const chartDatasets = datasets.map(dataset => {
    const color = getRandomColor()
    return {
      label: dataset.model,
      data: dataset.data.map(d => d.value),
      borderColor: color,
      backgroundColor: color + '33',
      borderWidth: 1
    }
  })

  const chartInstance = new Chart(ctx, {
    type,
    data: {
      labels,
      datasets: chartDatasets
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })

  chartInstance.update()
}
