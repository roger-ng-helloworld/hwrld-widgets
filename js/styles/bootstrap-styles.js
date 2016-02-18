export default {
	'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary': {
		display: 'block'
	},
	'audio, canvas, progress, video': {
		display: 'inline-block',
		verticalAlign: 'baseline'
	},
	'audio:not([controls])': {
		display: 'none',
		height: 0
	},
	'[hidden], template': {
		display: 'none'
	},
	a: {
		backgroundColor: 'transparent',
		color: '#337ab7',
		textDecoration: 'none'
	},
	'a:active, a:hover': {
		outline: 0
	},
	'abbr[title]': {
		borderBottom: '1px dotted'
	},
	'b, strong': {
		fontWeight: 'bold'
	},
	dfn: {
		fontStyle: 'italic'
	},
	h1: {
		fontSize: '2em',
		margin: '0.67em 0'
	},
	mark: {
		background: '#ff0',
		color: '#000'
	},
	small: {
		fontSize: '80%'
	},
	'sub, sup': {
		fontSize: '75%',
		lineHeight: 0,
		position: 'relative',
		verticalAlign: 'baseline'
	},
	sup: {
		top: '-0.5em'
	},
	sub: {
		bottom: '-0.25em'
	},
	img: {
		border: 0,
		verticalAlign: 'middle'
	},
	'svg:not(:root)': {
		overflow: 'hidden'
	},
	figure: {
		margin: 0
	},
	hr: {
		WebkitBoxSizing: 'content-box',
		MozBoxSizing: 'content-box',
		boxSizing: 'content-box',
		height: 0,
		marginTop: 20,
		marginBottom: 20,
		border: 0,
		borderTop: '1px solid #eeeeee'
	},
	pre: {
		overflow: 'auto'
	},
	'code, kbd, pre, samp': {
		fontFamily: 'monospace, monospace',
		fontSize: '1em'
	},
	'button, input, optgroup, select, textarea': {
		color: 'inherit',
		font: 'inherit',
		margin: 0
	},
	button: {
		overflow: 'visible'
	},
	'button, select': {
		textTransform: 'none'
	},
	'button, input[type="reset"], input[type="submit"]': {
		WebkitAppearance: 'button',
		cursor: 'pointer'
	},
	'button[disabled], button::-moz-focus-inner, input::-moz-focus-inner': {
		border: 0,
		padding: 0
	},
	input: {
		lineHeight: 'normal'
	},
	'input[type="checkbox"], input[type="radio"]': {
		WebkitBoxSizing: 'border-box',
		MozBoxSizing: 'border-box',
		boxSizing: 'border-box',
		padding: 0
	},
	'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button': {
		height: 'auto'
	},
	'input[type="search"]': {
		WebkitAppearance: 'textfield',
		WebkitBoxSizing: 'content-box',
		MozBoxSizing: 'content-box',
		boxSizing: 'content-box'
	},
	'input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration': {
		WebkitAppearance: 'none'
	},
	fieldset: {
		border: '1px solid #c0c0c0',
		margin: '0 2px',
		padding: '0.35em 0.625em 0.75em'
	},
	legend: {
		border: 0,
		padding: 0
	},
	textarea: {
		overflow: 'auto'
	},
	optgroup: {
		fontWeight: 'bold'
	},
	table: {
		borderCollapse: 'collapse',
		borderSpacing: 0
	},
	'td, th': {
		padding: 0
	},
	'*': {
		WebkitBoxSizing: 'border-box',
		MozBoxSizing: 'border-box',
		boxSizing: 'border-box'
	},
	'*:before, *:after': {
		WebkitBoxSizing: 'border-box',
		MozBoxSizing: 'border-box',
		boxSizing: 'border-box'
	},
	'input, button, select, textarea': {
		fontFamily: 'inherit',
		fontSize: 'inherit',
		lineHeight: 'inherit'
	},
	'a:hover, a:focus': {
		color: '#23527c',
		textDecoration: 'underline'
	},
	'a:focus': {
		outline: '5px auto -webkit-focus-ring-color',
		outlineOffset: -2
	},
	'.img-responsive': {
		display: 'block',
		maxWidth: '100%',
		height: 'auto'
	},
	'.img-rounded': {
		borderRadius: 6
	},
	'.img-thumbnail': {
		padding: 4,
		lineHeight: 1.42857143,
		backgroundColor: '#ffffff',
		border: '1px solid #dddddd',
		borderRadius: 4,
		WebkitTransition: 'all 0.2s ease-in-out',
		OTransition: 'all 0.2s ease-in-out',
		transition: 'all 0.2s ease-in-out',
		display: 'inline-block',
		maxWidth: '100%',
		height: 'auto'
	},
	'.img-circle': {
		borderRadius: '50%'
	},
	'.sr-only': {
		position: 'absolute',
		width: 1,
		height: 1,
		margin: -1,
		padding: 0,
		overflow: 'hidden',
		clip: 'rect(0, 0, 0, 0)',
		border: 0
	},
	'.sr-only-focusable:active, .sr-only-focusable:focus': {
		position: 'static',
		width: 'auto',
		height: 'auto',
		margin: 0,
		overflow: 'visible',
		clip: 'auto'
	},
	'[role="button"]': {
		cursor: 'pointer'
	},
	'.container': {
		marginRight: 'auto',
		marginLeft: 'auto',
		paddingLeft: 10,
		paddingRight: 10
	},
	mediaQueries: {
		'(min-width: 670px)': {
			'.container': {
				width: 740
			},
			'.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12': {
				float: 'left'
			},
			'.col-sm-12': {
				width: '100%'
			},
			'.col-sm-11': {
				width: '91.66666667%'
			},
			'.col-sm-10': {
				width: '83.33333333%'
			},
			'.col-sm-9': {
				width: '75%'
			},
			'.col-sm-8': {
				width: '66.66666667%'
			},
			'.col-sm-7': {
				width: '58.33333333%'
			},
			'.col-sm-6': {
				width: '50%'
			},
			'.col-sm-5': {
				width: '41.66666667%'
			},
			'.col-sm-4': {
				width: '33.33333333%'
			},
			'.col-sm-3': {
				width: '25%'
			},
			'.col-sm-2': {
				width: '16.66666667%'
			},
			'.col-sm-1': {
				width: '8.33333333%'
			},
			'.col-sm-pull-12': {
				right: '100%'
			},
			'.col-sm-pull-11': {
				right: '91.66666667%'
			},
			'.col-sm-pull-10': {
				right: '83.33333333%'
			},
			'.col-sm-pull-9': {
				right: '75%'
			},
			'.col-sm-pull-8': {
				right: '66.66666667%'
			},
			'.col-sm-pull-7': {
				right: '58.33333333%'
			},
			'.col-sm-pull-6': {
				right: '50%'
			},
			'.col-sm-pull-5': {
				right: '41.66666667%'
			},
			'.col-sm-pull-4': {
				right: '33.33333333%'
			},
			'.col-sm-pull-3': {
				right: '25%'
			},
			'.col-sm-pull-2': {
				right: '16.66666667%'
			},
			'.col-sm-pull-1': {
				right: '8.33333333%'
			},
			'.col-sm-pull-0': {
				right: 'auto'
			},
			'.col-sm-push-12': {
				left: '100%'
			},
			'.col-sm-push-11': {
				left: '91.66666667%'
			},
			'.col-sm-push-10': {
				left: '83.33333333%'
			},
			'.col-sm-push-9': {
				left: '75%'
			},
			'.col-sm-push-8': {
				left: '66.66666667%'
			},
			'.col-sm-push-7': {
				left: '58.33333333%'
			},
			'.col-sm-push-6': {
				left: '50%'
			},
			'.col-sm-push-5': {
				left: '41.66666667%'
			},
			'.col-sm-push-4': {
				left: '33.33333333%'
			},
			'.col-sm-push-3': {
				left: '25%'
			},
			'.col-sm-push-2': {
				left: '16.66666667%'
			},
			'.col-sm-push-1': {
				left: '8.33333333%'
			},
			'.col-sm-push-0': {
				left: 'auto'
			},
			'.col-sm-offset-12': {
				marginLeft: '100%'
			},
			'.col-sm-offset-11': {
				marginLeft: '91.66666667%'
			},
			'.col-sm-offset-10': {
				marginLeft: '83.33333333%'
			},
			'.col-sm-offset-9': {
				marginLeft: '75%'
			},
			'.col-sm-offset-8': {
				marginLeft: '66.66666667%'
			},
			'.col-sm-offset-7': {
				marginLeft: '58.33333333%'
			},
			'.col-sm-offset-6': {
				marginLeft: '50%'
			},
			'.col-sm-offset-5': {
				marginLeft: '41.66666667%'
			},
			'.col-sm-offset-4': {
				marginLeft: '33.33333333%'
			},
			'.col-sm-offset-3': {
				marginLeft: '25%'
			},
			'.col-sm-offset-2': {
				marginLeft: '16.66666667%'
			},
			'.col-sm-offset-1': {
				marginLeft: '8.33333333%'
			},
			'.col-sm-offset-0': {
				marginLeft: '0%'
			}
		},
		'(min-width: 786px)': {
			'.container': {
				width: 960
			},
			'.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12': {
				float: 'left'
			},
			'.col-md-12': {
				width: '100%'
			},
			'.col-md-11': {
				width: '91.66666667%'
			},
			'.col-md-10': {
				width: '83.33333333%'
			},
			'.col-md-9': {
				width: '75%'
			},
			'.col-md-8': {
				width: '66.66666667%'
			},
			'.col-md-7': {
				width: '58.33333333%'
			},
			'.col-md-6': {
				width: '50%'
			},
			'.col-md-5': {
				width: '41.66666667%'
			},
			'.col-md-4': {
				width: '33.33333333%'
			},
			'.col-md-3': {
				width: '25%'
			},
			'.col-md-2': {
				width: '16.66666667%'
			},
			'.col-md-1': {
				width: '8.33333333%'
			},
			'.col-md-pull-12': {
				right: '100%'
			},
			'.col-md-pull-11': {
				right: '91.66666667%'
			},
			'.col-md-pull-10': {
				right: '83.33333333%'
			},
			'.col-md-pull-9': {
				right: '75%'
			},
			'.col-md-pull-8': {
				right: '66.66666667%'
			},
			'.col-md-pull-7': {
				right: '58.33333333%'
			},
			'.col-md-pull-6': {
				right: '50%'
			},
			'.col-md-pull-5': {
				right: '41.66666667%'
			},
			'.col-md-pull-4': {
				right: '33.33333333%'
			},
			'.col-md-pull-3': {
				right: '25%'
			},
			'.col-md-pull-2': {
				right: '16.66666667%'
			},
			'.col-md-pull-1': {
				right: '8.33333333%'
			},
			'.col-md-pull-0': {
				right: 'auto'
			},
			'.col-md-push-12': {
				left: '100%'
			},
			'.col-md-push-11': {
				left: '91.66666667%'
			},
			'.col-md-push-10': {
				left: '83.33333333%'
			},
			'.col-md-push-9': {
				left: '75%'
			},
			'.col-md-push-8': {
				left: '66.66666667%'
			},
			'.col-md-push-7': {
				left: '58.33333333%'
			},
			'.col-md-push-6': {
				left: '50%'
			},
			'.col-md-push-5': {
				left: '41.66666667%'
			},
			'.col-md-push-4': {
				left: '33.33333333%'
			},
			'.col-md-push-3': {
				left: '25%'
			},
			'.col-md-push-2': {
				left: '16.66666667%'
			},
			'.col-md-push-1': {
				left: '8.33333333%'
			},
			'.col-md-push-0': {
				left: 'auto'
			},
			'.col-md-offset-12': {
				marginLeft: '100%'
			},
			'.col-md-offset-11': {
				marginLeft: '91.66666667%'
			},
			'.col-md-offset-10': {
				marginLeft: '83.33333333%'
			},
			'.col-md-offset-9': {
				marginLeft: '75%'
			},
			'.col-md-offset-8': {
				marginLeft: '66.66666667%'
			},
			'.col-md-offset-7': {
				marginLeft: '58.33333333%'
			},
			'.col-md-offset-6': {
				marginLeft: '50%'
			},
			'.col-md-offset-5': {
				marginLeft: '41.66666667%'
			},
			'.col-md-offset-4': {
				marginLeft: '33.33333333%'
			},
			'.col-md-offset-3': {
				marginLeft: '25%'
			},
			'.col-md-offset-2': {
				marginLeft: '16.66666667%'
			},
			'.col-md-offset-1': {
				marginLeft: '8.33333333%'
			},
			'.col-md-offset-0': {
				marginLeft: '0%'
			}
		},
		'(min-width: 978px)': {
			'.container': {
				width: 1160
			},
			'.col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12': {
				float: 'left'
			},
			'.col-lg-12': {
				width: '100%'
			},
			'.col-lg-11': {
				width: '91.66666667%'
			},
			'.col-lg-10': {
				width: '83.33333333%'
			},
			'.col-lg-9': {
				width: '75%'
			},
			'.col-lg-8': {
				width: '66.66666667%'
			},
			'.col-lg-7': {
				width: '58.33333333%'
			},
			'.col-lg-6': {
				width: '50%'
			},
			'.col-lg-5': {
				width: '41.66666667%'
			},
			'.col-lg-4': {
				width: '33.33333333%'
			},
			'.col-lg-3': {
				width: '25%'
			},
			'.col-lg-2': {
				width: '16.66666667%'
			},
			'.col-lg-1': {
				width: '8.33333333%'
			},
			'.col-lg-pull-12': {
				right: '100%'
			},
			'.col-lg-pull-11': {
				right: '91.66666667%'
			},
			'.col-lg-pull-10': {
				right: '83.33333333%'
			},
			'.col-lg-pull-9': {
				right: '75%'
			},
			'.col-lg-pull-8': {
				right: '66.66666667%'
			},
			'.col-lg-pull-7': {
				right: '58.33333333%'
			},
			'.col-lg-pull-6': {
				right: '50%'
			},
			'.col-lg-pull-5': {
				right: '41.66666667%'
			},
			'.col-lg-pull-4': {
				right: '33.33333333%'
			},
			'.col-lg-pull-3': {
				right: '25%'
			},
			'.col-lg-pull-2': {
				right: '16.66666667%'
			},
			'.col-lg-pull-1': {
				right: '8.33333333%'
			},
			'.col-lg-pull-0': {
				right: 'auto'
			},
			'.col-lg-push-12': {
				left: '100%'
			},
			'.col-lg-push-11': {
				left: '91.66666667%'
			},
			'.col-lg-push-10': {
				left: '83.33333333%'
			},
			'.col-lg-push-9': {
				left: '75%'
			},
			'.col-lg-push-8': {
				left: '66.66666667%'
			},
			'.col-lg-push-7': {
				left: '58.33333333%'
			},
			'.col-lg-push-6': {
				left: '50%'
			},
			'.col-lg-push-5': {
				left: '41.66666667%'
			},
			'.col-lg-push-4': {
				left: '33.33333333%'
			},
			'.col-lg-push-3': {
				left: '25%'
			},
			'.col-lg-push-2': {
				left: '16.66666667%'
			},
			'.col-lg-push-1': {
				left: '8.33333333%'
			},
			'.col-lg-push-0': {
				left: 'auto'
			},
			'.col-lg-offset-12': {
				marginLeft: '100%'
			},
			'.col-lg-offset-11': {
				marginLeft: '91.66666667%'
			},
			'.col-lg-offset-10': {
				marginLeft: '83.33333333%'
			},
			'.col-lg-offset-9': {
				marginLeft: '75%'
			},
			'.col-lg-offset-8': {
				marginLeft: '66.66666667%'
			},
			'.col-lg-offset-7': {
				marginLeft: '58.33333333%'
			},
			'.col-lg-offset-6': {
				marginLeft: '50%'
			},
			'.col-lg-offset-5': {
				marginLeft: '41.66666667%'
			},
			'.col-lg-offset-4': {
				marginLeft: '33.33333333%'
			},
			'.col-lg-offset-3': {
				marginLeft: '25%'
			},
			'.col-lg-offset-2': {
				marginLeft: '16.66666667%'
			},
			'.col-lg-offset-1': {
				marginLeft: '8.33333333%'
			},
			'.col-lg-offset-0': {
				marginLeft: '0%'
			}
		}
	},
	'.container-fluid': {
		marginRight: 'auto',
		marginLeft: 'auto',
		paddingLeft: 10,
		paddingRight: 10
	},
	'.row': {
		marginLeft: -10,
		marginRight: -10
	},
	'.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12': {
		position: 'relative',
		minHeight: 1,
		paddingLeft: 10,
		paddingRight: 10
	},
	'.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12': {
		float: 'left'
	},
	'.col-xs-12': {
		width: '100%'
	},
	'.col-xs-11': {
		width: '91.66666667%'
	},
	'.col-xs-10': {
		width: '83.33333333%'
	},
	'.col-xs-9': {
		width: '75%'
	},
	'.col-xs-8': {
		width: '66.66666667%'
	},
	'.col-xs-7': {
		width: '58.33333333%'
	},
	'.col-xs-6': {
		width: '50%'
	},
	'.col-xs-5': {
		width: '41.66666667%'
	},
	'.col-xs-4': {
		width: '33.33333333%'
	},
	'.col-xs-3': {
		width: '25%'
	},
	'.col-xs-2': {
		width: '16.66666667%'
	},
	'.col-xs-1': {
		width: '8.33333333%'
	},
	'.col-xs-pull-12': {
		right: '100%'
	},
	'.col-xs-pull-11': {
		right: '91.66666667%'
	},
	'.col-xs-pull-10': {
		right: '83.33333333%'
	},
	'.col-xs-pull-9': {
		right: '75%'
	},
	'.col-xs-pull-8': {
		right: '66.66666667%'
	},
	'.col-xs-pull-7': {
		right: '58.33333333%'
	},
	'.col-xs-pull-6': {
		right: '50%'
	},
	'.col-xs-pull-5': {
		right: '41.66666667%'
	},
	'.col-xs-pull-4': {
		right: '33.33333333%'
	},
	'.col-xs-pull-3': {
		right: '25%'
	},
	'.col-xs-pull-2': {
		right: '16.66666667%'
	},
	'.col-xs-pull-1': {
		right: '8.33333333%'
	},
	'.col-xs-pull-0': {
		right: 'auto'
	},
	'.col-xs-push-12': {
		left: '100%'
	},
	'.col-xs-push-11': {
		left: '91.66666667%'
	},
	'.col-xs-push-10': {
		left: '83.33333333%'
	},
	'.col-xs-push-9': {
		left: '75%'
	},
	'.col-xs-push-8': {
		left: '66.66666667%'
	},
	'.col-xs-push-7': {
		left: '58.33333333%'
	},
	'.col-xs-push-6': {
		left: '50%'
	},
	'.col-xs-push-5': {
		left: '41.66666667%'
	},
	'.col-xs-push-4': {
		left: '33.33333333%'
	},
	'.col-xs-push-3': {
		left: '25%'
	},
	'.col-xs-push-2': {
		left: '16.66666667%'
	},
	'.col-xs-push-1': {
		left: '8.33333333%'
	},
	'.col-xs-push-0': {
		left: 'auto'
	},
	'.col-xs-offset-12': {
		marginLeft: '100%'
	},
	'.col-xs-offset-11': {
		marginLeft: '91.66666667%'
	},
	'.col-xs-offset-10': {
		marginLeft: '83.33333333%'
	},
	'.col-xs-offset-9': {
		marginLeft: '75%'
	},
	'.col-xs-offset-8': {
		marginLeft: '66.66666667%'
	},
	'.col-xs-offset-7': {
		marginLeft: '58.33333333%'
	},
	'.col-xs-offset-6': {
		marginLeft: '50%'
	},
	'.col-xs-offset-5': {
		marginLeft: '41.66666667%'
	},
	'.col-xs-offset-4': {
		marginLeft: '33.33333333%'
	},
	'.col-xs-offset-3': {
		marginLeft: '25%'
	},
	'.col-xs-offset-2': {
		marginLeft: '16.66666667%'
	},
	'.col-xs-offset-1': {
		marginLeft: '8.33333333%'
	},
	'.col-xs-offset-0': {
		marginLeft: '0%'
	},
	'.clearfix:before, .clearfix:after, .container:before, .container:after, .container-fluid:before, .container-fluid:after, .row:before, .row:after': {
		content: '" "',
		display: 'table'
	},
	'.clearfix:after, .container:after, .container-fluid:after, .row:after': {
		clear: 'both'
	},
	'.center-block': {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	'.pull-right': {
		float: 'right'
	},
	'.pull-left': {
		float: 'left'
	},
	'.hide': {
		display: 'none'
	},
	'.show': {
		display: 'block'
	},
	'.invisible': {
		visibility: 'hidden'
	},
	'.text-hide': {
		font: '0/0 a',
		color: 'transparent',
		textShadow: 'none',
		backgroundColor: 'transparent',
		border: 0
	},
	'.hidden': {
		display: 'none'
	},
	'.affix': {
		position: 'fixed'
	}
};