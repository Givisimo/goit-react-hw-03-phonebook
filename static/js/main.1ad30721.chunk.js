(this.webpackJsonphw_1=this.webpackJsonphw_1||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},13:function(e,t,n){e.exports=n(22)},18:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),i=(n(18),n(19),n(8)),o=n(2),u=n(3),m=n(6),s=n(4),d=n(7),h=n(1),b=n.n(h),f=function(e){var t=e.contacts,n=e.onDelete;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},e.name,":",e.number,r.a.createElement("button",{type:"button",onClick:function(){return n(e.id)}},"Delete"))})))},p=function(e,t){return e.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())}))},v=n(11),E=n(5),C=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},n.inputIds={nameId:b()(),numberId:b()()},n.handleChange=function(e){n.setState(Object(E.a)({},e.target.name,e.target.value))},n.handleClick=function(){var e={id:b()(),name:n.state.name,number:n.state.number};n.state.name&&n.state.number?isNaN(n.state.number)?alert("Invalid number"):(n.props.onSaveContact(Object(v.a)({},e)),n.reset()):alert("Name and number is required!")},n.reset=function(){n.setState({name:"",number:""})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=this.inputIds,c=a.nameId,l=a.numberId;return r.a.createElement("form",null,r.a.createElement("label",{htmlFor:c},r.a.createElement("h2",null,"Name"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"name",value:t,id:c})),r.a.createElement("label",{htmlFor:l},r.a.createElement("h2",null,"Number"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"number",value:n,id:l})),r.a.createElement("p",null,r.a.createElement("button",{type:"button",onClick:this.handleClick},"Add contact")))}}]),t}(a.Component),y=function(e){var t=e.searchId,n=e.handleFilter,a=e.filter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Find contact by name"),r.a.createElement("label",{htmlFor:t},r.a.createElement("input",{type:"text",onChange:n,name:"filter",value:a,id:t})))},I=n(12),O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:Object(i.a)(I),filter:""},n.inputIds={nameId:b()(),numberId:b()(),searchId:b()()},n.handleFilter=function(e){n.setState({filter:e.currentTarget.value})},n.saveContact=function(e){n.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):n.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},n.deleteContact=function(e){n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&this.setState({contacts:Object(i.a)(e)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.inputIds.searchId,c=p(t,n);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(C,{onSaveContact:this.saveContact}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(y,{searchId:a,handleFilter:this.handleFilter,filter:n}),r.a.createElement(f,{contacts:c,onDelete:this.deleteContact}))}}]),t}(a.Component),g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null))};l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.1ad30721.chunk.js.map