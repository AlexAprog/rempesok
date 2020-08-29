import Head from 'next/head';
import { useState, Children } from 'react';
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
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import Footer from './Components/Footer';

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
		display: 'flex',
		justifyContent: 'center',
	},
	telegram: {
		'&:hover': {
			color: '#0088cc',
		},
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
}));

function Layout({ children }) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	function handleOpenDrawer(e) {
		setOpen(!open);
	}
	const theme = useTheme();
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
								href="#aboutUs"
								TypographyClasses={{}}
								className={classes.menuItem}
								color="textPrimary">
								О нас
							</Link>
							<Link href="#prices" className={classes.menuItem} color="textPrimary">
								Цены
							</Link>
							<Link href="#contacts" className={classes.menuItem} color="textPrimary">
								Контакты
							</Link>
							<Link href="#call" className={classes.menuItem} color="textPrimary">
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
			{children}
			<Footer />
		</div>
	);
}

export default Layout;