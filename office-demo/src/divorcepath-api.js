
module.exports = (req, res) => {
  const input = req.body.input || "Default client data";

  const report = `
	Client Info:
	-------------
	${input}

	Case Summary:
	-------------
	The client's divorce case involves property division, child support, and spousal support.
	Estimated timeline: 6 months.
  `;

  res.json({ report });
};