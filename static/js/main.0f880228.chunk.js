(this["webpackJsonppwa-camera-example"]=this["webpackJsonppwa-camera-example"]||[]).push([[0],{17:function(e,a,t){e.exports={app:"App_app__3BT4Y"}},18:function(e,a,t){e.exports={header:"Header_header__1v0yI"}},22:function(e,a,t){e.exports=t(32)},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(16),c=t.n(o),l=t(8),i=t(2),s=t(17),u=t.n(s),m=t(18),p=t.n(m);var d=function(){return r.a.createElement("header",{className:p.a.header},r.a.createElement(l.b,{to:"/camera"},"Camera 5"))},f=t(5),v=t(7),h=t(9),w=t.n(h);var g=function(){var e=Object(n.useState)(""),a=Object(f.a)(e,2),t=a[0],o=a[1],c=function(e){var a=e.target.files;if(a&&a.length>0){var t=window.URL.createObjectURL(a[0]),n=new Image;n.src=t,n.onload=function(){o(n.src),window.URL.revokeObjectURL(n.src)}}};return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement("link",{rel:"manifest",href:"".concat("/pwa-camera-example","/camera-manifest.json")})),r.a.createElement("div",{className:w.a.camera},r.a.createElement("input",{id:"take-photo",type:"file",accept:"image/*",capture:"camera",onChange:c}),r.a.createElement("label",{htmlFor:"take-photo"},"Take Photo")),r.a.createElement("div",{className:w.a.camera},r.a.createElement("input",{id:"upload",type:"file",accept:"image/x-png,image/jpeg,image/gif",multiple:!1,onChange:c}),r.a.createElement("label",{htmlFor:"upload"},"Upload Photo")),t&&r.a.createElement("img",{className:w.a.preview,src:t,alt:"preview"}))};var E=function(){return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement("link",{rel:"manifest",href:"".concat("/pwa-camera-example","/about-manifest.json")})),r.a.createElement("span",null,"Hello About"))},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){if("serviceWorker"in navigator){if(new URL("/pwa-camera-example",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/pwa-camera-example","/service-worker.js");b?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(a,e)}))}}function x(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=function(){var e=r.a.useState(!1),a=Object(f.a)(e,2),t=a[0],o=a[1],c=r.a.useState(null),l=Object(f.a)(c,2),i=l[0],s=l[1],u=function(e){o(!0),s(e.waiting)};Object(n.useEffect)((function(){k({onUpdate:u})}),[]);return t?r.a.createElement("div",null,r.a.createElement("p",null,"There are new version!"),r.a.createElement("button",{type:"button",onClick:function(){null===i||void 0===i||i.postMessage({type:"SKIP_WAITING"}),o(!1),window.location.reload(!0)}},"Reload")):r.a.createElement("div",null,"No update")};var j=function(){return r.a.createElement(l.a,{basename:"/pwa-camera-example"},r.a.createElement(_,null),r.a.createElement("div",{className:u.a.app},r.a.createElement(d,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/camera"},r.a.createElement(g,null)),r.a.createElement(i.a,{path:"/about"},r.a.createElement(E,null)))))};t(31);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))},9:function(e,a,t){e.exports={camera:"Camera_camera__17H4x",preview:"Camera_preview__17qTQ"}}},[[22,1,2]]]);
//# sourceMappingURL=main.0f880228.chunk.js.map