import React from 'react';
import styled from 'styled-components';
import {CgMenu} from 'react-icons/cg'

const NavBarWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    /* outline:2px solid green; */
    line-height:100%;
    width:100%;
    height:clamp(60px,12vh,80px);
    background-color: ${props=>props.theme.main};

    .logo{
        font-family:"Passion One", sans-serif;
        margin-left:0.5em;
        padding:1em 0;
        color:#FFFFFF;
        font-size:32px;
        /* outline:2px solid green; */

        span {
            color: ${props=>props.theme.detail};
            height:150%;
        }
    }

    .nav {
        display:none;
    }

    .hamburger {
        /* margin-right:1em; */
        padding:1em;
        color:${props=>props.theme.textLight};
        /* outline:2px solid black; */
        height:30px;
        width:30px;
    }

`

const NavBar = () => {
    return(
        <NavBarWrapper>
            <h1 className="logo"><span>A</span>rticles<span>F</span>inder<span>.</span></h1>
            <div className="nav">
                <div>Home</div>
                <input placeholder="Search"/>
                <div>Categories</div>
                <div>Favourites</div>
            </div>
            <CgMenu className="hamburger"/>
        </NavBarWrapper>
    )
}

export default NavBar;