/**
* CREATED BY    : Karthick D K 
* CREATED DATE  : 20 JUNE 2023
* MODIFIED BY   : Karthick D K
* MODIFIED DATE : 20 JUNE 2023
* DESCRIPTION   : This component will handle the bus payments
**/

import { Box, Grid, Typography, Card, Alert, Snackbar, Button, TextField, Radio } from '@mui/material'
import { useState } from 'react'

export const Payment = (props: any) => {

    const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false)

    return (
        <>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Passenger Details</Typography>
            </Box>
            <Typography sx={{ fontWeight: 'bold' }}>Passenger Information</Typography>
            <hr />
            <Card sx={{ boxShadow: '1px 0px 5px 0px rgba(0,0,0,0.25)', padding: '10px', margin: '10px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={{ fontSize: '12px' }}>Passenger 1 | Seat U11</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: '11px', float: 'right' }}>This seat is reserved for Male Passenger</Typography>
                    </Grid>
                </Grid>
                <br />
                <Typography sx={{ fontSize: '11px' }}>Name</Typography>
                <br />
                <TextField size='small' placeholder='Name' fullWidth /><br /><br />
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={{ fontSize: '11px' }}>Gender</Typography>
                        <br />
                        <Radio checked={true} /> Male<Radio /> Female
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: '11px' }}>Age</Typography>
                        <br />
                        <TextField size='small' placeholder='Age' fullWidth />
                    </Grid>
                </Grid>
                <br />
                <Typography sx={{ fontSize: '11px' }}>City of Residence</Typography>
                <br />
                <TextField size='small' placeholder='City of Residence' fullWidth />
                <br /><br />
                <Typography sx={{ fontSize: '11px' }}>State of Residence</Typography>
                <br />
                <TextField disabled={true} size='small' placeholder='State of Residence' fullWidth />
            </Card>
            <hr /><br />

            <Typography sx={{ fontWeight: 'bold' }}>Contact Details</Typography>
            <Card sx={{ boxShadow: '1px 0px 5px 0px rgba(0,0,0,0.25)', padding: '10px', margin: '10px' }}>
                <Typography sx={{ fontSize: '11px' }}>Email ID</Typography>
                <br />
                <TextField size='small' placeholder='Email ID' fullWidth /><br /><br />

                <Typography sx={{ fontSize: '11px' }}>Phone</Typography>
                <br />
                <TextField size='small' placeholder='Phone' fullWidth /><br /><br />
            </Card>
            <hr />
            <Typography variant='caption'>By clicking on proceed, I agree that I have read and understood the TnCs and the Privacy Policy</Typography>
            <br /><br />
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Total Amount : 1300.00</Typography>
                </Grid>
                <Grid item xs={4} >
                    <Button sx={{ float: 'right' }} onClick={() => { setIsSuccessMessageVisible(true) }} variant='contained' size='small'>Proceed To Pay</Button>
                </Grid>
            </Grid>
            <Snackbar
                open={isSuccessMessageVisible}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                autoHideDuration={6000}
                onClose={() => { setIsSuccessMessageVisible(false); props?.handleCloseDrawer() }}
                message="Note archived"
            >
                <Alert severity="success">Ticket Booked Successfully</Alert>
            </Snackbar>
        </>
    )
}