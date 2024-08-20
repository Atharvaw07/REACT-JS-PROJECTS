import React from 'react'
import styles from './Navbar.module.css'
function Navbar() {
    console.log(styles)
    return (
        <nav
        className={`${styles.navbar} container`}
        >
            <div className='logo'>
                <img src="logo.png" alt="" />
            </div>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
