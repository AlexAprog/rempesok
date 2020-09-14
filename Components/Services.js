import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Service from './Service';

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
}));

const cards = [
	{
		id: 1,
		name: 'Пескоструй кузова',
		src: '/images/services/1.jpg',
		price: 2000,
	},
	{
		id: 2,
		name: 'Пескоструй днища',
		src: '/images/services/2.jpg',
		price: 2000,
	},
	{
		id: 3,
		name: 'Пескоструй рамы',
		src: '/images/services/3.jpg',
		price: 2000,
	},
	{
		id: 4,
		name: 'Пескоструй супортов',
		src: '/images/services/4.jpg',
		price: 2000,
	},
	{
		id: 5,
		name: 'Пескоструй дисков',
		src: '/images/services/5.jpg',
		price: 2000,
	},
	{
		id: 6,
		name: 'Пескоструй металла',
		src: '/images/services/1.jpg',
		price: 2000,
	},
	{
		id: 7,
		name: 'Выездной пескоструй',
		src: '/images/services/1.jpg',
		price: 2000,
	},
	{
		id: 8,
		name: 'Все виды сварных работ любой сложности',
		src: '/images/services/1.jpg',
		price: 'Договорная',
	},
	{
		id: 9,
		name: 'Нанесение грунта',
		src: '/images/services/1.jpg',
		price: 2000,
	},
	{
		id: 10,
		name: 'Окраска металла',
		src: '/images/services/1.jpg',
		price: 2000,
	},
	{
		id: 11,
		name: 'Окраска кузова',
		src: '/images/services/1.jpg',
		price: 2000,
	},
	{
		id: 12,
		name: 'Окраска дисков',
		src: '/images/services/1.jpg',
		price: 2000,
	},
	{
		id: 13,
		name: 'Окраска супортов',
		src: '/images/services/1.jpg',
		price: 2000,
	},
];

const Services = () => {
	const classes = useStyles();
	return (
		<Container className={classes.cardGrid} maxWidth="md" id="prices">
			<Grid container spacing={4}>
				{cards.map((card) => (
					<Grid item key={card.id} xs={12} sm={6} md={4}>
						<Service card={card} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Services;
