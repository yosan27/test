(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{183:function(e,t,n){},184:function(e,t,n){},412:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),s=n.n(c),l=n(175),i=n.n(l),r=(n(183),n(176)),o=n(14),d=(n(184),n(32)),j=n(33),m=n(41),u=n(40),h=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("footer",{children:Object(a.jsx)("div",{className:"container footer p-1",children:Object(a.jsx)("span",{children:"Employees CRUD @2020"})})})})}}]),n}(c.Component),b=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("header",{children:Object(a.jsx)("nav",{class:"navbar navbar-light bg-light",children:Object(a.jsx)("div",{class:"container-fluid header p-3",children:Object(a.jsx)("span",{class:"navbar-brand mb-0 h1",children:"EMPLOYEES CRUD"})})})})})}}]),n}(c.Component),p=n(62),O=n.n(p),f="/api/employees",x=new(function(){function e(){Object(d.a)(this,e)}return Object(j.a)(e,[{key:"getEmployees",value:function(){return O.a.get(f)}},{key:"getEmployeesById",value:function(e){return O.a.get(f+"/"+e)}},{key:"addEmployees",value:function(e){return O.a.post(f,e)}},{key:"updateEmployees",value:function(e,t){return O.a.put(f+"/"+t,e)}},{key:"deleteEmployees",value:function(e){return O.a.delete(f+"/"+e)}}]),e}()),v=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).fnameChange=function(e){a.setState({fname:e.target.value})},a.lnameChange=function(e){a.setState({lname:e.target.value})},a.emailChange=function(e){a.setState({email:e.target.value})},a.add=function(){var e={fname:a.state.fname,lname:a.state.lname,email:a.state.email};x.addEmployees(e).then((function(){return a.props.history.push("/employees")}))},a.cancel=function(){a.props.history.push("/employees")},a.state={fname:"",lname:"",email:""},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("h3",{className:"card-title text-center",children:"Add Employee"})}),Object(a.jsx)("div",{className:"container p-3",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("label",{for:"fname",children:"First Name"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("input",{name:"fname",id:"fname",placeholder:"Your First Name",autoComplete:"off",required:!0,autoFocus:!0,value:this.state.fname,onChange:function(t){return e.fnameChange(t)}})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("label",{for:"lname",children:"Last Name"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("input",{name:"lname",id:"lname",placeholder:"Your Last Name",autoComplete:"off",required:!0,value:this.state.lname,onChange:function(t){return e.lnameChange(t)}})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("label",{for:"email",children:"Email"})})}),Object(a.jsx)("div",{className:"row mb-2",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("input",{name:"email",id:"email",placeholder:"Your Email",autoComplete:"off",required:!0,value:this.state.email,onChange:function(t){return e.emailChange(t)}})})}),Object(a.jsx)("button",{type:"button",class:"btn btn-success",onClick:this.add,children:"Add"}),Object(a.jsx)("button",{type:"button",class:"btn btn-danger",onClick:this.cancel,children:"Cancel"})]})})]})})}}]),n}(c.Component),y=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).addEmployee=function(){a.props.history.push("/add-employee")},a.update=function(e){a.props.history.push("/update-employee/".concat(e))},a.delete=function(e){x.deleteEmployees(e).then((function(){return window.location.reload()}))},a.state={employees:[]},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.getEmployees().then((function(t){e.setState({employees:t.data})}))}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:"text-center",children:"Employees List"}),Object(a.jsx)("button",{type:"button",class:"btn btn-primary mb-2",onClick:this.addEmployee,children:"Add Employee"}),Object(a.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"First Name"}),Object(a.jsx)("th",{children:"Last Name"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{children:this.state.employees.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.fname}),Object(a.jsx)("td",{children:t.lname}),Object(a.jsx)("td",{children:t.email}),Object(a.jsxs)("td",{children:[Object(a.jsx)("button",{type:"button",class:"btn btn-warning",onClick:function(){return e.update(t.id)},children:"Update"}),Object(a.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){return e.delete(t.id)},children:"Delete"})]})]},t.id)}))})]})]})})}}]),n}(c.Component),g=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).fnameChange=function(e){a.setState({fname:e.target.value})},a.lnameChange=function(e){a.setState({lname:e.target.value})},a.emailChange=function(e){a.setState({email:e.target.value})},a.update=function(){var e={fname:a.state.fname,lname:a.state.lname,email:a.state.email},t=a.state.id;x.updateEmployees(e,t).then((function(){return a.props.history.push("/employees")}))},a.cancel=function(){a.props.history.push("/employees")},a.state={id:a.props.match.params.id,fname:"",lname:"",email:""},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.getEmployeesById(this.state.id).then((function(t){var n=t.data;e.setState({fname:n.fname,lname:n.lname,email:n.email})}))}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("h3",{className:"card-title text-center",children:"Update Employee"})}),Object(a.jsx)("div",{className:"container p-3",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("label",{for:"fname",children:"First Name"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("input",{name:"fname",id:"fname",placeholder:"Your First Name",autoComplete:"off",required:!0,autoFocus:!0,value:this.state.fname,onChange:function(t){return e.fnameChange(t)}})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("label",{for:"lname",children:"Last Name"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("input",{name:"lname",id:"lname",placeholder:"Your Last Name",autoComplete:"off",required:!0,value:this.state.lname,onChange:function(t){return e.lnameChange(t)}})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("label",{for:"email",children:"Email"})})}),Object(a.jsx)("div",{className:"row mb-2",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("input",{name:"email",id:"email",placeholder:"Your Email",autoComplete:"off",required:!0,value:this.state.email,onChange:function(t){return e.emailChange(t)}})})}),Object(a.jsx)("button",{type:"button",class:"btn btn-success",onClick:this.update,children:"Update"}),Object(a.jsx)("button",{type:"button",class:"btn btn-danger",onClick:this.cancel,children:"Cancel"})]})})]})})}}]),n}(c.Component);n(202);var N=function(){return Object(a.jsxs)(r.a,{children:[Object(a.jsx)(b,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:y}),Object(a.jsx)(o.a,{path:"/employees",component:y}),Object(a.jsx)(o.a,{path:"/add-employee",component:v}),Object(a.jsx)(o.a,{path:"/update-employee/:id",component:g})]})}),Object(a.jsx)(h,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,413)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),s(e),l(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),C()}},[[412,1,2]]]);
//# sourceMappingURL=main.bceb64b6.chunk.js.map