import { ClockCircleOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { format, parseISO, } from 'date-fns'
export default function Event({ event }) {
    let startDateTime = parseISO(event.startDatetime)
    return (<li className="flex items-center px-4 py-4 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100 border-b-[1px] last:border-b-0">
        <img
            src={event.imageUrl}
            alt=""
            className="flex-none w-14 h-14 rounded-full"
        />
        <div className="flex-auto">
            <p className="text-black font-semibold text-base capitalize">{event.name}</p>
            <div className='flex justify-between items-center gap-3'>
                <p className="mt-0.5 flex justify-start items-center gap-1">
                    <VideoCameraOutlined className='text-gray-400' />{' '}
                    <span className='capitalize text-sm text-gray-400'>{event.eventMode}</span>
                </p>
                <p className="mt-0.5 flex gap-1">
                    <ClockCircleOutlined className=' text-gray-400' />{' '}
                    <time dateTime={event.startDatetime} className=' text-gray-400'>
                        {format(startDateTime, 'h:mm a')}
                    </time>
                </p>
            </div>
        </div>
    </li>

    )
}