export async function askClaude(question, transcript, kb) {
  // Replace with your deployed API Gateway endpoint
  const res = await fetch("https://en8ukd2yjc.execute-api.us-west-2.amazonaws.com/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, transcript, kbId: "MJILUUVH3X" }),
  });
  const data = await res.json();
  return data.answer;
}

export async function fetchKnowledgeBase() {
  // Replace with your deployed API Gateway endpoint
  const res = await fetch("https://kg85fwrrkc.execute-api.us-west-2.amazonaws.com/kbfetch");
  return res.json();
} 