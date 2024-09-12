'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from "./../components/Button";
import Container from '../components/Container';
import Contact from "./../components/LetsWork";
import { Box, Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Image from 'next/image';
import Work from '../components/Work';
import { margin } from '@mui/system';
const data1 = [
  { name: 'Jan', uv: 1000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 5000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 3780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const CaseStudyDetail = () => {
  const router = useRouter();
  const { data } = router.query;
  const caseStudy = data ? JSON.parse(data) : null; 
//   const image = caseStudy?.data.attributes.image?.data.attributes.formats.large.url


  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
 
  const getFullImageUrl = (url) => {
    return url.startsWith("http")
      ? url
      : `https://api.360xpertsolutions.com${url}`;
  };

  if (!caseStudy) {
    return <div>Loading...</div>;
  }
  
   const id = caseStudy?.data.id

  return (
    <Box>
      <Navbar />
      <Container>
        

{(id===1 || 5<=id<=7) &&  <Box>
          <Grid container spacing={2} sx={{ marginTop: "150px" }}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Clash Display",
                  fontSize: { xs: "40px", md: "60px" },
                }}
              >
                {caseStudy?.data.attributes?.content[1]?.children[0]?.text}
                <span
                  style={{
                    color: "red",
                    fontFamily: "Clash Display",
                    fontWeight: "400",
                  }}
                >
                  {caseStudy?.data.attributes?.content[2]?.children[0]?.text}
                  {/* The Sale Proces s */}
                </span>
              </Typography>

              <Typography
                sx={{
                  color: "#fff",
                  mt: "20px",
                  fontSize: { xs: "14px", md: "20px" },
                }}
              >
                {caseStudy?.data.attributes?.Title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontSize: { xs: "20px", md: "40px" },
                  fontWeight: "500",
                  lineHeight: "1.5",
                  mt: "20px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#FFF",
                }}
              >
                {caseStudy?.data.attributes?.content[3]?.children[0]?.text}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontSize: { xs: "14px", md: "19px" },
                  fontWeight: "400",
                  lineHeight: "1.5",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#FFF",
                }}
              >
                {caseStudy?.data.attributes?.content[4]?.children[0]?.text}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontSize: { xs: "14px", md: "19px" },
                  fontWeight: "400",
                  lineHeight: "1.5",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#FFF",
                }}
              >
               {caseStudy?.data.attributes?.content[5]?.children[0]?.text}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontSize: { xs: "14px", md: "19px" },
                  fontWeight: "400",
                  lineHeight: "1.5",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#FFF",
                }}
              >
                {caseStudy?.data.attributes?.content[6]?.children[0]?.text}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >

             
              <img
                // src={getFullImageUrl(caseStudy?.data.attributes?.content[6]?.image?.url)}
                src={caseStudy?.data.attributes?.content[7]?.image?.url}
                alt="Sales Process"
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                 src={caseStudy?.data.attributes?.content[9].image.url}
                alt="Sales Process"
                style={{ maxWidth: "100%", height: "auto", paddingTop: "40px" }}
              />
            </Grid>
            <Grid container spacing={2} sx={{ padding: "20px" }}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "24px", md: "40px" },
                    fontWeight: "500",
                    lineHeight: { xs: "30px", md: "40px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: { md: "100px" },
                  }}
                >
                 {caseStudy?.data.attributes?.content[10]?.children[0]?.text}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "400",
                    lineHeight: { xs: "18px", md: "20px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: "20px",
                  }}
                >
               {caseStudy?.data.attributes?.content[11]?.children[0].text}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "400",
                    lineHeight: { xs: "16px", md: "20px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: "10px",
                  }}
                >
                  {caseStudy?.data.attributes?.content[12]?.children[0]?.text}
                </Typography>
              </Grid>
              {/* Add any additional grid items if needed */}
            </Grid>

            <Grid container spacing={2} sx={{ padding: "20px" }}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "24px", md: "40px" },
                    fontWeight: "500",
                    lineHeight: { xs: "30px", md: "40px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: { md: "50px" },
                  }}
                >
                 {caseStudy?.data.attributes?.content[13]?.children[0]?.text}
                </Typography>
                <Button />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ padding: "20px" }}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "24px", md: "40px" },
                    fontWeight: "500",
                    lineHeight: { xs: "30px", md: "40px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: { md: "50px" },
                  }}
                >
                  {caseStudy?.data.attributes?.content[14]?.children[0]?.text}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "400",
                    lineHeight: { xs: "18px", md: "20px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: "20px",
                  }}
                >
                 {caseStudy?.data.attributes?.content[16]?.children[0]?.text}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "400",
                    lineHeight: { xs: "16px", md: "20px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: "10px",
                  }}
                ></Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "24px", md: "40px" },
                    fontWeight: "500",
                    lineHeight: { xs: "30px", md: "40px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: { md: "50px" },
                  }}
                >
                  {caseStudy?.data.attributes?.content[17]?.children[0]?.text}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "400",
                    lineHeight: { xs: "18px", md: "20px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: "20px",
                  }}
                >
                  {caseStudy?.data.attributes?.content[18]?.children[0]?.text}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "400",
                    lineHeight: { xs: "16px", md: "20px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: "10px",
                  }}
                >
                 {caseStudy?.data.attributes?.content[20]?.children[0]?.text}
                </Typography>
              </Grid>

              {/* Add any additional grid items if needed */}
            </Grid>
          </Grid>
          <Box sx={{ paddingTop: "50px" }}></Box>
          <Contact />
        </Box>
      }

