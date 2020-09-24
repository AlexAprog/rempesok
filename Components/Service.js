import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Form from './Form';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		height: 140, // 16:9
	},
	cardContent: {
		flexGrow: 1,
		padding: 0,
	},
}));

const Service = ({ card }) => {
	const [openForm, setOpenForm] = React.useState(false);

	const onHandle = () => {
		setOpenForm(!openForm);
	};

	const classes = useStyles();
	return (
		<React.Fragment>
			<Card className={classes.card} data-aos="fade-left">
				<CardMedia className={classes.cardMedia} image={card.src} title={card.name} />
				<CardContent className={classes.cardContent}>
					<Typography align="center" gutterBottom variant="h5" component="h2">
						{card.name}
					</Typography>
				</CardContent>
				<CardContent className={classes.cardContent}>
					<Typography align="center" variant="subtitle1">
						{card.price}
					</Typography>
				</CardContent>
				<CardActions>
					<Button fullWidth size="small" color="primary" align="center" onClick={onHandle}>
						Рассчитать
					</Button>
				</CardActions>
			</Card>
			<Dialog
				fullScreen={true}
				open={openForm}
				onClose={onHandle}
				aria-labelledby="responsive-dialog-title">
				<DialogContent>
					<DialogActions>
						<Button onClick={onHandle} color="primary" autoFocus>
							Закрыть
						</Button>
					</DialogActions>
					<Form service={card} />
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
};

export default Service;
