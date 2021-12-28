import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const LinkGenerator = (to) => React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to={to} {...props} />
));

const Home = LinkGenerator("/")
const About = LinkGenerator("/about")

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Breezyfohn
                    </Typography>
                    <Button component={Home} color="inherit">
                        Home
                    </Button>
                    <Button component={About} color="inherit">
                        About
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
