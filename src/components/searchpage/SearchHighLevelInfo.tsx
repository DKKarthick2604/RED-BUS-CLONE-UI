import { Box, Typography, Button } from '@mui/material'

export const SearchHighLevelInfo = () => {
    return (
        <Box sx={{ backgroundColor: 'white', padding: '10px' }}>
            <Typography sx={{ fontSize: '13px', fontWeight: 'bold', display: 'flex' }} color="text.primary">
                Tirunelveli
                <span style={{ fontSize: '20px', cursor: 'pointer' }} className="material-symbols-outlined">trending_flat</span>
                Chennai
                <span style={{ fontSize: '20px', cursor: 'pointer' }} className="material-symbols-outlined">chevron_left</span>
                19 Jul
                <span style={{ fontSize: '20px', cursor: 'pointer' }} className="material-symbols-outlined">chevron_right</span>
                <Button size='small' variant='contained' color='primary' >Modify</Button>
            </Typography>
        </Box>
    )
}