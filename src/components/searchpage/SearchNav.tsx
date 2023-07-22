/**
* CREATED BY    : Karthick D K 
* CREATED DATE  : 20 JUNE 2023
* MODIFIED BY   : Karthick D K
* MODIFIED DATE : 20 JUNE 2023
* DESCRIPTION   : This component will handle the search navigation
**/

import { SearchNavConfig } from "@/configs/searchpage/SearchNavConfig"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';

const searchNavConfig = new SearchNavConfig()

export const SearchNav = () => {
    return (
        <Box sx={{ backgroundColor: '#f8f4f4', padding: '10px' }}>
            <Breadcrumbs aria-label="breadcrumb" separator='>'>
                {
                    searchNavConfig?.SEARCH_NAV_CONFIG?.map((data: any) =>
                        <Typography sx={{ fontSize: '12px', fontWeight: data?.isActive && 'bold' }} color="text.primary">{data?.title}</Typography>
                    )
                }
            </Breadcrumbs>
            <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }} color="text.primary">Fare Starts from INR 499</Typography>
        </Box>
    )
}