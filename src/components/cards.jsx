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
