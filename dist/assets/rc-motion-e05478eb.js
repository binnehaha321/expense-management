import{e as ce,d as N,b as T,f as d,k as Le,l as _e,a as Me,_ as Pe,m as Se,h as ye,g as ze}from"./@babel-49503037.js";import{r as u}from"./react-4213cd65.js";import{c as ve,o as he,x as Z,j as qe,s as Be,I as Ge}from"./rc-util-f7587060.js";import{c as He}from"./classnames-96ac3354.js";function Ae(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit".concat(n)]="webkit".concat(e),t["Moz".concat(n)]="moz".concat(e),t["ms".concat(n)]="MS".concat(e),t["O".concat(n)]="o".concat(e.toLowerCase()),t}function Je(n,e){var t={animationend:Ae("Animation","AnimationEnd"),transitionend:Ae("Transition","TransitionEnd")};return n&&("AnimationEvent"in e||delete t.animationend.animation,"TransitionEvent"in e||delete t.transitionend.transition),t}var Xe=Je(ve(),typeof window<"u"?window:{}),be={};if(ve()){var Ye=document.createElement("div");be=Ye.style}var H={};function xe(n){if(H[n])return H[n];var e=Xe[n];if(e)for(var t=Object.keys(e),r=t.length,a=0;a<r;a+=1){var s=t[a];if(Object.prototype.hasOwnProperty.call(e,s)&&s in be)return H[n]=e[s],H[n]}return""}var Oe=xe("animationend"),Ne=xe("transitionend"),De=!!(Oe&&Ne),ge=Oe||"animationend",Te=Ne||"transitionend";function ke(n,e){if(!n)return null;if(ce(n)==="object"){var t=e.replace(/-\w/g,function(r){return r[1].toUpperCase()});return n[t]}return"".concat(n,"-").concat(e)}var K="none",J="appear",X="enter",Y="leave",Ce="none",_="prepare",U="start",Q="active",fe="end";const Ze=function(){var n=u.useRef(null);function e(){he.cancel(n.current)}function t(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;e();var s=he(function(){a<=1?r({isCanceled:function(){return s!==n.current}}):t(r,a-1)});n.current=s}return u.useEffect(function(){return function(){e()}},[]),[t,e]};var Ve=ve()?u.useLayoutEffect:u.useEffect,Re=[_,U,Q,fe],we=!1,en=!0;function Ie(n){return n===Q||n===fe}const nn=function(n,e){var t=Z(Ce),r=N(t,2),a=r[0],s=r[1],i=Ze(),m=N(i,2),y=m[0],o=m[1];function c(){s(_,!0)}return Ve(function(){if(a!==Ce&&a!==fe){var v=Re.indexOf(a),f=Re[v+1],l=e(a);l===we?s(f,!0):y(function(h){function C(){h.isCanceled()||s(f,!0)}l===!0?C():Promise.resolve(l).then(C)})}},[n,a]),u.useEffect(function(){return function(){o()}},[]),[c,a]},tn=function(n){var e=u.useRef(),t=u.useRef(n);t.current=n;var r=u.useCallback(function(i){t.current(i)},[]);function a(i){i&&(i.removeEventListener(Te,r),i.removeEventListener(ge,r))}function s(i){e.current&&e.current!==i&&a(e.current),i&&i!==e.current&&(i.addEventListener(Te,r),i.addEventListener(ge,r),e.current=i)}return u.useEffect(function(){return function(){a(e.current)}},[]),[s,a]};function rn(n,e,t,r){var a=r.motionEnter,s=a===void 0?!0:a,i=r.motionAppear,m=i===void 0?!0:i,y=r.motionLeave,o=y===void 0?!0:y,c=r.motionDeadline,v=r.motionLeaveImmediately,f=r.onAppearPrepare,l=r.onEnterPrepare,h=r.onLeavePrepare,C=r.onAppearStart,R=r.onEnterStart,k=r.onLeaveStart,w=r.onAppearActive,M=r.onEnterActive,P=r.onLeaveActive,b=r.onAppearEnd,L=r.onEnterEnd,D=r.onLeaveEnd,V=r.onVisibleChanged,q=Z(),x=N(q,2),p=x[0],I=x[1],j=Z(K),O=N(j,2),A=O[0],$=O[1],W=Z(null),le=N(W,2),je=le[0],de=le[1],ee=u.useRef(!1),ne=u.useRef(null);function B(){return t()}var me=u.useRef(!1);function pe(E){var S=B();if(!(E&&!E.deadline&&E.target!==S)){var g=me.current,G;A===J&&g?G=b==null?void 0:b(S,E):A===X&&g?G=L==null?void 0:L(S,E):A===Y&&g&&(G=D==null?void 0:D(S,E)),A!==K&&g&&G!==!1&&($(K,!0),de(null,!0))}}var Fe=tn(pe),Ke=N(Fe,1),Ue=Ke[0],z=u.useMemo(function(){var E,S,g;switch(A){case J:return E={},T(E,_,f),T(E,U,C),T(E,Q,w),E;case X:return S={},T(S,_,l),T(S,U,R),T(S,Q,M),S;case Y:return g={},T(g,_,h),T(g,U,k),T(g,Q,P),g;default:return{}}},[A]),Qe=nn(A,function(E){if(E===_){var S=z[_];return S?S(B()):we}if(F in z){var g;de(((g=z[F])===null||g===void 0?void 0:g.call(z,B(),null))||null)}return F===Q&&(Ue(B()),c>0&&(clearTimeout(ne.current),ne.current=setTimeout(function(){pe({deadline:!0})},c))),en}),Ee=N(Qe,2),$e=Ee[0],F=Ee[1],We=Ie(F);me.current=We,Ve(function(){I(e);var E=ee.current;if(ee.current=!0,!!n){var S;!E&&e&&m&&(S=J),E&&e&&s&&(S=X),(E&&!e&&o||!E&&v&&!e&&o)&&(S=Y),S&&($(S),$e())}},[e]),u.useEffect(function(){(A===J&&!m||A===X&&!s||A===Y&&!o)&&$(K)},[m,s,o]),u.useEffect(function(){return function(){ee.current=!1,clearTimeout(ne.current)}},[]);var te=u.useRef(!1);u.useEffect(function(){p&&(te.current=!0),p!==void 0&&A===K&&((te.current||p)&&(V==null||V(p)),te.current=!0)},[p,A]);var re=je;return z[_]&&F===U&&(re=d({transition:"none"},re)),[A,F,re,p??e]}var an=function(n){Le(t,n);var e=_e(t);function t(){return Me(this,t),e.apply(this,arguments)}return Pe(t,[{key:"render",value:function(){return this.props.children}}]),t}(u.Component);function on(n){var e=n;ce(n)==="object"&&(e=n.transitionSupport);function t(a){return!!(a.motionName&&e)}var r=u.forwardRef(function(a,s){var i=a.visible,m=i===void 0?!0:i,y=a.removeOnLeave,o=y===void 0?!0:y,c=a.forceRender,v=a.children,f=a.motionName,l=a.leavedClassName,h=a.eventProps,C=t(a),R=u.useRef(),k=u.useRef();function w(){try{return R.current instanceof HTMLElement?R.current:Ge(k.current)}catch{return null}}var M=rn(C,m,w,a),P=N(M,4),b=P[0],L=P[1],D=P[2],V=P[3],q=u.useRef(V);V&&(q.current=!0);var x=u.useCallback(function(W){R.current=W,qe(s,W)},[s]),p,I=d(d({},h),{},{visible:m});if(!v)p=null;else if(b===K||!t(a))V?p=v(d({},I),x):!o&&q.current&&l?p=v(d(d({},I),{},{className:l}),x):c||!o&&!l?p=v(d(d({},I),{},{style:{display:"none"}}),x):p=null;else{var j,O;L===_?O="prepare":Ie(L)?O="active":L===U&&(O="start"),p=v(d(d({},I),{},{className:He(ke(f,b),(j={},T(j,ke(f,"".concat(b,"-").concat(O)),O),T(j,f,typeof f=="string"),j)),style:D}),x)}if(u.isValidElement(p)&&Be(p)){var A=p,$=A.ref;$||(p=u.cloneElement(p,{ref:x}))}return u.createElement(an,{ref:k},p)});return r.displayName="CSSMotion",r}const un=on(De);var ie="add",oe="keep",ue="remove",ae="removed";function sn(n){var e;return n&&ce(n)==="object"&&"key"in n?e=n:e={key:n},d(d({},e),{},{key:String(e.key)})}function se(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return n.map(sn)}function cn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=[],r=0,a=e.length,s=se(n),i=se(e);s.forEach(function(o){for(var c=!1,v=r;v<a;v+=1){var f=i[v];if(f.key===o.key){r<v&&(t=t.concat(i.slice(r,v).map(function(l){return d(d({},l),{},{status:ie})})),r=v),t.push(d(d({},f),{},{status:oe})),r+=1,c=!0;break}}c||t.push(d(d({},o),{},{status:ue}))}),r<a&&(t=t.concat(i.slice(r).map(function(o){return d(d({},o),{},{status:ie})})));var m={};t.forEach(function(o){var c=o.key;m[c]=(m[c]||0)+1});var y=Object.keys(m).filter(function(o){return m[o]>1});return y.forEach(function(o){t=t.filter(function(c){var v=c.key,f=c.status;return v!==o||f!==ue}),t.forEach(function(c){c.key===o&&(c.status=oe)})}),t}var vn=["component","children","onVisibleChanged","onAllRemoved"],fn=["status"],ln=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function dn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:un,t=function(r){Le(s,r);var a=_e(s);function s(){var i;Me(this,s);for(var m=arguments.length,y=new Array(m),o=0;o<m;o++)y[o]=arguments[o];return i=a.call.apply(a,[this].concat(y)),T(Se(i),"state",{keyEntities:[]}),T(Se(i),"removeKey",function(c){var v=i.state.keyEntities,f=v.map(function(l){return l.key!==c?l:d(d({},l),{},{status:ae})});return i.setState({keyEntities:f}),f.filter(function(l){var h=l.status;return h!==ae}).length}),i}return Pe(s,[{key:"render",value:function(){var m=this,y=this.state.keyEntities,o=this.props,c=o.component,v=o.children,f=o.onVisibleChanged,l=o.onAllRemoved,h=ye(o,vn),C=c||u.Fragment,R={};return ln.forEach(function(k){R[k]=h[k],delete h[k]}),delete h.keys,u.createElement(C,h,y.map(function(k){var w=k.status,M=ye(k,fn),P=w===ie||w===oe;return u.createElement(e,ze({},R,{key:M.key,visible:P,eventProps:M,onVisibleChanged:function(L){if(f==null||f(L,{key:M.key}),!L){var D=m.removeKey(M.key);D===0&&l&&l()}}}),v)}))}}],[{key:"getDerivedStateFromProps",value:function(m,y){var o=m.keys,c=y.keyEntities,v=se(o),f=cn(c,v);return{keyEntities:f.filter(function(l){var h=c.find(function(C){var R=C.key;return l.key===R});return!(h&&h.status===ae&&l.status===ue)})}}}]),s}(u.Component);return T(t,"defaultProps",{component:"div"}),t}const yn=dn(De);export{un as C,yn as a};
