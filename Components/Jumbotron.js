import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	mainFeaturedPost: {
		position: 'relative',
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	},
	mainFeaturedPostContent: {
		position: 'relative',
		padding: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(6),
			paddingRight: 0,
		},
	},
}));

const mainFeaturedPost = {
	title: 'Мастерская песка и красок',
	description:
		'Мастерская профессиональной пескоструйной обработки и окраски в СПб и Ленинградской обл.',
	image: '/images/Logo.jpg',
	imgText: 'main image description',
};

const Jumbotron = () => {
	const classes = useStyles();
	const post = mainFeaturedPost;
	return (
		<Paper
			className={classes.mainFeaturedPost}
			style={{ backgroundImage: `url(${post.image})`, backgroundSize: '100% 100%' }}>
			{/* {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />} */}
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
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Jumbotron;
