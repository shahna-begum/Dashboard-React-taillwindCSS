import React from 'react';
const ListOfPeopleCircle = ({ imgSrc, id, classes, ml }) => {
    return (
        <>
            <div className={`rounded-full relative first-of-type:ml-0 ${ml} border-2 border-white ${classes}`}>
                <img className={`rounded-full absolute top-0 left-0 w-full h-full`} src={imgSrc} alt={id} />
            </div>
        </>
    )
}
export default ListOfPeopleCircle;

ListOfPeopleCircle.defaultProps = {
    classes: '',
}