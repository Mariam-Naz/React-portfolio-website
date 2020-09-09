import React from 'react';

const Card = (props)=>{
    return(
        <>
         <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.image} className="card-img-top" alt={props.image} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                            <div className="uk-inline">
                                <button className="uk-button uk-button-default" type="button">Click</button>
                                <div uk-drop="mode: click">
                                    <div className="uk-card uk-card-body uk-card-default">
                                        <a className="uk-drop-close" type="button">X</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                            </div>
                    </div>

                </div>
                </div>
            </div>
        </>
    )
}

export default Card;