import { useRouter } from 'next/router';

const BlogId = () => {
	const router = useRouter();
	const { BlogId } = router.query;
	return(
		<div>
			<h2>Blog Dynamic Route {BlogId}</h2>
		</div>
	);
};

export default BlogId