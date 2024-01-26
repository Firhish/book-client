import React from 'react';
import './Header.css'

function Header( {title,customButtonTitle,customButtonFunction }) {
    return (
        <div className='title-container'>
            <h1 className='title'>{title}</h1>
            <button className='custom-button' onClick={customButtonFunction}>{customButtonTitle}</button>
        </div>
        
    );
}

export default Header;