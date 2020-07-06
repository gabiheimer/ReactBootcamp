import axios from 'axios';

export default function Post({ id, comments }) {
	return (
        <div>
            <h1>Comments for post number #{id}</h1>
            {comments.map( comment => (
                <Comment {...comment} key={comment.id} />
            ))}
        </div>
    );
}

const Comment = ({email, body}) => (
    <div>
        <h5>{email}</h5>
        <p>{body}</p>
    </div>
)

Post.getInitialProps = async ({ query }) => {
	const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
    const { data } = res;
	return {...query, comments: data};
};