import React from 'react';

export default function About(props){
    return (
        <aside>
            <img src={props.src} alt="blog logo" />
            <p>
                {props.about}
            </p>
        </aside>
    )
}
About.defaultProps = {
    src: "https://via.placeholder.com/215"
}