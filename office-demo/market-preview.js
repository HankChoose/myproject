module.exports = (req, res) => {
  const {
    productName = "N/A",
    targetMarket = "N/A",
    mainCompetitors = "N/A",
    productAdvantages = "N/A",
    expectedPrice = "N/A"
  } = req.body;

  // 假设你从请求中得到了市场份额和销售增长数据
  const marketShareData = [25, 75]; // 这里可以改成动态数据
  const salesGrowthData = [6, 9, 12]; // 这里也可以改成动态数据

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
      width: 800px;  /* ✅ 固定宽度，避免截图被裁剪 */
    }

    .chart-container {
      width: 700px;   /* ✅ 更大图表容器 */
      height: 350px;
      margin-bottom: 40px;
    }

    canvas {
      width: 100% !important;   /* ✅ 避免 canvas 缩放问题 */
      height: 100% !important;
    }
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
