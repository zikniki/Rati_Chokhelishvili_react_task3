import React from 'react';
import CheckBoxPart from '../atoms/CheckPart';
import TitlePart from '../atoms/TitlePart';
import TextPart from '../atoms/TextPart';
import FormPart from '../atoms/FormPart';


function MoleculsPart(props) {
    return (
        <>
            <div className='LeftSection'>
                <div>
                    <TitlePart titleText='Stay updated!' />
                </div>
                <div>
                    <TextPart TextPArt='Join 60,000+ product managers receiving monthly updates on:' />
                </div>
                <div className='CheckBox'>
                    <CheckBoxPart checkText='Product discovery and building what matters' />
                    <CheckBoxPart checkText='Measuring to ensure updates are a success' />
                    <CheckBoxPart checkText='And much more!' />
                </div>
                <div>
                    <FormPart formTitle='Email address' inputText='email@company.com' buttonText='Subscribe to monthly newsletter' />
                </div>
            </div>
        </>
    );
}
export default MoleculsPart
