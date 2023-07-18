import { Box, Grid, Typography, Card, Chip, Divider } from '@mui/material'

export const SeatSelector = () => {
    return (
        <>
            <Box sx={{ backgroundColor: '#EEEDED', padding: '10px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={1}>
                        <Typography variant='caption' sx={{ fontSize: '12px', fontWeight: 'bold' }}>Seat Price</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Chip label="All" sx={{ borderRadius: '0px', background: '#545454', color: 'white' }}></Chip>
                        <Chip label="1290" sx={{ borderRadius: '0px', background: 'white', color: 'black', marginLeft: '15px' }}></Chip>
                        <Chip label="1090" sx={{ borderRadius: '0px', background: 'white', color: 'black', marginLeft: '15px' }}></Chip>
                        <Chip label="1190" sx={{ borderRadius: '0px', background: 'white', color: 'black', marginLeft: '15px' }}></Chip>
                        <Chip label="1440" sx={{ borderRadius: '0px', background: 'white', color: 'black', marginLeft: '15px' }}></Chip>
                    </Grid>
                    <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <span className="material-symbols-outlined">
                            cancel
                        </span>
                    </Grid>
                </Grid>
                <br /><hr />

                <Grid container spacing={2} sx={{ paddingTop: '10px' }}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={6}>
                        Lower Deck
                        <Card sx={{ borderLeft: '5px solid gray', padding: '10px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={1}>
                                    <span className="material-symbols-outlined">
                                        swap_driving_apps_wheel
                                    </span>
                                </Grid>
                                <Divider orientation='vertical' flexItem />
                                <Grid item xs={10}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2}>
                                            <Chip label="" clickable={true} sx={{ borderRadius: '0px', border: '1px solid gray', width: '50px', height: '25px', background: 'white' }}></Chip>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Chip label="" clickable={true} sx={{ borderRadius: '0px', border: '1px solid gray', width: '50px', height: '25px', background: 'white' }}></Chip>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Chip label="" clickable={true} sx={{ borderRadius: '0px', border: '1px solid gray', width: '50px', height: '25px', background: 'white' }}></Chip>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Chip label="" clickable={true} sx={{ borderRadius: '0px', border: '1px solid gray', width: '50px', height: '25px', background: 'white' }}></Chip>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Chip label="" clickable={true} sx={{ borderRadius: '0px', border: '1px solid gray', width: '50px', height: '25px', background: 'white' }}></Chip>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Chip label="" clickable={true} sx={{ borderRadius: '0px', border: '1px solid gray', width: '50px', height: '25px', background: 'white' }}></Chip>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}