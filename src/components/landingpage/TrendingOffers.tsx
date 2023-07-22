/**
* CREATED BY    : Karthick D K 
* CREATED DATE  : 20 JUNE 2023
* MODIFIED BY   : Karthick D K
* MODIFIED DATE : 20 JUNE 2023
* DESCRIPTION   : This component will show all the trending offers
**/

import React from 'react';
import { TrendingOffersConfig } from "@/configs/landingpage/TrendingOffersConfig";
import { Box, Card, Typography, Grid, Chip } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';

const trendingOffersConfig = new TrendingOffersConfig();

export const TrendingOffers = () => {
    const items = trendingOffersConfig?.TRENDING_OFFERS_CONFIG;

    const renderSlides = () => {
        const slides = [];
        let startIndex = 0;

        while (startIndex < items.length) {
            const slideItems = items.slice(startIndex, startIndex + 3);
            slides.push(renderSlideItems(slideItems));
            startIndex += 3;
        }

        return slides;
    };

    const renderSlideItems = (slideItems: any) => {
        return (
            <Grid container spacing={2}>
                {
                    slideItems.map((data: any) => (
                        <Grid item xs={4}>
                            <Card
                                key={data?.title}
                                sx={{
                                    backgroundImage: data?.color,
                                    padding: '15px',
                                    margin: '10px',
                                    borderRadius: '20px',
                                    boxShadow: '1px 0px 5px 0px rgba(0,0,0,0.25)',
                                    color: 'white'
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Image src={data?.imageURL} height={50} width={50} alt='card-images' />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Chip sx={{ color: 'white', fontSize: '12px', paddingBottomm: '10px' }} size='small' label={data?.type} variant="outlined" /><br />
                                        <Typography variant='caption' sx={{ fontSize: '14px', fontWeight: 'bold' }}>{data?.title}</Typography><br />
                                        <Typography variant='caption'>{data?.validity}</Typography> <br />
                                        <Typography variant='caption' sx={{ fontSize: '12px', fontWeight: 'bold', border: '2px dotted', padding: '3px' }}>{data?.offerCode}</Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        )
    };

    return (
        <Box sx={{ paddingLeft: '200px', paddingRight: '200px', marginTop: '-50px' }}>
            <Card sx={{ padding: '20px', borderRadius: '20px', boxShadow: '1px 0px 5px 0px rgba(0,0,0,0.25)' }}>
                <Typography variant="h4">TRENDING OFFERS</Typography>
                <Carousel>
                    {renderSlides()}
                </Carousel>
            </Card>
        </Box>
    );
};
