import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

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

const Send = () => {
	const classes = useStyles();
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<Container maxWidth="md">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container justify="center">
					<Box
						className={classes.form}
						borderRadius="15px"
						width="100%"
						width={{ lg: '50%' }}
						p={{ xs: 2, sm: 3, md: 4 }}>
						<Grid container direction="column">
							<Typography component="h4">Хотите работать с нами?</Typography>
							<Typography component="p">
								Заполните форму и мы с вами свзяжемся в ближайшее время.
							</Typography>
						</Grid>
						<Box position="relative" width="100%" marginBottom="0.3rem" marginTop="0.8rem">
							<TextField
								margin="normal"
								variant="outlined"
								label="имя"
								fullWidth
								placeholder="имя"></TextField>
							<TextField
								margin="normal"
								type="email"
								variant="outlined"
								label="email"
								fullWidth
								placeholder="email"></TextField>
							<TextField
								margin="normal"
								variant="outlined"
								label="Сообщение"
								fullWidth
								multiline={true}
								rows={4}
								placeholder="Можете оставить сообщение .."></TextField>
							<Button type="submit" fullWidth variant="contained" color="primary">
								Отправить
							</Button>
						</Box>
					</Box>
				</Grid>
			</form>
		</Container>
	);
};

export default Send;
