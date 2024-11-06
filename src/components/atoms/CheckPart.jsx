import React from 'react';
import Check from './atomIcon/check.svg';


function CheckBoxPart(props) {
    return (
        <>
            <div className='checkItem'>
                <img src={Check} alt="" />
                <div className='checkText'>{props.checkText}</div>
            </div>
        </>
    );
}
export default CheckBoxPart
