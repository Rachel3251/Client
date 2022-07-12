
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import pic from './images/LOGO.PNG';
import useState from 'react'

const theme = createTheme();
export default function Register() {
    // const [codeUser, setCodeUser] = useState(0)
    let codeUser = 0;
    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            tz: '',
            pass: '',
        },
        validationSchema: Yup.object({
            tz: Yup
                .string()
                .max(9)
                .min(9)
                .required(),
            lname: Yup
                .string()
                .required(),
            fname: Yup
                .string()
                .required(),
            pass: Yup
                .string()
                .required()

        }),
        onSubmit: (values) => {
            handleSubmit(values)

        }
    });

    let navigate = useNavigate();
    const handleSubmit = async (values) => {

        const {
            tz, pass, lname, fname
        } = values;

        axios.post(`https://localhost:44309//api/user/signup`, { u_password: pass, u_firstname: fname, u_lastname: lname, u_id: tz, u_permission: 1 })
            .then((response) => {
                // setCodeUser(response.data)
                codeUser = response.data;
                console.log(codeUser);
                console.log(response.data)
                navigate('/addp', { state: { u_code: codeUser, u_id: tz } })

            })
      
    };

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

                    <Typography component="h1" variant="h5">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={pic} />
                        </div>
                    </Typography>
                    <Box component="form" Validate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    name="fname"
                                    label="First Name"
                                    type="text"
                                    id="fname"
                                    autoComplete="new-fname"
                                    error={Boolean(formik.touched.fname && formik.errors.fname)}
                                    helperText={formik.touched.fname && formik.errors.fname}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.fname}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    name="lname"
                                    label="Last Name:"
                                    type="text"
                                    id="lname"
                                    autoComplete="new-lname"
                                    error={Boolean(formik.touched.lname && formik.errors.lname)}
                                    helperText={formik.touched.lname && formik.errors.lname}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.lname}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
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
                                <TextField
                                    fullWidth
                                    name="pass"
                                    label="Password"
                                    type="password"
                                    id="pass"
                                    autoComplete="new-pass"
                                    error={Boolean(formik.touched.pass && formik.errors.pass)}
                                    helperText={formik.touched.pass && formik.errors.pass}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.pass}
                                />
                            </Grid>
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
    );
}