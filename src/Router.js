import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Matrix from './Matrix';
import AddBlock from './AddBlock';
import Error from './Error';
import HomePage from './HomePage';
import PermanentUser from './PermanentUser';
import UserPark from './UserPark';
import SignUp from './UserLogin';
import Sign from './OwnerLogin';
import Register from './OwnerRegister';
import Test from './Test';
import AddParkingLot from './AddParkingLot';
import UserRegister from './UserRegister';
import Successfull from './Successfull';
import Showparkinglot from './Showparkinglot';

export default function () {
    return (
        <>
            <Routes>
                <Route path="/reg" element={<Register />}></Route>
                <Route path="/addblock" element={<AddBlock />}></Route>

                <Route path="/addblock/:tz" element={<AddBlock />}></Route>
                <Route path="/ologin" element={<Sign />}></Route>
                <Route path="/ulogin" element={<SignUp />}></Route>
                {/* <Route path="/addblock" element={<AddBlock />}></Route> */}
                <Route path="/mat/:length/:width/:name" element={<Matrix />}></Route>
                <Route path="/mat/length" element={<Matrix />}></Route>
                <Route path="/mat" element={<Matrix />}></Route>
                <Route path="/homepage" element={<HomePage />}></Route>
                <Route path="/error" element={<Error />}></Route>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/permanent" element={<PermanentUser />}></Route>
                <Route path="/userpark" element={<UserPark />}></Route>
                <Route path="/test/:blockNumber/:name" element={<Test />}></Route>
                <Route path="/addp" element={<AddParkingLot />}></Route>
                <Route path="/ureg" element={<UserRegister />}></Route>
                <Route path="/userpark" element={<UserPark />}></Route>
                <Route path="/success" element={<Successfull />}></Route>
                <Route path="/showparkinglot" element={<Showparkinglot />}></Route>
             
                


            </Routes>
        </>
    )
}