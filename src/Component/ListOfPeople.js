import React from 'react';
import ListOfPeopleCircle from './ListOfPeopleCircle';
const ListOfPeople = (props) => {
    return (
        <>
            <div className='inline-flex justify-start items-ends relative top-2 ml-3'>
                {props.data?.slice(0, Number(props.show)).map(item => (
                    <ListOfPeopleCircle key={item.id} id={item.id} imgSrc={item.imgSrc} classes={props.classes} ml={props.marginLeft} />
                ))}
                {
                    ((props.data?.length - Number(props.show)) > 0) && <div className={`rounded-full relative z-10 ${props.marginLeft}`}>
                        <span className={`bg-black border-2 border-white rounded-full text-white text-lg ${props.classes} flex justify-center items-center`}>+{props.data.length - Number(props.show)}</span>
                    </div>
                }

            </div>
        </>
    )
}
export default ListOfPeople;
ListOfPeople.defaultProps = {
    classes: 'w-[50px] h-[50px]',
    marginLeft: '-ml-7',
    show: '3'
}