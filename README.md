# funClite
The bare minimum version of repository funC

# Why

* nicely enforce strong codebase design patterns
* reduces programming languages anti-pattern nature
* shrinks codebase by less than 1/3 & more
* positively influences pyschology because of clean code

# CODE DEMO

console.log(func0Loader);

/* params
    * unique names
    * loads before funClite ... reduces codebase confusions
    * "$p" is replaced by the param
*/
const params = {
    obj: `typeof $p === 'object'`,
    val: `typeof $p !== 'undefined'`,
    int: `Number.isSafeInteger($p)`,
    str: `typeof $p ==='string' && string.length !== 0`
};

const funC0loader = func0Loader(params);

const f = funC0loader;

console.log(f.params) // exact replica of params but transformed into functions

const print = f.funClite({
    validate: function(){},
    block:    function(val){return console.log(val),val;}
});

let funcs = {};

for (let k in params) {
    funcs['print'+k] = f.funClite({
        validate: function() { console.log("validating "+k); },
        block:    function() { console.log("printing "+k); print(k); }
    });
}
Object.freeze(funcs);

console.log(funcs);

print.validate("beep");
print.block("boop");

print("boop");

Object.values(func).forEach((e,i)=>{
    try {
        e();
        console.log("failed",i);
    } catch (e) {
        console.log("passed");
    }
}); 






