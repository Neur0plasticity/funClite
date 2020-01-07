"use strict";
exports.__esModule = true;
var main_1 = require("../params/main");
var pS = {};
exports.func0Loader = function (paramsOBJ) {
    return {
        funClite: func0,
        paramsOBJ: (pS = main_1.params(paramsOBJ))
    };
};
////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// INTERNAL CODE
////////////////////////////////////////////////////////////////////////////////////////////////
var func0 = function (func0props) {
    return capsule(function () {
        funCvalidate(func0props.block, func0props.validate(arguments));
        return func0props.block.apply(func0props, arguments);
    }, func0props);
};
var funCvalidate = function (funcBlock, validate) {
    if (typeof funcBlock !== "function") {
        throw new Error();
    }
    if (typeof funCvalidate !== "function") {
        throw new Error();
    }
    var _params = getParams(funcBlock);
    return function () {
        return _params.every(function (e, i) {
            return pS[e](arguments[i]);
        }) && validate(arguments);
    };
};
var capsule = function (func, props) { return Object.freeze(Object.assign(func, props)); };
var DTypes = (function () {
    var jsDatatypes = ["boolean", "number", "string", "object", "function", "symbol", "array"];
    return Object.values(Object.assign({
        array: Array.isArray
    }, jsDatatypes.map(function (e) { return function (data) { typeof data === e; }; })));
})();
var getParams = function (func) {
    var start = func.toString().indexOf("(");
    var end = func.toString().indexOf(")");
    return func.toString().slice(start + 1, end).split(",");
};
