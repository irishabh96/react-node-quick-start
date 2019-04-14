import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
const linkStyle = {
	marginRight: 15
};

var payload = {
	email: "test@rishabh.com",
	b: 2
};

fetch('http://localhost:3000/test', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(payload)
})
	.then((response) => response.json())
	// .then((data) => console.log(data));

const Header = () => (
	<div>
		<Link href="/">
			<a style={linkStyle}>Home</a>
		</Link>
		<Link href="/about">
			<a style={linkStyle}>About</a>
		</Link>
		<Link href="/example">
			<a style={linkStyle}>Example</a>
		</Link>
	</div>
);

export default Header;
