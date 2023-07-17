import { SearchHighLevelInfo } from '@/components/searchpage/SearchHighLevelInfo'
import { SearchNav } from '@/components/searchpage/SearchNav'
import { Box } from '@mui/material'
export default function Search() {
    return (
        <>
            <Box sx={{ background: 'white' }}>
                <SearchNav />
                <SearchHighLevelInfo />
            </Box>
        </>
    )
}