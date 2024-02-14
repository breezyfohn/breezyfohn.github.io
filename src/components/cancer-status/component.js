import { Box, Grid, Link, Paper, SvgIcon, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import { map, filter } from 'lodash'
import * as React from 'react';

import * as ChemoDates from 'Data/chemo-dates.json'
import * as HormoneDates from 'Data/hormone-dates.json'
import * as RadiationDates from 'Data/radiation-dates.json'

export default function CancerStatus() {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '0.75rem' }} variant='subtitle2'>As of 02/14/2024</Typography>
            <Grid container rowSpacing={0} columnSpacing={0}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', minHeight: '1px', flexFlow: 'column' }}>
                    <StatusItem>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontSize: '1rem' }} variant='subtitle2'>Biopsy Results</Typography>
                            <Typography sx={{ fontSize: '1rem' }} variant='body2'>
                                10/6/23 - Results indicated left side breast lump is Invasive Ductile Carcinoma. Right side lump & left side armpit lump are benign.
                            </Typography>
                        </Box>
                        <SvgIcon component={CheckCircleIcon} sx={{ color: 'forestgreen', marginLeft: '1rem' }}></SvgIcon>
                    </StatusItem>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', minHeight: '1px', flexFlow: 'column' }}>
                    <StatusItem>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontSize: '1rem' }} variant='subtitle2'>Genetic Test Results</Typography>
                            <Typography sx={{ fontSize: '1rem' }} variant='body2'>
                                10/01/23 - 0 of 37 genetic markers for breast cancer. Despite family history, this is
                                just bad luck.
                            </Typography>
                        </Box>
                        <SvgIcon component={CheckCircleIcon} sx={{ color: 'forestgreen', marginLeft: '1rem' }}></SvgIcon>
                    </StatusItem>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', minHeight: '1px', flexFlow: 'column' }}>
                    <StatusItem>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontSize: '1rem' }} variant='subtitle2'>HER2 Test Results</Typography>
                            <Typography sx={{ fontSize: '1rem' }} variant='body2'>
                                10/01/23 - HER2 result is 2+, <Link
                                    href="https://www.cancer.org/cancer/types/breast-cancer/understanding-a-breast-cancer-diagnosis/breast-cancer-her2-status.html">
                                    "equivocal"
                                </Link>. FISH results suggest we treat the HER2 marker as negative.
                            </Typography>
                        </Box>
                        <SvgIcon component={CheckCircleIcon} sx={{ color: 'forestgreen', marginLeft: '1rem' }}></SvgIcon>
                    </StatusItem>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', minHeight: '1px', flexFlow: 'column' }}>
                    <StatusItem>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontSize: '1rem' }} variant='subtitle2'>MRI Results</Typography>
                            <Typography sx={{ fontSize: '1rem' }} variant='body2'>
                                MRI reveals a size of ~2.5cm with no boundary issues.
                            </Typography>
                        </Box>
                        <SvgIcon component={CheckCircleIcon} sx={{ color: 'forestgreen', marginLeft: '1rem' }}></SvgIcon>
                    </StatusItem>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', minHeight: '1px', flexFlow: 'column' }}>
                    <StatusItem>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontSize: '1rem' }} variant='subtitle2'>Meet Care Team</Typography>
                            <Typography sx={{ fontSize: '1rem' }} variant='body2'>
                                01/10/24 Met with surgeon, medical oncologist, nurse navigator, reconstruction surgeon and radiation oncologist.
                            </Typography>
                        </Box>
                        <SvgIcon component={CheckCircleIcon} sx={{ color: 'forestgreen', marginLeft: '1rem' }}></SvgIcon>
                    </StatusItem>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', minHeight: '1px', flexFlow: 'column' }}>
                    <StatusItem>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontSize: '1rem' }} variant='subtitle2'>Create Treatment Plan</Typography>
                            <Typography sx={{ fontSize: '1rem' }} variant='body2'>
                                01/23/24 Treatment will include 4 rounds of chemo over 9 weeks, 33 rounds of radiation over almost 7 weeks, and 5 years of hormone therapy.
                            </Typography>
                        </Box>
                        <SvgIcon component={PendingIcon} sx={{ color: 'goldenrod', marginLeft: '1rem' }}></SvgIcon>
                    </StatusItem>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', minHeight: '1px', flexFlow: 'column' }}>
                    <StatusItem>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontSize: '1rem' }} variant='subtitle2'>Start Treatment</Typography>
                            <Typography sx={{ fontSize: '1rem' }} variant='body2'>
                                01/23/24 Chemo starting late Jan, early Feb. Hormone Therapy starting mid-chemo. Radiation is starting late Apr / early May. No firm start dates.
                            </Typography>
                            <Typography variant='body2' color='text.secondary' sx={{ padding: '4px 0px'}}>
                                Chemo
                                <LinearProgress variant='determinate' value={progress(ChemoDates)} />
                            </Typography>
                            <Typography variant='body2' color='text.secondary'sx={{ padding: '4px 0px '}}>
                                Radiation
                                <LinearProgress variant='determinate' value={progress(RadiationDates)} />
                            </Typography>
                            <Typography variant='body2' color='text.secondary'sx={{ padding: '4px 0px '}}>
                                Hormone
                                <LinearProgress variant='determinate' value={progress(HormoneDates)} />
                            </Typography>
                        </Box>
                        <SvgIcon component={PendingIcon} sx={{ color: 'goldenrod', marginLeft: '1rem' }}></SvgIcon>
                    </StatusItem>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', minHeight: '1px', flexFlow: 'column' }}>
                    <StatusItem>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontSize: '1rem' }} variant='subtitle2'>Surgery</Typography>
                            <Typography sx={{ fontSize: '1rem' }} variant='body2'>
                                12/11/23 The surgery was on 12/08/2023 was a bilateral mastectomy, and was a successful operation.
                            </Typography>
                        </Box>
                        <SvgIcon component={CheckCircleIcon} sx={{ color: 'forestgreen', marginLeft: '1rem' }}></SvgIcon>
                    </StatusItem>
                </Grid>
            </Grid>
        </Box>
    )
}


const StatusItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    border: '1px solid rgba(0, 0, 0, 0.125)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '1 0 100%',
    fontSize: '1rem'
}));

/**
 * Take aan array of dates as strings, and return how far we are through that array.
 * @param {string[]} dateAsStringArray
 */
const progress = (dateAsStringArray) => {
    console.info(dateAsStringArray)
    const dateArray = map(dateAsStringArray, date => new Date(date))
    const now = Date.now()
    const total = dateArray.length
    const datesBeforeNow = filter(dateArray, date => date < now).length
    console.info(total, datesBeforeNow)
    const progressPercent = Math.round(datesBeforeNow * 100 / total)
    console.info(progressPercent)
    return progressPercent
}