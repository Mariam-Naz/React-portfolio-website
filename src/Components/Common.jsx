import React from 'react';
import {NavLink} from 'react-router-dom';

const Common = (props)=>{
    return (
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className='col-10 mx-auto'>
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                               {props.content} <strong className="brand-name">MnM-Force</strong>
                            </h1>
                            <h2 className="my-3">
                             {props.subContent}
                            </h2>
                            <div className="mt-3">
                            <NavLink to={props.linkto} className="btn btn-outline-primary">
                                {props.btnText}
                            </NavLink>
                            </div>
                        </div> 
                            <div className="col-md-6 order-2 order-lg-1 header-img">
                                <img src={props.image} className="img-fluid animated" alt={props.alt}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Common;