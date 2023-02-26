import React, { useRef } from 'react'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Card, Alert, Button, Checkbox, Form, Input } from 'antd';
import backgroundImage from '@/assets/images/background.jpg'
import './index.scss'

interface ParallaxProps {
    children: any;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="parallax">
            <motion.div className="scroller mb-10" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
export default function FormGo() {
    const imgBackground = useRef<HTMLDivElement>(null);


    return (
        <div className='flex justify-center'>
            <div className='w-full -z-100 absolute'>
                <section className=''>
                    <ParallaxText baseVelocity={-0.1}>
                        <div className="img-background-mask -z-49"></div>
                        <div ref={imgBackground} className="img-background-container -z-50">
                            <img src={backgroundImage} alt="" />
                        </div>
                    </ParallaxText>
                </section>
            </div>
            <div className='pt-24'>
                <div className='form-container bg-transparent'>

                    <Card title="填写信息" extra={<a href="#">更多介绍</a>} style={{ width: "100%", backgroundColor: "#ffffffd5" }}>
                        <Alert message="目前参加总人数10人" type="success" className='mb-10 ' showIcon />
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 800, }}
                            initialValues={{ class: "2015级四班", menberNum: 1 }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="姓名"
                                name="name"
                                rules={[{ required: true, message: '填写姓名!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="班级"
                                name="class"
                                rules={[{ required: true, message: '填写班级!' }]}
                            >
                                <Input disabled />
                            </Form.Item>
                            <Form.Item
                                label="参加人数"
                                name="menberNum"
                                rules={[{ required: true, message: '填写参加人数!' }]}
                            >
                                <Input />
                            </Form.Item>


                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">查看地址</a>
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <p className='overflow-clip break-all'>* 本次活动由王羲之在天之灵赞助组织1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</p>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    )
}
