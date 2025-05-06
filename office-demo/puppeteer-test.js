const puppeteer = require('puppeteer');

(async () => {
  try {
    // 启动 Puppeteer（确保正确的 Chromium 执行路径）
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,  // 确保这个环境变量正确
    });
    
    const page = await browser.newPage();
    await page.goto('https://www.example.com');
    
    // 截图页面
    await page.screenshot({ path: 'example.png' });

    console.log('Screenshot taken');
    await browser.close();
  } catch (error) {
    console.error('Error launching Puppeteer:', error);
  }
})();
