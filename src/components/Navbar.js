import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavListAnimated } from '../hooks/gsap';
import './CursorEffectComponent.css';


const Navbar = () => {


    const logoRef = useRef(null)
    const list1 = useRef(null)
    const list2 = useRef(null)
    const list3 = useRef(null)
    const walletRef = useRef(null)

    const listArr = [logoRef,list1,list2,list3,walletRef]

    useNavListAnimated(listArr)

    return (
        <>
        <h1></h1>
        <div className='wrapper'>
                {/* <div className="cursor"></div> */}
            <nav className="navbar">
                <div className="logo" ref={logoRef}>
                    <Link to="/">PINESPHERE</Link>
                </div>
                <ul className="nav-links">
            
                    <li ref={list1}>
                       <Link to="/marketplace">Why Us</Link>
                    </li>
                    <li ref={list2}>
                    <Link to="/home">About Us</Link>
                    </li>
                    <li ref={list3}>
                    <Link to="/creators">Services</Link>
                    </li>
                    <li >
                    <Link to="/creators">Products</Link>
                    </li>
                    <li >
                    <Link to="/creators">Careers</Link>
                    </li>
                </ul>
                <div className="wallet" ref={walletRef}>
                <Link to="/">Contact Us</Link>
                </div>
            </nav>
        </div>
        </>
    );
};

export default Navbar;