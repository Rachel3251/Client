
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import pic from './images/LOGO.PNG'


const theme = createTheme();

export default function Sign(props) {
    let codeUser = 0;
    const formik = useFormik({
        initialValues: {

            tz: ''
            , password: ''

        },
        validationSchema: Yup.object({
            tz: Yup
                .string()
                .max(9)
                .min(9).required(),
            password: Yup
                .string().
                required()
        }),
        onSubmit: (values) => {
            handleSubmit(values)

        }
    });

    let navigate = useNavigate();

    const handleSubmit = async (values) => {
        const {
            tz, password
        } = values;
        axios.get(`https://localhost:44309/api/user/GetUserByIdAndPassword/` + tz + '/' + password)
            .then((response) => {
                console.log(response.data)
                if (response.data == null) {
                    navigate("/reg")
                } else {
                    navigate("/addp", { state: { u_id: tz, u_code: codeUser } })

                }
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
                            <Grid item xs={12} >

                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    fullWidth
                                    name="tz"
                                    label="Tz:"
                                    type="text"
                                    id="tz"
                                    error={Boolean(formik.touched.tz && formik.errors.tz)}
                                    helperText={formik.touched.tz && formik.errors.tz}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.tz}
                                />
                            </Grid>
                            <Grid item xs={12} >

                                <TextField

                                    fullWidth
                                    name="password"
                                    label="password:"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"

                                    error={Boolean(formik.touched.password && formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
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