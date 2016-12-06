!function(){"use strict"
function n(n){return d(2,"li",b,n+"",null,null,null,!0)}function l(e){for(var r=e.children.length,u=Array(r),t=0;r>t;t++){var a=e.children[t]
a.container?u[t]=d(8,l,a,null,null,a.id,p,!0):u[t]=d(8,n,a.id,null,null,a.id,p,!0)}return d(34,"ul",O,u,null,null,null,!0)}function e(n){return n===s?Inferno.NO_OP:(s=n,d(2,"div",g,d(8,l,n.root,null,null,null,p,!0),null,null,null,!0))}function r(n){var l=n.time,e="border-radius:"+l%10+"px;background:rgba(0,0,0,"+(.5+l%10/10)+")"
return d(2,"div",{className:"AnimBox",style:e,"data-id":n.id},null,null,null,null,!0)}function u(n){if(n===v)return Inferno.NO_OP
v=n
for(var l=n.items,e=l.length,u=Array(e),t=0;e>t;t++){var a=l[t]
u[t]=d(8,r,a,null,null,a.id,p,!0)}return d(34,"div",h,u,null,null,null,!0)}function t(n,l){console.log("Clicked",n),l.stopPropagation()}function a(n){return d(2,"td",I,n,{onClick:f(n,t)},null,null,!0)}function i(n){var l="TableRow"
n.active&&(l="TableRow active")
var e=n.props,r=e.length+1,u=Array(r)
u[0]=d(8,a,"#"+n.id,null,null,-1,p,!0)
for(var t=1;r>t;t++)u[t]=d(8,a,e[t-1],null,null,t,p,!0)
return d(34,"tr",{className:l,"data-id":n.id},u,null,null,null,!0)}function o(n){if(n===m)return Inferno.NO_OP
m=n
for(var l=n.items,e=l.length,r=Array(e),u=0;e>u;u++){var t=l[u]
r[u]=d(8,i,t,null,null,t.id,p,!0)}return d(34,"table",y,r,null,null,null,!0)}function c(n){if(n===N)return Inferno.NO_OP
N=n
var l,r=n.location
return"table"===r?l=o(n.table):"anim"===r?l=u(n.anim):"tree"===r&&(l=e(n.tree)),d(2,"div",A,l,null,null,null,!0)}var d=Inferno.createVNode,f=Inferno.linkEvent
uibench.init("Inferno","1.0.0-beta31 *optimised*")
var s,v,m,N,b={className:"TreeLeaf"},p={onComponentShouldUpdate:function(n,l){return n!==l}},O={className:"TreeNode"},g={className:"Tree"},h={className:"Anim"},I={className:"TableCell"},y={className:"Table"},A={className:"Main"}
document.addEventListener("DOMContentLoaded",function(n){var l=document.querySelector("#App")
uibench.run(function(n){Inferno.render(c(n),l)},function(n){Inferno.render(d(2,"pre",null,JSON.stringify(n,null," "),null,null,null,!0),l)})})}()
