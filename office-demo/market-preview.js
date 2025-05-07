module.exports = (req, res) => {
  const {
    productName = "N/A",
    targetMarket = "N/A",
    mainCompetitors = "N/A",
    productAdvantages = "N/A",
    expectedPrice = "N/A"
  } = req.body.input || {};

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Market Preview</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .chart-container { width: 400px; margin-bottom: 40px; }
  </style>
</head>
<body>
  <h1>Market Competitiveness Report Preview</h1>
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
    const ctx1 = document.getElementById('marketShareChart').getContext('2d');
    new Chart(ctx1, {
      type: 'pie',
      data: {
        labels: ['Your Product', 'Competitors'],
        datasets: [{ data: [25, 75], backgroundColor: ['#36A2EB', '#FF6384'] }]
      },
      options: { plugins: { title: { display: true, text: 'Market Share' } } }
    });

    const ctx2 = document.getElementById('growthChart').getContext('2d');
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['2022', '2023', '2024'],
        datasets: [{
          label: 'Sales Growth (%)',
          data: [6, 9, 12],
          backgroundColor: '#4BC0C0'
        }]
      },
      options: {
        plugins: { title: { display: true, text: 'Growth Trend' } },
        scales: { y: { beginAtZero: true } }
      }
    });

    // setTimeout(checkAllChartsReady, 500); // 注释掉这个未定义函数
  </script>

</body>
</html>
  `;

  res.json({ html });
};