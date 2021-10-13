(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={Section:"Section_Section__CqcNT",Title:"Section_Title__3JdV3",FormSection:"Section_FormSection__26CAb"}},12:function(t,e,n){t.exports={FilterInput:"Filter_FilterInput__3kH4y",FilterLabel:"Filter_FilterLabel__31TZv"}},14:function(t,e,n){t.exports={AppHeader:"Header_AppHeader__1safz"}},2:function(t,e,n){t.exports={contactList:"ContactList_contactList__3MzlG",contactListItem:"ContactList_contactListItem__1l6Fa",text:"ContactList_text__2dM24"}},21:function(t,e,n){},22:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(13),i=n.n(r),o=(n(21),n(16)),s=n(6),l=n(7),u=n(9),d=n(8),m=(n(22),n(3)),b=n.n(m),j=n(14),h=n.n(j),p=n(0);var f=function(t){var e=t.title,n=t.children;return Object(p.jsx)("header",{className:h.a.AppHeader,children:Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)("h1",{children:e}),n]})})},O=n(10),v=n.n(O);var x=function(t){var e=t.title,n=t.children;return Object(p.jsxs)("section",{className:"Container ".concat(v.a.Section),children:[Object(p.jsx)("h2",{className:v.a.Title,children:e}),Object(p.jsx)("div",{className:v.a.FormSection,children:n})]})},_=n(15),C=n(4),g=n.n(C),F=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit(a,c),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.handleChange,c=this.handleSubmit,r=b.a.generate(),i=b.a.generate();return Object(p.jsxs)("form",{className:g.a.Form,onSubmit:c,children:[Object(p.jsxs)("div",{className:g.a.Group,children:[Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,id:r,onChange:a}),Object(p.jsx)("label",{htmlFor:r,children:"Name"}),Object(p.jsx)("div",{className:"bar"})]}),Object(p.jsxs)("div",{className:g.a.Group,children:[Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,id:i,onChange:a}),Object(p.jsx)("label",{htmlFor:i,children:"Number"}),Object(p.jsx)("div",{className:"bar"})]}),Object(p.jsx)("button",{className:g.a.Btn,type:"submit",children:"add contact"})]})}}]),n}(a.Component),S=F,N=n(2),y=n.n(N),k=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:y.a.contactList,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(p.jsxs)("li",{className:y.a.contactListItem,id:c,children:[Object(p.jsx)("p",{className:y.a.text,children:e}),Object(p.jsx)("p",{className:y.a.text,children:a}),Object(p.jsx)("button",{className:y.a.btn,type:"button",onClick:function(){return n(c)},children:"delete"})]},c)}))})},L=n(12),A=n.n(L),I=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:A.a.FilterLabel,htmlFor:"",children:["Filter contacts by name",Object(p.jsx)("input",{className:A.a.FilterInput,type:"text",value:e,onChange:n})]})},w=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:b.a.generate(),name:e,number:n};t.state.contacts.some((function(t){return t.name===e}))?alert("".concat(e," is already in the contact")):t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.componentDidUpdate=function(e,n){t.state.contacts!==n.contacts&&localStorage.setItem("contacts",JSON.stringify(t.state.contacts))},t}return Object(l.a)(n,[{key:"getFilterContacts",value:function(){var t=this.state,e=t.contacts,n=t.filter.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"render",value:function(){var t=this.addContact,e=this.deleteContact,n=this.state.filter,a=this.changeFilter,c=this.getFilterContacts();return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(f,{title:"PhoneBook",children:Object(p.jsx)(I,{value:n,onChange:a})}),Object(p.jsxs)(x,{title:"Contacts",children:[Object(p.jsx)(S,{onSubmit:t}),Object(p.jsx)(k,{contacts:c,onDeleteContact:e})]})]})}}]),n}(a.Component),B=w;i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={Form:"ContactForm_Form__pmdyI",Btn:"ContactForm_Btn__3RNXk",Group:"ContactForm_Group__2kBuf"}}},[[32,1,2]]]);
//# sourceMappingURL=main.3ccfe948.chunk.js.map