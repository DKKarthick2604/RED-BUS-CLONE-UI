import { BusList } from '@/components/searchpage/BusList'
import { BusOfferCards } from '@/components/searchpage/BusOfferCards'
import { SearchFilters } from '@/components/searchpage/SearchFilters'
import { SearchHighLevelInfo } from '@/components/searchpage/SearchHighLevelInfo'
import { SearchNav } from '@/components/searchpage/SearchNav'
import { Box, Grid } from '@mui/material'
export default function Search() {
    return (
        <>
            <Box sx={{ background: 'white', height: 'calc(100vh - 100px)' }}>
                <SearchNav />
                <SearchHighLevelInfo />
                <hr />
                <Grid container spacing={2} sx={{ height: 'calc(100vh - 200px)' }}>
                    <Grid item xs={2} sx={{ marginTop: '20px' }}>
                        <SearchFilters />
                    </Grid>
                    <Grid item xs={10} sx={{ marginTop: '20px' }}>
                        <BusOfferCards />
                        <BusList />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}