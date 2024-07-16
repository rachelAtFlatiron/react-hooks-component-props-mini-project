function Article({ blog }) {
    //Math.ceil rounds up
    let numCups = Math.ceil((blog.minutes) / 5)

    //divide minutes by 5
    //round up

	return (
		<article>
			<h3>{blog.title}</h3>
			<small>{blog.date} {'☕️'.repeat(numCups)} {blog.minutes} min read</small>
			<p>{blog.preview}</p>
		</article>
	);
}

export default Article;
