import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
}));

const Service = () => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.cardMedia}
				image="https://source.unsplash.com/random"
				title="Image title"
			/>
			<CardContent className={classes.cardContent}>
				<Typography gutterBottom variant="h5" component="h2">
					Кузов
				</Typography>
				<Typography>Описание работ .......</Typography>
			</CardContent>
			<CardContent>
				<Typography align="center" variant="h4">
					от 2000 т.р
				</Typography>
			</CardContent>
			<CardActions>
				<Button fullWidth size="small" color="primary" align="center">
					Рассчитать
				</Button>
			</CardActions>
		</Card>
	);
};

export default Service;
