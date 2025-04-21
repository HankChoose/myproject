// office-demo/server.js
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, "src")));

// 模拟 Divorcepath 原始数据 API
app.post("/api/divorcepath", require("./divorcepath-api"));

// 模拟 Zapier webhook
app.post("/api/zapier", require("./zapier-webhook"));

app.listen(PORT, () => {
  console.log(`Office Demo server running on http://localhost:${PORT}`);
});

