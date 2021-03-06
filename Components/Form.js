import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';
import { useState } from 'react';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	useMediaQuery,
	useTheme,
} from '@material-ui/core';

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

const ValidateSchema = Yup.object().shape(
	{
		name: Yup.string()
			.min(2, 'Имя должно быть не менее 2 символов')
			.max(100, 'Максимальное количество символов 100')
			.required('Имя обязательное для заполнения'),
		email: Yup.string()
			.email('Почта задана некорректно')
			.when('phone', {
				is: '',
				then: Yup.string().required('Необходимо указать телефон или почту'),
			}),
		phone: Yup.string().when('email', {
			is: '',
			then: Yup.string().required('Необходимо указать телефон или почту'),
		}),
	},
	[['email', 'phone']],
);
const Form = ({ setOpen, service, mainScreen }) => {
	const [ShowNotification, setShowNotification] = useState(false);
	const classes = useStyles();
	const { register, handleSubmit, watch, errors, reset } = useForm({
		resolver: yupResolver(ValidateSchema),
	});
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const onSubmit = async (data) => {
		let text = `От ${data.name}, контакты: ${data.email} ${data.phone}, сообщение ${data.text}`;
		if (service) {
			text += `, вид работы ${service.name}`;
		}
		try {
			await fetch(
				`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID}=&text=${text}`,
			);
			reset();
			setShowNotification(!ShowNotification);
		} catch (e) {
			console.log(e);
		}
	};

	const handleNotification = () => {
		setShowNotification(!ShowNotification);
		setOpen();
	};

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container justify="center">
					<Box
						className={classes.form}
						borderRadius="15px"
						width="100%"
						width={mainScreen ? { lg: '100%' } : { lg: '35%' }}
						p={{ xs: 2, sm: 3, md: 4 }}>
						<Grid container direction="column">
							<Typography component="h1" variant="h5" align="center">
								{service
									? `Мы рассчитаем стоимость ${service.forForm} индивидуально под Вас!`
									: 'Хотите работать с нами'}
							</Typography>
							<Typography component="p" variant="h5" align="center">
								Заполните форму и мы с вами свяжемся в ближайшее время.
							</Typography>
						</Grid>
						<Box position="relative" width="100%" marginBottom="0.3rem" marginTop="0.8rem">
							<TextField
								name="name"
								margin="normal"
								variant="outlined"
								label="Имя"
								fullWidth
								placeholder=""
								inputRef={register}></TextField>
							{errors.name && (
								<Box
									component="span"
									color="error.main"
									textAlign="left"
									display="block"
									fontSize="subtitle2.fontSize"
									pt={1}>
									{errors.name.message}
								</Box>
							)}
							<TextField
								name="email"
								margin="normal"
								type="email"
								variant="outlined"
								label="Почта"
								fullWidth
								placeholder=""
								inputRef={register}></TextField>
							{errors.email && (
								<Box
									component="span"
									color="error.main"
									textAlign="left"
									display="block"
									fontSize="subtitle2.fontSize"
									pt={1}>
									{errors.email.message}
								</Box>
							)}
							<TextField
								name="phone"
								margin="normal"
								type="tel"
								variant="outlined"
								label="Телефон"
								fullWidth
								placeholder=""
								inputRef={register}></TextField>
							{errors.phone && (
								<Box
									component="span"
									color="error.main"
									textAlign="left"
									display="block"
									fontSize="subtitle2.fontSize"
									pt={1}>
									{errors.phone.message}
								</Box>
							)}
							<TextField
								name="text"
								margin="normal"
								variant="outlined"
								label={service ? 'Подробное описание работ' : 'Сообщение'}
								fullWidth
								multiline={true}
								rows={4}
								placeholder=""
								inputRef={register}></TextField>
							<Button type="submit" fullWidth variant="contained" color="primary">
								Отправить
							</Button>
						</Box>
					</Box>
				</Grid>
			</form>
			<Dialog
				fullScreen={fullScreen}
				open={ShowNotification}
				onClose={handleNotification}
				aria-labelledby="responsive-dialog-title">
				<DialogTitle id="responsive-dialog-title">Сообщение отправлено</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Спасибо за проявленный к нам интерес. Мы получили вашу заявку и свяжемя с вами в
						ближайшее время.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleNotification} color="primary" autoFocus>
						Закрыть
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};

export default Form;
