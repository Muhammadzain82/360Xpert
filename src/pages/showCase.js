// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Layout from '../components/Layout';
// import Container from '../components/Container';
// import { Grid, Card, CardMedia, CardContent, Typography, Button, Rating, CircularProgress } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import axios from 'axios';
// import slugify from 'slugify';

// const CustomRating = styled(Rating)({
//   '& .MuiRating-iconFilled': {
//     color: 'golden',
//   },
// });

// const CardStyle = styled(Card)({
//   backgroundColor: 'grey',
//   marginBottom: '10px',
// });

// const RightAlignedButton = styled(Button)({
//   backgroundColor: '#ff0000',
//   '&:hover': {
//     backgroundColor: '#cc0000',
//   },
// });

// const NoUnderlineLink = styled(Link)({
//   textDecoration: 'none',
// });

// function showCase() {
//   const [cardData, setCardData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     axios.get('https://api.360xpertsolutions.com/api/showcases?populate=image')
//       .then(response => {
//         if (response.data && Array.isArray(response.data.data)) {
//           const formattedData = response.data.data.map(item => {
//             const imageUrl = item.attributes.image && item.attributes.image.type === 'image'
//               ? `https://api.360xpertsolutions.com${item.attributes.image.url}`
//               : null;
//             return {
//               ...item.attributes,
//               id: item.id,
//               imageUrl,
//             };
//           });
//           setIsLoading(false);
//           setCardData(formattedData);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching the card data:', error);
//         setIsLoading(false);
//       });
//   }, []);

//   if (isLoading) {
//     return (
//       <Layout>
//         <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh", color: "red" }}>
//           <CircularProgress />
//         </Grid>
//       </Layout>
//     );
//   }

//   return (
//     <Container>
//       <Layout>
//         <Grid container spacing={2} marginTop="130px" marginBottom="100px">
//           {cardData.length > 0 ? (
//             cardData.map((card) => (
//               <Grid item xs={12} sm={6} md={3} key={card.id}>
//                 <NoUnderlineLink href={`/showCase/${card.id}/${slugify(card.title, { lower: true, strict: true })}`} passHref>
//                   <CardStyle>
//                     {card.imageUrl && (
//                       <CardMedia
//                         component="img"
//                         alt={card.title}
//                         height="140"
//                         image={card.imageUrl}
//                       />
//                     )}
//                     <CardContent sx={{
//                       fontSize: { sm: 50, xs: 30 },
//                       fontFamily: "Clash Display",
//                       color: "black",
//                       display: "block",
//                       fontWeight: "300",
//                     }}>
//                       <Typography variant="h6" component="div">
//                         {card.title}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {card.author}
//                       </Typography>
//                       <Typography variant="h6" color="text.primary">
//                         ${card.price}
//                       </Typography>
//                       <CustomRating value={card.rating} readOnly precision={0.1} />
//                       <Typography variant="body2" color="text.secondary">
//                         {card.sales} Sales
//                       </Typography>
//                       <RightAlignedButton variant="contained" href={card.livePreview} target="_blank">
//                         Live Preview
//                       </RightAlignedButton>
//                     </CardContent>
//                   </CardStyle>
//                 </NoUnderlineLink>
//               </Grid>
//             ))
//           ) : (
//             <div>No data available</div>
//           )}
//         </Grid>
//       </Layout>
//     </Container>
//   );
// }

// export default showCase;









import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Rating, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import slugify from 'slugify';

const CustomRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'golden',
  },
});

const CardStyle = styled(Card)({
  backgroundColor: '#252525',
  marginBottom: '10px',
  radius:"20px"
});

const RightAlignedButton = styled(Button)({
  backgroundColor: '#ff0000',
  '&:hover': {
    backgroundColor: '#cc0000',
  },
});

const NoUnderlineLink = styled(Link)({
  textDecoration: 'none',
});

function showCase() {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.360xpertsolutions.com/api/showcases?populate=image`)
      .then(response => {
        if (response.data && Array.isArray(response.data.data)) {
          const formattedData = response.data.data.map(item => ({
            ...item.attributes,
            id: item.id,
          }));
          setIsLoading(false);
          setCardData(formattedData);
        }
      })
      .catch(error => {
        console.error('Error fetching the card data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh", color: "red" }}>
          <CircularProgress />
        </Grid>
      </Layout>
    );
  }
  const cleanId = cardData
  console.log("=======",cleanId)

  return (
    <Container>
      <Layout>
        <Grid container spacing={2} marginTop="130px" marginBottom="100px">
          {cardData.length > 0 ? (
            cardData.map((card) => (
              <Grid item xs={12} sm={6} md={3} key={card.id}>
                <NoUnderlineLink href={`/showCase/${card.id}/${slugify(card.title, { lower: true, strict: true })}`} passHref>
                  <CardStyle>
                    {card.image && card.image.some((contentItem) => contentItem.type === "image") && (
                      <div>
                        {card.image
                          .filter((contentItem) => contentItem.type === "image")
                          .slice(0, 1)
                          .map((contentItem, index) => (
                            <CardMedia
                              key={index}
                              component="img"
                              image={contentItem.image.url}
                              alt={contentItem.image.alternativeText}
                              sx={{
                                height: "250px",
                                width: '100%',
                                objectFit: 'cover',
                                
                                paddingTop: '10px',
                              }}
                            />
                          ))}
                      </div>
                    )}
                    <CardContent sx={{
                      fontSize: { sm: 50, xs: 30 },
                      fontFamily: "Clash Display",
                      color: "black",
                      backgroundColor:"white",
                      display: "block",
                      fontWeight: "300",
                      // radius:"20px"
                    }}>
                      <Typography variant="h6" component="div">
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.author}
                      </Typography>
                      <Typography variant="h6" color="text.primary">
                        ${card.price}
                      </Typography>
                      <CustomRating value={card.rating} readOnly precision={0.1} />
                      <Typography variant="body2" color="text.secondary">
                        {card.sales} Sales
                      </Typography>
                    </CardContent>
                  </CardStyle>
                </NoUnderlineLink>
                      <RightAlignedButton variant="contained" href={card.livePreview} target="_blank" rel="noopener noreferrer" >
                        Live Preview
                      </RightAlignedButton>
              </Grid>
            ))
          ) : (
            <div>No data available</div>
          )}
        </Grid>
      </Layout>
    </Container>
  );
}

export default showCase;

