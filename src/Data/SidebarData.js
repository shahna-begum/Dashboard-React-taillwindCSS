import { SettingOutlined, QuestionCircleOutlined, FolderOutlined, BarChartOutlined, HomeOutlined, InboxOutlined, ShopOutlined, CompassOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
let home = <Link to='/'>Home</Link>
let analytic = <Link to='/Analytics'>Analytic</Link>
let explore = <Link to='/Explore'>Explore</Link>
let shop = <Link to='/Shop'>Shop</Link>
let inbox = <Link to='/Inbox'>Inbox</Link>
let setting = <Link to='/setting'>Setting</Link>
let help = <Link to='/Help'>Help</Link>
let amazon = <Link to='/Amazon'>Amazon</Link>
let invinity = <Link to='/Invinity'>Invinity HQ</Link>
const SidebarData = [
    getItem(home, 'home', <HomeOutlined />, null, null, 'group'),
    getItem(analytic, 'analytic', <BarChartOutlined />, null, null, 'group'),
    getItem(explore, 'explore', <CompassOutlined />, null, null, 'group'),
    getItem(shop, 'shop', <ShopOutlined />, null, null, 'group'),
    getItem(inbox, 'inbox', <InboxOutlined />, null, null, 'group'),
    getItem('Tools', 'tools', null, [getItem(setting, 'setting', <SettingOutlined />), getItem(help, 'help', <QuestionCircleOutlined />)], 'group'),
    getItem('Project', 'project', null, [getItem(amazon, 'amazon', <FolderOutlined />), getItem(invinity, 'invinity', <FolderOutlined />)], 'group'),
];
export default SidebarData;