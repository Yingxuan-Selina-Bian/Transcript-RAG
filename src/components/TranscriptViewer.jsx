import React from "react";
import { Paper, Typography, Box, TextField } from "@mui/material";

export default function TranscriptViewer({ transcript, setTranscript, metaskills }) {
  // Highlight metaskills in transcript (simple example)
  let highlighted = transcript;
  metaskills.forEach(skill => {
    highlighted = highlighted.replace(
      new RegExp(skill, "gi"),
      match => `<mark>${match}</mark>`
    );
  });

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6">Transcript</Typography>
      <TextField
        fullWidth
        multiline
        minRows={6}
        label="Paste transcript here"
        value={transcript}
        onChange={e => setTranscript(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Box sx={{ mt: 1, background: '#f9f9f9', p: 2, borderRadius: 1 }}>
        <span dangerouslySetInnerHTML={{ __html: highlighted }} />
      </Box>
    </Paper>
  );
} 