import Layout from '../layout';
import AboutUs from '../Components/AboutUs';
import Services from '../Components/Services';
import Contacts from '../Components/Contacts';
import Send from '../Components/Send';
import Jumbotron from '../Components/Jumbotron';
import Head from 'next/head';

export default function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>Пескостройная обработка в СПб и ЛО</title>
				<meta
					key="description"
					name="description"
					content="Пескоструная обработка в Санкт-Петербурге и ЛО. Сварка кузова любой сложности в СПб"
				/>
			</Head>
			<Layout>
				<Jumbotron />
				<AboutUs />
				<Services />
				<Contacts />
				<Send />
			</Layout>
		</React.Fragment>
	);
}
