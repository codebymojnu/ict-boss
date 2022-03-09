import React from 'react';
import { Avatar, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './course.css';

const Course = (props) => {
    const { courseName, totalLearner, totalLesson, courseImage } = props.course;

    return (
        <Grid item xs={12} sm={6} md={4} className="course">
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
            >
                <CardMedia
                    component="div"

                >
                    <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar
                            alt={courseName}
                            src={courseImage}
                            sx={{ width: 150, height: 150, mt: 2 }}
                        />
                    </Stack>
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ textAlign: 'center' }}>
                        {courseName}
                    </Typography>
                    <Container maxWidth="lg">
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <Box
                            >
                                <Typography>
                                   Learner: {totalLearner}
                                </Typography>
                            </Box>
                            <Box
                            >
                                <Typography>
                                    Lesson: {totalLesson}
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Course;