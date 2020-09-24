import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Map';
import { mapData } from '../data';

const useStyles = makeStyles((theme) => ({
	hero: {
		position: 'relative',
		width: '100%',
		height: '100%',
		display: 'flex',
		maxWidth: '1100px',
		margin: '0 auto',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column-reverse',
		},
	},
	LeftSide: {
		padding: theme.spacing(2, 2),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(2, 2),
		},
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(3, 2),
		},
	},
	heroRightSide: {
		maxWidth: '50%',
		flex: '0 0 50%',
		position: 'relative',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '100%',
			flex: '0 0 100%',
			height: '300px',
		},
	},
	shapeContainer: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		overflow: 'hidden',
		verticalAlign: 'middle',
		zIndex: 3,
		display: 'none',
	},
	shape: {
		transform: 'scale(2)',
		width: 'auto',
		height: '100%',
	},
	heroCover: {
		position: 'relative',

		height: '100%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	heroImageContainer: {
		height: '100%',
		width: '100%',
		overflow: 'hidden',
	},
	heroImage: {
		position: 'absolute',
		left: '0%',
		width: '100%',
		height: '100%',
	},
}));

const Contacts = () => {
	const classes = useStyles();
	return (
		<Container id="contacts" maxWidth="md">
			<div className={clsx('hero-shaped__wrapper', classes.hero)}>
				<div className={clsx(classes.LeftSide)}>
					<div>
						<Grid container spacing={2} className={clsx('section-header')}>
							<Grid item xs={12} className="section-header__title-wrapper">
								<Typography align="center" variant="h5" color="textPrimary">
									Контакты
								</Typography>
							</Grid>
						</Grid>
						<List disablePadding>
							<ListItem disableGutters data-aos="fade-up">
								<ListItemAvatar className={classes.listItemAvatar}>
									<Avatar
										src="/images/illustrations/contact-icon-phone.png"
										srcSet="/images/illustrations/contact-icon-phone@2x.png 2x"
										className={classes.icon}
									/>
								</ListItemAvatar>
								<ListItemText
									className={classes.listItemText}
									primary="Телефон"
									secondary={
										<React.Fragment>
											<Typography component="p" variant="body2" color="textPrimary">
												+7 911-994-91-23
											</Typography>
											<Typography component="p" variant="body2" color="textPrimary">
												+7 981-895-23-98
											</Typography>
										</React.Fragment>
									}
									primaryTypographyProps={{
										className: classes.title,
										variant: 'subtitle1',
										color: 'textSecondary',
									}}
									secondaryTypographyProps={{
										variant: 'subtitle1',
										color: 'textPrimary',
									}}
								/>
							</ListItem>
							<ListItem disableGutters data-aos="fade-up">
								<ListItemAvatar className={classes.listItemAvatar}>
									<Avatar
										src="/images/illustrations/contact-icon-mail.png"
										srcSet="/images/illustrations/contact-icon-mail@2x.png 2x"
										className={classes.icon}
									/>
								</ListItemAvatar>
								<ListItemText
									className={classes.listItemText}
									primary="Email"
									secondary={
										<React.Fragment>
											<Typography component="p" variant="body2" color="textPrimary">
												kuzmin-pantos@yandex.ru
											</Typography>
										</React.Fragment>
									}
									primaryTypographyProps={{
										className: classes.title,
										variant: 'subtitle1',
										color: 'textSecondary',
									}}
								/>
							</ListItem>
							<ListItem disableGutters data-aos="fade-up">
								<ListItemAvatar className={classes.listItemAvatar}>
									<Avatar
										src="/images/illustrations/contact-icon-pin.png"
										srcSet="/images/illustrations/contact-icon-pin@2x.png 2x"
										className={classes.icon}
									/>
								</ListItemAvatar>
								<ListItemText
									className={classes.listItemText}
									primary="Наш адрес"
									secondary={
										<React.Fragment>
											<Typography component="p" variant="body2" color="textPrimary">
												Лапинский пр., 3, Санкт-Петербург, 195253
											</Typography>
										</React.Fragment>
									}
									primaryTypographyProps={{
										className: classes.title,
										variant: 'subtitle1',
										color: 'textSecondary',
									}}
								/>
							</ListItem>
						</List>
					</div>
				</div>
				<div className={clsx('hero-shaped__right-side', classes.heroRightSide)}>
					<div className={clsx('hero-shaped__shape', classes.shapeContainer)}>
						<img
							src="/images/shapes/shape-fluid.svg"
							className={clsx('hero-shaped__shape-image', classes.shape)}
							alt=""
						/>
					</div>
					<div className={clsx('hero-shaped__cover', classes.heroCover)}>
						<div className={clsx('hero-shaped__image-container', classes.heroImageContainer)}>
							<div className={clsx('hero-shaped__image', classes.heroImage)}>
								<Map center={[59.9791869, 30.4455184]} pins={mapData} className={classes.map} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Contacts;
