"use strict";
exports.__esModule = true;
var main_1 = require("./main");
console.log(main_1.func0Loader);
var params = {
    a: "$p === 'a'"
};
var p = main_1.func0Loader(params);
p.hasOwnProperty("params") || (function () { throw new Error(); })();
p.hasOwnProperty("funClite") || (function () { throw new Error(); })();
console.log(p["params"]["a"].toString());
p["params"]["a"].toString() === "function(a){ return a === 'a'; }" || (function () { throw new Error(); })();
typeof p["funClite"] === "function" || (function () { throw new Error(); })();
var x = p["funClite"]({
    validate: function () { return "pass"; },
    block: function (a) { return a; }
});
x.validate() === "pass" || (function () { throw new Error(); })();
console.log(x.block("a"));
x.block("a") === "a" || (function () { throw new Error(); })();
console.log(x("a"));
x("a") === "a" || (function () { throw new Error(); })();
