!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="docs",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(4),u=o(l),d=n(2),s=o(d),f=function(e){function t(n){r(this,t);var o=i(this,e.call(this,n));return o.onClick=o.onClick.bind(o),o}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.text!==e.text},t.prototype.onClick=function(e){console.log("Clicked"+this.props.text),e.stopPropagation()},t.prototype.render=function(){return u.default.createVNode(2,"td",{className:"TableCell"},this.props.text,{onClick:this.onClick})},t}(s.default),c=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){for(var e=this.props.data,t=e.active?"TableRow active":"TableRow",n=e.props,o=[],r=0;r<n.length;r++)o.push(u.default.createVNode(16,f,{text:n[r]},null,null,r));return u.default.createVNode(2,"tr",{className:t,"data-id":e.id},[u.default.createVNode(16,f,{text:"#"+e.id}),o])},t}(s.default),p=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){for(var e=this.props.data.items,t=[],n=0;n<e.length;n++){var o=e[n];t.push(u.default.createVNode(16,c,{data:o},null,null,o.id))}return u.default.createVNode(2,"table",{className:"Table"},u.default.createVNode(2,"tbody",null,t))},t}(s.default),h=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){var e=this.props.data,t=e.time,n={borderRadius:(t%10).toString()+"px",background:"rgba(0,0,0,"+(.5+t%10/10).toString()+")"};return u.default.createVNode(2,"div",{className:"AnimBox","data-id":e.id,style:n})},t}(s.default),v=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){for(var e=this.props.data.items,t=[],n=0;n<e.length;n++){var o=e[n];t.push(u.default.createVNode(16,h,{data:o},null,null,o.id))}return u.default.createVNode(2,"div",{className:"Anim"},t)},t}(s.default),m=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){return u.default.createVNode(2,"li",{className:"TreeLeaf"},this.props.data.id)},t}(s.default),y=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){for(var e=this.props.data,n=[],o=0;o<e.children.length;o++){var r=e.children[o];r.container?n.push(u.default.createVNode(16,t,{data:r},null,null,r.id)):n.push(u.default.createVNode(16,m,{data:r},null,null,r.id))}return u.default.createVNode(2,"ul",{className:"TreeNode"},n)},t}(s.default),g=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){return u.default.createVNode(2,"div",{className:"Tree"},u.default.createVNode(16,y,{data:this.props.data.root}))},t}(s.default),_=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.props.data!==e.data},t.prototype.render=function(){var e,t=this.props.data,n=t.location;return"table"===n?e=u.default.createVNode(16,p,{data:t.table}):"anim"===n?e=u.default.createVNode(16,v,{data:t.anim}):"tree"===n&&(e=u.default.createVNode(16,g,{data:t.tree})),u.default.createVNode(2,"div",{className:"Main"},e)},t}(s.default);uibench.init("Inferno [simple]","1.0.0-beta32"),u.default.disableRecycling(),document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector("#App");uibench.run(function(e){u.default.render(u.default.createVNode(16,_,{data:e}),t)},function(e){u.default.render(u.default.createVNode(2,"pre",null,JSON.stringify(e,null," ")),t)})})},function(e,t,n){/*!
	 * inferno v1.0.0-beta32
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
!function(e,n){n(t)}(this,function(e){"use strict";function t(e){return!f(e.prototype)&&!f(e.prototype.render)}function n(e){return l(e)||u(e)}function o(e){return f(e)||d(e)}function r(e){return d(e)||e===!1||s(e)||f(e)}function i(e){return"function"==typeof e}function a(e){return"o"===e[0]&&"n"===e[1]&&e.length>3}function l(e){return"string"==typeof e}function u(e){return"number"==typeof e}function d(e){return null===e}function s(e){return e===!0}function f(e){return void 0===e}function c(e){return"object"==typeof e}function p(e){throw e||(e=ct),new Error("Inferno Error: "+e)}function h(e,t){for(var n=[],i=arguments.length-2;i-- >0;)n[i]=arguments[i+2];var a=n;n.length>0&&!d(n[0])&&(t||(t={}),1===n.length&&(a=n[0]),f(t.children)?t.children=a:ht(a)?ht(t.children)?t.children=t.children.concat(a):t.children=[t.children].concat(a):ht(t.children)?t.children.push(a):(t.children=[t.children],t.children.push(a))),a=null;var l,u=e.flags,s=e.events||t&&t.events||null;if(ht(e))l=e.map(function(e){return h(e)});else if(o(t)&&o(a))l=Object.assign({},e);else{var c=o(e.key)?t.key:e.key,p=e.ref||t.ref;28&u?l=N(u,e.type,Object.assign({},e.props,t),null,s,c,p,!0):3970&u&&(a=t&&t.children||e.children,l=N(u,e.type,Object.assign({},e.props,t),a,s,c,p,!a))}if(28&u){var v=l.props;if(v){var m=v.children;if(m)if(ht(m))for(var y=0;y<m.length;y++){var g=m[y];!r(g)&&C(g)&&(v.children[y]=h(g))}else C(m)&&(v.children=h(m))}l.children=null}return l.dom=null,l}function v(e,t,o){for(;o<e.length;o++){var i=e[o];r(i)||(Array.isArray(i)?v(i,t,0):(n(i)?i=b(i):C(i)&&i.dom&&(i=h(i)),t.push(i)))}}function m(e){var t;e.$?e=e.slice():e.$=!0;for(var o=0;o<e.length;o++){var i=e[o];if(r(i))t||(t=e.slice(0,o)),t.push(i);else{if(Array.isArray(i)){var a=(t||e).slice(0,o);return v(e,a,o),a}n(i)?(t||(t=e.slice(0,o)),t.push(b(i))):C(i)&&i.dom?(t||(t=e.slice(0,o)),t.push(h(i))):t&&t.push(h(i))}}return t||e}function y(e){return ht(e)?m(e):C(e)&&e.dom?h(e):e}function g(e,t,n){28&e.flags||!o(n)||o(t.children)||(e.children=t.children),t.ref&&(e.ref=t.ref),t.events&&(e.events=t.events),o(t.key)||(e.key=t.key)}function _(e){var t=e.props,n=e.children;l(e.type)&&28&e.flags&&(e.flags=3970),t&&g(e,t,n),r(n)||(e.children=y(n)),t&&!r(t.children)&&(t.children=y(t.children))}function N(e,n,o,r,i,a,l,u){16&e&&(e=t(n)?4:8);var d={children:f(r)?null:r,dom:null,events:i||null,flags:e||0,key:void 0===a?null:a,props:o||null,ref:l||null,type:n};return u||_(d),d}function k(){return N(4096)}function b(e){return N(1,null,null,e)}function C(e){return!!e.flags}function S(){return yt.id++}function w(e,t){var n=new CustomEvent("inferno.client.message",{detail:JSON.stringify(t,function(e,t){if(!d(t)&&!f(t)){if("_vComponent"===e||!f(t.nodeType))return;if(i(t))return"$$f:"+t.name}return t})});e.dispatchEvent(n)}function x(){for(var e=0;e<Pt.length;e++){var t=Pt[e];ut(t.input,t.dom)}}function U(e){e.__INFERNO_DEVTOOLS_GLOBAL_HOOK__=Pt,e.addEventListener("inferno.devtools.message",function(t){var n=JSON.parse(t.detail),o=n.type;switch(o){case"get-roots":mt.connected||(mt.connected=!0,x(),O(e))}})}function O(e){w(e,{type:"roots",data:Pt})}function M(e,t,n){e.split(",").forEach(function(e){return t[e]=n})}function V(e,t,n,o){var r=Vt.get(e);if(n){if(!r){r={items:new Map,count:0,docEvent:null};var i=I(e,r);r.docEvent=i,Vt.set(e,r)}t||r.count++,r.items.set(o,n)}else r&&r.items.has(o)&&(r.count--,r.items.delete(o),0===r.count&&(document.removeEventListener(E(e),r.docEvent),Vt.delete(e)))}function T(e,t,n,o,r){var i=n.get(t);if(!i||(o--,r.dom=t,i.event?i.event(i.data,e):i(e),!r.stopPropagation)){var a=t.parentNode;o>0&&(a||a===document.body)&&T(e,a,n,o,r)}}function E(e){return e.substr(2).toLowerCase()}function I(e,t){var n=function(e){var n={stopPropagation:!1,dom:document};Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),e.stopPropagation=function(){n.stopPropagation=!0};var o=t.count;o>0&&T(e,e.target,t.items,o,n)};return document.addEventListener(E(e),n),n}function D(e){return"checkbox"===e||"radio"===e}function P(e){var t=D(e.type);return t?!o(e.checked):!o(e.value)}function R(e){var t=this.vNode,n=t.events||vt,o=t.dom;n.onInput?n.onInput(e):n.oninput&&n.oninput(e),j(this.vNode,o)}function A(e){var t=this.vNode,n=t.events||vt,o=t.dom;n.onClick?n.onClick(e):n.onclick&&n.onclick(e),j(this.vNode,o)}function L(e){var t=document.querySelectorAll('input[type="radio"][name="'+e+'"]');[].forEach.call(t,function(e){var t=Tt.get(e);if(t){var n=t.vNode.props;n&&(e.checked=t.vNode.props.checked)}})}function W(e,t){var n=e.props||vt;if(j(e,t),P(n)){var o=Tt.get(t);o||(o={vNode:e},D(n.type)?(t.onclick=A.bind(o),t.onclick.wrapped=!0):(t.oninput=R.bind(o),t.oninput.wrapped=!0),Tt.set(t,o)),o.vNode=e}}function j(e,t){var n=e.props||vt,r=n.type,i=n.value,a=n.checked;r!==t.type&&r&&(t.type=r),n.multiple!==t.multiple&&(t.multiple=n.multiple),D(r)?(o(i)||(t.value=i),t.checked=a,"radio"===r&&n.name&&L(n.name)):o(i)||t.value===i?o(a)||(t.checked=a):t.value=i}function B(e){return!o(e.value)}function G(e,t){var n=e.props||vt,o=e.dom;o.value=n.value,ht(t)&&t.indexOf(n.value)!==-1||n.value===t?o.selected=!0:o.selected=n.selected||!1}function J(e){var t=this.vNode,n=t.events||vt,o=t.dom;n.onChange?n.onChange(e):n.onchange&&n.onchange(e),F(this.vNode,o)}function K(e,t){var n=e.props||vt;if(F(e,t),B(n)){var o=Tt.get(t);o||(o={vNode:e},t.onchange=J.bind(o),t.onchange.wrapped=!0,Tt.set(t,o)),o.vNode=e}}function F(e,t){var n=e.props||vt;n.multiple!==t.multiple&&(t.multiple=n.multiple);var o=e.children,r=n.value;if(ht(o))for(var i=0;i<o.length;i++)G(o[i],r);else C(o)&&G(o,r)}function Y(e){return!o(e.value)}function $(e){var t=this.vNode,n=t.events||vt,o=t.dom;n.onInput?n.onInput(e):n.oninput&&n.oninput(e),q(this.vNode,o)}function H(e,t){var n=e.props||vt;q(e,t);var o=Tt.get(t);Y(n)&&(o||(o={vNode:e},t.oninput=$.bind(o),t.oninput.wrapped=!0,Tt.set(t,o)),o.vNode=e)}function q(e,t){var n=e.props||vt,o=n.value;t.value!==o&&(t.value=o)}function z(e,t,n){512&e?W(t,n):2048&e?K(t,n):1024&e&&H(t,n)}function X(e,t,n,o,r,i){var a=e.flags;28&a?Z(e,t,n,o,r,i):3970&a?ee(e,t,n,o,r,i):4097&a&&Q(e,t)}function Q(e,t){t&&Fe(t,e.dom)}function Z(e,t,n,r,i,a){var l=e.children,u=e.flags,d=4&u,s=e.ref,f=e.dom;if(!a){if(!i)if(d){var c=l._lifecycle;c.fastUnmount||X(l._lastInput,null,n,!1,i,a)}else n.fastUnmount||X(l,null,n,!1,i,a);d?(l._ignoreSetState=!0,l.componentWillUnmount(),s&&!a&&s(null),l._unmounted=!0,At&&Rt.delete(l)):o(s)||o(s.onComponentWillUnmount)||s.onComponentWillUnmount(f)}if(t){var p=l._lastInput;o(p)&&(p=l),Fe(t,f)}Et&&!d&&(t||r)&&Ce(e)}function ee(e,t,n,r,i,a){var l=e.dom,u=e.ref,s=e.events;if(!i&&!n.fastUnmount){u&&!a&&ne(u);var f=e.children;o(f)||te(f,n,i,a)}if(!d(s))for(var c in s)ve(c,s[c],null,l,n),s[c]=null;t&&Fe(t,l),Et&&(t||r)&&ke(e)}function te(e,t,n,o){if(ht(e))for(var i=0;i<e.length;i++){var a=e[i];!r(a)&&c(a)&&X(a,null,t,!1,n,o)}else c(e)&&X(e,null,t,!1,n,o)}function ne(e){if(i(e))e(null);else{if(r(e))return;p()}}function oe(e,t,n,o,r,i,a){if(e!==t){var l=e.flags,u=t.flags;28&u?28&l?le(e,t,n,o,r,i,4&u,a):Re(n,Me(t,null,o,r,i,4&u),e,o,a):3970&u?3970&l?ie(e,t,n,o,r,i,a):Re(n,Ue(t,null,o,r,i),e,o,a):1&u?1&l?ue(e,t):Re(n,we(t,null),e,o,a):4096&u?4096&l?de(e,t):Re(n,xe(t,null),e,o,a):Pe(e,t,n,o,r,i,a)}}function re(e,t,n,o){C(e)?X(e,t,n,!0,!1,o):ht(e)?Ye(t,e,n,!1,o):t.textContent=""}function ie(e,t,n,o,r,i,a){var l=t.type,u=e.type;if(u!==l)Je(e,t,n,o,r,i,a);else{var d=e.dom,s=e.props,f=t.props,c=e.children,p=t.children,h=e.flags,v=t.flags,m=e.ref,y=t.ref,g=e.events,_=t.events;t.dom=d,(i||128&v)&&(i=!0),c!==p&&ae(h,v,c,p,d,o,r,i,a),2&v||z(v,t,d),s!==f&&me(s,f,d,o,r,i),g!==_&&he(g,_,d,o),y&&(m!==y||a)&&Ee(d,y,o)}}function ae(e,t,o,i,a,l,u,d,s){var f=!1,c=!1;64&t?f=!0:32&e&&32&t?(c=!0,f=!0):r(i)?re(o,a,l,s):r(o)?n(i)?Le(a,i):ht(i)?Oe(i,a,l,u,d):Se(i,a,l,u,d):n(i)?n(o)?We(a,i):(re(o,a,l,s),Le(a,i)):ht(i)?ht(o)?(f=!0,He(o,i)&&(c=!0)):(re(o,a,l,s),Oe(i,a,l,u,d)):ht(o)?(Ye(a,o,l,!1,s),Se(i,a,l,u,d)):C(i)?C(o)?oe(o,i,a,l,u,d,s):(re(o,a,l,s),Se(i,a,l,u,d)):C(o),f&&(c?fe(o,i,a,l,u,d,s):se(o,i,a,l,u,d,s))}function le(e,t,n,i,a,l,u,s){var v=e.type,m=t.type,y=t.props||vt,g=e.key,_=t.key;if(v!==m)if(u)Je(e,t,n,i,a,l,s);else{var N=e.children._lastInput||e.children,b=Ae(t,m,y,a);oe(N,b,n,i,a,l,s);var C=t.dom=b.dom;t.children=b,Te(t.ref,C,i),X(e,null,i,!1,!0,s)}else if(u){if(g!==_)return Je(e,t,n,i,a,l,s),!1;var w=e.children;if(w._unmounted){if(d(n))return!0;Ke(n,Me(t,null,i,a,l,4&t.flags),e.dom)}else{var x=m.defaultProps,U=w.props;w._devToolsStatus.connected&&!w._devToolsId&&gt.set(w._devToolsId=S(),w),i.fastUnmount=!1,f(x)||(Ie(U,y),t.props=y);var O=w.state,M=w.state,V=w.getChildContext();t.children=w,w._isSVG=l,V=o(V)?a:Object.assign({},a,V);var T=w._lastInput,E=w._updateComponent(O,M,U,y,a,!1),I=!0;if(w._childContext=V,r(E)?E=k():ht(E)?p():E===ft?(E=T,I=!1):c(E)&&E.dom&&(E=h(E)),28&E.flags?E.parentVNode=t:28&T.flags&&(T.parentVNode=t),w._lastInput=E,w._vNode=t,I){var D=i.fastUnmount,P=w._lifecycle;i.fastUnmount=P.fastUnmount,oe(T,E,n,i,V,l,s),P.fastUnmount=i.unmount,i.fastUnmount=D,w.componentDidUpdate(U,O),At&&Rt.set(w,E.dom)}t.dom=E.dom}}else{var R=!0,A=e.props,L=t.ref,W=!o(L),j=e.children,B=j;t.dom=e.dom,t.children=j,g!==_?R=!0:W&&!o(L.onComponentShouldUpdate)&&(R=L.onComponentShouldUpdate(A,y)),R!==!1&&(W&&!o(L.onComponentWillUpdate)&&(i.fastUnmount=!1,L.onComponentWillUpdate(A,y)),B=m(y,a),r(B)?B=k():ht(B)?p():c(B)&&B.dom&&(B=h(B)),B!==ft&&(oe(j,B,n,i,a,l,s),t.children=B,W&&!o(L.onComponentDidUpdate)&&(i.fastUnmount=!1,L.onComponentDidUpdate(A,y)),t.dom=B.dom)),28&B.flags?B.parentVNode=t:28&j.flags&&(j.parentVNode=t)}return!1}function ue(e,t){var n=t.children,o=e.dom;t.dom=o,e.children!==n&&(o.nodeValue=n)}function de(e,t){t.dom=e.dom}function se(e,t,n,o,i,a,l){var u,d,s=e.length,f=t.length,c=s>f?f:s,p=null;if(s<f)for(u=f-1;u>=c;u--){var v=t[u];r(v)||(v.dom&&(t[u]=v=h(v)),d=Se(v,null,o,i,a),Be(n,d,p),p=d)}else if(0===f)Ye(n,e,o,!1,l);else if(s>f)for(u=c;u<s;u++){var m=e[u];r(m)||X(e[u],n,o,!1,!1,l)}for(u=c-1;u>=0;u--){var y=e[u],g=t[u];r(g)?r(y)||X(y,n,o,!0,!1,l):(g.dom&&(t[u]=g=h(g)),r(y)?(d=Se(g,null,o,i,a),Be(n,d,p),p=d):(oe(y,g,n,o,i,a,l),p=g.dom))}}function fe(e,t,n,o,r,i,a){var l,u,s,c,p,v,m,y=e.length,g=t.length,_=y-1,N=g-1,k=0,b=0;if(0===y)return void(0!==g&&Oe(t,n,o,r,i));if(0===g)return void Ye(n,e,o,!1,a);var C=e[k],S=t[b],w=e[_],x=t[N];S.dom&&(t[b]=S=h(S)),x.dom&&(t[N]=x=h(x));e:for(;;){for(;C.key===S.key;){if(oe(C,S,n,o,r,i,a),k++,b++,k>_||b>N)break e;C=e[k],S=t[b],S.dom&&(t[b]=S=h(S))}for(;w.key===x.key;){if(oe(w,x,n,o,r,i,a),_--,N--,k>_||b>N)break e;w=e[_],x=t[N],x.dom&&(t[N]=x=h(x))}if(w.key!==S.key){if(C.key!==x.key)break;oe(C,x,n,o,r,i,a),v=N+1,p=v<t.length?t[v].dom:null,Be(n,x.dom,p),k++,N--,C=e[k],x=t[N],x.dom&&(t[N]=x=h(x))}else oe(w,S,n,o,r,i,a),Be(n,S.dom,C.dom),_--,b++,w=e[_],S=t[b],S.dom&&(t[b]=S=h(S))}if(k>_){if(b<=N)for(v=N+1,p=v<t.length?t[v].dom:null;b<=N;)m=t[b],m.dom&&(t[b]=m=h(m)),b++,Be(n,Se(m,null,o,r,i),p)}else if(b>N)for(;k<=_;)X(e[k++],n,o,!1,!1,a);else{y=_-k+1,g=N-b+1;var U=e,O=new Array(g);for(l=0;l<g;l++)O[l]=-1;var M=!1,V=0,T=0;if(g<=4||y*g<=16){for(l=k;l<=_;l++)if(s=e[l],T<g)for(u=b;u<=N;u++)if(c=t[u],s.key===c.key){O[u-b]=l,V>u?M=!0:V=u,c.dom&&(t[u]=c=h(c)),oe(s,c,n,o,r,i,a),T++,U[l]=null;break}}else{var E=new Map;for(l=b;l<=N;l++)m=t[l],E.set(m.key,l);for(l=k;l<=_;l++)s=e[l],T<g&&(u=E.get(s.key),f(u)||(c=t[u],O[u-b]=l,V>u?M=!0:V=u,c.dom&&(t[u]=c=h(c)),oe(s,c,n,o,r,i,a),T++,U[l]=null))}if(y===e.length&&0===T)for(Ye(n,e,o,!1,a);b<g;)m=t[b],m.dom&&(t[b]=m=h(m)),b++,Be(n,Se(m,null,o,r,i),null);else{for(l=y-T;l>0;)s=U[k++],d(s)||(X(s,n,o,!1,!1,a),l--);if(M){var I=ce(O);for(u=I.length-1,l=g-1;l>=0;l--)O[l]===-1?(V=l+b,m=t[V],m.dom&&(t[V]=m=h(m)),v=V+1,p=v<t.length?t[v].dom:null,Be(n,Se(m,n,o,r,i),p)):u<0||l!==I[u]?(V=l+b,m=t[V],v=V+1,p=v<t.length?t[v].dom:null,Be(n,m.dom,p)):u--}else if(T!==g)for(l=g-1;l>=0;l--)O[l]===-1&&(V=l+b,m=t[V],m.dom&&(t[V]=m=h(m)),v=V+1,p=v<t.length?t[v].dom:null,Be(n,Se(m,null,o,r,i),p))}}}function ce(e){var t=e.slice(0),n=[];n.push(0);var o,r,i,a,l;for(o=0;o<e.length;o++)if(e[o]!==-1)if(r=n[n.length-1],e[r]<e[o])t[o]=r,n.push(o);else{for(i=0,a=n.length-1;i<a;)l=(i+a)/2|0,e[n[l]]<e[o]?i=l+1:a=l;e[o]<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function pe(e,t,n,r,i,l){if(!Ut[e])if(St[e])r[e]=!!n;else if(Ct[e]){var u=o(n)?"":n;r[e]!==u&&(r[e]=u)}else if(a(e))ve(e,t,n,r,l);else if(t!==n)if(o(n))r.removeAttribute(e);else if("className"===e)i?r.setAttribute("class",n):r.className=n;else if("style"===e)ye(t,n,r);else if("dangerouslySetInnerHTML"===e){var d=t&&t.__html,s=n&&n.__html;d!==s&&(o(s)||(r.innerHTML=s))}else if("childrenType"!==e&&"ref"!==e&&"key"!==e){var f=Ot[e],c=wt[e];c?r.setAttributeNS(c,f||e,n):r.setAttribute(f||e,n)}}function he(e,t,n,r){if(e=e||vt,t=t||vt,t!==vt)for(var i in t)ve(i,e[i],t[i],n,r);if(e!==vt)for(var a in e)o(t[a])&&ve(a,e[a],null,n,r)}function ve(e,t,n,o,r){if(t!==n){var i=e.toLowerCase(),a=o[i];if(a&&a.wrapped)return;Mt[e]?(r.fastUnmount=!1,V(e,t,n,o)):o[i]=n}}function me(e,t,n,r,i,a){if(e=e||vt,t=t||vt,t!==vt)for(var l in t){var u=t[l],d=e[l];o(u)?ge(l,n):pe(l,d,u,n,a,r)}if(e!==vt)for(var s in e)o(t[s])&&ge(s,n)}function ye(e,t,n){if(l(t))return void(n.style.cssText=t);for(var r in t){var i=t[r];u(i)&&!xt[r]?n.style[r]=i+"px":n.style[r]=i}if(!o(e))for(var a in e)o(t[a])&&(n.style[a]="")}function ge(e,t){"className"===e?t.removeAttribute("class"):"value"===e?t.value="":"style"===e?(t.style.cssText=null,t.removeAttribute("style")):Mt[e]?V(e,null,null,t):t.removeAttribute(e)}function _e(){Et=!1,It.clear(),Dt.clear()}function Ne(e,t,n,o){var r=e.type,i=e.key,a=Dt.get(r);if(!f(a)){var l=null===i?a.nonKeyed:a.keyed.get(i);if(!f(l)){var u=l.pop();if(!f(u))return ie(u,e,null,t,n,o,!0),e.dom}}return null}function ke(e){var t=e.type,n=e.key,o=Dt.get(t);if(f(o)&&(o={nonKeyed:[],keyed:new Map},Dt.set(t,o)),d(n))o.nonKeyed.push(e);else{var r=o.keyed.get(n);f(r)&&(r=[],o.keyed.set(n,r)),r.push(e)}}function be(e,t,n,o){var r=e.type,i=e.key,a=It.get(r);if(!f(a)){var l=null===i?a.nonKeyed:a.keyed.get(i);if(!f(l)){var u=l.pop();if(!f(u)){var d=e.flags,s=le(u,e,null,t,n,o,4&d,!0);if(!s)return e.dom}}}return null}function Ce(e){var t=e.type,n=e.key,o=e.ref,r=o&&(o.onComponentWillMount||o.onComponentWillUnmount||o.onComponentDidMount||o.onComponentWillUpdate||o.onComponentDidUpdate);if(!r){var i=It.get(t);if(f(i)&&(i={nonKeyed:[],keyed:new Map},It.set(t,i)),d(n))i.nonKeyed.push(e);else{var a=i.keyed.get(n);f(a)&&(a=[],i.keyed.set(n,a)),a.push(e)}}}function Se(e,t,n,o,r){var i=e.flags;return 3970&i?Ue(e,t,n,o,r):28&i?Me(e,t,n,o,r,4&i):4096&i?xe(e,t):1&i?we(e,t):void p()}function we(e,t){var n=document.createTextNode(e.children);return e.dom=n,t&&je(t,n),n}function xe(e,t){var n=document.createTextNode("");return e.dom=n,t&&je(t,n),n}function Ue(e,t,o,r,i){if(Et){var a=Ne(e,o,r,i);if(!d(a))return d(t)||je(t,a),a}var l=e.type,u=e.flags;(i||128&u)&&(i=!0);var s=Ge(l,i),f=e.children,c=e.props,p=e.events,h=e.ref;if(e.dom=s,d(f)||(n(f)?Le(s,f):ht(f)?Oe(f,s,o,r,i):C(f)&&Se(f,s,o,r,i)),2&u||z(u,e,s),!d(c))for(var v in c)pe(v,null,c[v],s,i,o);if(!d(p))for(var m in p)ve(m,null,p[m],s,o);return d(h)||Ee(s,h,o),d(t)||je(t,s),s}function Oe(e,t,n,o,i){for(var a=0;a<e.length;a++){var l=e[a];r(l)||(l.dom&&(e[a]=l=h(l)),Se(e[a],t,n,o,i))}}function Me(e,t,n,o,r,i){if(Et){var a=be(e,n,o,r);if(!d(a))return d(t)||je(t,a),a}var l,u=e.type,s=e.props||vt,c=e.ref;if(i){var p=u.defaultProps;n.fastUnmount=!1,f(p)||(Ie(p,s),e.props=s);var h=De(e,u,s,o,r,mt),v=h._lastInput,m=n.fastUnmount;n.fastUnmount=!0,h._vNode=e,e.dom=l=Se(v,null,n,h._childContext,r);var y=h._lifecycle=new _t;y.fastUnmount=n.fastUnmount,n.fastUnmount=m,d(t)||je(t,l),Ve(c,h,n),At&&Rt.set(h,l),e.children=h}else{var g=Ae(e,u,s,o);e.dom=l=Se(g,null,n,o,r),e.children=g,Te(c,l,n),d(t)||je(t,l)}return l}function Ve(e,t,n){e&&(i(e)?e(t):p()),d(t.componentDidMount)||n.addListener(function(){t.componentDidMount()})}function Te(e,t,n){e&&(o(e.onComponentWillMount)||(n.fastUnmount=!1,e.onComponentWillMount()),o(e.onComponentDidMount)||(n.fastUnmount=!1,n.addListener(function(){return e.onComponentDidMount(t)})))}function Ee(e,t,n){if(i(t))n.fastUnmount=!1,n.addListener(function(){return t(e)});else{if(r(t))return;p()}}function Ie(e,t){for(var n in e)f(t[n])&&(t[n]=e[n])}function De(e,t,n,i,a,l){f(i)&&(i={});var u=new t(n,i);u.context=i,u.props===vt&&(u.props=n),u._patch=oe,u._devToolsStatus=l,At&&(u._componentToDOMNodeMap=Rt);var d=u.getChildContext();o(d)?u._childContext=i:u._childContext=Object.assign({},i,d),u._unmounted=!1,u._pendingSetState=!0,u._isSVG=a,u.componentWillMount(),u._beforeRender&&u._beforeRender();var s=u.render(n,u.state,i);return u._afterRender&&u._afterRender(),ht(s)?p():r(s)?s=k():(s.dom&&(s=h(s)),28&s.flags&&(s.parentVNode=e)),u._pendingSetState=!1,u._lastInput=s,u}function Pe(e,t,n,o,r,i,a){Re(n,Se(t,null,o,r,i),e,o,a)}function Re(e,t,n,o,r){var i=!1;28&n.flags&&(X(n,null,o,!1,!1,r),n=n.children._lastInput||n.children,i=!0),Ke(e,t,n.dom),X(n,null,o,!1,i,r)}function Ae(e,t,n,o){var i=t(n,o);return ht(i)?p():r(i)?i=k():(i.dom&&(i=h(i)),28&i.flags&&(i.parentVNode=e)),i}function Le(e,t){""!==t?e.textContent=t:e.appendChild(document.createTextNode(""))}function We(e,t){e.firstChild.nodeValue=t}function je(e,t){e.appendChild(t)}function Be(e,t,n){o(n)?je(e,t):e.insertBefore(t,n)}function Ge(e,t){return t===!0?document.createElementNS(bt,e):document.createElement(e)}function Je(e,t,n,o,r,i,a){X(e,null,o,!1,!1,a);var l=Se(t,null,o,r,i);t.dom=l,Ke(n,l,e.dom)}function Ke(e,t,n){e||(e=n.parentNode),e.replaceChild(t,n)}function Fe(e,t){e.removeChild(t)}function Ye(e,t,n,o,r){e.textContent="",n.fastUnmount||$e(null,t,n,o,r)}function $e(e,t,n,o,i){for(var a=0;a<t.length;a++){var l=t[a];r(l)||X(l,e,n,!0,o,i)}}function He(e,t){return t.length&&!o(t[0])&&!o(t[0].key)&&e.length&&!o(e[0])&&!o(e[0].key)}function qe(e){for(var t=e.childNodes,n=t.length,o=0;o<n;){var r=t[o];if(8===r.nodeType)if("!"===r.data){var i=document.createTextNode("");e.replaceChild(i,r),o++}else e.removeChild(r),n--;else o++}}function ze(e,t,n,o,r,i){var a=e.type,l=e.props||{},u=e.ref;if(e.dom=t,i){var d=t.namespaceURI===bt,s=a.defaultProps;n.fastUnmount=!1,f(s)||(Ie(s,l),e.props=l);var c=De(e,a,l,o,d,mt),p=c._lastInput,h=n.fastUnmount;n.fastUnmount=!0,c._vComponent=e,c._vNode=e,tt(p,t,n,c._childContext,d);var v=c._lifecycle=new _t;v.fastUnmount=n.fastUnmount,n.fastUnmount=h,Ve(u,c,n),At&&Rt.set(c,t),e.children=c}else{var m=Ae(e,a,l,o);tt(m,t,n,o,r),e.children=m,e.dom=m.dom,Te(u,t,n)}}function Xe(e,t,n,o,r){var i=e.type,a=e.children,l=e.props,u=e.events,d=e.flags;if((r||128&d)&&(r=!0),1!==t.nodeType||t.tagName.toLowerCase()!==i){var s=Ue(e,null,n,o,r);e.dom=s,Ke(t.parentNode,s,t)}else{e.dom=t,a&&Qe(a,t,n,o,r),2&d||z(d,e,t);for(var f in l)pe(f,null,l[f],t,r,n);for(var c in u)ve(c,null,u[c],t,n)}}function Qe(e,t,n,o,r){qe(t);var i=Array.prototype.slice.call(t.childNodes),a=0;if(ht(e))for(var l=0;l<e.length;l++){var u=e[l];c(u)&&!d(u)&&tt(u,i[a++],n,o,r)}else c(e)&&tt(e,t.firstChild,n,o,r)}function Ze(e,t){if(3===t.nodeType){var n=we(e,null);e.dom=n,Ke(t.parentNode,n,t)}else e.dom=t}function et(e,t){e.dom=t}function tt(e,t,n,o,r){var i=e.flags;return 28&i?ze(e,t,n,o,r,4&i):3970&i?Xe(e,t,n,o,r):1&i?Ze(e,t):4096&i?et(e,t):void p()}function nt(e,t,n){return!(!t||1!==t.nodeType||!t.firstChild||(tt(e,t.firstChild,n,{},!1),0))}function ot(){At=!0}function rt(e){At||p();var t=e&&e.nodeType?e:null;return Rt.get(e)||t}function it(e){for(var t=0;t<Pt.length;t++){var n=Pt[t];if(n.dom===e)return n}return null}function at(e,t,n){Pt.push({dom:e,input:t,lifecycle:n})}function lt(e){for(var t=0;t<Pt.length;t++)if(Pt[t]===e)return void Pt.splice(t,1)}function ut(e,t){if(Lt===t&&p(),e!==ft){var n=it(t);if(d(n)){var i=new _t;r(e)||(e.dom&&(e=h(e)),nt(e,t,i)||Se(e,t,i,{},!1),i.trigger(),at(t,e,i))}else{var a=n.lifecycle;a.listeners=[],o(e)?(X(n.input,t,a,!1,!1,!1),lt(n)):(e.dom&&(e=h(e)),oe(n.input,e,t,a,{},!1,!1)),a.trigger(),n.input=e}mt.connected&&O(window)}}function dt(){var e;return function(t,n){e||(e=t),ut(n,e)}}function st(e,t){return{data:e,event:t}}var ft="$NO_OP",ct="a runtime error occured! Use Inferno in development environment to find the error.",pt="undefined"!=typeof window&&window.document,ht=Array.isArray,vt={},mt={connected:!1},yt={id:0},gt=new Map,_t=function(){this.listeners=[],this.fastUnmount=!0};_t.prototype.addListener=function(e){this.listeners.push(e)},_t.prototype.trigger=function(){for(var e=this,t=0;t<this.listeners.length;t++)e.listeners[t]()};var Nt="http://www.w3.org/1999/xlink",kt="http://www.w3.org/XML/1998/namespace",bt="http://www.w3.org/2000/svg",Ct={},St={},wt={},xt={},Ut={},Ot={textAnchor:"text-anchor"},Mt={};M("xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type",wt,Nt),M("xml:base,xml:lang,xml:space",wt,kt),M("volume,defaultValue,defaultChecked",Ct,!0),M("children,ref,key,selected,checked,value,multiple",Ut,!0),M("onClick,onMouseDown,onMouseUp,onMouseMove",Mt,!0),M("muted,scoped,loop,open,checked,default,capture,disabled,readonly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate",St,!0),M("animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,",xt,!0);var Vt=new Map,Tt=new Map,Et=!0,It=new Map,Dt=new Map,Pt=[],Rt=new Map,At=!1,Lt=pt?document.body:null;pt&&(window.process={env:{NODE_ENV:"development"}},U(window));var Wt={linkEvent:st,createVNode:N,cloneVNode:h,NO_OP:ft,EMPTY_OBJ:vt,render:ut,findDOMNode:rt,createRenderer:dt,disableRecycling:_e,enableFindDOMNode:ot};e.default=Wt,e.linkEvent=st,e.createVNode=N,e.cloneVNode=h,e.NO_OP=ft,e.EMPTY_OBJ=vt,e.render=ut,e.findDOMNode=rt,e.createRenderer=dt,e.disableRecycling=_e,e.enableFindDOMNode=ot,Object.defineProperty(e,"__esModule",{value:!0})})},function(e,t,n){e.exports=n(3)},function(e,t,n){/*!
	 * inferno-component v1.0.0-beta32
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
!function(t,o){e.exports=o(n(1))}(this,function(e){"use strict";function t(e){return a(e)||r(e)}function n(e){return r(e)||e===!1||i(e)||a(e)}function o(e){return"function"==typeof e}function r(e){return null===e}function i(e){return e===!0}function a(e){return void 0===e}function l(e){throw e||(e=p),new Error("Inferno Error: "+e)}function u(e,t){if(28&e.flags){var n=e.parentVNode;n&&(n.dom=t,u(n,t))}}function d(){return e.createVNode(4096)}function s(e,t,n){var o=y.get(e);o||(o=[],y.set(e,o),Promise.resolve().then(function(){c(e,t,function(){for(var e=0;e<o.length;e++)o[e]()}),y.delete(e),e._processingSetState=!1})),n&&o.push(n)}function f(e,t,n){o(t)&&(t=t(e.state));for(var r in t)e._pendingState[r]=t[r];e._pendingSetState?(e.state=Object.assign({},e.state,e._pendingState),e._pendingState={}):e._processingSetState||n?s(e,!1,n):(e._pendingSetState=!0,e._processingSetState=!0,c(e,!1,n),e._processingSetState=!1)}function c(o,r,i){if((!o._deferSetState||r)&&!o._blockRender){o._pendingSetState=!1;var a=o._pendingState,s=o.state,f=Object.assign({},s,a),c=o.props,p=o.context;o._pendingState={};var m=o._updateComponent(s,f,c,c,p,r),y=!0;n(m)?m=d():h(m)?l():m===e.NO_OP&&(m=o._lastInput,y=!1);var g=o._lastInput,_=g.dom.parentNode;if(o._lastInput=m,y){var N=o._lifecycle;N?N.listeners=[]:N=new v,o._lifecycle=N;var k=o.getChildContext();k=t(k)?Object.assign({},p,o._childContext):Object.assign({},p,o._childContext,k),o._patch(g,m,_,N,k,o._isSVG,!1),N.trigger(),o.componentDidUpdate(c,s)}var b=o._vNode,C=b.dom=m.dom,S=o._componentToDOMNodeMap;S&&S.set(o,m.dom),u(b,C),t(i)||i()}}var p="a runtime error occured! Use Inferno in development environment to find the error.",h=Array.isArray,v=function(){this.listeners=[],this.fastUnmount=!0};v.prototype.addListener=function(e){this.listeners.push(e)},v.prototype.trigger=function(){for(var e=this,t=0;t<this.listeners.length;t++)e.listeners[t]()};var m=p,y=new Map,g=function(t,n){this.state={},this.refs={},this._processingSetState=!1,this._blockRender=!1,this._ignoreSetState=!1,this._blockSetState=!1,this._deferSetState=!1,this._pendingSetState=!1,this._pendingState={},this._lastInput=null,this._vNode=null,this._unmounted=!0,this._devToolsStatus=null,this._devToolsId=null,this._lifecycle=null,this._childContext=null,this._patch=null,this._isSVG=!1,this._componentToDOMNodeMap=null,this.props=t||e.EMPTY_OBJ,this.context=n||{},this.componentDidMount||(this.componentDidMount=null)};return g.prototype.render=function(e,t,n){},g.prototype.forceUpdate=function(e){if(this._unmounted)throw Error(m);c(this,!0,e)},g.prototype.setState=function(e,t){if(this._unmounted)throw Error(m);this._blockSetState?l():this._ignoreSetState||f(this,e,t)},g.prototype.componentWillMount=function(){},g.prototype.componentDidMount=function(){},g.prototype.componentWillUnmount=function(){},g.prototype.componentDidUpdate=function(e,t,n){},g.prototype.shouldComponentUpdate=function(e,t,n){return!0},g.prototype.componentWillReceiveProps=function(e,t){},g.prototype.componentWillUpdate=function(e,t,n){},g.prototype.getChildContext=function(){},g.prototype._updateComponent=function(t,n,o,r,i,a){if(this._unmounted===!0&&l(),o!==r||r===e.EMPTY_OBJ||t!==n||a){o===r&&r!==e.EMPTY_OBJ||(this._blockRender=!0,this.componentWillReceiveProps(r,i),this._blockRender=!1,this._pendingSetState&&(n=Object.assign({},n,this._pendingState),this._pendingSetState=!1,this._pendingState={}));var u=this.shouldComponentUpdate(r,n,i);if(u!==!1||a){this._blockSetState=!0,this.componentWillUpdate(r,n,i),this._blockSetState=!1,this.props=r;var d=this.state=n;this.context=i,this._beforeRender&&this._beforeRender();var s=this.render(r,d,i);return this._afterRender&&this._afterRender(),s}}return e.NO_OP},g})},function(e,t,n){e.exports=n(1)}]);