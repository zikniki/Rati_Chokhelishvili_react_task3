import React, { useState } from 'react';
import Check from './atomIcon/check.svg';

function FormPart(props) {

    return (
        <>
            <div className='InputTitle'>
                {props.formTitle}
            </div>
            <div className='From'>
                <div>
                    <input
                        type="text"
                        value={props.inputText}
                    />
                </div>
                <button>{props.buttonText}</button>
            </div>
        </>
    );
}

export default FormPart;