import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function MyApp({ Component, pageProps }) {

	const getLayout = Component.getLayout || ((page) => page);

	return getLayout(<Component {...pageProps} />);
}
