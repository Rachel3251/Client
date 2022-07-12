
// import * as React from 'react';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// import { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import axios from 'axios';
// import { PropaneSharp } from '@mui/icons-material';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


// function Copyright(props) {

//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const theme = createTheme();

// export default function SignUp(props) {
//     const [value, setValue] = React.useState(new Date());
//     const [dOB, setValueDOB] = React.useState(new Date());

//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             username: '',
//             dateOfRegistration: '',
//             tz: '',
//             dOB: '',
//             Gender: '',
//             Weight: '',
//             Height: '',
//             policy: false
//         },
//         validationSchema: Yup.object({
//             dOB: Yup
//             // .date()
//             // .max(255)
//             // .required(
//             //     'dOB  is required')
//             ,
//             Gender: Yup
//                 .string()
//                 .max(255)
//             // .required(
//             //     'Gender name is required')
//             ,

//             tz: Yup
//                 .string()
//                 .max(9)
//                 .min(9)
//             // .required(
//             //     'tz  is required')
//             ,
//             email: Yup
//                 .string()
//                 .email(
//                     'Must be a valid email')
//                 .max(255)
//             // .required(
//             //     'Email is required')
//             ,
//             username: Yup
//                 .string()
//                 .max(20)
//             // .required(
//             //     'username is required')
//             ,
//             Height: Yup
//                 .number()
//                 .max(255)
//             // .required(
//             //     'height is required')
//             ,
//             Weight: Yup
//                 .number()
//                 .max(255)
//             // .required(
//             //     'height is required'),
//             ,
//             dateOfRegistration: Yup
//             // .date()
//             // .max(255)
//             // .required(
//             //     'dateOfRegistration is required')
//             ,


//         }),
//         onSubmit: (values) => {
//             handleSubmit(values)

//         }
//     });
//     const location = useLocation()
//     let navigate = useNavigate();

//     const handleSubmit =  (values) => {
//         const {
//             email,
//             username,
//             dOB,
//             tz,
//             value,
//             Gender,
//             Weight,
//             Height,
//             policy
//         } = values;
//         console.log({
//             height: Height, username: username, dateOfRegistration: value, tz: tz,
//             email: email, dOB: dOB, gender: Gender, weight: Weight
//         });
//         // register(values);
//         alert("jhj")
//         navigate("/Creditcard", { state: { values: values } });

//     };
//     const register = (user) => {
//         const {
//             email,
//             username,
//             value,
//             tz,
//             dOB,
//             Gender,
//             Weight,
//             Height,
//             policy
//         } = user;
//         try {
//             // https://localhost:44318/Login/Login?email=${email}&username=${username}
//             axios.post(`https://localhost:44318/api/Login/POST`, { username, email })
//                 .then((res) => {
//                     if (res === 1)
//                         navigate("/HomePage");

//                     else
//                         if (res === 0)
//                             navigate("/Subscribe", { state: { username: username, email: email } });
//                         else
//                             navigate("/Subscribe", { state: { username: username, email: email } });

//                     console.log(res)
//                 }).catch((err) => {
//                     console.log(err);
//                     navigate("/Subscribe", { state: { username: username, email: email } });

//                 })
//             // console.log(result.data);
//         }
//         catch (err) {
//             console.log(err)


//         }
//     }



//     return (
//         <ThemeProvider theme={theme}>
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <Box
//                     sx={{
//                         marginTop: 8,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Sign up
//                     </Typography>
//                     <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     // label={location.state.username}
//                                     autoComplete="username"
//                                     variant="filled"
//                                     required
//                                     fullWidth
//                                     name="username"
//                                     label="username"
//                                     type="username"
//                                     id="username"
//                                     error={Boolean(formik.touched.username && formik.errors.username)}
//                                     helperText={formik.touched.username && formik.errors.username}
//                                     onBlur={formik.handleBlur}
//                                     onChange={formik.handleChange}
//                                     value={formik.values.username}

//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     variant="filled"
//                                     required
//                                     fullWidth
//                                     id="Height"
//                                     label="Height"
//                                     name="Height"
//                                     type="number"
//                                     autoComplete="Height"
//                                     error={Boolean(formik.touched.Height && formik.errors.Height)}
//                                     helperText={formik.touched.Height && formik.errors.Height}
//                                     onBlur={formik.handleBlur}
//                                     onChange={formik.handleChange}
//                                     value={formik.values.Height}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     required
//                                     fullWidth
//                                     id="Weight"
//                                     label="Weight"
//                                     name="Weight"
//                                     type="number"
//                                     autoComplete="Weight"
//                                     variant="filled"
//                                     error={Boolean(formik.touched.Weight && formik.errors.Weight)}
//                                     helperText={formik.touched.Weight && formik.errors.Weight}
//                                     onBlur={formik.handleBlur}
//                                     onChange={formik.handleChange}
//                                     value={formik.values.Weight}

