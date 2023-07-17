import '@/styles/globals.css'
import '@/styles/Home.module.css'
import type { AppProps } from 'next/app'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import redBusLogo from '../assets/images/rdc-redbus-logo.svg'
import busTicketLogo from '../assets/images/bus-tick-logo.svg'
import cabRentalLogo from '../assets/images/cab-rent-logo.svg'
import trainTicketLogo from '../assets/images/train-tic-logo.svg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Grid, ListItemAvatar } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import react, { useState } from 'react'

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
});


export default function App({ Component, pageProps }: AppProps) {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 2 }}>
          <AppBar position="static" variant='elevation' sx={{ background: 'white', height: '100px', color: 'black', overflow: 'hidden' }}>
            <Toolbar >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Image alt='redbus' src={redBusLogo} width={70} height={70} />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 2, display: 'flex', alignItems: 'center' }}>
                <List sx={{ display: 'flex', paddingLeft: '90px' }}>
                  <ListItem sx={{ display: 'flex' }} button>
                    <Grid container>
                      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Image alt='bustic' className="black-and-white-image" src={busTicketLogo} width={30} height={30} color='black' /><br />
                      </Grid>
                      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="caption" component="div" sx={{ fontSize: '14px' }}>Bus Tickets</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem button>
                    <Grid container>
                      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Image alt='cabrent' className="black-and-white-image" src={cabRentalLogo} width={30} height={30} color='black' /><br />
                      </Grid>
                      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="caption" component="div" sx={{ fontSize: '14px' }}>Cab Rental</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem button>
                    <Grid container>
                      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Image alt='bustic' className="black-and-white-image" src={trainTicketLogo} width={30} height={30} color='black' /><br />
                      </Grid>
                      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="caption" component="div" sx={{ fontSize: '14px' }}>Train Tickets</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                </List>
              </Typography>
              <span className="material-symbols-outlined">support_agent</span>
              &nbsp;Help
              <span style={{ paddingLeft: '40px', cursor: 'pointer' }} onClick={handleMenu} className="material-symbols-outlined">support_agent</span>
              &nbsp;
              <span style={{ cursor: 'pointer' }} onClick={handleMenu} >Account</span>
              <span className="material-symbols-outlined">
                expand_more
              </span>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ backgroundColor: 'whitesmoke', height: 'calc(100vh - 100px)' }}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider >
    </>
  )
}
