import React from 'react';

import { ReactComponent as Logo} from '../assets/virus.svg';

import './header.styles.scss'

const Header = () => (
    <div className='header'>
        <h1 className='header-tile'>Covid tracker dos Cagones</h1>
        <Logo className='logo'/>
    </div>
);

export default Header;