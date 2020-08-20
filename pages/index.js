import Head from 'next/head';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	toolBar: {
		justifyContent: 'space-between',
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
}));

export default function Home() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	function handleOpenDrawer(e) {
		console.log('handleOpen');
		setOpen(!open);
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.toolBar}>
					<Drawer open={open}>
						<MenuItem>Menu Item 1</MenuItem>
						<MenuItem>Menu Item 2</MenuItem>
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
							<Link href="#" className={classes.menuItem} color="textPrimary">
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
		</div>
	);
}
