import React from "react";
import Typography from '@mui/material/Typography';
import pic from './images/LOGO.PNG';

export default function Successfull() {
    return (<><Typography component="h1" variant="h5">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={pic} />
        </div>
    </Typography>
    
    <Typography component="h1" variant="h5">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',color:"#ff4d4d" }}>
        The parking lot was added successfully!
        </div>
    </Typography>
    </>)
}
