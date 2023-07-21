import { BusListConfig } from '@/configs/searchpage/BusListConfig'
import { Box, Grid, Typography, Card, Chip, Button } from '@mui/material'
import Image from 'next/image'
import { SeatSelector } from './SeatSelector'
import react, { useState } from 'react'

const busListConfig = new BusListConfig()

export const BusList = () => {

    const [selectedBusToViewSeats, setSelectedBusToViewSeats] = useState<any>(null)

    const handleViewSeatButton = (index: any) => {
        if (index + 1 === selectedBusToViewSeats) {
            setSelectedBusToViewSeats(null)
        } else {
            setSelectedBusToViewSeats(index + 1)
        }
    }

    return (
        <>
            <Box sx={{ padding: '10px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Typography variant='caption' sx={{ fontSize: '12px', fontWeight: 'bold' }}>63 Buses found</Typography>
                    </Grid>
                    <Grid item xs={1.4}>
                        <Typography variant='caption' sx={{ fontSize: '12px', fontWeight: 'bold' }}>SORT BY:</Typography>
                    </Grid>
                    <Grid item xs={1.4}>
                        <Typography variant='caption' sx={{ fontSize: '12px' }}>Departure</Typography>
                    </Grid>
                    <Grid item xs={1.4}>
                        <Typography variant='caption' sx={{ fontSize: '12px' }}>Duration</Typography>
                    </Grid>
                    <Grid item xs={1.4}>
                        <Typography variant='caption' sx={{ fontSize: '12px' }}>Arrival</Typography>
                    </Grid>
                    <Grid item xs={1.4}>
                        <Typography variant='caption' sx={{ fontSize: '12px' }}>Ratings</Typography>
                    </Grid>
                    <Grid item xs={1.4}>
                        <Typography variant='caption' sx={{ fontSize: '12px' }}>Fare</Typography>
                    </Grid>
                    <Grid item xs={1.4}>
                        <Typography variant='caption' sx={{ fontSize: '12px' }}>Seats Available</Typography>
                    </Grid>
                </Grid>
                <br />

                {busListConfig?.BUS_LIST_CONFIG?.map((data: any, index: any) =>
                    <>
                        <Card sx={{ boxShadow: '1px 0px 5px 0px rgba(0,0,0,0.25)', padding: '10px' }}>
                            <Image src={'https://www.redbus.in/images/reviews/primo_logo.svg'} alt='buslogo' width={60} height={30} />
                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <Typography variant='caption' sx={{ fontSize: '12px', fontWeight: 'bold' }}>{data?.firstName}</Typography>
                                </Grid>
                                <Grid item xs={1.4}></Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '16px', fontWeight: 'bold' }}>{data?.firstDeparture}</Typography>
                                </Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '12px' }}>{data?.firstDuration}</Typography>
                                </Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '16px' }}>{data?.firstArrival}</Typography>
                                </Grid>
                                <Grid item xs={1.4}>
                                    <Chip color='primary' size='small' sx={{ background: 'green' }}
                                        label={data?.firstRatings}
                                        deleteIcon={
                                            <span className="material-symbols-outlined">
                                                local_police
                                            </span>
                                        } />
                                </Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '15px' }}>{data?.firstFair}</Typography>
                                </Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '12px' }}>{data?.firstSeatsAvailable}</Typography>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <Typography variant='caption' sx={{ fontSize: '11px' }}>{data?.secondName}</Typography>
                                </Grid>
                                <Grid item xs={1.4}></Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '16px', fontWeight: 'bold' }}>{data?.secondDeparture}</Typography>
                                </Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '12px' }}>{data?.secondDuration}</Typography>
                                </Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '12px', color: 'red' }}>{data?.secondArrival}</Typography>
                                </Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '12px', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ fontSize: '20px' }} className="material-symbols-outlined">
                                            people
                                        </span>
                                        {data?.secondRatings}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '12px' }}>{data?.secondFair}</Typography>
                                </Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '12px' }}>{data?.secondSeatsAvailable}</Typography>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                </Grid>
                                <Grid item xs={1.4}></Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '12px' }}>{data?.thirdDeparture}</Typography>
                                </Grid>
                                <Grid item xs={1.4}>
                                </Grid>
                                <Grid item xs={1.4}>
                                    <Typography variant='caption' sx={{ fontSize: '12px' }}>{data?.thirdArrival}</Typography>
                                </Grid>
                                <Grid item xs={1.4}>
                                </Grid>
                                <Grid item xs={1.4}>
                                </Grid>
                                <Grid item xs={1.4}>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={0.3}>
                                    <span style={{ fontSize: '20px' }} className="material-symbols-outlined">
                                        king_bed
                                    </span>
                                </Grid>
                                <Grid item xs={0.3}>
                                    <span style={{ fontSize: '20px' }} className="material-symbols-outlined">
                                        tv
                                    </span>
                                </Grid>
                                <Grid item xs={0.3}>
                                    <span style={{ fontSize: '20px' }} className="material-symbols-outlined">
                                        videocam
                                    </span>
                                </Grid>
                                <Grid item xs={0.3}>
                                    <span style={{ fontSize: '20px' }} className="material-symbols-outlined">
                                        sos
                                    </span>
                                </Grid>
                                <Grid item xs={0.3}>
                                    <span style={{ fontSize: '20px' }} className="material-symbols-outlined">
                                        add_circle
                                    </span>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Typography variant='caption' sx={{ display: 'flex', borderRadius: '10px', width: 'fit-content', fontSize: '11px', border: '1px solid #f8f4f4', background: '#f8f4f4', padding: '3px' }}>
                                        <span style={{ fontSize: '20px' }} className="material-symbols-outlined">
                                            hourglass_empty
                                        </span>
                                        Flexi Ticket
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography variant='caption' sx={{ display: 'flex', borderRadius: '10px', width: 'fit-content', fontSize: '11px', border: '1px solid #f8f4f4', background: '#f8f4f4', padding: '3px' }}>
                                        <span style={{ fontSize: '20px' }} className="material-symbols-outlined">
                                            pin_drop
                                        </span>
                                        Live Tracking
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant='caption' sx={{ fontSize: '10px', color: 'red' }}>Return Trip redDeal : Unlock min. 10% OFF on return ticket</Typography>
                                </Grid>
                            </Grid>
                            <Button onClick={() => { handleViewSeatButton(index) }} sx={{ background: '#d84e55', color: 'white', fontSize: '10px', float: 'right' }} size="small">VIEW SEATS</Button>
                        </Card>
                        {selectedBusToViewSeats === data?.busID &&
                            <SeatSelector phoneNumber={8667228531} busID={data?.busID} />
                        }
                        <br />
                    </>
                )}
            </Box>
        </>
    )
}