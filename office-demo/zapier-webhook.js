module.exports = (req, res) => {
  const payload = req.body;
  console.log("📩 Zapier webhook received:", payload);

  // 假设成功触发 Zapier 的动作
  res.json({ success: true, message: "Zapier triggered!" });
};