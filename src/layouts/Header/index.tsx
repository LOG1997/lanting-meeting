import React, { useState, useRef, useEffect } from 'react'
import SvgIcon from '@/components/SvgIcon'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useScroll } from '@/hooks/useScroll'
import { navList } from './nav_config'
import './index.scss'
const buttonColor = '#000'
export default function index() {
    const headerFull = useRef<HTMLDivElement>(null);
    const scroll = useScroll();
    // console.log('😎scroll:', scroll)
    const [headerFullStyle, setHeaderFullStyle] = useState({ backdropFilter: "saturate(50%) blur(0px)" });
    useEffect(() => {
        if (scroll.y > 150) {
            console.log('😂scroll.y:', scroll.y)
            setHeaderFullStyle({ backdropFilter: "saturate(50%) blur(20px)" })
        }
        else {
            setHeaderFullStyle({ backdropFilter: "blur(0px)" })
        }
    }, [scroll.y])
    // scroll.y > 100 ? setHeaderFullStyle({ backdropFilter: "saturate(50 %) blur(20px)" }) : setHeaderFullStyle({ backdropFilter: "saturate(50 %) blur(0px)" })
    return (
        <div style={headerFullStyle} ref={headerFull} className='header-full w-full h-16 flex justify-center relative shadow-2xl' >
            <Navbar expand="md" className='header-container'>
                <Container fluid className="header-container  h-full flex justify-between">
                    <Navbar.Brand href="#" className="header-left h-16 flex items-center pl-10">
                        <div className="header-logo-container w-30 h-16 flex items-center">
                            <div className='h-20 absolute'>
                                <SvgIcon name="home2-log" iconStyle={{ color: "linear-gradient(to right, rgba(0,0,0), rgba(255,255,255))", width: "120px", height: "120px" }} />
                            </div>
                            {/* <p className='pl-5 font-bold font-mono text-3xl text-dark-500'>CHINA<span className='text-purple-600'>WILD</span></p> */}
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    {/* <div className="header-right-container flex items-center pr-6"> */}
                    <Navbar.Collapse id="navbarScroll" className="header-nav-container">
                        {
                            navList.map((item, index) => {
                                return (
                                    <p key={index} className='header-nav-item font-bold font-mono text-lg px-3 mt-3 cursor-pointer hover:text-light-50'>{item.name}</p>
                                )
                            })
                        }
                    </Navbar.Collapse>

                    {/* <div className="header-nav-button cursor-pointer">

                            <div>
                                <SvgIcon name="col" iconStyle={{ color: buttonColor }}></SvgIcon>
                            </div>
                        </div>

                    </div> */}
                </Container>
            </Navbar>
        </div >
    )
}
