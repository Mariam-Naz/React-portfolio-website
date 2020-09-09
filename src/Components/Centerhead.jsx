import React from 'react';

const Centerhead = (props)=>{
    return(
        <>
        <div className="my-4">
            <h1 className="text-center center-head">{props.title}</h1>
        </div> 
        </>
    )
}

export default Centerhead;