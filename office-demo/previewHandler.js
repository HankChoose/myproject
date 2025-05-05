
module.exports = (req, res) => {
    const input = req.body.input || "Default content";
    const html = `
      <h2>Divorcepath Legal Report</h2>
      <p>${input}</p>
      <ul>
        <li>Property: Requires division</li>
        <li>Support: Child and spousal support likely</li>
        <li>Timeline: Estimated 6–9 months</li>
        <li>Recommendations: Consider mediation, income reassessment</li>
      </ul>
      <p>Report powered by Divorcepath API</p>
    `;
    res.json({ html });
  };
  