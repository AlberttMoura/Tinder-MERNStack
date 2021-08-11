import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            <img
                className="header__logo"
                src="https://cdn.worldvectorlogo.com/logos/tinder-wordmark-1.svg"
                alt=""
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    )
}

export default Header
