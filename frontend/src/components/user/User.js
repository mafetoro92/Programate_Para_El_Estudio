import React from 'react';
import './User.scss';
const User = () => {
    return (
        <div className='d-flex align-items-center pointer'>
            <i className="far fa-user icon-user"/>
            <span className='text-user'>Kevin</span>
            <i className="fas fa-chevron-down icon-arrow"/>
        </div>
    )
}

export default User
