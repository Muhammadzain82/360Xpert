import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Rating, CircularProgress, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Layout from '../components/Layout';

// Custom styled components
const CustomRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'golden',
  },
});

const GreyCard = styled(Card)({
  backgroundColor: 'grey',
});

const RightAlignedRedButton = styled(Button)({
  display: 'block',
  marginLeft: 'auto',
  marginRight: 0,
  backgroundColor: '#ff0000',
  '&:hover': {
    backgroundColor: '#cc0000',
  },
});

const CardDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cardData, setCardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://api.360xpertsolutions.com/api/showcases/${id}`)
        .then(response => {
          if (response.data && response.data.data) {
            setCardData(response.data.data.attributes);
          } else {
            console.error('Unexpected data format:', response.data);
          }
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching the card data:', error);
          setError(error);
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


  return cardData ? (
    <Layout>
      <GreyCard>
        <CardMedia
          component="img"
          alt={cardData.title}
          height="140"
          image={cardData.image} // Adjust this line as per your actual image source
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {cardData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardData.author}
          </Typography>
          <Typography variant="h6" color="text.primary">
            ${cardData.price}
          </Typography>
          <CustomRating value={cardData.rating} readOnly precision={0.1} />
          <Typography variant="body2" color="text.secondary">
            {cardData.sales} Sales
          </Typography>
          <RightAlignedRedButton variant="contained" href={cardData.livePreview} target="_blank">
            Live Preview
          </RightAlignedRedButton>
        </CardContent>
      </GreyCard>
    </Layout>
  ) : (
    <div>No data available</div>
  );
};

export default CardDetail;
