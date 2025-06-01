import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function ChatBox({ onAsk, chatHistory }) {
  const [input, setInput] = useState("");

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6">Ask Bedrock Claude 3 Sonnet</Typography>
      <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
        <TextField
          fullWidth
          label="Your question"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && onAsk(input)}
        />
        <Button
          variant="contained"
          onClick={() => {
            onAsk(input);
            setInput("");
          }}
        >
          Ask
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        {chatHistory.map((item, idx) => (
          <Box key={idx} sx={{ mb: 1 }}>
            <Typography variant="body2" color="primary">You: {item.question}</Typography>
            <Typography variant="body2" color="secondary">Claude: {item.answer}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
} 