import { Box, Grid, Link, Paper, SvgIcon, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import CancelIcon from '@mui/icons-material/Cancel';
import * as React from 'react';

export default function CancerStatus() {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '0.75rem' }} variant='subtitle2'>As of 12/11/2023</Typography>
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
                            10/31/23 Met with surgeon, medical oncologist, nurse navigator, and a reconstruction surgeon. Radiation oncologist TBD if necessary.
                        </Typography>
                    </Box>
                    <SvgIcon component={PendingIcon} sx={{ color: 'goldenrod', marginLeft: '1rem' }}></SvgIcon>
                </StatusItem>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', minHeight: '1px', flexFlow: 'column' }}>
                <StatusItem>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography sx={{ fontSize: '1rem' }} variant='subtitle2'>Create Treatment Plan</Typography>
                        <Typography sx={{ fontSize: '1rem' }} variant='body2'>
                            10/23/23 Treatment will be decided after all test results are back. Including surgery results.
                        </Typography>
                    </Box>
                    <SvgIcon component={CancelIcon} sx={{ color: 'maroon', marginLeft: '1rem' }}></SvgIcon>
                </StatusItem>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', minHeight: '1px', flexFlow: 'column' }}>
                <StatusItem>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography sx={{ fontSize: '1rem' }} variant='subtitle2'>Start Treatment</Typography>
                        <Typography sx={{ fontSize: '1rem' }} variant='body2'>
                            Date TBD.
                        </Typography>
                    </Box>
                    <SvgIcon component={CancelIcon} sx={{ color: 'maroon', marginLeft: '1rem' }}></SvgIcon>
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