/**
* CREATED BY    : Karthick D K 
* CREATED DATE  : 20 JUNE 2023
* MODIFIED BY   : Karthick D K
* MODIFIED DATE : 20 JUNE 2023
* DESCRIPTION   : This component will show all the bus offer cards
**/

import { BusOfferCardsConfig } from "@/configs/searchpage/BusOfferCardsConfig"
import { Card, Grid, Typography } from '@mui/material'

const busOfferCardsConfig = new BusOfferCardsConfig()

export const BusOfferCards = () => {
    return (
        <>
            <Grid container spacing={3}>
                {
                    busOfferCardsConfig?.BUS_OFFER_CARDS_CONFIG?.map((data: any) =>
                        <Grid item xs={3}>
                            <Card sx={{ boxShadow: '1px 0px 5px 0px rgba(0,0,0,0.25)', padding: '10px', borderRadius: '15px', backgroundImage: data?.color, color: 'white' }}>
                                <Typography variant='h4' sx={{ fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ fontSize: '35px' }} className="material-symbols-outlined">
                                        directions_bus
                                    </span>
                                    {data?.title}
                                </Typography>
                                <Typography variant='caption' sx={{ fontSize: '12px' }}>{data?.description}</Typography>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
            <br />
            <Typography variant='caption' sx={{ fontSize: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <span className="material-symbols-outlined">
                    local_police
                </span>
                All bus ratings include safety as a major factor
            </Typography>
            <br /><hr/>
        </>
    )
}