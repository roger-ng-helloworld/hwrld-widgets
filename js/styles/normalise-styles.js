export default {
	'article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary': {
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
		backgroundColor: 'transparent'
	},
	'a:active, a:hover': {
		outline: 0
	},
	'abbr[title]': {
		borderBottom: 'none',
		textDecoration: 'underline dotted'
	},
	'b, strong': {
		fontWeight: 'bolder'
	},
	dfn: {
		fontStyle: 'italic'
	},
	h1: {
		fontSize: '2em',
		margin: '0.67em 0'
	},
	mark: {
		backgroundColor: '#ff0',
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
		border: 0
	},
	'svg:not(:root)': {
		overflow: 'hidden'
	},
	figure: {
		margin: '1em 40px'
	},
	hr: {
		boxSizing: 'content-box',
		height: 0,
		overflow: 'visible'
	},
	pre: {
		overflow: 'auto'
	},
	'code, kbd, pre, samp': {
		fontFamily: 'monospace, monospace',
		fontSize: '1em'
	},
	'button, input, optgroup, select, textarea': {
		font: 'inherit',
		margin: 0
	},
	button: {
		overflow: 'visible'
	},
	'button, select': {
		textTransform: 'none'
	},
	'button, html input[type="button"],  input[type="reset"], input[type="submit"]': {
		WebkitAppearance: 'button',
		cursor: 'pointer'
	},
	'button[disabled], html input[disabled]': {
		cursor: 'default'
	},
	'button::-moz-focus-inner, input::-moz-focus-inner': {
		border: 0,
		padding: 0
	},
	'button:-moz-focusring, input:-moz-focusring': {
		outline: '1px dotted ButtonText'
	},
	input: {
		lineHeight: 'normal'
	},
	'input[type="checkbox"], input[type="radio"]': {
		boxSizing: 'border-box',
		padding: 0
	},
	'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button': {
		height: 'auto'
	},
	'input[type="search"]': {
		WebkitAppearance: 'textfield'
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
	}
};