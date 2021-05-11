import React from 'react';
import styled from 'styled-components';
import {CgMenu} from 'react-icons/cg'

const NavBarWrapper = styled.div`
    *{
        /* margin:0;
        padding:0; */
    }
    padding:0 1em;
    display:flex;
    flex-direction:row;
    /* justify-content:space-between; */
    align-items:center;
    /* outline:2px solid green; */
    line-height:100%;
    width:100vw;
    height:clamp(60px,12vh,80px);
    background-color: ${props=>props.theme.main};

    .logo{
        color:#FFFFFF;
        font-size:30px;
        letter-spacing:0.5px;
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
        color:${props=>props.theme.text};
        outline:2px solid black;
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
        </NavBarWrapper>
    )
}

export default NavBar;