import * as React from 'react';
import cancerFAQs from 'Data/cancer-faq.json';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

export default function CancerFAQ() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {cancerFAQs.map((value) => (
        <ListItem
          key={value.question}
          disableGutters
        >
            <ListItemText sx={{ padding: '8px 1rem' }}>
                <Typography variant="h6">{value.question}</Typography>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>{value.answer}</Typography>
            </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}