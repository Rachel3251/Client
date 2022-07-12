import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import DateFnsUtils from '@date-io/date-fns';
import { SaveAltSharp } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';



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

    let navigate = useNavigate();

    const [cities, setCities] = useState([]);
    const [tz, setTz] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [pass, setPass] = useState("");
    const [day, setDay] = useState([]);
    const [city, setCity] = useState('');
    const [entranceTime, setEntranceTime] = useState(null);
    const [leavingTime, setLeavingTime] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [leavtDate, setLeavDate] = useState(null);
    const [parkings, setParkings] = useState([]);
    const [age, setAge] = useState(0);
    const [codePark, setCodePark] = useState(0);
    const handleChange = (event) => {
        setAge(event.target.value);
        axios.get(`https://localhost:44309//api/parkinglot/getallparkinglotsincity/` + age)
            .then((response) => {
                setParkings(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
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
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            password: data.get('password'),
        });
    };
    let x = 6
    let user = { u_firstName: fname, u_lastName: lname, u_password: pass, u_id: tz, u_permission: 1 }
    let perUser = { cu_userCode: 2, cu_dayCode: 1, cu_parkingLotCode: 1, cu_startDate: startDate, cu_entranceHour: entranceTime, cu_leavingHour: leavingTime, cu_lastDate: leavtDate, cu_status: true }

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
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField onChange={event => setFname(event.target.value)}
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Your First Name "
                                name="name"
                                autoComplete="name"
                                autoFocus
                            />
                            <TextField onChange={event => setLname(event.target.value)}
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Your Last Name "
                                name="name"
                                autoComplete="name"
                                autoFocus
                            />
                            <TextField onChange={event => setTz(event.target.value)}
                                margin="normal"
                                required
                                fullWidth
                                id="tz"
                                label="Your Tz "
                                name="tz"
                                autoComplete="tz"
                                autoFocus
                            />
                            <TextField onChange={event => setPass(event.target.value)}
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Your Password "
                                name="password"
                                autoComplete="password"
                                autoFocus
                            />
                            <TextField onChange={event => setStartDate(event.target.value)}
                                margin="normal"
                                required
                                fullWidth
                                id="sdate"
                                label="start date "
                                name="startdate"
                                autoComplete="startDate"
                                type="date"
                                autoFocus
                            />
                            <TextField onChange={event => setLeavDate(event.target.value)}
                                margin="normal"
                                required
                                fullWidth
                                id="sdate"
                                label="leaving date "
                                name="leavingDate"
                                autoComplete="leavingtDate"
                                type="date"
                                autoFocus
                            />

                            <TextField onChange={event => setEntranceTime(event.target.value)}
                                margin="normal"
                                required
                                fullWidth
                                id="time"
                                label="שעת כניסה"
                                name="entranceTime"
                                type="time"
                                defaultValue="07:30"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                                sx={{ width: 150 }}
                            />

                            <TextField onChange={event => setLeavingTime(event.target.value)}
                                margin="normal"
                                required
                                fullWidth
                                id="time"
                                label="שעת יציאה"
                                name="leavingTime"
                                type="time"
                                defaultValue="07:30"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                                sx={{ width: 150 }}
                            />
                        </Box>

                    </Box>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl sx={{ m: 1, width: 300 }} idth>
                            <InputLabel id="demo-controlled-open-select">city</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
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
                </Container>
            </ThemeProvider>



            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="שעת כניסה"
                    value={entranceTime}
                    onChange={(newValue) => {
                        setEntranceTime(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="שעת יציאה"
                    value={leavingTime}
                    onChange={(newValue) => {
                        setLeavingTime(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <br />
            <Button onClick={
                () => {

                    axios.post(`https://localhost:44309//api/user/signup`, user)
                        .then((response) => {
                            console.log(response.data)
                        })
                        .catch(error => {
                            console.log(error);
                        })
                    console.log(perUser)
                    axios.post(`https://localhost:44309/api/permanentuser/add`, perUser)
                        .then((response) => {
                            console.log(response.data)
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            }
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                save
            </Button>

        </>
    )


}

