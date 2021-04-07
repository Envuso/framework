// babel.config.js
module.exports = {
	presets : [
		['@babel/preset-env', {targets : {node : 'current'}}],
		'@babel/preset-typescript',
	],
	plugins : [
		["@babel/plugin-proposal-decorators", {decoratorsBeforeExport : true}],
		["@babel/plugin-proposal-class-properties"],
		["@babel/plugin-proposal-private-property-in-object"],
		["babel-plugin-replace-ts-export-assignment"],
		["@babel/plugin-transform-classes", {
			"loose": true
		}]
	],
};
