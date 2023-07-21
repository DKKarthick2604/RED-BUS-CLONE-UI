import { SeatSelectorConfig } from '@/configs/searchpage/SeatSelectorConfig'
import { Helper } from '../../utils/Helper'
import { Box, Grid, Typography, Card, Chip, Divider, Button, Drawer } from '@mui/material'
import { useEffect, useState } from 'react'
import { Payment } from './Payment'

const seatSelectorConfig = new SeatSelectorConfig()
const helper = new Helper()

interface SeatSelectorInterface {
    busID: number
    phoneNumber: any
}

export const SeatSelector = (props: SeatSelectorInterface) => {

    const [lowerDeck, setLowerDeck] = useState<any>([])
    const [upperDeck, setUpperDeck] = useState<any>([])
    const [isPaymentVisible, setIsPaymentVisible] = useState(false)

    const [userSelectedLowerSeats, setUserSelectedLowerSeats] = useState<any>([])
    const [userSelectedUpperSeats, setUserSelectedUpperSeats] = useState<any>([])

    const handleSeatSelection = (data: any, deck: string) => {
        console.log("===", props)
        if (deck === 'lower') {
            if (userSelectedLowerSeats?.filter((item: any) => item?.seatNo === data?.seatNo)?.length !== 0) {
                data['isSeatBooked'] = !data?.isSeatBooked
                setUserSelectedLowerSeats(userSelectedLowerSeats?.filter((item: any) => item?.seatNo !== data?.seatNo))
            } else {
                data['isSeatBooked'] = !data?.isSeatBooked
                data['phoneNumber'] = props?.phoneNumber
                setUserSelectedLowerSeats([...userSelectedLowerSeats, data]);
            }
        } else {
            if (userSelectedUpperSeats?.filter((item: any) => item?.seatNo === data?.seatNo)?.length !== 0) {
                data['isSeatBooked'] = !data?.isSeatBooked
                setUserSelectedUpperSeats(userSelectedUpperSeats?.filter((item: any) => item?.seatNo !== data?.seatNo))
            } else {
                data['isSeatBooked'] = !data?.isSeatBooked
                data['phoneNumber'] = props?.phoneNumber
                setUserSelectedUpperSeats([...userSelectedUpperSeats, data]);
            }
        }
    }

    const handleProceed = () => {
        helper?.setCookie(`${props?.busID}-lower`, JSON.stringify(userSelectedLowerSeats))
        helper?.setCookie(`${props?.busID}-upper`, JSON.stringify(userSelectedUpperSeats))
        setIsPaymentVisible(true)
    }

    const replaceObjectsInArray = (arr: any, replacements: any) => {
        return arr?.map((item: any) => {
            const replacement = replacements?.find((repl: any) => repl?.seatNo === item?.seatNo);
            return replacement ? { ...replacement } : item;
        });
    }

    useEffect(() => {
        let lowerDeckSeats: any = helper?.getCookie(`${props?.busID}-lower`)
        let upperDeckSeats: any = helper?.getCookie(`${props?.busID}-upper`)
        setLowerDeck(replaceObjectsInArray(seatSelectorConfig?.SEAT_SELECTOR_LOWER_DESK_CONFIG, JSON.parse(lowerDeckSeats)))
        setUpperDeck(replaceObjectsInArray(seatSelectorConfig?.SEAT_SELECTOR_UPPER_DESK_CONFIG, JSON.parse(upperDeckSeats)))
    }, [props])

    return (
        <>
            <Box sx={{ backgroundColor: '#EEEDED', padding: '10px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={1}>
                        <Typography variant='caption' sx={{ fontSize: '12px', fontWeight: 'bold' }}>Seat Price</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Chip label="All" sx={{ borderRadius: '0px', background: '#545454', color: 'white' }}></Chip>
                        <Chip label="1290" sx={{ borderRadius: '0px', background: 'white', color: 'black', marginLeft: '15px' }}></Chip>
                        <Chip label="1090" sx={{ borderRadius: '0px', background: 'white', color: 'black', marginLeft: '15px' }}></Chip>
                        <Chip label="1190" sx={{ borderRadius: '0px', background: 'white', color: 'black', marginLeft: '15px' }}></Chip>
                        <Chip label="1440" sx={{ borderRadius: '0px', background: 'white', color: 'black', marginLeft: '15px' }}></Chip>
                    </Grid>
                    <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <span className="material-symbols-outlined">
                            cancel
                        </span>
                    </Grid>
                </Grid>
                <br /><hr />

                <Grid container spacing={2} sx={{ paddingTop: '10px' }}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={6}>
                        Lower Deck
                        <Card sx={{ borderLeft: '5px solid gray', padding: '10px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={1}>
                                    <span className="material-symbols-outlined">
                                        swap_driving_apps_wheel
                                    </span>
                                </Grid>
                                <Divider orientation='vertical' flexItem />
                                <Grid item xs={10}>
                                    <Grid container spacing={2}>
                                        {
                                            lowerDeck?.map((data: any) =>
                                                <Grid item xs={2}>
                                                    <Chip
                                                        label=""
                                                        clickable={(!data?.phoneNumber || data?.phoneNumber === props?.phoneNumber)}
                                                        sx={{
                                                            borderRadius: '0px',
                                                            border: '1px solid gray',
                                                            width: '50px',
                                                            height: '25px',
                                                            background: (data?.phoneNumber === props?.phoneNumber && data?.isSeatBooked) ? '#F1A9A0' : (data?.isSeatBooked ? '#CBCBCB' : 'white')
                                                        }}
                                                        onClick={() => { handleSeatSelection(data, "lower") }}
                                                    >
                                                    </Chip>
                                                </Grid>
                                            )
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sx={{ marginTop: '19px' }}>
                        SEAT LEGEND<br /><br />
                        <Chip
                            label=""
                            clickable={false}
                            sx={{
                                borderRadius: '0px',
                                border: '1px solid gray',
                                width: '50px',
                                height: '25px',
                                background: '#F1A9A0'
                            }}
                        >
                        </Chip> Selected
                        <br /><br />
                        <Chip
                            label=""
                            clickable={false}
                            sx={{
                                borderRadius: '0px',
                                border: '1px solid gray',
                                width: '50px',
                                height: '25px',
                                background: 'white'
                            }}
                        >
                        </Chip> Available
                        <br /><br />
                        <Chip
                            label=""
                            clickable={false}
                            sx={{
                                borderRadius: '0px',
                                border: '1px solid gray',
                                width: '50px',
                                height: '25px',
                                background: '#CBCBCB'
                            }}
                        >
                        </Chip> Booked
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ paddingTop: '10px' }}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={6}>
                        Upper Deck
                        <Card sx={{ borderLeft: '5px solid gray', padding: '10px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={1}>
                                    <span className="material-symbols-outlined">
                                        swap_driving_apps_wheel
                                    </span>
                                </Grid>
                                <Divider orientation='vertical' flexItem />
                                <Grid item xs={10}>
                                    <Grid container spacing={2}>
                                        {
                                            upperDeck?.map((data: any) =>
                                                <Grid item xs={2}>
                                                    <Chip
                                                        label=""
                                                        clickable={(!data?.phoneNumber || data?.phoneNumber === props?.phoneNumber)}
                                                        sx={{
                                                            borderRadius: '0px',
                                                            border: '1px solid gray',
                                                            width: '50px',
                                                            height: '25px',
                                                            background: (data?.phoneNumber === props?.phoneNumber && data?.isSeatBooked) ? '#F1A9A0' : (data?.isSeatBooked ? '#CBCBCB' : 'white')
                                                        }}
                                                        onClick={() => { handleSeatSelection(data, "upper") }}
                                                    >
                                                    </Chip>
                                                </Grid>
                                            )
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sx={{ marginTop: '20px' }}>
                        <Button size='small' variant='contained' onClick={() => handleProceed()}>Proceed</Button>
                    </Grid>
                </Grid>

                <Drawer
                    open={isPaymentVisible}
                    onClose={() => setIsPaymentVisible(false)}
                >
                    <Box sx={{ padding: '15px' }}>
                        <Payment handleCloseDrawer={() => setIsPaymentVisible(false)} />
                    </Box>
                </Drawer>
            </Box>
        </>
    )
}