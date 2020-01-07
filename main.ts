import { params,paramsOBJ } from "../params/main";

////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// EXPORTED CODE
////////////////////////////////////////////////////////////////////////////////////////////////
export interface func0props {
    validate: Function,
    block: Function
}
export interface func0loaderobj {
    funClite: Function,
    paramsOBJ:paramsOBJ
}
export interface func0Loader {
    (paramsOBJ:paramsOBJ): func0loaderobj
}
let pS = {};
export const func0Loader:func0Loader = function(paramsOBJ){

    return {
        funClite: func0,
        paramsOBJ: (pS = params(paramsOBJ))
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
