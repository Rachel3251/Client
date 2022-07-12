import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function () {
    let us = { name: "aaa", id: 123 };
    let navigate = useNavigate();
    const func=()=>{
        navigate("/log" ,{user:{us}});  
    }
    return (
        <>
      <button onClick={func}></button>
          
        </>

    )
}