////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// EXPORTED CODE
////////////////////////////////////////////////////////////////////////////////////////////////
export interface params {
    [index: string]: string
}
export interface func0props {
    validate: Function,
    block: Function
}
export interface func0loaderobj {
    funClite: Function,
    params:params
}
export interface paramsLoader {
    (params:params): func0loaderobj
}
let pS = {};
export const paramsLoader:paramsLoader = function(params){

    return {
        funClite: func0,
        params: pS = (function(params_obj) {
            // let pS = { // params_obj
                // name: function as string
                // func: `$DTypes.function($p)`,
                // prop: `$DTypes.string($p)`,
                // obj:  `$DTypes.object($p)`,
                // cb:   `$Dtypes.function($p)`,
                // prop: `$Dtypes.string($p)`,
                // val:  `$Dtypes.undefined($p)`
            // };
            if (!params_obj) {throw new Error();}
            pS = params_obj;
            for (let k in pS) { eval(`pS[k] = function(${k}){ return ${pS[k].replace("$p",k)}; }`); }
            return pS;
        })(params)
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// INTERNAL CODE
////////////////////////////////////////////////////////////////////////////////////////////////
const func0 = function(func0props){
    return capsule(
      function(){
        funCvalidate(func0props.block,func0props.validate(arguments));
        return func0props.block(...arguments);
      },
      func0props
    );
};
const funCvalidate = function(funcBlock,validate) {
    if (typeof funcBlock    !== "function") {throw new Error();}
    if (typeof funCvalidate !== "function") {throw new Error();}
    const _params = getParams(funcBlock);
    return function() {
        return _params.every((e,i)=>{
            return pS[e](arguments[i]);
        }) && validate(arguments);
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
