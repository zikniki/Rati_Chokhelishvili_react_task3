import React from 'react';
import RightSideImg from './organismsImg/image.svg';
import MoleculsPart from '../moleculs/moleculsPart';

function Organisms() {
    return (
        <>
            <div className='OrganismsPart'>
                <MoleculsPart />
                <img src={RightSideImg} alt="" />
            </div>
        </>
    );
}

export default Organisms
