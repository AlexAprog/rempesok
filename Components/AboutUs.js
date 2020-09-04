import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';
import Image from '../Components/general/Image';

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.3)',
	},
}));

export default function Home() {
	const classes = useStyles();
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<React.Fragment>
			<Container className={classes.cardGrid} maxWidth="md" id="aboutUs">
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
		</React.Fragment>
	);
}
