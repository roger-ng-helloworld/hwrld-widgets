import config from './helloworld-config';

export default {
	root: {
		maxWidth: config.breakPoint.large
	},

	list: {
		borderTop: '1px dotted ' + config.color.text, 
	},

	listItem: {
		borderBottom: '1px dotted ' + config.color.text, 
		padding: '20px 0',
		position: 'relative',

	},

	cta: {
		backgroundColor: 'rgba(0,0,0,0.2)',
		display: 'none',
		height: '100%',
		position: 'absolute',
		width: '100%',
		zIndex: 100
	},

	imgContainer: {
		height: 90,
		overflow: 'hidden'
	},

	title: {
		color: config.color.primary,
		fontSize: '18px',
		fontWeight: 'bold',
	},

	blurb: {
		height: 32,
		marginTop: 5,
		overflow: 'hidden'
	}


}