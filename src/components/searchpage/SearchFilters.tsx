/**
* CREATED BY    : Karthick D K 
* CREATED DATE  : 20 JUNE 2023
* MODIFIED BY   : Karthick D K
* MODIFIED DATE : 20 JUNE 2023
* DESCRIPTION   : This component will handle the search filters
**/

import { SearchFiltersConfig } from '@/configs/searchpage/SearchFiltersConfig'
import { Box, TextField, Typography, Checkbox } from '@mui/material'

const searchFiltersConfig = new SearchFiltersConfig()

export const SearchFilters = () => {
    return (
        <>
            <Box sx={{ paddingLeft: '24px' }}>
                <Typography variant='caption' sx={{ fontSize: '11px', fontWeight: 'bold' }}>FILTERS</Typography>
                <hr style={{ marginTop: '10px', marginBottom: '10px' }} />
                <Typography variant='caption' sx={{ fontSize: '11px', display: 'flex' }}>
                    <span style={{ fontSize: '20px' }} className="material-symbols-outlined">
                        directions_bus
                    </span>
                    Live Tracking (63)
                </Typography>
                <hr style={{ marginTop: '10px', marginBottom: '10px' }} />
                <Typography variant='caption' sx={{ fontSize: '11px', display: 'flex' }}>
                    <span style={{ fontSize: '20px' }} className="material-symbols-outlined">
                        hotel_class
                    </span>
                    Primo Bus (7)
                </Typography>
                <hr style={{ marginTop: '10px', marginBottom: '10px' }} />

                {searchFiltersConfig?.SEARCH_FILTERS_CONFIG?.map((data: any) =>
                    <>
                        <Typography variant='caption' sx={{ fontSize: '11px', fontWeight: 'bold' }}>{data?.title}</Typography>
                        <br></br>
                        {
                            data?.items?.map((item: any) =>
                                <Typography variant='caption' sx={{ fontSize: '11px', display: 'flex', alignItems: 'center' }}>
                                    <Checkbox style={{ fontSize: '20px' }} size='small' checked={false}></Checkbox>
                                    <span style={{ fontSize: '20px' }} className="material-symbols-outlined">
                                        {item?.iconName}
                                    </span>
                                    {item?.name}
                                </Typography>
                            )
                        }
                    </>
                )}
                {
                    searchFiltersConfig?.SEARCH_FILTERS_SEARCH_CONFIG?.map((data: any) =>
                        <>
                            <Typography variant='caption' sx={{ fontSize: '11px', fontWeight: 'bold' }}>{data?.name}</Typography>
                            <br></br><br></br>
                            <TextField sx={{ fontSize: '10px' }} size='small' content={data?.name} placeholder={data?.name} />
                            <br></br><br></br>
                        </>
                    )
                }
                {
                    searchFiltersConfig?.SEARCH_AMENITIES_CONFIG?.map((data: any) =>
                        <>
                            <Typography variant='caption' sx={{ fontSize: '10px', marginTop: '10px', display: 'flex', border: '1px solid whitesmoke', padding: '3px' }}>
                                <span style={{ fontSize: '18px' }} className="material-symbols-outlined">
                                    {data?.iconName}
                                </span>
                                {data?.name}
                            </Typography>
                        </>
                    )
                }
            </Box>
        </>
    )
}