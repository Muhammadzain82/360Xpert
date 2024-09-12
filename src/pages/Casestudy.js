import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import Container from "./../components/Container";
import Work from "./../components/Work";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { Inter } from 'next/font/google';
// import { fontWeight } from "@mui/system";

const inter = Inter({ subsets: ['latin'] });

export default function Casestudy() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [mainCaseStudy, setMainCaseStudy] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get(
          "https://api.360xpertsolutions.com/api/case-studies?populate=*"
        );
        if (response.data && Array.isArray(response.data.data)) {
          setCaseStudies(response.data.data);
          setMainCaseStudy(response.data.data[0]);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching case studies:", error);
      }
    };

    fetchCaseStudies();
  }, []);

  const getFullImageUrl = (url) => {
    return url.startsWith("http")
      ? url
      : `https://api.360xpertsolutions.com${url}`;
  };

  const handleClick = async (id) => {
    try {
      const response = await axios.get(
        `https://api.360xpertsolutions.com/api/case-studies/${id}?populate=*`
      );
      if (response.data && response.data.data) {
        router.push({
          pathname: `./casestudyapi`,
          query: { data: JSON.stringify(response.data) },
        });
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching case study:", error);
    }
  };

  const heights = [430, 500, 500, 380];

  return (
    <>
      <Head>
        <title>Case studies - 360XpertsSolutions</title>
        <meta
          name="description"
          hreflang="en"
          content="360XpertSolutions experience, performance and journey with their clients and expertise in various industries"
        />
        <meta name="author" content="360XpertSolutions" />
        <link rel="canonical" href="https://360xpertsolutions.com/Casestudy" />
        <meta
          property="og:title"
          content="360XpertSolutions collaborations and case studies"
        />
        <meta
          property="og:description"
          content="Explore our beautiful collaborations and discover effective sales processes. Unveil valuable customer insights through cohort analysis. Learn about successful business strategies, customer engagement, and data-driven sales optimization. Join us on a journey of collaborative success stories in the world of business."
        />
        <meta
          name="keywords"
          content="360XpertSolutions,collaborative stories,cohort analysis,customer engagement strategies,sales process optimizations,data driven sales,marketing,testimonials,Customer Insights Analysis"
        />
        <meta name="geo.region" content="PK-S" />
        <meta name="geo.placename" content="Karachi, Sindh, Pakistan" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta http-equiv="Content-Language" content="en" />
        <meta
          property="og:image"
          content="https://360xpertsolutions.com/assets/x.png"
        />
        <meta
          property="og:image"
          content="https://360xpertsolutions.com/assets/Rectangle1933%20(1).svg"
        />
        <meta
          property="og:image"
          content="https://360xpertsolutions.com/assets/Rectangle%201934.svg"
        />
        <meta
          property="og:image"
          content="https://360xpertsolutions.com/assets/Rectangle%201936.svg"
        />
        <meta
          property="og:image"
          content="https://360xpertsolutions.com/assets/Rectangle%201937.svg"
        />
      </Head>
      <Box>
        <Navbar />
        <Container>
          <Box>
            <Grid
              container
              spacing={2}
              sx={{ paddingTop: "10%", marginTop: "50px" }}
            >
              {mainCaseStudy && (
                <>
                  <Grid item xs={12} md={6}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Clash Display",
                        fontSize: { xs: "40px", md: "60px" },
                      }}
                    >
                      {mainCaseStudy.attributes.Titles ||
                        "Stories: our beautiful"}
                    </Typography>

                    <Typography
                      sx={{
                        color: "red",
                        lineHeight: "1.5",
                        display: "flex",
                        gap: "20px",
                        fontSize: { xs: "40px", md: "60px" },
                      }}
                    >
                      collaborations
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={12}
                    // sx={{
                    //   display: "flex",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    // }}

                    sx={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        width: { lg: "600px", md: "600", sm: "400", xs: "300px" },
                        color: "#ffffff",
                        textShadow: "4px 4px 4px black",
                        position: "absolute",
                        display: "flex",
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        cursor: "pointer",
                        fontFamily: inter.style.fontFamily,
                        fontWeight: "bold",
                        wordSpacing: "2px",
                        fontSize: {
                          xs: "18px",
                          sm: "22px",
                          md: "31px",
                          lg: "45px",
                        },
                      }}
                    >
                      {mainCaseStudy.attributes.Title || ""}
                    </Typography>



                    {mainCaseStudy.attributes.image &&
                      mainCaseStudy.attributes.image.data ? (
                      <img
                        src={getFullImageUrl(
                          mainCaseStudy.attributes.image.data.attributes.url
                        )}
                        alt={mainCaseStudy.attributes.Title || "No Title"}
                        style={{
                          maxWidth: "100%",
                          height: "450px",
                          paddingTop: "40px",
                          paddingBottom: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleClick(mainCaseStudy.id)}
                      />
                    ) : (
                      <Typography
                        sx={{
                          color: "white",
                          fontFamily: "Clash Display",
                          fontSize: { xs: "20px", md: "30px" },
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        No image available
                      </Typography>
                    )}
                  </Grid>
                </>
              )}

              <Grid container spacing={0}>
                {caseStudies.length > 0 ? (
                  caseStudies.slice(1).map(({ id, attributes }, index) => (
                    <Grid item xs={12} md={6} key={id}>
                      <Box
                        sx={{
                          flexDirection: "column",
                          alignItems: "start",
                          justifyContent: "start",
                          textAlign: "center",
                          position: "relative",
                        }}
                      >
                        <Typography
                          variant="h1"
                          sx={{
                            width: {
                              lg: "600px",
                              md: "600",
                              sm: "400",
                              xs: "250px",
                            },
                            color: "black",
                            position: "absolute",
                            display: "flex",
                            top: "60%",
                            left: "50%",
                            textShadow: "4px 4px 3px black",
                            color: "#ffffff",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            cursor: "pointer",
                            fontFamily: inter.style.fontFamily,
                            fontWeight: "bold",
                            wordSpacing: "2px",
                            fontSize: {
                              xs: "18px",
                              sm: "22px",
                              md: "31px",
                              lg: "45px",
                            },
                          }}
                        >
                          {attributes.Title || ""}
                        </Typography>

                        {attributes.image && attributes.image.data ? (
                          <Box
                            component="img"
                            src={getFullImageUrl(
                              attributes.image.data.attributes.url
                            )}
                            alt={attributes.Title || "No Title"}
                            sx={{
                              maxWidth: "100%",
                              height: `${heights[index % heights.length]}px`,
                              marginLeft: "10px",
                              marginTop: {
                                xs: index === 2 ? "0px" : "", // Apply condition for extra-small screens
                                sm: index === 2 ? "0px" : "", // Apply condition for small screens
                                md: index === 2 ? "-120px" : "", // Apply condition for medium screens
                                lg: index === 2 ? "-120px" : "", // Apply condition for large screens
                                xl: index === 2 ? "-150px" : "",
                              },
                              cursor: "pointer",
                            }}
                            onClick={() => handleClick(id)}
                          />
                        ) : (
                          <Typography
                            sx={{
                              color: "white",
                              fontFamily: "Clash Display",
                              fontSize: { xs: "20px", md: "30px" },
                              textAlign: "center",
                              width: "100%",
                              paddingTop: "20px",
                            }}
                          >
                            No image available
                          </Typography>
                        )}
                      </Box>
                    </Grid>
                  ))
                ) : (
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "Clash Display",
                      fontSize: { xs: "20px", md: "30px" },
                      textAlign: "center",
                      width: "100%",
                      paddingTop: "20px",
                    }}
                  >
                    No case studies available at the moment.
                  </Typography>
                )}
              </Grid>
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

              {/* My Case Study TALHA */}
              <Link href="./adidasDataSet">
                <img
                  src="./assets/shoes.png"
                  alt="Sales Process"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    paddingTop: "40px",
                  }}
                />
              </Link>
            </Grid>
          </Box>
        </Container>
        <Work />
        <Footer />
      </Box>
    </>
  );
}
