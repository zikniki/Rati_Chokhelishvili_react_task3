import React from 'react';
import MoleculsPart from '../moleculs/moleculsPart';
import RightSideImg from './organismsImg/image.svg';


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
