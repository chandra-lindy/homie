import React, { useState } from 'react';
import { Route, BrowserRouter, NavLink as Router } from
    "react-router-dom";
/*import ReorderIcon from '@material-ui/icons/Reorder';*/

function Navbar() {
    return (
        <div className="Navbar">
            <a href="/discover">Discover</a>
            <a href="/zone">Your Zone</a>
            <a href="/ranks">Ranking</a>
            <a href="/rewards">Rewards</a>
        </div>
    );
}

export default Navbar
