import{Q as u,f as l,W as v,g as x,r,b as f,_ as o,I as d,D as h,M as b,C as g,T as y,X as T,Y as _}from"./index.0722b9cc.js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}var p=u("Tag"),L=p[0],S=p[1],m=l(function(e,a){var t=v("Tag",e),n=x(e),i=s({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},t.container);return r.exports.createElement(L,{value:t},r.exports.createElement(f.span,s({ref:a},n,{__css:i})))});o&&(m.displayName="Tag");var E=l(function(e,a){var t=S();return r.exports.createElement(f.span,s({ref:a,noOfLines:1},e,{__css:t.label}))});o&&(E.displayName="TagLabel");var I=l(function(e,a){return r.exports.createElement(d,s({ref:a,verticalAlign:"top",marginEnd:"0.5rem"},e))});o&&(I.displayName="TagLeftIcon");var C=l(function(e,a){return r.exports.createElement(d,s({ref:a,verticalAlign:"top",marginStart:"0.5rem"},e))});o&&(C.displayName="TagRightIcon");function O({url:e,token:a}){const[t,n]=r.exports.useState({});return r.exports.useEffect(()=>{(async()=>{const c=await _(e,{headers:{Authorization:`token ${a}`}});n(c.data)})()},[]),h(b,{children:[g(y,{paddingTop:5,paddingBottom:5,fontWeight:"bold",align:"left",alignItems:"baseline",children:"Languages used:"}),g(T,{display:"flex",flexWrap:"wrap",spacing:{base:2,sm:1},children:Object.entries(t).slice(0,3).map(([i,c])=>g(m,{borderRadius:"full",size:{base:"sm",md:"md"},margin:0,variant:"solid",backgroundColor:"#A1BCCF",color:"#334766",children:i},i))})]})}export{O as default};