//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     required
//                                     fullWidth
//                                     id="Gender"
//                                     label="Gender"
//                                     name="Gender"
//                                     autoComplete="Gender"
//                                     variant="filled"
//                                     error={Boolean(formik.touched.Gender && formik.errors.Gender)}
//                                     helperText={formik.touched.Gender && formik.errors.Gender}
//                                     onBlur={formik.handleBlur}
//                                     onChange={formik.handleChange}
//                                     value={formik.values.Gender}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}

//                                 {/* <DatePicker
//                                         views={['day', 'month', 'year']}
//                                         label="date Of Birth"
//                                         // value={dOB}
//                                         variant="outlined"
//                                         id="dateOfBirth"
//                                         error={Boolean(formik.touched.dOB && formik.errors.dOB)}
//                                         helperText={formik.touched.dOB && formik.errors.dOB}
//                                         onBlur={formik.handleBlur}
//                                         // onChange={formik.handleChange}
//                                         value={formik.values.dOB}
//                                         required
//                                         fullWidth
//                                         name="dOB"
//                                         onChange={(newValue) => {
//                                             setValueDOB(newValue);
//                                         }}
//                                         renderInput={(params) => <TextField {...params} />}
//                                     />
//                                 </LocalizationProvider> */}
                                
                                
//                                 <TextField
//                                     views={['day', 'month', 'year']}
//                                     autoComplete="Date Of Birth"
//                                     // variant="outlined"
//                                 //  InputLabelProps={{shrink: false}}
                                    
//                                     required
//                                     fullWidth
//                                     name="dOB"
//                                     label="dateOfBirth"
//                                     type="date"
//                                     id="dateOfBirth"
//                                     error={Boolean(formik.touched.dOB && formik.errors.dOB)}
//                                     helperText={formik.touched.dOB && formik.errors.dOB}
//                                     onBlur={formik.handleBlur}
//                                     onChange={formik.handleChange}
//                                     value={formik.values.dOB}
//                                 // autoComplete="new-dateOfBirth"
//                                 />
//                             </Grid>
//                             {/* <Grid item xs={12}> */}
//                             {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
//                                     <DatePicker
//                                         views={['day', 'month', 'year']}
//                                         label="dateOfRegistration"
//                                         value={value}
//                                         variant="outlined"
//                                         id="dateOfRegistration"
//                                         error={Boolean(formik.touched.dateOfRegistration && formik.errors.dateOfRegistration)}
//                                         helperText={formik.touched.dateOfRegistration && formik.errors.dateOfRegistration}
//                                         onBlur={formik.handleBlur}
//                                         // onChange={formik.handleChange}
//                                         // value={formik.values.dOB}
//                                         required
//                                         fullWidth
//                                         name="dOB"
//                                         onChange={(newValue) => {
//                                             setValue(newValue);
//                                         }}
//                                         renderInput={(params) => <TextField {...params} />}
//                                     />
//                                 </LocalizationProvider> */}
//                             <Grid item xs={12}>
//                                 <TextField
                                   

//                                     required
//                                     fullWidth
//                                     name="dateOfRegistration"
//                                     label="dateOfRegistration"
//                                     type="date"
//                                     id="dateOfRegistration"
//                                     autoComplete="new-dateOfRegistration"
//                                     error={Boolean(formik.touched.dateOfRegistration && formik.errors.dateOfRegistration)}
//                                     helperText={formik.touched.dateOfRegistration && formik.errors.dateOfRegistration}
//                                     onBlur={formik.handleBlur}
//                                     onChange={formik.handleChange}
//                                     value={formik.values.dateOfRegistration}

//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     required
//                                     fullWidth
//                                     id="email"
//                                 //  label={location.state.email}
//                                     label="email"
//                                     name="email"
//                                     autoComplete="email"
//                                     error={Boolean(formik.touched.email && formik.errors.email)}
//                                     helperText={formik.touched.email && formik.errors.email}
//                                     onBlur={formik.handleBlur}
//                                     onChange={formik.handleChange}
//                                     value={formik.values.email}

//                                     type="email"
//                                     variant="outlined"
//                                 />

//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     required
//                                     fullWidth
//                                     name="tz"
//                                     label="tz"
//                                     type="text"
//                                     id="tz"
//                                     autoComplete="new-tz"
//                                     error={Boolean(formik.touched.tz && formik.errors.tz)}
//                                     helperText={formik.touched.tz && formik.errors.tz}
//                                     onBlur={formik.handleBlur}
//                                     onChange={formik.handleChange}
//                                     value={formik.values.tz}

//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <FormControlLabel
//                                     control={<Checkbox value="allowExtraEmails" color="primary" />}
//                                     label="I want to receive inspiration, marketing promotions and updates via email."
//                                 />
//                             </Grid>
//                         </Grid>
//                         <Button
//                             disabled={formik.isSubmitting}
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2 }}
//                         >
//                             Continue
//                         </Button>
//                         <Grid container justifyContent="flex-end">
//                             <Grid item>
//                                 <Link href="#" variant="body2">
//                                     Already have an account? Sign in
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </Box>
//                 <Copyright sx={{ mt: 5 }} />
//             </Container>
//         </ThemeProvider >
//     );
// }

import * as React from 'react';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { PropaneSharp } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Stack from '@mui/material/Stack';

