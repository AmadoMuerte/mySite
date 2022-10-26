import React from 'react';

import './Links.css'

import gitHubIcon from '../images/icons/github-icon.svg'
import telegramIcon from '../images/icons/telegram-icon.svg'
import vkIcon from '../images/icons/vk-icon.svg'

function Links(props) {
    return (
        <div className='links'>
            <div className="links__item">
                <a href="https://github.com/AmadoMuerte">
                    <img src={gitHubIcon} alt="github-icon" />
                </a>
            </div> 
            <div className="links__item">
                <a href="https://t.me/SwiftLostGirl">
                    <img src={telegramIcon} alt="telegram-icon" />
                </a>
            </div>  
            <div className="links__item">
                <a href="https://vk.com/jollyportal">
                    <img src={vkIcon} alt="vk-icon" />
                </a>
            </div>
        </div>
    );
}

export default Links;