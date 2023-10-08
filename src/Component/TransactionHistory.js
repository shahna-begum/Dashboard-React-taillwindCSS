import React from 'react';
import TransactionTable from './TransactionTable';
import { Select, Space, Typography, ConfigProvider } from 'antd';
const { Title } = Typography;

const TransactionHistory = (props) => {
    const handleChange = (value) => {
        props.filteredDataHandler(value);
    };
    let invoiceData = props.TransactionHistoryData.data.map((items) => items.invoice).filter((item, index, arr) => arr.indexOf(item) === index).map(item => ({ lable: item, value: item }));
    let recepientData = props.TransactionHistoryData.data.map((items) => items.customer[0]).filter((item, index, arr) => arr.indexOf(item) === index).map(item => ({ lable: item, value: item }));
    let statusData = props.TransactionHistoryData.data.map((items) => items.status[0]).filter((item, index, arr) => arr.indexOf(item) === index).map(item => ({ lable: item, value: item }));
    return (
        <div className=''>
            <div className='flex justify-between items-center mb-6 gap-2'>
                <Title className='!text-2xl md:!text-4xl' style={{ marginBottom: 0 }}>Transaction History</Title>
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
            <div className='my-4 mb-8 filterSec'>
                <ConfigProvider
                    theme={{
                        components: {
                            Select: {
                                selectorBg: '#f3f4f6',
                            },
                        },
                    }}
                >
                    <Space wrap>
                        <Select
                            defaultValue="Recepient"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={recepientData}
                        />
                        <Select
                            defaultValue="Amount"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={invoiceData}
                        />
                        <Select
                            defaultValue="Status"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={statusData}
                        />
                    </Space>
                </ConfigProvider>


            </div>
            <TransactionTable columns={props.columns} data={props.data} />
        </div>
    )
}
export default TransactionHistory;