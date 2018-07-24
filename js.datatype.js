function isDate 	(value){return value instanceof Date;}// Returns if value is a date object
function isNull 	(value){return value === null;}// Returns if a value is null
function isError 	(value){return value instanceof Error && typeof value.message !== 'undefined';}// Returns if value is an error object
function isArray 	(value){return value && typeof value === 'object' && value.constructor === Array;}// Returns if a value is an arrayArray.isArray(value);// ES5 actually has a method for this (ie9+)
function isNumber 	(value){return typeof value === 'number' && isFinite(value);}// Returns if a value is really a number
function isString	(value){return typeof value === 'string' || value instanceof String;}// Returns if a value is a string
function isObject	(value){return value && typeof value === 'object' && value.constructor === Object;}	// Returns if a value is an object	
function isSymbol	(value){return typeof value === 'symbol';}// Returns if a Symbol
function isRegExp	(value){return value && typeof value === 'object' && value.constructor === RegExp;}// Returns if a value is a regexp
function isBoolean  (value){return typeof value === 'boolean';}// Returns if a value is a boolean
function isFunction (value){return typeof value === 'function';}	// Returns if a value is a function
function isUndefined(value){return typeof value === 'undefined';}// Returns if a value is undefined