import React from 'react';

export default function Article(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date + " "}  
                {props.minutes > 30 ?
                    "🍱".repeat(props.minutes / 10) :
                    "☕️".repeat(props.minutes / 3) 
                } 
            {" " + props.minutes} minute read
            </small>
            <p>
                {props.preview}
            </p>
        </article>
    )
}
Article.defaultProps = {
    date: "January 1, 1970"
}