import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import HomeSingleNews from './HomeSingleNews'
import news from '@/data/news'

const HomeNews = () => {
  return (
    <Box>
        <Container>
        <Typography sx={{fontSize:30,fontWeight:600,color:"#596C72",marginBottom:2}}>Yeniliklər</Typography>
        <Grid container spacing={5}>
            {
              news.map((singleNews,index)=>{
                return(
                  index<4? (
                    <Grid color="primary" key={singleNews.id} item xs={12} sm={6} md={3}>
                    <HomeSingleNews {...singleNews}/>
                  </Grid>
                  )
                  :<></>
                )

              })
            }
        </Grid>
        </Container>
    </Box>
  )
}

export default HomeNews