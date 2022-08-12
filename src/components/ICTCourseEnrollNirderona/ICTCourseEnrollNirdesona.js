import { Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';
import Nirdesona from './Nirdesona';
import { useHistory } from 'react-router-dom';

const ICTCourseEnrollNirdesona = () => {
    const history = useHistory();

    const changeRoute = () => {
        history.push('/ict-course-nirdesona');
    }
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >

            <Grid item xs={3}>
                <List
                    sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', marginTop: '20px' }}
                    aria-label="contacts"
                >
                    <ListItem disablePadding>
                        <ListItemButton onClick={changeRoute}>
                            <ListItemIcon>
                                <StarIcon />
                            </ListItemIcon>
                            <ListItemText primary="HSC ICT কোর্স শুরুর গুরুত্তপূর্ণ নির্দেশনা গুলো দেখার জন্য" />
                            <Button>ক্লিক করো</Button>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Grid >
        </Grid>
    );
};

export default ICTCourseEnrollNirdesona;