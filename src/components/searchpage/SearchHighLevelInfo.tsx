/**
* CREATED BY    : Karthick D K 
* CREATED DATE  : 20 JUNE 2023
* MODIFIED BY   : Karthick D K
* MODIFIED DATE : 20 JUNE 2023
* DESCRIPTION   : This component will show high level info about the bus
**/

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