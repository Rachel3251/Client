import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Location } from 'react-router-dom';
import pic from './images/LOGO.PNG';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';



export default function AddParkingLot(props) {
    const [codePark, setCodePark] = useState(0);
    const [parkings, setParkings] = useState([]);
    const [cities, setCities] = useState([]);
    const [cityCode, setCityCode] = useState(0);
    const [user1, setUser1] = useState(null);
    const theme = createTheme();

    let navigate = useNavigate();
    let location1 = useLocation();

    useEffect(() => {
        axios.get(`https://localhost:44309//api/user/getuserbyid/` + location1.state.u_id)
            .then((response) => {
                setUser1(response.data)
                console.log("Userrrrr", response.data)

            });

        axios.get(`https://localhost:44309/api/city/getallcities`).then((response) => {
            setCities(response.data)
            console.log(response.data)
        });
    }, []);

    const handleChange = (event) => {
        alert("comeeee");
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

    const handleSubmit = async (values) => {
        const {
            name, location, numberBlocks, openHour, closeHour
        } = values;
        navigate("/addblock", { state: { pl_name: name, pl_location: location, pl_numberBlocks: numberBlocks, pl_closeHour: closeHour, pl_openHour: openHour, pl_ownerCode: location1.state.u_code, pl_cityCode: cityCode } });

    };

    const formik = useFormik({
        initialValues: {
            name: '',
            location: '',
            numberBlocks: 0,
            openHour: null,
            closeHour: new Date()
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .required()
            ,
            location: Yup
                .string()
                .required()
            ,
            numberBlocks: Yup
                .number().min(1)
                .required(),

            openHour: Yup.string()
                .test(
                    'not empty',
                    'Start time cant be empty',
                    function (value) {
                        return !!value;
                    }
                ),
            closeHour: Yup.string()
                .test(
                    'not empty',
                    'Start time cant be empty',
                    function (value) {
                        return !!value;
                    }
                )
        }),
        onSubmit: (values) => {
            handleSubmit(values)

        }
    });


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
                        <br /> <br />
                        <Typography component="h1" variant="h5" style={{ color: '#ff4d4d' }}>
                            ParkingLot details
                        </Typography>
                        <Box component="form" Validate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="name"
                                        label="Name:"
                                        type="text"
                                        id="name"
                                        autoComplete="new-name"
                                        error={Boolean(formik.touched.name && formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        name="numberBlocks"
                                        label="Number Of Blocks:"
                                        type="number"
                                        id="numberBlocks"
                                        autoComplete="new-numberBlocks"
                                        error={Boolean(formik.touched.numberBlocks && formik.errors.numberBlocks)}
                                        helperText={formik.touched.numberBlocks && formik.errors.numberBlocks}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.numberBlocks}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        name="location"
                                        label="location"
                                        type="Location:"
                                        id="location"
                                        autoComplete="new-location"
                                        error={Boolean(formik.touched.location && formik.errors.location)}
                                        helperText={formik.touched.location && formik.errors.location}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.location}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="openHour"
                                        label="OpenHour:"
                                        type="time"
                                        id="openHour"
                                        autoComplete="new-openHour"
                                        error={Boolean(formik.touched.openHour && formik.errors.openHour)}
                                        helperText={formik.touched.openHour && formik.errors.openHour}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.openHour}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="closeHour"
                                        label="CloseHour:"
                                        type="time"
                                        id="closeHour"
                                        autoComplete="new-closeHour"
                                        error={Boolean(formik.touched.closeHour && formik.errors.closeHour)}
                                        helperText={formik.touched.closeHour && formik.errors.closeHour}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.closeHour}
                                    />
                                </Grid>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl sx={{ m: 1, width: 300 }} idth>
                                        <InputLabel id="demo-controlled-open-select">city</InputLabel>
                                        <Select
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
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl sx={{ m: 1, width: 300 }} idth>
                                        <InputLabel id="demo-controlled-open-select">parkingLots</InputLabel>
                                        <Select
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
                            <Button style={{ backgroundColor: '#ff4d4d' }}
                                disabled={formik.isSubmitting}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Continue
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>



        </>
    )

}


