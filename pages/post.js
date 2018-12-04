import { withRouter } from 'next/router';
import Layout from '../comps/MyLayout';

const Content = withRouter((props) => (
	<div>
		<h1>{props.router.query.title}</h1>
		<p>This page is blog posts</p>
	</div>
));
const Page = (props) => (
	<Layout>
		<Content />
	</Layout>
);

export default Page;
