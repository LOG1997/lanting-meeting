import React, { useState, useRef } from 'react'
import SvgIcon from '@/components/SvgIcon'
import './index.scss'
import { getRandomGradientColor } from 'random-liner-gradient';
import { motion, useInView } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import FastClick from 'react-fastclick-alt';

export default function LeftContent() {
    const styleInit = {
        backgroundImage: `${getRandomGradientColor()}`,
    }

    const leftContent = useRef(null);
    const isInView = useInView(leftContent, { once: true });
    const [style, setStyle] = useState(styleInit)
    const onMouseOver = () => {
        // style.backgroundImage = `${randomGradientColor()}`;
        setStyle({ backgroundImage: `${getRandomGradientColor('', -361, 90)}` })
    }

    const navigate = useNavigate()
    const handleSkip = (path: string) => () => {
        navigate(path)
    }
    return (
        // <motion.div
        //     initial={{ opacity: 0, scale: 0.7 }}
        //     animate={{ opacity: 1, scale: 1 }}
        //     transition={{
        //         default: {
        //             duration: 0.9,
        //             ease: [0, 0.71, 0.5, 1.01]
        //         },
        //         scale: {
        //             type: "spring",
        //             damping: 5,
        //             stiffness: 100,
        //             restDelta: 0.001
        //         }
        //     }}
        // >
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0, 0.71, 0.5, 1.01]
            }}
        >
            <div >
                <div className="left-content h-full font-mono text-light-200 select-none" >
                    <h2 className='text-6xl font-extrabold mb-12'>
                        <SvgIcon name="lantingTitle" iconStyle={{ width: 400, maxWidth: "100%", height: "100%" }}></SvgIcon>
                    </h2>
                    <p className='text-xl'>
                        <SvgIcon name='location' ></SvgIcon>
                        <span> &nbsp;&nbsp;&nbsp; </span>
                        <span>??????????????</span>
                        {/* ?????? */}
                        <span> &nbsp;&nbsp;&nbsp; </span>
                        <span>2023/4/22(??????????????????)</span>
                    </p>
                    <p className='tracking-widest text-xl'>?????????????????????????????????????????????</p>
                    <p className='tracking-widest leading-loose text-xl'>???????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    </p>
                    <button className='bg-transparent cursor-pointer' onMouseEnter={onMouseOver} onClick={() => { handleSkip('/form') }}>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}>
                            <div className='w-40 h-16 rounded-md text-light-200 text-2xl tracking-widest flex items-center justify-center cursor-pointer' style={style}>
                                <p><SvgIcon name='china' iconStyle={{ width: 30, height: 30 }}></SvgIcon>????????????</p>
                            </div>
                        </motion.div></button>
                </div>

            </div >
        </motion.div >
    )
}
