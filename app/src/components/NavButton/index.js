// src/components/NavButton.js

import React from 'react';
import './NavButton.css';
import { useNavigate } from 'react-router-dom';

function NavButton({ children, path }) 
{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(path);
    };
    return (
        <button className="nav-button" onClick={handleClick}>{children}</button>
    );
};

export default NavButton;