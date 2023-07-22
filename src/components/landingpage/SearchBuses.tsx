/**
* CREATED BY    : Karthick D K 
* CREATED DATE  : 20 JUNE 2023
* MODIFIED BY   : Karthick D K
* MODIFIED DATE : 20 JUNE 2023
* DESCRIPTION   : This component will handle the bus searches
**/

import { SearchBusesConfig } from '@/configs/landingpage/SearchBusesConfig'
import { Box, Button, Card, Divider, Grid, TextField } from '@mui/material'
import { useRouter } from 'next/router'

const searchBusesConfig = new SearchBusesConfig()

export const SearchBuses = () => {
    const router = useRouter()
    return (
        <>
            <Box className='landing-page' sx={{
                backgroundImage: 'url("https://s3.rdbuz.com/web/images/homeV2/HomeBannerImg.svg")',
                height: '70vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Card sx={{ minWidth: 700, padding: '0px', borderRadius: '20px', boxShhadow: '1px 0px 5px 0px rgba(0,0,0,0.25)' }}>
                    <Grid container spacing={2}>
                        {
                            searchBusesConfig?.SEARCH_BUSES_CONFIG?.map((data: any) =>
                                <Grid item xs={3} sx={{ display: 'flex' }}>
                                    {data?.isDividerVisible &&
                                        <Divider orientation="vertical" flexItem>
                                            {data?.dividerIconName?.length !== 0 &&
                                                <span className="material-symbols-outlined">
                                                    {data?.dividerIconName}
                                                </span>
                                            }
                                        </Divider>
                                    }
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                            <span className="material-symbols-outlined">
                                                {data?.iconName}
                                            </span>
                                        </Grid>
                                        <Grid item xs={9}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                            <TextField
                                                label={data?.label}
                                                sx={{
                                                    margin: '0px'
                                                }}
                                                type={data?.inputType}
                                                variant="standard"
                                                fullWidth
                                                margin="normal"
                                                InputProps={{
                                                    disableUnderline: true
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        }
                        <Grid item xs={3}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: '#D84E55'
                            }}>
                            <Button onClick={() => router?.push('/search')} sx={{ background: '#D84E55', color: 'white', fontWeight: 'bold', fontSize: '19px', padding: '40px' }}>Search Buses</Button>
                        </Grid>
                    </Grid>
                </Card>
            </Box >
        </>
    )
}   