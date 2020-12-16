import React from 'react';

export const Section = (props: {
    title: string | null,
    hashId: string,
    children?: any
}) => {
    return <>
        <a className="anchor" id={props.hashId}/>
        <div className="container">
            <h1>{props.title}</h1>
            <div className="section-content">
                {props.children}
            </div>
        </div>
        </>
}