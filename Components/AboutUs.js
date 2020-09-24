import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
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
	paper: {
		padding: '6px 16px',
	},
	missingOppositeContent: {
		'&:before': {
			flex: '0',
		},
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
									<Typography align="center" color="textPrimary" variant="h5">
										О нас
									</Typography>
									<Grid item xs={12} className="section-header__subtitle-wrapper">
										<Typography
											variant="h6"
											align="left"
											color="textPrimary"
											className="section-header__subtitle"
											variant="subtitle1">
											Наша компания относительно молодая на рынке пескоструйных работ, НО нам
											доверяют и на это есть причины:
											<Timeline align="alternate">
												<TimelineItem>
													<TimelineSeparator>
														<TimelineDot />
														<TimelineConnector />
													</TimelineSeparator>
													<TimelineContent>
														<Typography>
															у Нас работает команда профессионалов с многолетним опытом
															пескоструйных, сварочных и покрасочных работ
														</Typography>
													</TimelineContent>
												</TimelineItem>
												<TimelineItem>
													<TimelineSeparator>
														<TimelineDot />
														<TimelineConnector />
													</TimelineSeparator>
													<TimelineContent>
														<Typography>
															все виды работы производятся только на профессиональном оборудовани
														</Typography>
													</TimelineContent>
												</TimelineItem>
												<TimelineItem>
													<TimelineSeparator>
														<TimelineDot />
														<TimelineConnector />
													</TimelineSeparator>
													<TimelineContent>
														<Typography>
															при выполнении всех видов работ используются только качественные и
															проверенные материалы
														</Typography>
													</TimelineContent>
												</TimelineItem>
												<TimelineItem>
													<TimelineSeparator>
														<TimelineDot />
														<TimelineConnector />
													</TimelineSeparator>
													<TimelineContent>
														<Typography>
															и САМОЕ главное - Мы нацелены на результат и долгосрочное плодотворное
															сотрудничество с ВАМИ, наши дорогие клиенты
														</Typography>
													</TimelineContent>
												</TimelineItem>
											</Timeline>
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
						<Typography align="center" color="textPrimary" variant="h5">
							КАК МЫ РАБОТАЕМ:
						</Typography>
						<Grid item xs={12} className="section-header__subtitle-wrapper">
							<Timeline align="alternate">
								<TimelineItem>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Typography>
											консультация и осмечивание стоимости работ, выезд специалиста на место
										</Typography>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Typography>Заключение договора</Typography>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Typography>
											Внесение аванса ( обсуждается с каждым клиентом индивидуально )
										</Typography>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Typography>
											Начало выполнения работ ( работы производятся либо на нашей площадке, либо
											наши специалисты доставят все нужное оборудование к Вам и приступят к работе )
										</Typography>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Typography>
											Сдача выполненых работ ( подписание акта выполненных работ)
										</Typography>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Typography>Полный расчет за произведенные работы согласно договора</Typography>
									</TimelineContent>
								</TimelineItem>
							</Timeline>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={6} data-aos="fade-up">
						<Typography align="center" color="textPrimary" variant="h5">
							ПОЧЕМУ ВЫБИРАЮТ НАС
						</Typography>
						<Grid item xs={12} className="section-header__subtitle-wrapper">
							<Timeline align="left">
								<TimelineItem classes={{ missingOppositeContent: classes.missingOppositeContent }}>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Paper elevation={3} className={classes.paper}>
											<Typography variant="h6" component="h1">
												Квалифицированные специалисты
											</Typography>
										</Paper>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem classes={{ missingOppositeContent: classes.missingOppositeContent }}>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Paper elevation={3} className={classes.paper}>
											<Typography variant="h6" component="h1">
												Профессиональное оборудование
											</Typography>
										</Paper>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem classes={{ missingOppositeContent: classes.missingOppositeContent }}>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Paper elevation={3} className={classes.paper}>
											<Typography variant="h6" component="h1">
												Оперативный выезд и осмечивание стоимости работ
											</Typography>
										</Paper>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem classes={{ missingOppositeContent: classes.missingOppositeContent }}>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Paper elevation={3} className={classes.paper}>
											<Typography variant="h6" component="h1">
												Индивидуальный подход к каждому клиенту
											</Typography>
										</Paper>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem classes={{ missingOppositeContent: classes.missingOppositeContent }}>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Paper elevation={3} className={classes.paper}>
											<Typography variant="h6" component="h1">
												Гибкая система скидок
											</Typography>
										</Paper>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem classes={{ missingOppositeContent: classes.missingOppositeContent }}>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Paper elevation={3} className={classes.paper}>
											<Typography variant="h6" component="h1">
												Гарантия качества выполенных работ
											</Typography>
										</Paper>
									</TimelineContent>
								</TimelineItem>
							</Timeline>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}
