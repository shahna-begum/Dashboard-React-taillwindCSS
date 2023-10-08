import React from 'react';
import { Table } from 'antd';
const TransactionTable = (props) => {
    return (<Table columns={props.columns} dataSource={props.data} className={`overflow-x-auto`} />)
};
export default TransactionTable;