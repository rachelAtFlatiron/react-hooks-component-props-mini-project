import Article from './Article';

export default function ArticleList({ posts }){
    //procdess posts to have id
    return(
        //jsx
        <main>
           {
                posts.map((post, i) => {
                    return <Article key={i} date={post.date} title={post.title} preview={post.preview} />
                })
            }
        </main>
    )
}