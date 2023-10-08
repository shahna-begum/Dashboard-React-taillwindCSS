import React, { useState } from 'react';
import TopCard from './Component/TopCard';
import ListOfPeopleData from './Data/ListOfPeople';
import ListOfPeople from './Component/ListOfPeople';
import TransactionHistoryData from './Data/TranHistData';
import TopCardData from './Data/TopCardData';
import { DownOutlined, ArrowRightOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import { Select, Typography, Dropdown, Space, Button, Divider, Layout } from 'antd';
import TransactionHistory from './Component/TransactionHistory';
import Calendar from './Component/Calendar';
import ChartBar from './Component/ChartBar';
import { Link } from 'react-router-dom';

const { Text, Title } = Typography;
const { Content } = Layout;
const items = [
    {
        label: (
            <Link >
                1st menu item
            </Link>
        ),
        key: '0',
    },
    {
        label: (
            <Link>
                2nd menu item
            </Link>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item（disabled）',
        key: '3',
        disabled: true,
    },
];
const handleChange = (value) => {
    // props.filteredDataHandler(value);
};

const Home = ({ collapsed }) => {
    console.log(collapsed);
    const [transactionHistoryStatusData, setTransactionHistoryStatusData] = useState(TransactionHistoryData);

    const filteredDataHandler = (selectedItem) => {
        let data = TransactionHistoryData?.data.filter(item => {
            if (item.status[0] === selectedItem) return item;
            if (item.invoice === selectedItem) return item;
            if (item.customer[0] === selectedItem) return item;
        });
        setTransactionHistoryStatusData(prevData => { return { ...prevData, data } });
    }
    return (
        <>
            <div className='flex flex-col-reverse justify-between items-center gap-3 p-3 pb-3 pt-8 lg:p-9 lg:pb-4 xl:flex-row xl:flex-auto'>
                <div className='flex flex-col justify-start items-center gap-5 w-full xl:flex-row'>
                    <div className='rounded-full relative w-[82px] h-[82px] bg-[#d5d5d5]'>
                        <div className='absolute w-[75px] h-[75px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full z-20'>
                            <img className="absolute w-[70px] h-[70px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" src="./Screenshot_1.png" alt="" />
                        </div>
                        <div className='clip-path absolute w-[82px] h-[82px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[120deg] bg-[#6e62e5] rounded-full z-10'></div>
                        <span className='absolute top-1 -right-1 flex justify-center items-center w-7 h-7 z-30 rounded-full border-[1.5px] border-white bg-[#6e62e5] text-white text-base font-medium'>3</span>
                    </div>
                    <div className='flex justify-center items-start flex-col gap-2'>
                        <Title style={{ marginBottom: 0 }} className='!text-2xl lg:!text-4xl'>Good Morning Team !</Title>
                        <Text className='text-lg text-gray-400'>Have an in-depth look at all the metrices within your dashboard</Text>
                    </div>
                </div>
                <div className='flex justify-center items-end gap-6 w-full flex-col md:flex-row md:justify-between'>
                    <div className='flex items-center gap-6 md:mr-auto pl-11 lg:pl-2'>
                        <Button type="primary" shape="circle" size='large' className='bg-gray-100 text-gray-600 shadow-none border-none' icon={<SearchOutlined />} />
                        <div className='relative'>
                            <span className='absolute top-3 z-10 right-3 w-2 h-2 rounded-full bg-[#6e62e5]'></span>
                            <Button type="primary" shape="circle" size='large' className="shadow-none border-none text-gray-600" icon={<BellOutlined />} />
                        </div>
                    </div>
                    <Select
                        defaultValue={'My profile'}
                        style={{
                            width: 120,
                        }}
                        className='shadow-lg rounded-xl'
                        onChange={handleChange}
                        options={[
                            {
                                value: 'month',
                                label: 'Month',
                            },
                            {
                                value: 'year',
                                label: 'Year',
                            },
                        ]}
                    />
                </div>
            </div>
            <Content className='grid grid-cols-1 p-3 gap-3 xl:grid-cols-70-30 lg:gap-9 lg:p-9'>
                <div className='left-content-wrapper'>
                    <div className='flex flex-wrap justify-center lg:justify-center items-center gap-2 bg-[#6e62e5] p-3 w-full rounded-3xl mb-3 lg:min-h-[170px] lg:px-12 lg:mb-11 '>
                        {TopCardData?.map(item => (
                            <TopCard key={item.id} imgSrc={item.imgSrc} title={item.topHeading} currentAmount={item.currentMonth} previousMonth={item.previousMonth} footerText={item.footerText} />
                        ))}
                    </div>

                    <div className={` ${collapsed ? 'lg:flex-row' : 'lg:flex-col'} flex flex-col justify-between items-start border-[1px] border-gray-200 rounded-3xl p-3 mb-3 lg:p-10 pb-6 lg:mb-9 xl:flex-row`}>
                        <div className='flex flex-col justify-center items-start gap-8'>
                            <div className='flex flex-col justify-center items-start'>
                                <Typography.Title className='capitalize' style={{ marginBottom: 6 }} level={2}>Total sales and cost</Typography.Title>
                                <Text className='capitalize text-gray-300 text-base'>last 60 days</Text>
                            </div>
                            <div className='flex justify-center items-start flex-col gap-3'>
                                <div className='flex justify-start items-center gap-3'>
                                    <Typography.Title className='capitalize font-extrabold !text-[#6e62e5]' style={{ marginBottom: 6 }} level={1}>$956.82k</Typography.Title>
                                    <Text className='capitalize'>+5.4%</Text>
                                </div>
                                <div className='flex justify-start items-center gap-1 text-base'>
                                    <Text className='capitalize text-green-500 font-medium'>+8.20k</Text>
                                    <Text className='text-gray-300'>vs prev 60 days</Text>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:max-w-[500px]'>
                            <div className='flex justify-between items-start'>
                                <div className='flex justify-start items-center gap-3'>
                                    <Typography.Title className='capitalize' style={{ marginBottom: 6 }} level={5}>Analytics</Typography.Title>
                                    <Text className='capitalize text-green-500 font-medium'>+8.20k</Text>
                                </div>
                                <Select
                                    defaultValue={'Month'}
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: 'month',
                                            label: 'Month',
                                        },
                                        {
                                            value: 'year',
                                            label: 'Year',
                                        },
                                    ]}
                                />
                            </div>
                            <ChartBar />
                        </div>
                    </div>

                    <TransactionHistory columns={TransactionHistoryData?.columns} data={transactionHistoryStatusData.data}
                        {...{ filteredDataHandler, TransactionHistoryData }} />
                </div>

                <div className='right-content-wrapper'>
                    <Text className='capitalize text-blue-600 text-xl'>premium Access</Text>
                    <div className='pr-3 lg:pr-16 mt-6 mb-5'>
                        <Typography.Title className='capitalize !text-4xl lg:!text-6xl'>Take Back your crative control
                            <ListOfPeople data={ListOfPeopleData} />
                        </Typography.Title>
                    </div>
                    <Dropdown menu={{ items, }}>
                        <Link className="capitalize text-xl text-gray-400" onClick={(e) => e.preventDefault()}>
                            <Space>
                                the professional platform
                                <DownOutlined className='text-base ml-2' />
                            </Space>
                        </Link>
                    </Dropdown>
                    <Button className='capitalize flex justify-between items-center gap-5 w-full my-11 px-8 py-3 h-auto rounded-2xl text-xl shadow-none text-[#6e62e5] max-w-xs xl:max-w-none'>
                        <Text className="text-xl text-[#6e62e5]">upgrade now</Text><ArrowRightOutlined />
                    </Button>
                    <Divider />

                    <Calendar {...{ collapsed }} />

                </div >
            </Content>
        </>
    )
}
export default Home;