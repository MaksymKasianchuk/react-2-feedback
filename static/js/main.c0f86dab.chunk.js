(this["webpackJsonpreact-2-feedback"]=this["webpackJsonpreact-2-feedback"]||[]).push([[0],{12:function(e,t,n){e.exports={Section:"Section_Section__FT87V"}},2:function(e,t,n){e.exports={Feedback:"Feedback_Feedback__3uhOf",FeedbackBtn:"Feedback_FeedbackBtn__ySEV2",Good:"Feedback_Good__MdT2P",Neutral:"Feedback_Neutral__2JmzR",Bad:"Feedback_Bad__2k8iN"}},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(14),o=n.n(r),s=(n(20),n(5)),i=n(6),l=n(10),d=n(9),u=n(2),b=n.n(u),j=n(0),h=function(e){var t=e.good,n=void 0===t?0:t,a=e.neutral,c=void 0===a?0:a,r=e.bad,o=void 0===r?0:r,s=e.total,i=void 0===s?0:s,l=e.positivePercentage,d=void 0===l?0:l,u=e.classObj,b=u.goodCls,h=u.neutralCls,m=u.badCls;return Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Good: ",Object(j.jsx)("span",{className:b,children:n})]}),Object(j.jsxs)("li",{children:["Neutral: ",Object(j.jsx)("span",{className:h,children:c})]}),Object(j.jsxs)("li",{children:["Bad: ",Object(j.jsx)("span",{className:m,children:o})]}),Object(j.jsxs)("li",{children:["Total: ",i]}),Object(j.jsxs)("li",{children:["Positive feedback: ",d,"%"]})]})},m=function(e){var t=e.option,n=e.onLeaveFeedback,a=e.className;return Object(j.jsx)("button",{type:"button",className:a,onClick:n,children:t})},O=n(8),f=n(12),v=n.n(f),x=function(e){var t=e.title,n=e.children,a=e.classArr,c=a?[].concat(Object(O.a)(a),[v.a.Section]).join(" "):v.a.Section;return Object(j.jsxs)("section",{className:c,children:[t&&Object(j.jsx)("h2",{children:t}),n]})},p=function(e){var t=e.message;return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:t})})},k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleIncrementGood=function(){e.setState((function(e){return{good:e.good+1}}))},e.handleIncrementNeutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.handleIncrementBad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=e.state.good/t*100;return n?Math.round(100*n)/100:0},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage();return Object(j.jsxs)("div",{className:b.a.Feedback,children:[Object(j.jsxs)(x,{title:"Leave your feedback",children:[Object(j.jsx)(m,{option:"Good",onLeaveFeedback:this.handleIncrementGood,className:b.a.FeedbackBtn}),Object(j.jsx)(m,{option:"Neutral",onLeaveFeedback:this.handleIncrementNeutral,className:b.a.FeedbackBtn}),Object(j.jsx)(m,{option:"Bad",onLeaveFeedback:this.handleIncrementBad,className:b.a.FeedbackBtn})]}),e?Object(j.jsx)(x,{title:"Statistics",children:Object(j.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t,classObj:{goodCls:b.a.Good,neutralCls:b.a.Neutral,badCls:b.a.Bad}})}):Object(j.jsx)(p,{message:"There is no feedback"})]})}}]),n}(a.Component),F=k,g=n(7),N=n(13),_=n(4),C=function(e){var t=e.value,n=e.handleChangeFilter,a=e.className;return Object(j.jsx)(x,{title:"Filter",classArr:["PhoneBookSection"],children:Object(j.jsx)("input",{type:"text",name:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:n,className:a})})},B=function(e){var t=e.nameVal,n=e.numberval,a=e.handleChange,c=e.handleSubmit,r=e.className;return Object(j.jsx)(x,{title:"PhoneBook",classArr:["PhoneBookSection"],children:Object(j.jsxs)("form",{className:r,onSubmit:c,children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onInput:a}),Object(j.jsx)("label",{htmlFor:"number",children:"Number"}),Object(j.jsx)("input",{value:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onInput:a}),Object(j.jsx)("button",{type:"submit",className:"PhoneBookForm__button",children:"Save"})]})})},S=n(3),P=n.n(S),y={name:"",number:"",filter:""},A=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state=Object(N.a)({contacts:[{id:Object(_.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(_.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(_.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(_.a)(),name:"Annie Copeland",number:"227-91-26"}]},y),e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(g.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state.name.toLowerCase();if(e.state.contacts.find((function(e){return e.name.toLowerCase()===n})))return e.reset(),alert("".concat(e.state.name," is already exist in phonebook"));var a={id:Object(_.a)(),name:e.state.name,number:e.state.number};e.setState((function(e){var t=e.contacts;return{contacts:[a].concat(Object(O.a)(t)),name:"",number:""}})),e.reset()},e.reset=function(){e.setState(Object(N.a)({},y))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e.deleteHandler=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.number,c=t.filter,r=this.getVisibleContacts();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(B,{nameVal:n,numberval:a,handleChange:this.handleChange,handleSubmit:this.handleSubmit,className:P.a.PhoneBookForm}),Object(j.jsx)(C,{value:c,handleChangeFilter:this.changeFilter,className:P.a.Filter}),Object(j.jsx)(x,{title:"Contacts",classArr:["PhoneBookSection"],children:Object(j.jsx)("ul",{className:P.a.Contacts,children:r.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:P.a.ContactsName,children:a}),Object(j.jsx)("span",{className:P.a.ContactsNumber,children:c}),Object(j.jsx)("button",{type:"button",onClick:function(){return e.deleteHandler(n)},className:P.a.DeleteBtn,children:"Delete"})]},n)}))})})]})}}]),n}(a.Component),I=A;var w=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(F,{}),Object(j.jsx)(I,{})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={PhoneBookForm:"PhoneBook_PhoneBookForm__3nlmK",Filter:"PhoneBook_Filter__3mAbI",Contacts:"PhoneBook_Contacts__3gXcF",ContactsName:"PhoneBook_ContactsName__1U4BK",ContactsNumber:"PhoneBook_ContactsNumber__3B5eg",DeleteBtn:"PhoneBook_DeleteBtn__1XaUI"}}},[[22,1,2]]]);
//# sourceMappingURL=main.c0f86dab.chunk.js.map