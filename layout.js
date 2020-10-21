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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NextLink from 'next/link';
import Footer from './Components/Footer';
import Form from './Components/Form';

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
		fontFamily: 'Oswald, sans-serif',
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

	const [openForm, setOpenForm] = React.useState(false);

	const handleFormClose = () => {
		setOpenForm(false);
	};

	const handleFormOpen = () => {
		setOpenForm(true);
	};

	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
						<MenuItem className={classes.menuItem} onClick={handleDrawerClose}>
							<Link href="#aboutUs">О НАС</Link>
						</MenuItem>
						<MenuItem className={classes.menuItem} onClick={handleDrawerClose}>
							<Link href="#prices">ЦЕНЫ</Link>
						</MenuItem>
						<MenuItem className={classes.menuItem} href="#contacts" onClick={handleDrawerClose}>
							<Link href="#contacts">КОНТАКТЫ</Link>
						</MenuItem>
						<MenuItem className={classes.menuItem} href="#contacts" onClick={handleDrawerClose}>
							<Link href="#call">СВЯЗАТЬСЯ</Link>
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
					<Link href="#/">
						<Typography variant="h4" className={clsx(classes.title, classes.titleFontFamily)}>
							Rempesok.ru
						</Typography>
					</Link>
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
								О НАС
							</Link>
							<Link href="#prices" className={classes.menuItem} color="textPrimary">
								ЦЕНЫ
							</Link>
							<Link href="#contacts" className={classes.menuItem} color="textPrimary">
								КОНТАКТЫ
							</Link>
							<Link href="#call" className={classes.menuItem} color="textPrimary">
								СВЯЗАТЬСЯ
							</Link>
						</Typography>
					</Hidden>
					<Hidden smDown>
						<Link component="a" href="tel: +79119949123">
							<Typography variant="h4">8-911-994-091-23</Typography>
						</Link>
					</Hidden>
					{/* <Hidden mdDown>
						<Typography variant="h4">
							<IconButton edge="end" className={classes.menuButton} aria-label="menu">
								<NextLink href="https://telegram.im/@324234324">
									<TelegramIcon className={classes.telegram} />
								</NextLink>
							</IconButton>

							<IconButton edge="start" className={classes.menuButton} aria-label="menu">
								<WhatsAppIcon />
							</IconButton>
							<IconButton edge="start" className={classes.menuButton} aria-label="menu">
								<EmailIcon />
							</IconButton>
						</Typography>
					</Hidden> */}
					<Hidden xsDown>
						<Button className={classes.menuItem} onClick={handleFormOpen}>
							Оставить заявку
						</Button>
					</Hidden>
				</Toolbar>
			</AppBar>
			<Dialog
				fullScreen={true}
				open={openForm}
				onClose={handleFormClose}
				aria-labelledby="responsive-dialog-title">
				<DialogContent>
					<DialogActions>
						<Button onClick={handleFormClose} color="primary" autoFocus>
							Закрыть
						</Button>
					</DialogActions>
					<Form />
				</DialogContent>
			</Dialog>
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
