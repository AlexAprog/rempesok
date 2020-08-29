import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6, 0),
	},
}));

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit">aau</Link> {new Date().getFullYear()}
		</Typography>
	);
}

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Container maxWidth="lg">
				<Typography variant="h6" align="center" gutterBottom>
					rempesok.ru
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
					Пескоструйные работы с высоким качеством.
				</Typography>
				<Copyright />
			</Container>
		</footer>
	);
};

export default Footer;
