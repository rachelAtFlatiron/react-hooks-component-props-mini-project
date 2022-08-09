import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

//Can you pass props directly up from a parent?
//What does dynamically mean
console.log(blogData);

function App() {
    return(
        <div className='app'>
            <Header name={blogData.name}/>
            <About image={blogData.image} about={blogData.about}/>
            <ArticleList posts={blogData.posts}/>
        </div>
    )
}

export default App;
