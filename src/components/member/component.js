import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';

export default function Member(props) {
    return (<Card>
        <CardContent>
            <Typography variant="h5">{props.name}</Typography>
        </CardContent>
        <CardActions>
            <IconButton aria-label="Webpage" href={props.webpage}>
                <PersonIcon></PersonIcon>
            </IconButton>
            <IconButton aria-label="Github" href={props.github}>
                <GitHubIcon></GitHubIcon>
            </IconButton>
        </CardActions>
    </Card>)
}