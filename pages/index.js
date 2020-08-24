import Head from 'next/head';
import { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import Map from '../Components/Map';
import { useMediaQuery } from '@material-ui/core';
import Image from '../Components/general/Image';
import { mapData } from '../data';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	toolBar: {
		justifyContent: 'space-between',
		background: theme.palette.common.white,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},

	titleFontFamily: {
		fontFamily: 'Kaushan Script, sans-serif',
	},
	menu: {
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	menuItem: {
		margin: '20px',
	},
	telegram: {
		'&:hover': {
			color: '#0088cc',
		},
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
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
	mainFeaturedPost: {
		position: 'relative',
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	mainFeaturedPostContent: {
		position: 'relative',
		padding: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(6),
			paddingRight: 0,
		},
	},
	form: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginTop: '48px',
		boxShadow: '0 10px 10px 10px rgb(0, 0, 0, 0.2)',
		backgroundColor: 'rgb(255, 255, 255, 0.4)',
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		// marginTop: theme.spacing(8),
		padding: theme.spacing(6, 0),
	},
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
		padding: theme.spacing(6, 2),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(12, 2),
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
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
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
	drawer: {
		width: '100%',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	menuItem: {
		display: 'flex',
		justifyContent: 'center',
	},
}));

const mainFeaturedPost = {
	title: 'Title of a longer featured blog post',
	description:
		"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
	image: 'https://source.unsplash.com/random',
	imgText: 'main image description',
	linkText: 'Continue reading…',
};

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit">aau</Link> {new Date().getFullYear()}
		</Typography>
	);
}

