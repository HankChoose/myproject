Office.onReady(() => {
	  console.log("Office.js is ready");
	});

	const mockAI = async (text: string) => {
	  // 模拟调用 AI API 返回摘要
	  return "AI Summary:\n" + text.slice(0, 80) + "...";
	};

	const mockReport = async (text: string) => {
	  // 模拟生成报告
	  return "Divorcepath Report:\n\n" +
			 "Parties were married 8 years with 2 children. " +
			 "Income split: John $80k, Jane $40k. " +
			 "Expected child support: $XXX.\n\n" +
			 "Summary prepared using AI tools.";
	};

	async function generateWebReport() {
	  const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
	  const report = await mockReport(input);
	  document.getElementById("output")!.innerText = report;
	}

	async function insertWebAISummary() {
	  const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
	  const summary = await mockAI(input);
	  document.getElementById("output")!.innerText = summary;
	}

	async function generateWordReport() {
	  const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
	  const report = await mockReport(input);

	  await Word.run(async (context) => {
		const docBody = context.document.body;
		docBody.insertText(report, Word.InsertLocation.end);
		await context.sync();
	  });
	}

	async function insertWordAISummary() {
	  const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
	  const summary = await mockAI(input);

	  await Word.run(async (context) => {
		const docBody = context.document.body;
		docBody.insertText(summary, Word.InsertLocation.end);
		await context.sync();
	  });
	}

	async function sendZapier() {
	  const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;

	  const result = await fetch("/zapier-webhook", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ message: input, timestamp: Date.now() }),
	  });

	  if (result.ok) {
		alert("✅ Zapier Notification Sent!");
	  } else {
		alert("❌ Failed to send Zapier notification.");
	  }
	}