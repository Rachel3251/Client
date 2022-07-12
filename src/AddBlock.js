
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

export default function AddBlock(props) {
  let codeUser = 0;
  const formik = useFormik({
    initialValues: {

      height: ''
      , name: '',
      width: ''

    },
    validationSchema: Yup.object({
      height: Yup
        .string()
        .required(),
      width: Yup
        .string().
        required(),
      width: Yup
        .string()
        .required(),
      name: Yup
        .string().
        required(),
    }),
    onSubmit: (values) => {
      handleSubmit(values)

    }
  });

  let navigate = useNavigate();
  let location = useLocation();
  let parkingLot = { pl_name: location.state.pl_name, pl_location: location.state.pl_location, pl_numberBlocks: location.state.pl_numberBlocks, pl_closeHour: location.state.pl_closeHour, pl_openHour: location.state.pl_openHour, pl_ownerCode: location.state.pl_ownerCode, pl_cityCode: location.state.pl_cityCode }
  const handleSubmit = async (values) => {
    const {
      height, name, width
    } = values;
    alert(";;;")
    console.log(parkingLot);
    navigate("/mat", { state: { width: width, name: name, height: height,parkingLot:parkingLot } })
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
                <TextField

                  fullWidth
                  name="name"
                  label="Name:"
                  type="Block name"
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
                  name="width"
                  label="width:"
                  type="text"
                  id="width"
                  autoComplete="new-width"
                  error={Boolean(formik.touched.width && formik.errors.width)}
                  helperText={formik.touched.width && formik.errors.width}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.width}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="height"
                  label="height:"
                  type="text"
                  id="height"
                  autoComplete="new-height"
                  error={Boolean(formik.touched.height && formik.errors.height)}
                  helperText={formik.touched.height && formik.errors.height}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.height}
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