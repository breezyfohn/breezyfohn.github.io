import { Box, Card, CardContent, Typography } from '@mui/material';
import * as React from 'react';

export default function About() {
    return <Box component="div">
        <Card>
            <CardContent>
                <Typography>
                    The "Breezy" in Breezyfohn is some letters from Brenna and
                    some letters from Zack. "Fohn" is a word for a strong wind
                    (like a chanook). We chose "Fohn" because it went well with
                    "Breezy". This is our webpage. Once we figure
                    out what we want from it, we'll make it better.
                </Typography>
            </CardContent>
        </Card>
    </Box>
}