import Article from "./Article";

function ArticleList({ blogs }) {
    //[<Article />, <Article />, <Article />]
	return (
		<main>
			{blogs.map((curBlog) => (
				<Article key={curBlog.id} blog={curBlog} />
			))}
		</main>
	);
}

export default ArticleList;
/*
blogs.forEach(blog => {
    1. createElement
    2.elment.textContent   
})

*/