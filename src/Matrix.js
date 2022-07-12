import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Parking from './Parking';
import { height } from '@mui/system';
import { Box } from '@mui/material';
import pic from './images/LOGO.PNG';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';

export const eStatus = {
    ENTER: 'green',
    EXIT: 'yellow',
    LOCK: 'red',
    NONE: 'nada'
}
export default function () {
    const arrBlock = []
    const arrParking = []
    const parkingDisable = (park) => (color === eStatus.ENTER && park.p_Location_i != location.state.width - 1)
        || (color === eStatus.EXIT && park.p_Location_i != 0);
    const [parkingLot, setParkingLot] = useState([])
    const [color, setColor] = useState(eStatus.NONE)
    const [cntt, setCntt] = useState(1)
    let location = useLocation();

    let blocks = {
        b_numberParkingsForI: location.state.width,
        b_numberParkingsForJ: location.state.height,
        b_legalParkings: 0,
        b_enteranceDirection: "2",
        b_codeName: 1

    }

    let ParingLot = { pl_name: location.state.parkingLot.pl_name, pl_location: location.state.parkingLot.pl_location, pl_numberBlocks: location.state.parkingLot.pl_numberBlocks, pl_closeHour: location.state.parkingLot.pl_closeHour, pl_openHour: location.state.parkingLot.pl_openHour, pl_ownerCode: location.state.parkingLot.pl_ownerCode, pl_cityCode: location.state.parkingLot.pl_cityCode }
    let navigate = useNavigate();

    useEffect(() => {
        const getName = (i, j) => String.fromCharCode('A'.charCodeAt() + i) + j;
        const newParkingLot = [];
        for (let i = 0; i < location.state.width; i++) {
            newParkingLot.push([]);
            for (let j = 0; j < location.state.height; j++) {
                newParkingLot[i].push({ p_Location_i: i, p_Location_j: j, p_status: eStatus.NONE, p_name: getName(i, j), p_blockNumber: 1, p_isLegal: 0 })
            }
        }
        setParkingLot(newParkingLot);
    }, []);



    function sendParkingLot() {
        const parking = []
        console.log(parking)
    }
    const setParkingElement = (park) => {
        const newParkingLot = [...parkingLot];
        newParkingLot[park.p_Location_i][park.p_Location_j].p_status = color;
        setParkingLot(newParkingLot);
    }
    return (<>
        <Box
            sx={{
                marginTop: 8,

                display: 'flex',
                justifyContent:'center',
                flexDirection: 'column',
                alignItems: 'center'

            }}
        ></Box>

        <Button style={{ backgroundColor: 'green', border: '3px solid green' }}

            variant="contained"
            sx={{ mt: 3, mb: 2 }} onClick={() => setColor(eStatus.ENTER)} >סמן את כניסת החניון</Button>
        <Button style={{ backgroundColor: 'yellow', border: '3px solid yellow' }}

            variant="contained"
            sx={{ mt: 3, mb: 2 }} onClick={() => setColor(eStatus.EXIT)} >סמן את יציאת החניון</Button>
        <Button style={{ backgroundColor: 'red', border: '3px solid red' }}

            variant="contained"
            sx={{ mt: 3, mb: 2 }} onClick={() => setColor(eStatus.LOCK)} >סמן מקום חסום בחניון</Button>

        <Box />
        <Container component="main" maxWidth="xs">

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Typography component="h1" variant="h5">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={pic} />
                    </div>
                </Typography>
                <table id='mytab1'>
                    {
                        parkingLot.map((row) => <tr>
                            {
                                row.map(park => {
                                    arrParking.push(park);
                                    return (
                                        <>

                                            <td>
                                                <Parking disable={parkingDisable(park)} parking={park} setParking={(value) => setParkingElement(value)} />
                                            </td></>)
                                })
                            }
                        </tr>)
                    }
                </table>

                <Button style={{ backgroundColor: '#ff4d4d' }}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => {
                        arrBlock.push(blocks);
                        console.log(arrParking);
                        console.log(arrBlock);
                        console.log(ParingLot);
                        let addParking = { parkingLot: ParingLot, blocks: arrBlock, parkings: arrParking };
                        axios.post(`https://localhost:44309//api/parkinglot/add`, addParking)
                            .then((response) => {
                                navigate('/success');
                                console.log(response.data)
                            })
                    }}>save</Button>

            </Box>
        </Container>

    </>)

}
