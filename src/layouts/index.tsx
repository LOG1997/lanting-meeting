import React, { useRef, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './index.scss'
import { Outlet } from 'react-router-dom'
export default function HomePage2() {

    return (
        <div className='w-full h-screen bg-transparent'>
            <div className='fixed w-full z-50'>
                <Header></Header>
            </div>
            <div className='min-h-screen'>
                {/* 路由 */}
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
