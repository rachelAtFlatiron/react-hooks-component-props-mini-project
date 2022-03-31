import React from 'react';
import Article from './Article';

export default function ArticleList(props){
    return (
        <main>

            {props.posts.map((data, index) => {
                return <Article key={index} date={data.date} title={data.title} preview={data.preview} minutes={data.minutes}/>
                
            })}
        </main>
    )
}