import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';
import Form from './Form';

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginTop: '48px',
		boxShadow: '0 10px 10px 10px rgb(0, 0, 0, 0.2)',
		backgroundColor: 'rgb(255, 255, 255, 0.4)',
	},
}));

const getStringParametrs = (params) =>
	Object.keys(params)
		.map(function (key) {
			return key + '=' + params[key];
		})
		.join('&');

const Send = () => {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Container maxWidth="md" id="call">
			<Form setOpen={setOpen} mainScreen={true} />
		</Container>
	);
};

export default Send;
