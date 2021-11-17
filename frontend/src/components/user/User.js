import React from 'react';
import './User.scss';
<<<<<<< HEAD
const User = () => {
    return (
        <div className='d-flex align-items-center pointer'>
            <i className="far fa-user icon-user"/>
            <span className='text-user'>Kevin</span>
=======
const User = ({user, adminstate}) => {

    const {nameAdmin, loged} = adminstate;
    const {name, loged2} = user;
    return (
        <div className='d-flex align-items-center pointer'>
            <i className="far fa-user icon-user"/>
            {
                loged &&
            <span className='text-user'>{nameAdmin}</span>
            }
            {
                loged2 &&
            <span className='text-user'>{name}</span>
            }
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
            <i className="fas fa-chevron-down icon-arrow"/>
        </div>
    )
}

export default User
