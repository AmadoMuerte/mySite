import React from 'react';

import {NavLink } from "react-router-dom";
import './Navigation.css'

function Navigation() {

    return (
        <div className={'nav'}>
            <NavLink className={'nav__item'} to={`/skills`} activeclassname={'active'}>
                <p >Skills</p>
            </NavLink>
            
            <NavLink className={'nav__item'} to={`/projects`} activeclassname={'active'}>
                <p>Projects</p>
            </NavLink>
        </div>
    );
}

export default Navigation;