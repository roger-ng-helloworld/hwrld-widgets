import normalise from './normalise-styles';
import reset from './reset-styles';
import bootstrap from './bootstrap-styles';
import helloworld from './helloworld-styles';

let widgetParent = 'hwrld-widget',
	widgetNormaliseReset = {},
	allStyles = [normalise, reset, bootstrap, helloworld],
	globalNormaliseReset = Object.assign({}, ...allStyles);

for (let key in globalNormaliseReset) {
	if (key === 'mediaQueries') {
		widgetNormaliseReset[key] = {};

		for (let firstInnerKey in globalNormaliseReset[key]) {
			widgetNormaliseReset[key][firstInnerKey] = {};

			for (let secondInnerKey in globalNormaliseReset[key][firstInnerKey]) {
				widgetNormaliseReset[key][firstInnerKey][secondInnerKey.replace(/ /ig, '').replace(/^/, '.' + widgetParent + ' ').replace(/,/ig, ', .' + widgetParent + ' ')] = globalNormaliseReset[key][firstInnerKey][secondInnerKey]
			}
		}
	}
	else {
		widgetNormaliseReset[key.replace(/ /ig, '').replace(/^/, '.' + widgetParent + ' ').replace(/,/ig, ', .' + widgetParent + ' ')] = globalNormaliseReset[key];
	}	
};

export default widgetNormaliseReset;