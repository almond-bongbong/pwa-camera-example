(this["webpackJsonppwa-camera-example"]=this["webpackJsonppwa-camera-example"]||[]).push([[0],{14:function(e,a,n){e.exports={app:"App_app__3BT4Y"}},15:function(e,a,n){e.exports={header:"Header_header__1v0yI"}},18:function(e,a,n){e.exports=n(29)},28:function(e,a,n){},29:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(13),c=n.n(o),i=n(5),l=n(1),s=n(14),m=n.n(s),p=n(15),u=n.n(p);var d=function(){return r.a.createElement("header",{className:u.a.header},r.a.createElement(i.b,{to:"/camera"},"Camera"))},f=n(17),h=n(6),v=n.n(h);var w=function(){var e=Object(t.useState)(""),a=Object(f.a)(e,2),n=a[0],o=a[1],c=function(e){var a=e.target.files;if(a&&a.length>0){var n=window.URL.createObjectURL(a[0]),t=new Image;t.src=n,t.onload=function(){o(t.src),window.URL.revokeObjectURL(t.src)}}};return r.a.createElement("div",null,r.a.createElement("div",{className:v.a.camera},r.a.createElement("input",{id:"take-photo",type:"file",accept:"image/*",capture:"camera",onChange:c}),r.a.createElement("label",{htmlFor:"take-photo"},"Take Photo")),r.a.createElement("div",{className:v.a.camera},r.a.createElement("input",{id:"upload",type:"file",accept:"image/x-png,image/jpeg,image/gif",multiple:!1,onChange:c}),r.a.createElement("label",{htmlFor:"upload"},"Upload Photo")),n&&r.a.createElement("img",{className:v.a.preview,src:n,alt:"preview"}))};var g=function(){return r.a.createElement(i.a,{basename:"/pwa-camera-example"},r.a.createElement("div",{className:m.a.app},r.a.createElement(d,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/camera"},r.a.createElement(w,null)))))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(28);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-camera-example",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/pwa-camera-example","/service-worker.js");E?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(a,e)}))}}()},6:function(e,a,n){e.exports={camera:"Camera_camera__17H4x",preview:"Camera_preview__17qTQ"}}},[[18,1,2]]]);
//# sourceMappingURL=main.fdeb89ab.chunk.js.map