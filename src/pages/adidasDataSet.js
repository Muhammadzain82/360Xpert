'use client'
import React, { useEffect, useState } from 'react';
import { Typography, Grid, Box, List, ListItem, ListItemText } from '@mui/material';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Work from '../components/Work';

const adidasDataset = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            <Box>{isClient ? 'This is never prerendered' : 'Prerendered'}</Box>
            <Navbar />
            <Container>
                <Typography sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    paddingTop: "30vh",
                    fontSize: {
                        xs: '3vh',
                        sm: '5vh',
                        md: '7vh',
                        lg: '10vh'
                    }
                }}>
                    Leveraging Data For Enhanced Performenced:
                </Typography>
                <Typography sx={{
                    textAlign: 'start',
                    marginBottom: '40px',
                    color: "#D0140F",
                    fontSize: {
                        xs: '3vh',
                        sm: '4vh',
                        md: '5vh',
                        lg: '6vh'
                    }
                }}>
                    The Adidas Dataset
                </Typography>

                <Grid container spacing={3} sx={{ marginTop: '40px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>Executive Summary:</Typography>

                        <Typography sx={{ '@media (max-width: 600px)': { fontSize: '1.2rem', padding: '0 1rem' }, color: '#fff' }}>
                            The case study evaluates a model predicting customer churn using the Adidas dataset. The model achieved an accuracy of 73.1%, with a precision of 68% for non-churned customers and 77% for churned customers. Recall was 70% for non-churned and 76% for churned, with a weighted average F1-score of 73%.

                            The Confusion Matrix provided insights into True Positives, True Negatives, False Positives, and False Negatives, from which key performance metrics were derived.

                            Business implications emphasized the need to improve precision, focus retention efforts on identified churners, and regularly monitor and adjust the model. Additionally, the study identified opportunities for targeted re-engagement strategies and suggested analyzing purchasing patterns of high total sales customers with high recency values.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ marginTop: '40px' }}>
                    <Grid item xs={12} md={6}>
                        <img style={ { maxWidth: "635px", height: "auto",  } } src='./assets/graph-1.png' alt='Graph' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}> Sales Analysis </Typography> {/* The Vision: */}
                        <List>
                            <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                                <ListItemText primary={<><strong>Track customer acquisition:</strong> Monitor new customer influx across various periods and identify acquisition patterns.</>} />
                            </ListItem>
                            <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                                <ListItemText primary={<><strong>Mid-2020 Decline:</strong> Significant drop in sales around mid-2020.</>} />
                            </ListItem>
                            <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                                <ListItemText primary={<><strong>Recovery and Steady Increase (2020-07 to 2021-01):</strong> Gradual recovery and consistent increase in sales.</>} />
                            </ListItem>
                            <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                                <ListItemText primary={<><strong>Significant Sales Spike (2021-01 to 2021-07):</strong> Substantial spike, indicating strong sales performance. </>} />
                            </ListItem>
                            <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                                <ListItemText primary={<><strong>Fluctuating Sales with Overall Growth (2021-07 to 2022-01):</strong> Fluctuations with overall growth, nearing a peak by January 2022. </>} />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ marginTop: '40px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>Observations</Typography>
                        <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                            <ListItemText primary={<><h3>Non-Churned Customers (Churn = 0):</h3> <p> <strong>Distribution:</strong> Compact, concentrated in lower recency range (0 to ~200).</p> <p> <strong>Implication</strong>  Frequent engagement, indicating active customer base.</p> </>} />
                        </ListItem>
                        <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                            <ListItemText primary={<><h3>Churned Customers (Churn = 1):</h3> <p> <strong>Distribution:</strong> More spread out, extending to higher recency values (up to ~700).</p> <p> <strong>Implication</strong>  Less frequent engagement, suggesting longer periods of inactivity before churning.</p> </>} />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={ { maxWidth: "635px", height: "350px",  } } src='./assets/graph-2.png' alt='Graph' />
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ marginTop: '40px' }}>
                    <Grid item xs={12} md={6}>
                        <img style={ { maxWidth: "650px", height: "600px" } } src='./assets/graph-3.png' alt='Graph' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>Confusion Matrix Details</Typography>
                        <List>
                            <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                                <ListItemText primary={<><h3>True Positive (TP): 1141</h3> <p> These are cases where the model correctly predicted the customers who churned (True 1). </p> </>} />
                            </ListItem>
                            <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                                <ListItemText primary={<><h3>True Negative (TN): 1114</h3> <p> These are cases where the model correctly predicted the customers who did not churn (True 0). </p> </>} />
                            </ListItem>
                            <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                                <ListItemText primary={<><h3>False Positive (FP): 815</h3> <p> These are cases where the model incorrectly predicted customers as churned when they actually did not churn (Type I error). </p> </>} />
                            </ListItem>
                            <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                                <ListItemText primary={<><h3>False Negative (FN): 299</h3> <p> These are cases where the model incorrectly predicted customers as not churned when they actually did churn (Type II error). </p> </>} />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
            <Work />
            <Footer />
        </>
    );
};

export default adidasDataset;
