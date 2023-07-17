import { TrendingOffersConfig } from "@/configs/landingpage/TrendingOffersConfig"
import { Card } from "@mui/material"
import Carousel from 'react-material-ui-carousel'

const trendingOffersConfig = new TrendingOffersConfig()

export const TrendingOffers = () => {
    return (
        <>
            <Carousel>
                {
                    trendingOffersConfig?.TRENDING_OFFERS_CONFIG?.map((data: any) =>
                        <Card sx={{ minWidth: 275 }}>
                            Test {data?.title}
                        </Card>
                    )
                }
            </Carousel>
        </>
    )
}