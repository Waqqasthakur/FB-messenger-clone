(this["webpackJsonpfacebook-messenger-clone"]=this["webpackJsonpfacebook-messenger-clone"]||[]).push([[0],{77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(13),r=t.n(c),o=(t(77),t(66)),i=t(51),m=(t(78),t(132)),l=t(134),u=(t(79),t(126)),d=t(130),p=t(131),j=t(17),b=Object(n.forwardRef)((function(e,a){var t=e.message,n=e.username===t.username;return Object(j.jsx)("div",{ref:a,children:Object(j.jsx)(u.a,{className:n?"message__userCard":"message__guestCard",children:Object(j.jsx)(d.a,{children:Object(j.jsxs)(p.a,{color:"white",variant:"h6",component:"h10",children:[!n&&"".concat(t.username," :")," ",t.message]})})})})})),f=t(50),g=f.a.initializeApp({apiKey:"AIzaSyBHz-fR22N_KNKZJisEwJ40GipYtxWmmRc",authDomain:"facebook-messenger-clone-a2cad.firebaseapp.com",projectId:"facebook-messenger-clone-a2cad",storageBucket:"facebook-messenger-clone-a2cad.appspot.com",messagingSenderId:"505003420938",appId:"1:505003420938:web:b39f1980d9e57e91731ef3",measurementId:"G-VN5XXNWK4L"}).firestore(),h=t(64),O=t(65),x=t.n(O),_=t(133);var v=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],s=a[1],c=Object(n.useState)([]),r=Object(i.a)(c,2),u=r[0],d=r[1],p=Object(n.useState)(""),O=Object(i.a)(p,2),v=O[0],k=O[1];return Object(n.useEffect)((function(){k(prompt("Please enter your name"))}),[]),Object(n.useEffect)((function(){g.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){d(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("img",{src:"https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=200&h=200"}),Object(j.jsx)("h1",{children:"Hello"}),Object(j.jsxs)("h2",{children:[" Welcome ",v," "]}),Object(j.jsx)(h.a,{children:u.map((function(e){var a=e.id,t=e.message;return Object(j.jsx)(b,{username:v,message:t},a)}))}),Object(j.jsx)("form",{className:"app__form",children:Object(j.jsxs)(m.a,{className:"app__formControl",children:[Object(j.jsx)(_.a,{className:"app__input",placeholder:"Enter a message",id:"filled-full-width",style:{margin:8},InputLabelProps:{shrink:!0},margin:"normal",value:t,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)(l.a,{className:"app__iconButton",disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),g.collection("messages").add({message:t,username:v,timestamp:f.a.firestore.FieldValue.serverTimestamp()}),d([].concat(Object(o.a)(u),[{username:v,message:t}])),s("")},children:Object(j.jsx)(x.a,{})})]})})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,136)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),k()}},[[93,1,2]]]);
//# sourceMappingURL=main.580987a9.chunk.js.map