import React from "react";
import "./Navbar.css";

import Workshops from './Workshop';
import Description from './Description';


export default function Home() {
    return (
        <>

            <Description />
            <Workshops />

        </>

    )
}