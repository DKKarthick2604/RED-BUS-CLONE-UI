import { Box, Grid, Typography, Card, Alert, Snackbar, Button, TextField, Radio } from '@mui/material'
import Image from 'next/image'
import redBusLogo from '../../assets/images/rdc-redbus-logo.svg'
import react, { useEffect, useState } from 'react'

export const Login = (props: any) => {
    const [phoneNumber, setPhoneNumber] = useState<any>('')
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Image width={300} height={450} alt='' src={'https://s3.rdbuz.com/Images/webplatform/contextualLogin/desktop-rtr-unlock.svg'} />
                </Grid>
                <Grid item xs={8}>
                    <Image alt='redbus' src={redBusLogo} width={70} height={70} />
                    <Typography variant='h6' sx={{ color: '#d84e55', fontWeight: 'bold' }}>Sign in and unlock exclusive offers for your return trip!!</Typography>
                    <br />
                    <TextField type='number' onChange={(e: any) => setPhoneNumber(e?.target?.value)} size='small' placeholder='Enter Phone Number...' fullWidth />
                    <br /><br />
                    <Box sx={{ textAlign: 'center' }}><Button variant='contained' size='small' onClick={() => props?.hanldeLogin(phoneNumber)} >Login</Button></Box>
                    <br />
                    <Box sx={{ textAlign: 'center' }}><Typography variant='caption'>OR, Connect using social accounts</Typography></Box>
                    <br />
                    <Box sx={{ textAlign: 'center' }}><Button variant='contained' size='small' >Sign in with Google</Button></Box>
                    <br />
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant='caption' sx={{ color: '#d84e55', fontWeight: 'bold' }}>By signing up, you agree to
                            our Terms & Conditions and Privacy Policy</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}