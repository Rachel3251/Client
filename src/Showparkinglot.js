import React from "react";
import { useLocation } from "react-router-dom";
import pic from './images/LOGO.PNG';
import Typography from '@mui/material/Typography';

export default function Showparkinglot() {
    let location = useLocation();
    let name = location.state.p_name;
    let block = location.state.p_blockNumber;

    return (
        <>
            <Typography component="h1" variant="h5">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={pic} />
                </div>
            </Typography>
            <Typography component="h1" variant="h5">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',color: "#ff4d4d" }}>
                    your parking is {name} in block {block}
                </div>
            </Typography>
        </>
    )
}