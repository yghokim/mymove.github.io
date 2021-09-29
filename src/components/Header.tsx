import React from 'react';
import logo from 'assets/logos/mymove_horizontal_light.svg';
import './Header.scss';

export const Header = () => {
    return <div id="header">
        <div className="container">
            <a href="/">
                <img id="logo" src={logo} />
            </a>

            <div className="flex-fill" />


            <a className="github" href="https://github.com/muclipse/data-at-hand-mobile" target="_blank" hidden={true}>
                <div>
                    <img src={require('../assets/logos/github.svg')} />
                    <span>Github</span>
                </div>
            </a>
        </div>
    </div>
}