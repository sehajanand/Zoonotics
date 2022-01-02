import React from 'react';
import "./Loadingspinner.css";

export default function Loadingspinner() {
    return (
        <div className="image">
        <img src="./Assets/logo3.png" alt="logo_not_loaded"/>
        <div className="spin spinner"></div>
      </div>
    )
}
