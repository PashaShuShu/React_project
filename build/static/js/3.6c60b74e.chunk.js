(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{88:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3s5vD",messages:"Dialogs_messages__1Ka-g"}},89:function(e,s,a){e.exports={dialog:"Users_dialog__29iR0",active:"Users_active__1PPmp",ava:"Users_ava__2s8ZQ",name:"Users_name__3Wvnw"}},90:function(e,s,a){e.exports={messages:"Messages_messages__eP2c3",r:"Messages_r__2QnQ2",l:"Messages_l__zHq2y"}},92:function(e,s,a){"use strict";a.r(s);var t=a(88),i=a.n(t),n=a(89),c=a.n(n),d=a(8),g=a(0),r=function(e){return Object(g.jsx)(d.b,{to:"/dialogs/".concat(e.user_id),activeClassName:c.a.active,children:Object(g.jsxs)("div",{className:c.a.dialog,children:[Object(g.jsx)("div",{className:c.a.ava,children:Object(g.jsx)("img",{src:e.img})}),Object(g.jsx)("div",{className:c.a.name,children:e.name})]})})},l=a(90),o=a.n(l),m=function(e){var s;return s="r"==e.side?o.a.r:o.a.l,Object(g.jsx)("div",{className:o.a.messages,children:Object(g.jsx)("div",{className:s,children:e.message})})},j=a(1),_=a.n(j),u=function(e){var s=e.dialogsData.map((function(e){return Object(g.jsx)(r,{name:e.name,img:e.img,id:e.id},e.id)})),a=e.messagesData.map((function(e){return Object(g.jsx)(m,{side:e.sentBy,message:e.message},e.id)})),t=_.a.createRef();return Object(g.jsxs)("div",{className:i.a.dialogs,children:[Object(g.jsx)("div",{className:i.a.dialogs__dialog,children:s}),Object(g.jsx)("div",{}),Object(g.jsxs)("div",{className:i.a.messages,children:[a,Object(g.jsx)("textarea",{onChange:function(){var s=t.current.value;e.updateNewMessageText(s)},ref:t,value:e.newMessageText}),Object(g.jsx)("button",{onClick:function(){e.addMessage()},children:"send"})]})]})},v=a(47),x=a(7),b=a(48),p=a(19);s.default=Object(p.c)(Object(x.b)((function(e){return{dialogsData:e.dialogsPage.dialogsData,messagesData:e.dialogsPage.messagesData,newMessageText:e.dialogsPage.newMessageText}}),{addMessage:v.a,updateNewMessageText:v.c}),b.a)(u)}}]);
//# sourceMappingURL=3.6c60b74e.chunk.js.map