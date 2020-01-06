import { paramsLoader } from './main';


console.log(paramsLoader);

const params = {
    a: `$p === 'a'`
};

let p = paramsLoader(params);

p.hasOwnProperty("params") || (()=>{throw new Error()})()
p.hasOwnProperty("funClite") || (()=>{throw new Error()})()

console.log(p["params"]["a"].toString())

p["params"]["a"].toString() === "function(a){ return a === 'a'; }" || (()=>{throw new Error()})()

typeof p["funClite"] === "function" || (()=>{throw new Error()})();


let x = p["funClite"]({
    validate: function()  {return "pass"},
    block:    function(a) {return a}
});

x.validate() === "pass" || (()=>{throw new Error()})();
console.log(x.block   ("a"));
x.block   ("a") === "a" || (()=>{throw new Error()})();
console.log(x("a"));
x("a") === "a" || (()=>{throw new Error()})();