module.exports = (req, res) => {
  const {
    productName = "",
    targetMarket = "",
    mainCompetitors = [],
    productAdvantages = "",
    expectedPrice = 0,
  } = req.body;

  const score = calculateScore({ productAdvantages, expectedPrice, competitors: mainCompetitors });
  const rating = getRating(score);
  const recommendations = generateRecommendations(score, expectedPrice, mainCompetitors.length);

  const report = `
Market Competitiveness Report
=============================

Product: ${productName}
Target Market: ${targetMarket}
Main Competitors: ${mainCompetitors.join(", ")}
Advantages: ${productAdvantages}
Expected Price: $${expectedPrice}

Overall Score: ${score}/100
Rating: ${rating}

Recommendations:
${recommendations.map((r, i) => `${i + 1}. ${r}`).join("\n")}

Report powered by market-analysis API.
`;

  res.json({ report });
};

// 示例评分逻辑：结合产品优势关键词和价格区间
function calculateScore({ productAdvantages, expectedPrice, competitors }) {
  let score = 60;

  // 简单评分规则：优势关键词加分
  if (productAdvantages.includes("AI")) score += 10;
  if (productAdvantages.includes("personalized")) score += 5;

  // 定价区间加减分（示例）
  if (expectedPrice < 200) {
    score += 5;
  } else if (expectedPrice > 500) {
    score -= 5;
  }

  // 根据竞争对手数量评估市场压力
  if (competitors.length >= 3) {
    score += 3;
  }

  return Math.min(score, 100);
}

// 评分转换为评级
function getRating(score) {
  if (score >= 85) return "Excellent";
  if (score >= 70) return "Above Average";
  return "Below Average";
}

// 根据得分和价格生成建议
function generateRecommendations(score, price, competitorCount) {
  const recs = [];

  // 确保价格是数字
  const actualPrice = typeof price === "string" ? parseFloat(price) : price;

  // 根据价格给出建议
  if (actualPrice > 400) {
    recs.push("Current pricing is higher than average; consider bundling or value-based pricing.");
  } else {
    recs.push("Pricing is competitive; emphasize value proposition in marketing.");
  }

  // 根据评分给出建议
  if (score < 70) {
    recs.push("Improve product quality or reduce price to stay competitive.");
  } else if (score < 85) {
    recs.push("Focus on brand building and social media outreach.");
  } else {
    recs.push("Expand distribution and invest in scaling operations.");
  }

  // 根据竞争对手数量生成差异化建议
  if (competitorCount > 2) {
    recs.push("Differentiate clearly from competitors with unique features or services.");
  }

  return recs;
}
