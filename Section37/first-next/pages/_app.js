import App from 'next/app';
import Navbar from '../Components/Navbar';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