{id===2 && <Box >
  <Box>{isClient ? 'This is never prerendered' : 'Prerendered'}</Box>
      
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
          {caseStudy?.data.attributes?.content[0]?.children[0]?.text}
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
          {/* with Cohort Analysis */}
          {caseStudy?.data.attributes?.content[1]?.children[0]?.text}
        </Typography>

        <Grid container spacing={3} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>{caseStudy?.data.attributes?.content[2]?.children[0]?.text}</Typography>

            <Typography sx={{ '@media (max-width: 600px)': { fontSize: '1.2rem', padding: '0 1rem' }, color: '#fff' }}>
            {caseStudy?.data.attributes?.content[3]?.children[0]?.text}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={6}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data1} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                 <Legend />
               <Line data={data1} type="monotone" dataKey="uv" stroke="green" />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>{caseStudy?.data.attributes?.content[4]?.children[0]?.text}</Typography>


            <List>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary= {caseStudy?.data.attributes?.content[5]?.children[0]?.text}/>
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary=  {caseStudy?.data.attributes?.content[6]?.children[0]?.text} />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary= {caseStudy?.data.attributes?.content[7]?.children[0]?.text}/>
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary={caseStudy?.data.attributes?.content[8]?.children[0]?.text} />
              </ListItem>
            </List>

          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>{caseStudy?.data.attributes?.content[9]?.children[0]?.text}</Typography>
            <List>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary={caseStudy?.data.attributes?.content[10]?.children[0]?.text} />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary={caseStudy?.data.attributes?.content[11]?.children[0]?.text} />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary={caseStudy?.data.attributes?.content[12]?.children[0]?.text}/>
              </ListItem >
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary={caseStudy?.data.attributes?.content[13]?.children[0]?.text}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data1} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#D0140F" />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={6}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data1} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="green" />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>{caseStudy?.data.attributes?.content[14]?.children[0]?.text}</Typography>
            <List>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary={caseStudy?.data.attributes?.content[15]?.children[0]?.text} />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary={caseStudy?.data.attributes?.content[16]?.children[0]?.text} />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary={caseStudy?.data.attributes?.content[17]?.children[0]?.text} />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>{caseStudy?.data.attributes?.content[18]?.children[0]?.text}</Typography>
            <List>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary= {caseStudy?.data.attributes?.content[19]?.children[0]?.text}/>
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary={caseStudy?.data.attributes?.content[20]?.children[0]?.text} />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary={caseStudy?.data.attributes?.content[21]?.children[0]?.text} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data1} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#D0140F" />
              </BarChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: '20px', marginBottom: '80px' }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>{caseStudy?.data.attributes?.content[22]?.children[0]?.text}</Typography>
            <Typography variant="1" sx={{ '@media (max-width: 600px)': { fontSize: '1rem', padding: '0 1rem' }, color: '#fff', marginTop: '40px' }}>
            {caseStudy?.data.attributes?.content[23]?.children[0]?.text}
              {/* Let's collaborate to refine this prototype into a customized dashboard that delivers actionable insights and drives business growth. Contact us to discuss your unique needs and explore how we can help you make the most of your customer data. */}
            </Typography>
          </Grid>
        </Grid>

        <Work/>
      </Box>
}



      </Container>
    
      <Footer />
    </Box>





      
  );
};

export default CaseStudyDetail;
