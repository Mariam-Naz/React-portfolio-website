import React from 'react';

const Textfeild = (props)=>{
    return (
        <>
        <div class="mb-3">
            <label for={props.infor} class="form-label">{props.inlabel}</label>
            <input type={props.intype} class="form-control" id={props.for} placeholder={props.inpholder} />
        </div>
        </>
    )
}

export default Textfeild;
