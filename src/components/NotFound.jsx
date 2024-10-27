import React from 'react';
import notFound from '../images/error.png'; 
import { Link } from 'react-router-dom';
const NotFound = () => {
    return(
        <Link to='*'>
            <img src={notFound} alt='Страница не найдена' style={{width: '30.20rem'}}/>
        </Link>
    );
};

export default NotFound;