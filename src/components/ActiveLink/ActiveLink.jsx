import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
            <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? "text-green-600 underline-offset-2" : " "
                    }
                  >
                    {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;