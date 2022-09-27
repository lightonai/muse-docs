import React from 'react';


export const Card = ({link, title, description}) => {
    return (
        <a href={link} style={{color: "inherit", textDecoration: "inherit"}}>
            <div style={{background: "#272729", borderRadius: "6.9%", padding: "7.89%"}}>
            <h2>{title}</h2>
            {description}
            </div>
        </a>
    )
};

export const CardNoLink = ({title, prompt, output}) => {
    return (
        <div style={{background: "#272729", borderRadius: "6.9%", padding: "7.89%", height: "100%", verticalAlign: "middle"}}>
            <div>
                <h2>{title}</h2>
                <div style={{whiteSpace: 'pre-line'}}>🧑 <b>{prompt}</b></div>
            </div>
            <div style={{background: '#524D63', borderRadius: "10px", padding: "3.945%"}}>
                <div style={{whiteSpace: 'pre-line'}}>🤖 {output}</div>
            </div>
        </div>
    )
};