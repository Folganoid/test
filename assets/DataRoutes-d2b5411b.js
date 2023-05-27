import{r as h,g as S,a as T,s as A,P as M,_ as b,u as _,b as w,c as H,j as r,d as l,e as $,f as I,C as O,B as J,h as K,i as j,k as Q,l as X,m as P,T as p}from"./index-633b40fa.js";const Y=h.createContext({}),L=Y;function Z(e){return T("MuiAccordion",e)}const ee=S("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),k=ee,oe=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],ne=e=>{const{classes:o,square:a,expanded:d,disabled:c,disableGutters:s}=e;return I({root:["root",!a&&"rounded",d&&"expanded",c&&"disabled",!s&&"gutters"],region:["region"]},Z,o)},se=A(M,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[{[`& .${k.region}`]:o.region},o.root,!a.square&&o.rounded,!a.disableGutters&&o.gutters]}})(({theme:e})=>{const o={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],o),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],o)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${k.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${k.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:o})=>b({},!o.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!o.disableGutters&&{[`&.${k.expanded}`]:{margin:"16px 0"}})),te=h.forwardRef(function(o,a){const d=_({props:o,name:"MuiAccordion"}),{children:c,className:s,defaultExpanded:t=!1,disabled:g=!1,disableGutters:m=!1,expanded:n,onChange:i,square:u=!1,TransitionComponent:C=O,TransitionProps:R}=d,N=w(d,oe),[f,y]=H({controlled:n,default:t,name:"Accordion",state:"expanded"}),v=h.useCallback(F=>{y(!f),i&&i(F,!f)},[f,i,y]),[D,...q]=h.Children.toArray(c),z=h.useMemo(()=>({expanded:f,disabled:g,disableGutters:m,toggle:v}),[f,g,m,v]),G=b({},d,{square:u,disabled:g,disableGutters:m,expanded:f}),V=ne(G);return r(se,b({className:$(V.root,s),ref:a,ownerState:G,square:u},N,{children:[l(L.Provider,{value:z,children:D}),l(C,b({in:f,timeout:"auto"},R,{children:l("div",{"aria-labelledby":D.props.id,id:D.props["aria-controls"],role:"region",className:V.region,children:q})}))]}))}),B=te;function re(e){return T("MuiAccordionDetails",e)}S("MuiAccordionDetails",["root"]);const ae=["className"],ie=e=>{const{classes:o}=e;return I({root:["root"]},re,o)},de=A("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),ce=h.forwardRef(function(o,a){const d=_({props:o,name:"MuiAccordionDetails"}),{className:c}=d,s=w(d,ae),t=d,g=ie(t);return l(de,b({className:$(g.root,c),ref:a,ownerState:t},s))}),E=ce;function le(e){return T("MuiAccordionSummary",e)}const pe=S("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),x=pe,ue=["children","className","expandIcon","focusVisibleClassName","onClick"],fe=e=>{const{classes:o,expanded:a,disabled:d,disableGutters:c}=e;return I({root:["root",a&&"expanded",d&&"disabled",!c&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!c&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]},le,o)},ge=A(J,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{const a={duration:e.transitions.duration.shortest};return b({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],a),[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${x.disabled})`]:{cursor:"pointer"}},!o.disableGutters&&{[`&.${x.expanded}`]:{minHeight:64}})}),me=A("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,o)=>o.content})(({theme:e,ownerState:o})=>b({display:"flex",flexGrow:1,margin:"12px 0"},!o.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${x.expanded}`]:{margin:"20px 0"}})),he=A("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,o)=>o.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${x.expanded}`]:{transform:"rotate(180deg)"}})),be=h.forwardRef(function(o,a){const d=_({props:o,name:"MuiAccordionSummary"}),{children:c,className:s,expandIcon:t,focusVisibleClassName:g,onClick:m}=d,n=w(d,ue),{disabled:i=!1,disableGutters:u,expanded:C,toggle:R}=h.useContext(L),N=v=>{R&&R(v),m&&m(v)},f=b({},d,{expanded:C,disabled:i,disableGutters:u}),y=fe(f);return r(ge,b({focusRipple:!1,disableRipple:!0,disabled:i,component:"div","aria-expanded":C,className:$(y.root,s),focusVisibleClassName:$(y.focusVisible,g),onClick:N,ref:a,ownerState:f},n,{children:[l(me,{className:y.content,ownerState:f,children:c}),t&&l(he,{className:y.expandIconWrapper,ownerState:f,children:t})]}))}),U=be,W=K(l("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");function ye(){const e=j(),o=Q(),{isLoading:a}=X(d=>d.docPanel);return h.useEffect(()=>(o(P(!0)),()=>{o(P(!1))}),[o,a]),l(p,{children:e("docNoData")})}function ve(e){const o=j(),{data:a,style:d}=e,c=a.read();if(c&&c.data&&c.data.__schema&&(c.data.__schema.mutationType||c.data.__schema.queryType)){const s=c.data.__schema.queryType||null,t=c.data.__schema.mutationType||null,g=[],m=[];if(s!=null&&s.fields&&s.fields.length>0)for(let n=0;n<s.fields.length;n+=1){const i={name:"",description:"",kind:"",args:[]};s.fields[n].name&&(i.name=s.fields[n].name),s.fields[n].description&&(i.description=s.fields[n].description||""),s.fields[n].type.name&&(i.name+=`(${s.fields[n].type.name})`),s.fields[n].type.kind&&(i.kind=s.fields[n].type.kind||"");for(let u=0;u<s.fields[n].args.length;u+=1)i.args.push(s.fields[n].args[u].name);g.push(i)}if(t!=null&&t.fields&&t.fields.length>0)for(let n=0;n<t.fields.length;n+=1){const i={name:"",description:"",kind:"",args:[]};t.fields[n].name&&(i.name=t.fields[n].name),t.fields[n].description&&(i.description=t.fields[n].description||""),t.fields[n].type.name&&(i.name+=`(${t.fields[n].type.name})`),t.fields[n].type.kind&&(i.kind=t.fields[n].type.kind||"");for(let u=0;u<t.fields[n].args.length;u+=1)i.args.push(t.fields[n].args[u].name);m.push(i)}return r("div",{style:d,children:[s&&r(B,{children:[r(U,{expandIcon:l(W,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:[r(p,{variant:"h5",children:["query: ",s.name]}),(s==null?void 0:s.description)&&l(p,{variant:"h6",children:s==null?void 0:s.description})]}),l(E,{children:g.map(n=>r(M,{sx:{p:1,m:1},elevation:3,children:[r(p,{variant:"body1",children:[r("strong",{children:[o("docName"),": "]})," ",n.name]}),n.description&&r(p,{variant:"body1",children:[r("strong",{children:[o("docDescription"),": "]})," ",n.description]}),n.kind&&r(p,{variant:"body1",children:[r("strong",{children:[o("docType"),": "]})," ",n.kind]}),r(p,{variant:"body1",children:[r("strong",{children:[o("docArgs"),": "]})," (",n.args.join(","),")"]})]},n.name))})]}),t&&r(B,{children:[r(U,{expandIcon:l(W,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:[r(p,{variant:"h5",children:["mutation: ",t.name]}),(t==null?void 0:t.description)&&l(p,{variant:"h6",children:t==null?void 0:t.description})]}),l(E,{children:m.map(n=>r(M,{sx:{p:1,m:1},elevation:3,children:[r(p,{variant:"body1",children:[r("strong",{children:[o("docName"),": "]})," ",n.name]}),n.description&&r(p,{variant:"body1",children:[r("strong",{children:[o("docDescription"),": "]})," ",n.description]}),n.kind&&r(p,{variant:"body1",children:[r("strong",{children:[o("docType"),": "]})," ",n.kind]}),r(p,{variant:"body1",children:[r("strong",{children:[o("docArgs"),": "]})," (",n.args.join(","),")"]})]},n.name))})]})]})}return l(ye,{})}export{ve as default};