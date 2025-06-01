import React, { useState, useEffect } from "react";
import ChatBox from "./components/ChatBox";
import TranscriptViewer from "./components/TranscriptViewer";
import KnowledgeBaseBrowser from "./components/KnowledgeBaseBrowser";
import { Container, Box } from "@mui/material";
import { askClaude, fetchKnowledgeBase } from "./api";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [transcript, setTranscript] = useState("");
  const [kb, setKb] = useState([]);

  useEffect(() => {
    fetchKnowledgeBase().then(setKb);
  }, []);

  const handleAsk = async (question) => {
    const answer = await askClaude(question, transcript, kb);
    setChatHistory([...chatHistory, { question, answer }]);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <TranscriptViewer transcript={transcript} setTranscript={setTranscript} metaskills={kb.map(k => k.label)} />
        <KnowledgeBaseBrowser kb={kb} />
        <ChatBox onAsk={handleAsk} chatHistory={chatHistory} />
      </Box>
    </Container>
  );
}

export default App; 