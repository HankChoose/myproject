module.exports = async (req, res) => {
    const input = req.body.input || "";
    const summary = "AI Summary:\n" + input.slice(0, 80) + "... (summary truncated)";
    
    // 可改为真实 AI API 请求
    res.json({ summary });
  };
  