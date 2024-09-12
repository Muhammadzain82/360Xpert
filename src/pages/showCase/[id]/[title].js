import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Rating, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const CustomRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'golden',
  },
});

const CardStyle = styled(Card)({
  backgroundColor: 'white',
  
  height: '450px',

});

const RightAlignedButton = styled(Button)({
  // marginTop: '20px',
  // marginBottom: '20px',
  backgroundColor: '#ff0000',
  '&:hover': {
    backgroundColor: '#cc0000',
  },
});

const AddToCartButton = styled(Button)({
  // marginTop: '20px',
  backgroundColor: '#00c853',
  '&:hover': {
    backgroundColor: '#00a152',
  },
});

function CardDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [cardData, setCardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("750"));
  const isMediumScreen = useMediaQuery('(max-width:900px)');
  const isLargeScreen = useMediaQuery('(min-width:901px)');

  useEffect(() => {
    if (id) {
      axios.get(`https://api.360xpertsolutions.com/api/showcases/${id}?populate=image`)
        .then(response => {
          const data = response.data.data.attributes;
          const imageObject = data.image.find(img => img.type === 'image');
          const imageUrl = imageObject ? imageObject.image.url : null;
          setCardData({ ...data, imageUrl });
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching the card data:', error);
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return (
      <Layout>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh", color: "red" }}>
          <CircularProgress />
        </Grid>
      </Layout>
    );
  }

  if (!cardData) {
    return <div>No data available</div>;
  }

  const getCardHeight = () => {
    if (isSmallScreen) return 'auto'; // For small screens, allow height to be auto
    if (isMediumScreen) return '350px'; // For medium screens, set a fixed height
    if (isLargeScreen) return '450px'; // For large screens, set a larger fixed height
  };

  return (
    <Layout>
      <Container>
        <Grid container spacing={4} marginTop="50px">
          <Grid item xs={12} sm={6} md={8}>
            <CardStyle>
              {cardData.imageUrl && (
                <CardMedia
                  component="img"
                  alt={cardData.title}
                  image={cardData.imageUrl}
                  style={{ height: getCardHeight() }}
                />
              )}
            </CardStyle>
            {/* <RightAlignedButton variant="contained" href={cardData.livePreview} target="_blank">
              Live Preview
            </RightAlignedButton> */}
          </Grid>
          <Grid item xs={12} sm={6} md={4} marginBottom={5}>
            <CardStyle style={{ height: getCardHeight() }}>
              <CardContent
               sx={{
                fontSize: { sm: 50, xs: 30 },
                fontFamily: "Clash Display",
                color: "black",
                backgroundColor:"white",
                display: "block",
                fontWeight: "300",
               }}>
                <Typography sx={{fontSize: isSmallScreen ? 18 : 30}} component="div" gutterBottom>
                  {cardData.title}
                </Typography>
                <Typography sx={{fontSize: isSmallScreen ? 14 : 20}} color="text.secondary" gutterBottom>
                  {cardData.author}
                </Typography>
                <hr/>
                <Typography sx={{fontSize: isSmallScreen ? 16 : 22}} color="text.primary" gutterBottom>
                  ${cardData.price}
                </Typography>
                <CustomRating value={cardData.rating} readOnly precision={0.1} />
                <Typography sx={{fontSize: isSmallScreen ? 14 : 16}} color="text.secondary" gutterBottom>
                  {cardData.sales} Sales
                </Typography>
                <AddToCartButton variant="contained">
                  Add to Cart
                </AddToCartButton>
              </CardContent>
            </CardStyle>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default CardDetail;
