import React from 'react'
import Search from '../../components/Search'
import './Header.scss'
const Header = () => {
    return (
        <>
            <header className='header d-flex justify-content-between'>
                <div className="header__logo">
                    <img src="https://i.ibb.co/LgC6hj9/programate-negro-alta.png" alt="logo" />
                </div>
                <div className="header__search">
                    <Search/>
                </div>
                <div className="header___user">
                    <h1>User</h1>
                </div>
            </header>
        </>
    )
}

export default Header
