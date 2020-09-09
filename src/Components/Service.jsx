import React from 'react';
import Card from './Card';
import Data from './Data';
import Centerhead from './Centerhead';

const Service = () => {
    return(
        <>
    <Centerhead title = 'Our Services'/>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className='col-10 mx-auto'>
                <div className="row gy-4">
                   {
                       Data.map((val , ind) => {
                            return <Card key= {ind} image = {val.image} title = {val.title} text = {val.text} />
                       },)
                   }
                </div>
            </div>
        </div>
    </div>
    </>
    )
} 

export default Service;