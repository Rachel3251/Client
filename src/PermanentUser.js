import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router';
import pic from './images/LOGO.PNG';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation } from 'react-router';
import { Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tooltip } from '@material-ui/core';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const days = [
    'ראשון',
    'שני',
    'שלישי',
    'רביעי',
    'חמישי',
    'שישי',
    'מוצ"ש',
];
const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

const theme = createTheme();

export default function () {

    let location = useLocation();
    let navigate = useNavigate();
    const [cities, setCities] = useState([]);
    const [tz, setTz] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [pass, setPass] = useState("");
    const [day, setDay] = useState([]);
    const [city, setCity] = useState('');
    const [entranceTime, setEntranceTime] = useState(new Date());
    const [leavingTime, setLeavingTime] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [leavtDate, setLeavDate] = useState(new Date());
    const [parkings, setParkings] = useState([]);
    const [cityCode, setCityCode] = useState(0);
    const [u_id, setU_id] = useState(0);
    const [codePark, setCodePark] = useState(0);
    const [permanentparkings, setPermanentparkings] = useState([{ c_name: 'bb', p_name: 'aa', hour: new Date() }])
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


    const ChangeDay = (event) => {
        const {
            target: { value },
        } = event;
        setDay(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const formik = useFormik({
        initialValues: {
            entranceHour: '',
            leavingHour: '',
            startDate: '',
            lastDate: ''

        },
        validationSchema: Yup.object({
            entranceHour: Yup.string()
                .test(
                    'not empty',
                    'Start time cant be empty',
                    function (value) {
                        return !!value;
                    }
                ),
            leavingHour: Yup.string()
                .test(
                    'not empty',
                    'Start time cant be empty',
                    function (value) {
                        return !!value;
                    }
                ),
            startDate: Yup.date().required(),
            lastDate: Yup.date().required()
        }),
        onSubmit: (values) => {
            handleSubmit(values)

        }
    });
    const handleSubmit = async (values) => {
        const
            { entranceHour,
                leavingHour,
                startDate,
                lastDate } = values;

        let perUser = { cu_userCode: location.state.u_code, cu_dayCode: 1, cu_parkingLotCode: codePark, cu_startDate: startDate, cu_entranceHour: entranceHour, cu_leavingHour: leavingHour, cu_lastDate: lastDate, cu_status: true }
        axios.post(`https://localhost:44309/api/permanentuser/add`, perUser)
            .then((response) => {
                console.log(response.data)
                // navigate("/userpark/"+codeUser)
            })
    };




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

                                {/* <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        name="entranceHour"
                                        label="entranceHour:"
                                        type="time"
                                        id="entranceHour"
                                        autoComplete="new-entranceHour"
                                        error={Boolean(formik.touched.entranceHour && formik.errors.entranceHour)}
                                        helperText={formik.touched.entranceHour && formik.errors.entranceHour}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.entranceHour}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        name="leavingHour"
                                        label="leavingHour"
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
                                <Grid item xs={12} >
                                    <TextField
                                        fullWidth
                                        name="startDate"
                                        label="startDate"
                                        type="date"
                                        id="startDate"
                                        autoComplete="new-startDate"
                                        error={Boolean(formik.touched.startDate && formik.errors.startDate)}
                                        helperText={formik.touched.startDate && formik.errors.startDate}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.startDate}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField

                                        fullWidth
                                        name="lastDate"
                                        label="lastDate:"
                                        type="date"
                                        id="lastDate"
                                        autoComplete="new-lastDate"
                                        error={Boolean(formik.touched.lastDate && formik.errors.lastDate)}
                                        helperText={formik.touched.lastDate && formik.errors.lastDate}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.lastDate}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Box>
                                        <FormControl sx={{ width: 400 }} >
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
                                </Grid> */}
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                {/* <TableCell>Dessert (100g serving)</TableCell> */}
                                                <TableCell align="left" sx={{ width: 200 }}> </TableCell>
                                                <TableCell align="left" sx={{ width: 200 }}>city</TableCell>
                                                <TableCell align="left" sx={{ width: 200 }}>parking lot</TableCell>
                                                <TableCell align="left" sx={{ width: 200 }}>last Date</TableCell>
                                                <TableCell align="left" sx={{ width: 200 }}>last Date</TableCell>
                                                <TableCell align="left" sx={{ width: 200 }}>entrance Hour</TableCell>
                                                <TableCell align="left" sx={{ width: 200 }}>leaving Hour</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {/* {permanentparkings.map((row) => (
                                                <TableRow>
                                                    <TableCell align="right" sx={{ width: 200 }}>{row.c_name}</TableCell>
                                                    <TableCell align="right" sx={{ width: 200 }}>{row.p_name}</TableCell>
                                                    <TableCell align="right" sx={{ width: 200 }}>{row.hour}</TableCell>
                                                </TableRow>
                                            ))} */}
                                            <TableRow>
                                                <TableCell component="th" scope="row"></TableCell>
                                                <TableCell >
                                                    <Grid >
                                                        <Box>
                                                            <FormControl sx={{ width: 200 }}>
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
                                                    </Grid>
                                                </TableCell>
                                                <TableCell >
                                                    <Box>
                                                        <FormControl sx={{ width: 200 }}>
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
                                                </TableCell>
                                                <TableCell>
                                                    <Grid item xs={12} >
                                                        <TextField
                                                            fullWidth
                                                            name="startDate"
                                                            label="startDate"
                                                            type="date"
                                                            id="startDate"
                                                            autoComplete="new-startDate"
                                                            error={Boolean(formik.touched.startDate && formik.errors.startDate)}
                                                            helperText={formik.touched.startDate && formik.errors.startDate}
                                                            onBlur={formik.handleBlur}
                                                            onChange={formik.handleChange}
                                                            value={formik.values.startDate}
                                                        />
                                                    </Grid>
                                                </TableCell>
                                                <TableCell >
                                                    <Grid>
                                                        <TextField sx={{ width: 200 }}
                                                            fullWidth
                                                            name="lastDate"
                                                            label="lastDate:"
                                                            type="date"
                                                            id="lastDate"
                                                            autoComplete="new-lastDate"
                                                            error={Boolean(formik.touched.lastDate && formik.errors.lastDate)}
                                                            helperText={formik.touched.lastDate && formik.errors.lastDate}
                                                            onBlur={formik.handleBlur}
                                                            onChange={formik.handleChange}
                                                            value={formik.values.lastDate}
                                                        />
                                                    </Grid></TableCell>

                                                <TableCell>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField sx={{ width: 200 }}
                                                            fullWidth
                                                            name="entranceHour"
                                                            label="entranceHour:"
                                                            type="time"
                                                            id="entranceHour"
                                                            autoComplete="new-entranceHour"
                                                            error={Boolean(formik.touched.entranceHour && formik.errors.entranceHour)}
                                                            helperText={formik.touched.entranceHour && formik.errors.entranceHour}
                                                            onBlur={formik.handleBlur}
                                                            onChange={formik.handleChange}
                                                            value={formik.values.entranceHour}
                                                        />
                                                    </Grid>
                                                </TableCell>
                                                <TableCell>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField sx={{ width: 200 }}
                                                            fullWidth
                                                            name="leavingHour"
                                                            label="leavingHour"
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
                                                </TableCell>
                                            </TableRow >
                                        </TableBody>
                                    </Table>
                                </TableContainer>




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

