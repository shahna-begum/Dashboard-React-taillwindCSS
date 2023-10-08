import React from 'react';
import { Typography } from 'antd';
const { Text } = Typography;
const TopCard = (props) => {
    let percent, percentText;
    let profit = props.currentAmount - props.previousMonth;
    if (profit > 0) {
        percent = profit / 100;
        percentText = `+${percent}%`;
    }
    else {
        percent = profit / 100;
        percentText = `-${percent}%`;
    }
    return (
        <>
            <div className='flex flex-col gap-5 items-center justify-center md:flex-row'>
                <div className=''>
                    <img className="rounded-full max-w-[70px] w-full" src={props.imgSrc} alt="logo" />
                </div>
                <div className='flex justify-center items-start gap-2 flex-col'>
                    <Text className='text-white opacity-60 capitalize text-lg'>{props.title}</Text>
                    <div className='flex justify-start items-center gap-2'>
                        <Text className='text-white font-semibold text-xl'>${props.currentAmount}</Text>
                        <Text className='bg-white rounded-lg font-semibold px-1 text-[#6e62e5] text-lg'>{percentText}</Text>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <Text className='text-white opacity-60 capitalize text-lg'>{props.footerText}</Text>
                        <Text className='text-white font-semibold text-xl'>${props.previousMonth}</Text>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopCard;