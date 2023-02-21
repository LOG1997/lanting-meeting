import React, { useState, useRef } from 'react'
import SvgIcon from '@/components/SvgIcon'
import './index.scss'
import { getRandomGradientColor } from 'random-liner-gradient';
import { motion, useInView } from "framer-motion"
export default function RightContent() {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0, 0.71, 0.5, 1.01]
            }}
        >
            <div className='right-content h-full font-mono text-light-200 select-none'>
                <div className='w-full h-full'>
                    <div className='img-shadow'></div>
                    <img className='w-full z-1' src="https://framerusercontent.com/modules/53c62dZAZwkdvV6lO9q9/MASr1f4qHBvHRgJHaQg2/assets/WvMSustE1vhEchFmlSYxvV5jI.png" alt="" />

                </div>
            </div>
        </motion.div>
    )
}
