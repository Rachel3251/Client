import { Button } from "@mui/material";
import pic from './images/LOGO.PNG';
import Typography from '@mui/material/Typography';
const Parking = ({ parking, setParking, disable }) => {
    return (
        <>
            <button
                className={parking.p_status} disabled={disable} onClick={() => setParking(parking)}>{parking.p_name}
            </button>
            <div>

                {/* <Button
                    className={parking.p_status} disabled={disable} onClick={() => setParking(parking)}
                    style={{ backgroundColor: '#ff4d4d' }}
                    variant="contained"
                >
                    {parking.p_name}
                </Button> */}
                </div></> 

    )
}
export default Parking;