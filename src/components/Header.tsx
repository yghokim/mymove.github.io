import React from 'react';
import logo from 'assets/logotype.svg';
import './Header.scss';

export const Header = () => {
    return <div id="header">
        <div className="main-content" id="header-content">
            <img id="main-logo" src={logo} alt="logo" width="260" />
            <div id="subtitle">
                Multimodal Mobile App for Exploring Fitness Data using Speech + Touch Interaction
        </div>
        </div>
    </div>
}