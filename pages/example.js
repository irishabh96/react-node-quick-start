import Layout from '../comps/MyLayout';
import Link from 'next/link';

const PostLink = (props) => (
	<li>
		<Link as={`/example/${props.id}`} href={`/post?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
);

export default () => (
	<Layout>
		<h2>Example</h2>
		<ul>
			<PostLink id="hello-next" title="Hello Next.js" />
			<PostLink id="learn-next" title="Learn Next.js is awesome" />
			<PostLink id="deploy-next" title="Deploy apps with Zeit" />
		</ul>
	</Layout>
);