export default function Home() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const { register, handleSubmit, watch, errors } = useForm();

	function handleOpenDrawer(e) {
		console.log('handleOpen');
		setOpen(!open);
	}

	const onSubmit = (data) => console.log(data);

	const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const post = mainFeaturedPost;
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<AppBar position="sticky">
				<Toolbar className={classes.toolBar}>
					<Drawer
						className={classes.drawer}
						fullWidth
						open={open}
						classes={{ paper: classes.drawer }}>
						<div className={classes.drawerHeader}>
							<CloseIcon onClick={handleDrawerClose}></CloseIcon>
						</div>
						<MenuItem className={classes.menuItem} href="#contacts" onClick={handleDrawerClose}>
							<Link href="#contacts">О нас</Link>
						</MenuItem>
						<MenuItem className={classes.menuItem} href="#contacts" onClick={handleDrawerClose}>
							<Link href="#contacts">Цены</Link>
						</MenuItem>
						<MenuItem className={classes.menuItem} href="#contacts" onClick={handleDrawerClose}>
							<Link href="#contacts">Контакты</Link>
						</MenuItem>
						<MenuItem className={classes.menuItem} href="#contacts" onClick={handleDrawerClose}>
							<Link href="#contacts">Связаться</Link>
						</MenuItem>
					</Drawer>
					<Hidden mdUp>
						<IconButton
							onClick={handleOpenDrawer}
							aria-label="open drawer"
							edge="start"
							className={clsx(classes.menuButton)}>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Typography variant="h4" className={clsx(classes.title, classes.titleFontFamily)}>
						Rempesok.ru
					</Typography>
					<Hidden smDown>
						<Typography
							variant="h2"
							color="textPrimary"
							className={clsx(classes.menu, classes.grow)}>
							<Link
								href="#"
								TypographyClasses={{}}
								className={classes.menuItem}
								color="textPrimary">
								О нас
							</Link>
							<Link href="#" className={classes.menuItem} color="textPrimary">
								Цены
							</Link>
							<Link href="#contacts" className={classes.menuItem} color="textPrimary">
								Контакты
							</Link>
							<Link href="#" className={classes.menuItem} color="textPrimary">
								Связаться
							</Link>
						</Typography>
					</Hidden>
					<Hidden smDown>
						<Typography variant="h4">8-981-854-00-54</Typography>
					</Hidden>
					<Hidden mdDown>
						<Typography variant="h4">
							<IconButton edge="end" className={classes.menuButton} aria-label="menu">
								<TelegramIcon className={classes.telegram} />
							</IconButton>
							<IconButton edge="start" className={classes.menuButton} aria-label="menu">
								<WhatsAppIcon />
							</IconButton>
							<IconButton edge="start" className={classes.menuButton} aria-label="menu">
								<EmailIcon />
							</IconButton>
						</Typography>
					</Hidden>
					<Hidden xsDown>
						<Button>Оставить заявку</Button>
					</Hidden>
				</Toolbar>
			</AppBar>
			<Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
				{/* Increase the priority of the hero background image */}
				{<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
				<div className={classes.overlay} />
				<Grid container>
					<Grid item md={6}>
						<div className={classes.mainFeaturedPostContent}>
							<Typography component="h1" variant="h3" color="inherit" gutterBottom>
								{post.title}
							</Typography>
							<Typography variant="h5" color="inherit" paragraph>
								{post.description}
							</Typography>
							<Link variant="subtitle1" href="#">
								{post.linkText}
							</Link>
						</div>
					</Grid>
				</Grid>
			</Paper>
			<Container className={classes.cardGrid} maxWidth="md">
				<Grid
					container
					justify="space-between"
					spacing={isMd ? 4 : 2}
					direction={isMd ? 'row' : 'column-reverse'}>
					<Grid
						item
						container
						alignItems="center"
						justify="flex-start"
						xs={12}
						md={6}
						data-aos={'fade-up'}>
						<div>
							<Grid container spacing={2} className={clsx('section-header')}>
								<Grid item xs={12} className="section-header__title-wrapper">
									<Typography align="center" color="textPrimary">
										Our story
									</Typography>
									<Grid item xs={12} className="section-header__subtitle-wrapper">
										<Typography
											variant="h6"
											align="left"
											color="textPrimary"
											className="section-header__subtitle"
											variant="body1">
											"If we're no longer the right solution for you, we'll allow you to export and
											take your data at anytime for any reason. If we're no longer the right
											solution for you, we'll allow you to export and take your data at anytime for
											any reason.If we're no longer the right solution for you, we'll allow you to
											export and take your data at anytime for any reason.If we're no longer the
											right solution for you, we'll allow you to export and take your data at
											anytime for any reason.If we're no longer the right solution for you, we'll
											allow you to export and take your data at anytime for any reason."
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</div>
					</Grid>
					<Grid
						item
						container
						justify={isMd ? 'flex-end' : 'flex-start'}
						alignItems="center"
						xs={12}
						md={6}>
						<Image src="images/illustrations/undraw_heavy_box_agqi.svg" alt="Our story" />
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="md">
				<Grid container spacing={isMd ? 4 : 2}>
					<Grid item xs={12} sm={6} data-aos="fade-up">
						<Typography align="center" color="textPrimary">
							Who are we?
						</Typography>
						<Grid item xs={12} className="section-header__subtitle-wrapper">
							<Typography
								variant="h6"
								align="left"
								color="textPrimary"
								className="section-header__subtitle"
								variant="body1">
								Our sign up is dead simple. We only require your basic company information and what
								type of data storage you want. Our sign up is dead simple. We only require your
								basic company information and what type of data storage you want.
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={6} data-aos="fade-up">
						<Typography align="center" color="textPrimary">
							What’s up with the name?
						</Typography>
						<Grid item xs={12} className="section-header__subtitle-wrapper">
							<Typography
								variant="h6"
								align="left"
								color="textPrimary"
								className="section-header__subtitle"
								variant="body1">
								We support bulk uploading via SQL, integrations with most data storage products, or
								you can use our API. Simply select where you'd like to transfer your data and we'll
								being the process of migrating it instantly."
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<Container className={classes.cardGrid} maxWidth="md">
				{/* End hero unit */}
				<Grid container spacing={4}>
					{cards.map((card) => (
						<Grid item key={card} xs={12} sm={6} md={4}>
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
						</Grid>
					))}
				</Grid>
			</Container>
			<Container id="contacts" maxWidth="md">
				<div className={clsx('hero-shaped__wrapper', classes.hero)}>
					<div className={clsx(classes.LeftSide)}>
						<div>
							<Grid container spacing={2} className={clsx('section-header')}>
								<Grid item xs={12} className="section-header__title-wrapper">
									<Typography align="center" color="textPrimary">
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
										primary="Phone"
										secondary="+39 659-657-0133"
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
										secondary="hi@maccarianagency.com"
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
											src="/images/illustrations/contact-icon-pin.png"
											srcSet="/images/illustrations/contact-icon-pin@2x.png 2x"
											className={classes.icon}
										/>
									</ListItemAvatar>
									<ListItemText
										className={classes.listItemText}
										primary="Head Office"
										secondary="Via E. Golla 4"
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
									<Map center={[59.93471, 30.479731]} pins={mapData} className={classes.map} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
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
			<footer className={classes.footer}>
				<Container maxWidth="lg">
					<Typography variant="h6" align="center" gutterBottom>
						rempesok.ru
					</Typography>
					<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
						Пескоструные работы с высоким качеством.
					</Typography>
					<Copyright />
				</Container>
			</footer>
		</div>
	);
}
