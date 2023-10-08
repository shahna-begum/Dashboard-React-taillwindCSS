import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ConfigProvider, Layout, Menu, Typography, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import SidebarData from '../Data/SidebarData'

const { Title } = Typography;
const { Sider } = Layout;

const Structure = ({ collapsed, setCollapsed }) => {
    return (
        <div className='min-h-auto md:min-h-screen !font-custom' style={{ background: 'transparent' }}>
            <Sider trigger={null} className={`${collapsed ? '!min-w-[100px] px-2' : '!min-w-[328px] px-5'} py-3 md:min-h-screen z-40 `} collapsible collapsed={collapsed} style={{ position: 'fixed', background: 'white', borderRight: '1px solid #e2e2e2' }}>
                <div className="demo-logo-vertical " />
                <Link className='flex justify-start items-center gap-4 p-6'>
                    <img src="./Screenshot_4.png" alt="" />
                    <Title level={1} style={{ marginBottom: 0, fontWeight: 700 }} className={`${collapsed ? 'hidden' : ''}`}>Omoi</Title>
                </Link>
                <ConfigProvider
                    theme={{
                        components: {
                            Menu: {
                                iconSize: 20,
                                itemSelectedBg: '#6e62e5',
                                itemSelectedColor: '#fff',
                                itemHeight: 48,
                            }
                        },
                    }}
                >
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['home']}
                        style={{ border: 'none' }}
                        items={SidebarData}
                        className={`${collapsed ? 'hidden' : 'block '} text-base w-auto h-[82vh] overflow-auto md:block`}
                    />
                </ConfigProvider>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    className={`${collapsed ? 'top-8 -right-5' : 'top-10 right-10 '} absolute`}
                    style={{
                        fontSize: '16px',
                        width: 44,
                        height: 44,
                        background: '#f3f4f6',
                        borderRadius: '50%',
                    }}
                />
            </Sider>

            <Layout style={{ background: 'transparent' }} className={` ${collapsed ? 'pl-0 md:pl-24' : 'lg:pl-80'}`} >
                <Outlet />
            </Layout>
        </div >
    )
}
export default Structure;