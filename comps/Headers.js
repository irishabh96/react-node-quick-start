import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
const linkStyle = {
	marginRight: 15
};

var payload = {
	a: 1,
	b: 2
};

// data.append('json', JSON.stringify(payload));
fetch('http://localhost:3000/test', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(payload)
})
	.then((response) => response.json())
	.then((data) => console.log(data));

const Header = () => (
	<div>
		<Link href="/">
			<a style={linkStyle}>Home</a>
		</Link>
		<Link href="/about">
			<a style={linkStyle}>About</a>
		</Link>
	</div>
);

export default Header;