function Copyright(props) {

    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp(props) {
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            dateOfRegistration: '',
            tz: '',
            dOB: '',
            Gender: '',
            Weight: '',
            Height: '',
            policy: false
        },
        validationSchema: Yup.object({
            dOB: Yup
                .date()
            // .max(255)
            // .required(
            //     'dOB  is required')
            ,
            Gender: Yup
                .string()
                .max(255)
            // .required(
            //     'Gender name is required')
            ,

            tz: Yup
                .string()
                .max(9)
                .min(9)
            // .required(
            //     'tz  is required')
            ,
            email: Yup
                .string()
                .email(
                    'Must be a valid email')
                .max(255)
            // .required(
            //     'Email is required')
            ,
            username: Yup
                .string()
                .max(20)
            // .required(
            //     'username is required')
            ,
            Height: Yup
                .number()
                .max(255)
            // .required(
            //     'height is required')
            ,
            Weight: Yup
                .number()
                .max(255)
            // .required(
            //     'height is required'),
            ,
            dateOfRegistration: Yup
                .date()
            // .max(255)
            // .required(
            //     'dateOfRegistration is required')
            ,


        }),
        onSubmit: (values) => {
            handleSubmit(values)
            
        }
    });

    const location = useLocation()
    let navigate = useNavigate();

    const handleSubmit = async (values) => {
        const {
            email,
            username,
            dateOfRegistration,
            tz,
            dOB,
            Gender,
            Weight,
            Height,
            policy
        } = values;
        console.log({
            height: Height, username: username, dateOfRegistration: dateOfRegistration, tz: tz,
            email: email, dOB: dOB, gender: Gender, weight: Weight
        });
        // register(values);
        navigate("/CreditCard",{state:{values:values}});

    };
    const register = (user) => {
        const {
            email,
            username,
            dateOfRegistration,
            tz,
            dOB,
            Gender,
            Weight,
            Height,
            policy
        } = user;
        try {
            // https://localhost:44318/Login/Login?email=${email}&username=${username}
            axios.post(`https://localhost:44318/api/Login/POST`, { username, email })
                .then((res) => {
                    if (res === 1)
                        navigate("/HomePage");

                    else
                        if (res === 0)
                            navigate("/Subscribe", { state: { username: username, email: email } });
                        else
                            navigate("/Subscribe", { state: { username: username, email: email } });

                    console.log(res)
                }).catch((err) => {
                    console.log(err);
                    navigate("/Subscribe", { state: { username: username, email: email } });

                })
            // console.log(result.data);
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
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
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // label={location.state.username}
                                    autoComplete="username"
                                    variant="filled"
                                    required
                                    fullWidth
                                    name="username"
                                    label="username"
                                    type="username"
                                    id="username"
                                    error={Boolean(formik.touched.username && formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.username}

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    variant="filled"
                                    required
                                    fullWidth
                                    id="Height"
                                    label="Height"
                                    name="Height"
                                    type="number"
                                    autoComplete="Height"
                                    error={Boolean(formik.touched.Height && formik.errors.Height)}
                                    helperText={formik.touched.Height && formik.errors.Height}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.Height}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    required
                                    fullWidth
                                    id="Weight"
                                    label="Weight"
                                    name="Weight"
                                    type="number"
                                    autoComplete="Weight"
                                    variant="filled"
                                    error={Boolean(formik.touched.Weight && formik.errors.Weight)}
                                    helperText={formik.touched.Weight && formik.errors.Weight}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.Weight}

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Gender"
                                    label="Gender"
                                    name="Gender"
                                    autoComplete="Gender"
                                    variant="filled"
                                    error={Boolean(formik.touched.Gender && formik.errors.Gender)}
                                    helperText={formik.touched.Gender && formik.errors.Gender}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.Gender}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {/* <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    // label={location.state.email}
                                    label="email"
                                    name="email"
                                    autoComplete="email"
                                    error={Boolean(formik.touched.email && formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}

                                    type="email"
                                    variant="outlined"
                                /> */}

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="Date Of Birth"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="dOB"
                                    label="dateOfBirth"
                                    type="date"
                                    id="dateOfBirth"
                                    error={Boolean(formik.touched.dOB && formik.errors.dOB)}
                                    helperText={formik.touched.dOB && formik.errors.dOB}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.dOB}
                                // autoComplete="new-dateOfBirth"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="dateOfRegistration"
                                    label="dateOfRegistration"
                                    type="date"
                                    id="dateOfRegistration"
                                    autoComplete="new-dateOfRegistration"
                                    error={Boolean(formik.touched.dateOfRegistration && formik.errors.dateOfRegistration)}
                                    helperText={formik.touched.dateOfRegistration && formik.errors.dateOfRegistration}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.dateOfRegistration}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="tz"
                                    label="tz"
                                    type="text"
                                    id="tz"
                                    autoComplete="new-tz"
                                    error={Boolean(formik.touched.tz && formik.errors.tz)}
                                    helperText={formik.touched.tz && formik.errors.tz}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.tz}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            disabled={formik.isSubmitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Continue
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}