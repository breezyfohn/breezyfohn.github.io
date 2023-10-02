import * as React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, TextField, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import helpOptions from 'Data/cancer-help';

export default function CancerHelp() {
    return (
        <Box sx={{ width: '100%' }}>
            {helpOptions.map((option, index) => (
                <Accordion sx={{ padding: '1rem' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`content${index}`}
                        id={`header${index}`}
                    >
                        <Typography variant='h6'>{option.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails id={`content${index}`}>
                        <Typography variant='body1' sx={{ fontSize: '1rem' }}>
                            {option.details}
                        </Typography>

                        {(option.title.includes('meals') || option.title.includes('Commiserate')) && (
                            <form action="mailto:cancer@breezyfohn.com" method="post" enctype="text/plain" style={{ margin: '2rem 0 1rem', display: 'flex', flexFlow: 'column' }}>
                                <TextField
                                    id="outlined-helperText"
                                    label="Your message here"
                                    defaultValue=""
                                    helperText="Click the submit button when you are done."
                                    multiline
                                    variant='standard'
                                />

                                <Button type="submit" variant='contained' style={{ width: 'fit-content', marginTop: '1rem' }}>
                                    Submit
                                </Button>
                            </form>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
}