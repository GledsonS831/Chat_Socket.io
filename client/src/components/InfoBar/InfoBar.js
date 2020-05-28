import React from 'react';

import closeIcon from '../../icons/onlineIcon.png';
import onlineIcon from '../../icons/closeIcon.png';

import './InfoBar.css'

const InfoBar = ({ room }) =>(

    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={closeIcon} alt="online image"/>
            <h3>{room}</h3>
        </div>

        <div className="rightInnerContainer">
            <a href="/">
                <img src={onlineIcon} alt="close imgame"/>
            </a>
        </div>
    </div>

)
export default InfoBar;