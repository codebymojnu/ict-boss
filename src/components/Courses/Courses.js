import React, { useEffect, useState } from 'react';
import coursesData from '../../CoursesData/CoursesData.json';
import Course from '../Course/Course';
import { Container, Grid, Typography, } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setCourses(coursesData);
    }, [])

    const changeRoute = () => {
        history.push('/javascript');
    }
    return (
        <>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Typography variant='h4' style={{ marginTop: '10px', marginBottom: '60px', textAlign: 'center' }}>তুমি কি শিখতে চাও?</Typography>
                <Grid container spacing={4} onClick={ changeRoute}>
                    {
                        courses.map((course, index) => <Course key={index} course={course}></Course>)
                    }
                </Grid>
            </Container >
        </>
    );
};

export default Courses;