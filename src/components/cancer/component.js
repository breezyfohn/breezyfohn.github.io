import { Box, Tabs, Tab, Typography } from '@mui/material';
import * as React from 'react';
import TabContent from 'Components/tab-content/component';
import cancerNames from 'Data/cancer-names';
import CancerStatus from '../cancer-status/component';
import CancerHelp from '../cancer-help/component';
import CancerFAQ from '../cancer-faq/component';

function randomizeHeader() {
    let randomHeader = "";
    const maxIndex = cancerNames.length - 1;
    const randomIndex = Math.round(Math.random() * maxIndex);
    randomHeader = cancerNames[randomIndex];

    return randomHeader;
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Cancer() {
    const [value, setValue] = React.useState(0);
    const [header, setHeader] = React.useState(randomizeHeader());

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
            <Typography variant="h2" gutterBottom mt={2}>
                {header}
            </Typography>
            <Typography variant="subtitle1" gutterBottom mb={4}>
                Seventeen years ago, Brenna beat Hodgkin's Lymphoma. After being dianosed with breast cancer, she's preparing to do it all again.
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Current Status" {...a11yProps(0)} />
                <Tab label="How Can I Help?" {...a11yProps(1)} />
                <Tab label="FAQ" {...a11yProps(2)} />
            </Tabs>
            </Box>
            <TabContent value={value} index={0}>
                <CancerStatus />
            </TabContent>
            <TabContent value={value} index={1}>
                <Typography gutterBottom variant='h5'>I want to...</Typography>
                <CancerHelp />
            </TabContent>
            <TabContent value={value} index={2}>
                <CancerFAQ />
            </TabContent>
        </>
    )
}