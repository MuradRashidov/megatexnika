"use client"
import { Box, Container, Grid, Typography } from '@mui/material';
import HomeCategory from './HomeCategory';
import ITechnique from '@/interfaces/data';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTechniques, selectTechniques, selectTechniquesStatus, selectTechniquesError } from '@/redux/features/techniqueSlice';
import { useEffect } from 'react';

// export async function getTechniques() {
//   try {
//     const response = await fetch("http://localhost:3000/api/techniques");
//     if (!response.ok) {
//       throw new Error("Failed to fetch techniques");
//     }
//     const techs = await response.json();
//     return techs;
//   } catch (error) {
//     console.error("Error fetching techniques:", error);
//     return []; // Hata durumunda boş bir dizi döndür
//   }
// }

const HomeCategories = () => {
//  const [techniques, setTechniques] = useState<ITechnique[]>([]);

//   useEffect(() => {
//     getTechniques().then((techs) => {
//       setTechniques(techs);
//       console.log(1)
//     });
//   }, []);
  const dispatch = useDispatch();
  const techniques = useSelector(selectTechniques);
  const status = useSelector(selectTechniquesStatus);
  const error = useSelector(selectTechniquesError);
useEffect(() => {
  dispatch(fetchTechniques());
}, [dispatch]);
console.log(techniques)

  return (
    <Box>
      <Container>
        <Typography sx={{ marginY: 5 }}>Kateqoriyalar</Typography>
        <Grid container spacing={5}>
          {techniques.map((technique: ITechnique) => (
            <Grid key={technique._id} item xs={12} sm={6} md={3}>
              <HomeCategory {...technique}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeCategories;
