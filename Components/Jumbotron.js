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
		backgroundImage: 'url(https://source.unsplash.com/random)',
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
	title: 'Title of a longer featured blog post',
	description:
		"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
	image: 'https://source.unsplash.com/random',
	imgText: 'main image description',
	linkText: 'Continue reading…',
};

const Jumbotron = () => {
	const classes = useStyles();
	const post = mainFeaturedPost;
	return (
		<Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
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
	);
};

export default Jumbotron;
