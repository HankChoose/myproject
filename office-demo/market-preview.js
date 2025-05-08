module.exports = (req, res) => {
  const {
    productName = "N/A",
    targetMarket = "N/A",
    mainCompetitors = "N/A",
    productAdvantages = "N/A",
    expectedPrice = "N/A"
  } = req.body;

  // Dynamically generate market share and sales growth data based on product name and competitors
  const marketShareData = generateMarketShareData(mainCompetitors);
  const salesGrowthData = generateSalesGrowthData(expectedPrice);

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Market Preview</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      width: 600px;
    }

    .chart-container {
      width: 500px;
      height: 300px;
      margin-bottom: 40px;
    }

    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  </style>
</head>
<body>
  <h1>Market Analysis Report</h1>
  <p><strong>Product Name:</strong> ${productName}</p>
  <p><strong>Target Market:</strong> ${targetMarket}</p>
  <p><strong>Main Competitors:</strong> ${mainCompetitors}</p>
  <p><strong>Product Advantages:</strong> ${productAdvantages}</p>
  <p><strong>Expected Price:</strong> ${expectedPrice}</p>

  <h2>Charts</h2>
  <div class="chart-container">
    <canvas id="marketShareChart"></canvas>
  </div>
  <div class="chart-container">
    <canvas id="growthChart"></canvas>
  </div>

  <script>
    (function() {
      // Market Share Pie Chart
      const ctx1 = document.getElementById('marketShareChart').getContext('2d');
      new Chart(ctx1, {
        type: 'pie',
        data: {
          labels: ['Your Product', 'Competitors'],
          datasets: [{
            data: ${JSON.stringify(marketShareData)},
            backgroundColor: ['#36A2EB', '#FF6384']
          }]
        },
        options: { plugins: { title: { display: true, text: 'Market Share' } } }
      });

      // Growth Bar Chart
      const ctx2 = document.getElementById('growthChart').getContext('2d');
      new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ['2022', '2023', '2024'],
          datasets: [{
            label: 'Sales Growth (%)',
            data: ${JSON.stringify(salesGrowthData)},
            backgroundColor: '#4BC0C0'
          }]
        },
        options: {
          plugins: { title: { display: true, text: 'Growth Trend' } },
          scales: { y: { beginAtZero: true } }
        }
      });
    })();
  </script>

</body>
</html>
  `;

  res.json({ html });
};

function generateMarketShareData(competitors) {
  // Example logic to dynamically adjust market share based on competitors
  if (competitors.includes('Philips')) {
    return [40, 60]; // 40% market share for the product, 60% for competitors
  } else if (competitors.includes('Xiaomi')) {
    return [50, 50]; // 50% market share for the product, 50% for competitors
  }
  // Default values if no known competitors are included
  return [25, 75]; 
}

function generateSalesGrowthData(price) {
  // Example logic to dynamically adjust sales growth based on the price
  if (price < 100) {
    return [10, 15, 20]; // Lower prices can drive higher sales growth
  } else if (price < 300) {
    return [6, 9, 12]; // Moderate price range
  }
  // Higher prices may result in lower growth
  return [3, 5, 7]; 
}
