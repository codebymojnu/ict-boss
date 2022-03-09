import React from 'react';
import ReactPlayer from "react-player"
import { Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { title, description, videoLink } = props.post;
    return (
        <Grid item xs={12} md={4} lg={4} spacing={3}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 340,
                }}
            >
                <Link>{title}</Link>
                <p>{description}</p>
                <Button>Read More</Button>
            </Paper>
        </Grid>
    );
};

export default Post;