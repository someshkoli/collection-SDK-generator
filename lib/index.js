const fs = require('fs');
const fetchJson = require('./util').fetchJson;
const generator = require('../sdkgen');
const collectionParser = require('./util').parseCollection;
const variableParser = require('./util').parseVariables;
const _ = require('lodash');
const sdk = require('postman-collection');
const fetch = require('node-fetch');
const {
	parseCollection
} = require('./util');
const converter = require('../postman-code-generators').convert;

/**
 * 
 * @param {String} source - Source for collection url/json/file
 * @param {Object} sdkOptions - options to generate sdk( list of options can be found in getOptions())
 * @param {Object} codeOptions - options for code generator
 * @param {function} callback - callback function
 */
function generate(source, sdkOptions, codeOptions, callback) {
	let collection;
	let snippet;
	if (typeof (source) === 'object') {

		if (sdk.collection.isCollection(source)) {
			collection = source;
		} else {
			fetchJson(source, (err, pmCollection) => {
				if (err) {
					return err;
				}
				collection = pmCollection;
			});
		}
	} else if (source.match(/(https?|chrome):\/\/[^\s$.?#].[^\s]*$/g)) {
		fetch(source, {
				method: 'Get'
			})
			.then((res) => JSON.parse(res))
			.then((collectionJSON) => {
				collection = collectionJSON;
			});
	} else {
		return callback(new Error('invalid collection source'), null);
	}

	parseCollection(collection, (err, pmCollection) => {
		if(err){
			callback(err, null);
		}
		collection = pmCollection;
	})

	snippet = generator(collection, null, null, function (err, snippet) {
		self.sdkSnippet = snippet;
	});

	if (sdkOptions.sdkOptions === 'file') {

	} else {

	}
}

/**
 * Returns list of available options for SDK generator
 * TODO add options : language, variant 
 */
function getSDKOptions() {
	return {
		outputType: {
			name: 'SDK output type',
			id: 'outputType',
			availableOptions: ['file', 'string'],
			default: 'string',
			Description: 'Specifies Type of Output to the generaed SDK'
		}
	};
}

/**
 * Gives available opptions for code generator of specific language and variant
 * TODO complete this function when language map is setted up
 */
function getCodegenOptions(language, variant) {
	return []
}

/**
 * TODO complete this function to get a list of available generators, also create available sdk maintainer
 */
function getLanguageList() {
	console.log(sdkgen);
}

/**
 * [Description]
 * @param {Object} options - options for sdkgenerator/code generator
 * @param {String} type - SDKGEN/CODEGEN
 * TODO Add option validators to validate available options and options provided
 */
function optionValidator(options, type) {

}

module.exports = {
	generate,
	getCodegenOptions,
	getSDKOptions,
};