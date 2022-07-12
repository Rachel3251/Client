import React from 'react';
import { useParams } from 'react-router-dom';


export default function () {

    const { blockNumber, name } = useParams();


    return (<>
        <p>{blockNumber}</p>
        <p>{name}</p>

    </>)

}