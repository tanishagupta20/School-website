import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css'
import SSSLogo from '../assets/logos/SSSLogo.png'

function Navbar() {
    const navRef = useRef()
    const [navIsOpen, setNavStatus] = useState(window.innerWidth < 1024)

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setNavStatus(!navIsOpen)
    }

    useEffect(() => {
      window.addEventListener("resize", () => {
        setNavStatus(window.innerWidth < 1024)
      })
    }, [])
    

    return (
        <header>
            <img src = {SSSLogo} className = "sssLogo"/>
            <nav ref={navRef}>
                <Link to = '/'>Home</Link>
                <a href='#'>About</a>
                <Link to='/contact'>Contact</Link>
                <a href='#'>Apply Online</a>
                <a href='#'>Teacher Portal</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            {navIsOpen &&
                <button className='nav-btn' onClick={showNavBar}>
                    <FaBars />
                </button>
            }
        </header>
    )
}

export default Navbar