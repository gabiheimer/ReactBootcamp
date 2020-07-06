import axios from 'axios';
import Link from 'next/link';

export default function Index({ posts }) {
	return (
        <div>
            <h1>INDEX</h1>
            <ul>
                {posts.map(post => (
                    <Link key={post.id} href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

Index.getInitialProps = async function() {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
	const { data } = res;
	return { posts: data };
};