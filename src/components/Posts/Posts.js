import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import coursesData from '../../CoursesData/CoursesData.json';
import Post from '../Post/Post';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Posts = () => {
    const { url } = useParams();
    const [posts, setPosts] = useState([]);

    const course = coursesData.filter(s => s.url === url);

    console.log(url);
    console.log(course[0]);

    useEffect(() => {
        setPosts(course[0]?.posts);
    }, [course]);

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