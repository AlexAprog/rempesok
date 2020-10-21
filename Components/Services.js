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
		name: 'Пескоструйная обработка кузова',
		src: '/images/services/1.jpg',
		price: 'от 4 000 руб.',
		forForm: 'обработки кузова',
	},
	{
		id: 2,
		name: 'Пескоструйная обработка днища',
		src: '/images/services/2.jpg',
		price: 'от 10 000 руб.',
		forForm: 'обработки днища',
	},
	{
		id: 3,
		name: 'Пескоструйная обработка рамы',
		src: '/images/services/3.jpg',
		price: 'от 15 000 руб.',
		forForm: 'обработки рамы',
	},
	{
		id: 4,
		name: 'Пескоструйная обработка суппортов',
		src: '/images/services/4.jpg',
		price: '250 за шт.',
		forForm: 'обработки суппортов',
	},
	{
		id: 5,
		name: 'Пескоструйная обработка дисков',
		src: '/images/services/5.jpg',
		price: 'от 300 за шт.',
		forForm: 'обработки дисков',
	},
	{
		id: 6,
		name: 'Пескоструйная обработка металла',
		src: '/images/services/6.jpg',
		price: 'от 200 руб. за м2',
		forForm: 'обработки металла',
	},
	{
		id: 7,
		name: 'Выездной пескоструй',
		src: '/images/services/7.jpg',
		price: 'от 3 500 руб.',
		forForm: 'выезда',
	},
	{
		id: 8,
		name:
			'Полный комплекс малярно-кузовных и арматурных работ,  в том числе сварка проблемных мест с глубокой коррозией',
		src: '/images/services/8.jpg',
		price: 'договорная',
		forForm: 'сварки',
	},
	{
		id: 9,
		name: 'Окраска кузова/грунт',
		src: '/images/services/9.jpg',
		price: 'договорная',
		forForm: 'окраски кузова/грунта',
	},
	{
		id: 10,
		name: 'Окраска металла',
		src: '/images/services/10.jpg',
		price: 'договорная',
		forForm: 'окраски металла',
	},

	{
		id: 13,
		name: 'Окраска суппортов',
		src: '/images/services/13.jpg',
		price: 'от 250 руб. за шт.',
		forForm: 'окраски суппотов',
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
