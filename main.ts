////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// EXPORTED CODE
////////////////////////////////////////////////////////////////////////////////////////////////
export interface func0props {
    validate: Function,
    block: Function
}
export const func0 = function(func0props){
    return capsule(
      function(){
        funCvalidate(func0props.block,func0props.validate(arguments));
        return func0props.block(arguments);
      },
      func0props
    );
};
////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// INTERNAL CODE
////////////////////////////////////////////////////////////////////////////////////////////////

const funCvalidate = function(funcBlock,validate) {
const _params = getParams(funcBlock);
return function() {
    return _params.every((e,i)=>{return params[e](arguments[i]);}) && validate(arguments);
};
};
const capsule = function(func,props) {return Object.freeze(Object.assign(func,props));};
const DTypes = (function() {
    const jsDatatypes = ["boolean","number","string","object","function","symbol","array"];
    return Object.values(Object.assign({
            array: Array.isArray
        },
        jsDatatypes.map((e)=>{ return function(data){ typeof data === e }; }))
    );
})();
const getParams = function(func){
const start = func.toString().indexOf("(");
const end   = func.toString().indexOf(")");
return func.toString().slice(start+1,end).split(",");
};
const params = function(){
    let pS = {
        // name: function as string
    func: `$DTypes.function($p)`,
    prop: `$DTypes.string($p)`,
    obj:  `$DTypes.object($p)`,
    cb:   `$Dtypes.function($p)`,
    prop: `$Dtypes.string($p)`,
    val:  `$Dtypes.undefined($p)`
    };
    for (let k in pS) { eval(`pS[k] = function(${k}){ return ${pS[k]}; }`); }
    return pS;
};