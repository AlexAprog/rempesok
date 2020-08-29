import Layout from '../layout';
import AboutUs from '../Components/AboutUs';
import Services from '../Components/Services';
import Contacts from '../Components/Contacts';
import Send from '../Components/Send';
import Jumbotron from '../Components/Jumbotron';

export default function Home() {
	return (
		<Layout>
			<Jumbotron />
			<AboutUs />
			<Services />
			<Contacts />
			<Send />
		</Layout>
	);
}
