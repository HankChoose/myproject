// market-preview.js
module.exports = (req, res) => {
  const input = req.body.input || "Default summary";

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
  <p><strong>Input Summary:</strong> ${input}</p>

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
  </script>
</body>
</html>
  `;

  res.json({ html });
};
