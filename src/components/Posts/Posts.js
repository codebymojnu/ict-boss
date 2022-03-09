import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import PostData from '../../PostsData/PostsData.json';
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(PostData);
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </Grid>
        </Container>
    );
};

export default Posts;