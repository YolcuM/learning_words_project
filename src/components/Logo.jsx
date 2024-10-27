import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png'; 
const Logo = () => {
return (
    <Link to='/'>
        <img src={logoImage} alt='Лого' style={{width:'3.05rem', borderRadius: '5px'}}/>
    </Link>
    );
};

export default Logo;
