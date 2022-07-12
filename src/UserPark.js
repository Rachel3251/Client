import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useLocation } from 'react-router';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router';
import pic from './images/LOGO.PNG';
import { Grid } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const days = [
    'ראשון',
    'שני',
    'שלישי',
    'רביעי',
    'חמישי',
    'שישי',
    'מוצ"ש',
];

const theme = createTheme();

export default function () {

    const [cities, setCities] = useState([]);
    const [tz, setTz] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [pass, setPass] = useState("");
    const [day, setDay] = useState([]);
    const [entranceTime, setEntranceTime] = useState(new Date());
    const [leavingTime, setLeavingTime] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [leavtDate, setLeavDate] = useState(new Date());
    const [parkings, setParkings] = useState([]);
    const [cityCode, setCityCode] = useState(0);
    const [codePark, setCodePark] = useState(0);
    const [myParking, setMyParking] = useState({ p_name: "dfg", p_parkingLotCode: 1, p_Location_i: 1, p_Location_j: 1, p_isLegal: true, p_status: "", p_blockNumber: 10000000 });
    const [myParkingLot, setMyParkingLot] = useState({ pl_name: "", pl_location: "", pl_cityCode: 1, pl_ownerCode: 1, pl_numberBlocks: 1, pl_closeHour: new Date(), pl_openHour: new Date() });
    let location = useLocation();
    let navigate = useNavigate();
    let user = { u_firstName: fname, u_lastName: lname, u_password: pass, u_id: tz, u_permission: 2 }
    let usingParking = { up_leavingHour: leavingTime, up_parkingCode: 0, up_date: new Date(), up_entranceHour: new Date(), up_isUsing: true, up_direction: true }
    let find = { parkingLot: myParkingLot, request: usingParking }

    const handleChange = (event) => {
        const newCityCode = event.target.value;

        axios.get(`https://localhost:44309//api/parkinglot/getallparkinglotsincity/` + newCityCode)
            .then((response) => {
                setParkings(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
        setCityCode(event.target.value);

    };
    const handleChange2 = (event) => {
        setCodePark(event.target.value);

    };
    useEffect(() => {
        axios.get(`https://localhost:44309/api/city/getallcities`).then((response) => {
            setCities(response.data)
            console.log(response.data)
        });

    }, [])

    const formik = useFormik({
        initialValues: {
            leavingHour: '',
            latDate: ''

        },
        validationSchema: Yup.object({

            leavingHour: Yup.string()
                .test(
                    'not empty',
                    'Start time cant be empty',
                    function (value) {
                        return !!value;
                    }
                ),
        }),
        onSubmit: (values) => {
            handleSubmit(values)

        }
    });
    const ChangeDay = (event) => {
        const {
            target: { value },
        } = event;
        setDay(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleSubmit = (values) => {
        const
            {
                leavingHour,
            } = values;
        axios.get(`https://localhost:44309/api/parkinglot/getparkingLotbycode/` + codePark).then((response) => {
            console.log(response.data)
            setMyParkingLot(response.data)
            console.log(myParkingLot)
            navigate('/showparkinglot', { state: { p_name: "A0", p_blockNumber: 2 } })
        });
        // axios.post(`https://localhost:44309/api/parking/findparking`, find).then((response) => {
        //     console.log(response.data)
        //     setMyParking(response.data)
        //     console.log(myParking)
        //     navigate('/showparkinglot', { state: { p_name: "A0",p_blockNumber:2 } })

        // });

    };
    // const findParking = () => {
    //     axios.get(`https://localhost:44309/api/parkinglot/getparkingLotbycode/` + codePark).then((response) => {
    //         console.log(response.data)
    //         setMyParkingLot(response.data)
    //         console.log(myParkingLot)
    //     });

    //     axios.post(`https://localhost:44309/api/parking/findparking`, find).then((response) => {
    //         console.log(response.data)
    //         setMyParking(response.data)
    //         console.log(myParking)
    //         navigate('/test/' + myParking.p_blockNumber + '/' + myParking.p_name)
    //     });
    //}
    const { codeUser } = useParams();
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
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
                        <Box component="form" Validate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="leavingHour"
                                        label="leavingHour:"
                                        type="time"
                                        id="leavingHour"
                                        autoComplete="new-leavingHour"
                                        error={Boolean(formik.touched.leavingHour && formik.errors.leavingHour)}
                                        helperText={formik.touched.leavingHour && formik.errors.leavingHour}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.leavingHour}
                                    />
                                </Grid>



                                <Grid item xs={12}>
                                    <Box>
                                        <FormControl sx={{ width: 400 }} >
                                            <InputLabel id="demo-controlled-open-select">city</InputLabel>
                                            <Select
                                                required
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={cityCode}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                {cities.map(city => <MenuItem value={city.c_code}>{city.c_name}</MenuItem >)}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>

                                    <Box>
                                        <FormControl sx={{ width: 400 }}>
                                            <InputLabel id="demo-controlled-open-select">parkingLots</InputLabel>
                                            <Select
                                                required
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={codePark}
                                                label="parkingLot"
                                                onChange={handleChange2}
                                            >

                                                {parkings.map(park => <MenuItem value={park.pl_code}>{park.pl_name}</MenuItem >)}

                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>




                            </Grid>
                            <Button style={{ backgroundColor: '#ff4d4d' }}
                                disabled={formik.isSubmitting}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Find me a parking space
                            </Button>
                            <Button style={{ backgroundColor: '#ff4d4d' }}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Adding permanent parking
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>

        </>
    )
}
