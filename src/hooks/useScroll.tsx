// react hooks监听滚动


import React, { useState, useRef, useEffect } from 'react'

export function useScroll() {
    const [scroll, setScroll] = useState({ x: 0, y: 0 })
    const handler = (e: any) => {
        setScroll({ x: window.scrollX, y: window.scrollY })
    }
    useEffect(() => {
        window.addEventListener('scroll', handler)
        return () => {
            window.removeEventListener('scroll', handler)
        }
    }, [])
    return scroll
}
