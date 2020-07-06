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

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};

export default MyApp;
