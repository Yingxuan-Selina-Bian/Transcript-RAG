import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function KnowledgeBaseBrowser({ kb }) {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6">Metaskill Definitions</Typography>
      <List>
        {kb.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText
              primary={item.label}
              secondary={item.definition}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
} 