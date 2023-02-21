import React, { useRef, useEffect } from 'react'
import backgroundImage from '@/assets/images/background.jpg'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import SecondContent from './components/SecondContent'
import './index.scss'
export default function Content() {

    const imgBackground = useRef<HTMLDivElement>(null);
    // 自动滚动

    const motionBackground = () => {
        if (imgBackground.current) {
            imgBackground.current.scrollLeft = 300;
            const timer = setInterval(() => {
                imgBackground.current ? (imgBackground.current.scrollLeft += 0.2) : null;
                // console.log('😈 imgBackground.current.scrollLeft:', imgBackground.current.scrollLeft)
            }, 20)
        }
    }
    useEffect(() => {
        motionBackground();
        // imgBackground.current.scrollLeft = 1200;
    }, [])
    return (
        <div className='content bg-blue-200 relative'>
            <div className="back absolute w-full">
                <div className='relative'>
                    <div className="img-background-mask -z-49"></div>
                    <div ref={imgBackground} className="img-background-container -z-50">
                        <img src={backgroundImage} alt="" />
                    </div>
                </div>

            </div>
            <div className='content-container z-50 flex'>
                <div>
                    <LeftContent />
                </div>
                <div className='right-content-container'>
                    <RightContent />
                </div>
            </div>
            <div className='second-content min-h-96 w-full mt-10'>
                <SecondContent />
            </div>
        </div>
    )
}
