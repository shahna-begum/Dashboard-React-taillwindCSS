import ListOfPeople from '../Component/ListOfPeople';
import { Typography } from 'antd';

const { Text } = Typography;

const TranHistData = {
    data: [
        {
            key: '1',
            customer: ['John Brown', 'john.brown95@gmail.com', './Screenshot_1.png'],
            status: ['success', '#3dc764'],
            date: '2020-07-22T13:22:10.2566789+00:00',
            invoice: 10000,
            people: [{
                id: 'people-1',
                imgSrc: './Screenshot_1.png',
            },
            {
                id: 'people-2',
                imgSrc: './Screenshot_1.png',
            },
            {
                id: 'people-3',
                imgSrc: './Screenshot_1.png',
            },
            {
                id: 'people-4',
                imgSrc: './Screenshot_1.png',
            }
            ],

        },
        {
            key: '2',
            customer: ['Jim Green', 'jim.green195@gmail.com', './Screenshot_1.png'],
            status: ['pending', '#f4ae44'],
            date: '2020-07-22T13:22:10.2566789+00:00',
            invoice: 10500,
            people: [{
                id: 'people-1',
                imgSrc: './Screenshot_1.png',
            },
            {
                id: 'people-2',
                imgSrc: './Screenshot_1.png',
            },
            {
                id: 'people-3',
                imgSrc: './Screenshot_1.png',
            }]
        },
        {
            key: '3',
            customer: ['Joe Black', 'joe.black12@gmail.com', './Screenshot_1.png'],
            status: ['processing', '#6f84ff'],
            date: '2020-07-22T13:22:10.2566789+00:00',
            invoice: 100020,
            people: [{
                id: 'people-1',
                imgSrc: './Screenshot_1.png',
            },
            {
                id: 'people-2',
                imgSrc: './Screenshot_1.png',
            },
            {
                id: 'people-3',
                imgSrc: './Screenshot_1.png',
            }]
        },
        {
            key: '4',
            customer: ['John Brown', 'john.brown95@gmail.com', './Screenshot_1.png'],
            status: ['success', '#3dc764'],
            date: '2020-07-22T13:22:10.2566789+00:00',
            invoice: 10000,
            people: [{
                id: 'people-1',
                imgSrc: './Screenshot_1.png',
            },
            {
                id: 'people-2',
                imgSrc: './Screenshot_1.png',
            }
            ],
        },
        {
            key: '5',
            customer: ['John Brown', 'john.brown95@gmail.com', './Screenshot_1.png'],
            status: ['success', '#3dc764'],
            date: '2020-07-22T13:22:10.2566789+00:00',
            invoice: 10000,
            people: [{
                id: 'people-1',
                imgSrc: './Screenshot_1.png',
            },
            {
                id: 'people-2',
                imgSrc: './Screenshot_1.png',
            },
            {
                id: 'people-3',
                imgSrc: './Screenshot_1.png',
            }
            ],
        },
    ],
    columns: [
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
            render: (text) =>
            (
                <>
                    <div className='flex justify-start items-center gap-3'>
                        <div className='relative w-10 h-10'>
                            <img className="rounded-full w-10 h-10" src={text[2]} alt="" />
                            <img className="rounded-full w-5 h-5 absolute right-0 -bottom-1 border-2 border-white" src={text[2]} alt="" />
                        </div>
                        <div>
                            <h1 className='text-base font-semibold'>{text[0]}</h1>
                            <p className='text-gray-400 text-xs'>{text[1]}</p>
                        </div>
                    </div>
                </>
            )
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (tags) => (<>
                <div className='flex justify-center items-center gap-2 border-[1px] w-fit px-2 py-1 border-gray-200 rounded-3xl whitespace-nowrap'>
                    <span className='inline-block w-2 h-2 rounded-full' style={{ background: tags[1] }}></span>
                    <Text className={`capitalize`}>{tags[0]}</Text>
                </div>
            </>)
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Invoice',
            key: 'invoice',
            dataIndex: 'invoice',
            render: (tags) => (<Text className='capitalize whitespace-nowrap'>${tags}</Text>
            ),
        },
        {
            title: 'People',
            key: 'people',
            render: (_, { people }) => (
                <>
                    <ListOfPeople data={people} classes='w-8 h-8' marginLeft='-ml-3' show='2' />
                </>
            ),
        },
    ],
};
export default TranHistData;