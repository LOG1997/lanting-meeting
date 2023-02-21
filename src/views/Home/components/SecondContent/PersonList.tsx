import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
export default function BottomSection(props: any) {
    return (
        <div>
            <div className="flex justify-center select-none">
                {props.personList.map((item: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="flex w-52 h-20 text-xl border-1 mx-4 rounded-xl items-center"
                        >
                            <div className="imgHead w-12 h-12 mr-12 ml-6">
                                {
                                    item.imgUrl ?
                                        <img className="h-12 bg-cover" src={item.imgUrl} alt="头像" /> :
                                        <Avatar shape="square" size={48} icon={<UserOutlined />} />
                                }
                            </div>
                            <div className="tracking-widest">{item.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
