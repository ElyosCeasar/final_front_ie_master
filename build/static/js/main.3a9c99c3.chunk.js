(this.webpackJsonphw2=this.webpackJsonphw2||[]).push([[0],{298:function(e,t,a){e.exports=a(617)},303:function(e,t,a){},304:function(e,t,a){},331:function(e,t){},333:function(e,t){},370:function(e,t){},371:function(e,t){},617:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(6),l=a.n(i),o=(a(303),a(21)),s=a(23),c=a(31),u=a(30),m=a(32),p=(a(304),a(189)),d=a(9),h=a(618),f=a(50),g=a(183),y=a.n(g),b=a(95),v=a(38),k=a.n(v),E=a(327),w=function(){function e(){Object(o.a)(this,e),this.url="http://localhost:5000",this.tokenName="token"}return Object(s.a)(e,[{key:"checkIfTokenIsExpired",value:function(){var e=!1,t=this.getDecodedToken(),a=Math.round(Date.now()/1e3);return t.payload.exp<a&&(e=!0),e}},{key:"getDecodedToken",value:function(){var e=localStorage.getItem(this.tokenName);return E.decode(e,{complete:!0})}},{key:"logUserOutInExpirtim",value:function(){var e=this;setInterval((function(){e.isTokenExist()&&e.checkIfTokenIsExpired()&&e.logout()}),1e4)}},{key:"getRole",value:function(){return console.log(this.getDecodedToken),this.getDecodedToken().payload.Role}},{key:"logout",value:function(){localStorage.removeItem(this.tokenName),document.location.href="/"}},{key:"login",value:function(e){var t=this;this.signIn(e.username,e.password).then((function(e){null!==e&&(localStorage.setItem(t.tokenName,e.data),"admin"==t.getRole()&&(localStorage.removeItem(t.tokenName),alert("\u0627\u062f\u0645\u06cc\u0646 \u0627\u062c\u0627\u0632\u0647\u200c\u06cc \u0648\u0631\u0648\u062f \u0628\u0647 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0631\u0627 \u0646\u062f\u0627\u0631\u062f")),window.location.reload())})).catch((function(e){alert(e.response.data)}))}},{key:"isTokenExist",value:function(){return null!==localStorage.getItem(this.tokenName)}},{key:"getTokenForSend",value:function(){return{headers:{Authorization:"Bearer ".concat(localStorage.getItem(this.tokenName))}}}},{key:"signIn",value:function(e,t){var a={username:e,password:t};return k.a.post(this.url+"/api/auth/login",a)}}]),e}(),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={collapsed:!1},a.toggleCollapsed=function(){(0,a.props.isNavbarButtonClicked)(),a.setState({collapsed:!a.state.collapsed})},a.smallView=function(){return n.a.createElement(y.a,null,n.a.createElement("div",{style:{float:"rtl"===a.props.direc?"right":"left",width:"100%",backgroundColor:"#001529"}},n.a.createElement(p.a,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"horizontal",theme:"dark",style:{textAlign:"rtl"===a.props.direc?"right":"left"},inlineCollapsed:a.state.collapsed},n.a.createElement(p.a.Item,{key:"1"},n.a.createElement(b.b,{to:"/ShowAllForms",style:{color:"white"}},n.a.createElement(d.a,{type:"desktop"}),n.a.createElement("span",{style:{marginRight:"3px"}},"rtl"===a.props.direc?"\u0645\u0634\u0627\u0647\u062f\u0647":"Show"))),n.a.createElement(p.a.Item,{key:"2"},n.a.createElement("a",{onClick:a.logout,style:{color:"white"}},n.a.createElement(d.a,{type:"logout"}),n.a.createElement("span",{style:{marginRight:"3px"}},"rtl"===a.props.direc?"\u062e\u0631\u0648\u062c":"Log Out"))),n.a.createElement(h.a,{checkedChildren:"Fa",unCheckedChildren:"En",style:{float:"rtl"===a.props.direc?"left":"right",marginTop:"10px",marginLeft:"20px",marginRight:"20px",display:"block"},onChange:a.props.onDirectChange,checked:"rtl"===a.props.direc}))))},a.BigView=function(){return n.a.createElement(y.a,null,n.a.createElement("div",{style:{float:"rtl"===a.props.direc?"right":"left",width:"100%",height:"100vh"}},n.a.createElement(p.a,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark",style:{height:"100%",textAlign:"rtl"===a.props.direc?"right":"left"},inlineCollapsed:a.state.collapsed},n.a.createElement(f.a,{type:"primary",onClick:a.toggleCollapsed,style:{marginTop:"2%",marginLeft:"auto",marginRight:"auto",display:"block"}},n.a.createElement(d.a,{type:a.state.collapsed?"menu-unfold":"menu-fold"})),n.a.createElement(p.a.Item,{key:"1"},n.a.createElement(b.b,{to:"/ShowAllForms",style:{color:"white"}},n.a.createElement(d.a,{type:"desktop"}),n.a.createElement("span",{style:{marginRight:"3px"}},"rtl"===a.props.direc?"\u0645\u0634\u0627\u0647\u062f\u0647":"Show"))),n.a.createElement(p.a.Item,{key:"2"},n.a.createElement("a",{onClick:a.logout,style:{color:"white"}},n.a.createElement(d.a,{type:"logout"}),n.a.createElement("span",{style:{marginRight:"3px"}},"rtl"===a.props.direc?"\u062e\u0631\u0648\u062c":"Log Out"))),n.a.createElement(h.a,{checkedChildren:"Fa",unCheckedChildren:"En",style:{marginLeft:"auto",marginRight:"auto",display:"block"},onChange:a.props.onDirectChange,checked:"rtl"===a.props.direc}))))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return"true"===this.props.smallSize?this.smallView():this.BigView()}},{key:"logout",value:function(){(new w).logout()}}]),t}(n.a.Component),S=a(621),C=function e(){var t=this;Object(o.a)(this,e),this.url="http://localhost:5000",this.authServices=new w,this.getAllForms=function(){return k.a.get(t.url+"/api/forms",t.authServices.getTokenForSend())},this.getSpeceficFormById=function(e){return k.a.get(t.url+"/api/forms/"+e,t.authServices.getTokenForSend())},this.postNewForm=function(e){return k.a.post(t.url+"/api/forms",e,t.authServices.getTokenForSend())},this.postComplitedFormByClient=function(e,a){return k.a.post(t.url+"/api/answer/"+a,e,t.authServices.getTokenForSend())}},x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).columns=[],a.state={data:[]},a.headerFixer=function(){a.columns=[{title:n.a.createElement("span",{style:{color:"#006bd7"}},"rtl"===a.props.direc?"\u0634\u0645\u0627\u0631\u0647 \u0641\u0631\u0645":"form number"),dataIndex:"number",key:"number",width:"15%",align:"center",render:function(e){return n.a.createElement("span",{style:{color:"#001529"}},e)}},{title:n.a.createElement("span",{style:{color:"#006bd7"}},"rtl"===a.props.direc?"\u0646\u0627\u0645 \u0641\u0631\u0645":"form name"),dataIndex:"name",key:"name",width:"70%",align:"center",render:function(e){return n.a.createElement("span",{style:{color:"#001529"}},e)}},{title:n.a.createElement("span",{style:{color:"#006bd7"}},"rtl"===a.props.direc?"\u0639\u0645\u0644\u06cc\u0627\u062a":"\u064eAction"),width:"15%",align:"center",key:"action",render:function(e,t){return n.a.createElement("span",null,n.a.createElement(f.a,{type:"primary",onClick:function(){return a.handleShow(t.key)}},a.rolebasedButtonCreater()))}}]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;(new C).getAllForms().then((function(t){var a=t.data.forms.sort((function(e,t){return e.number<t.number?1:e.number>t.number?-1:0}));e.setState({data:a})}))}},{key:"rolebasedButtonCreater",value:function(){return"fieldAgent"===(new w).getRole()?"rtl"===this.props.direc?"\u067e\u0631 \u06a9\u0631\u062f\u0646":"fill":"rtl"===this.props.direc?"\u0645\u0634\u0627\u0647\u062f\u0647":"show"}},{key:"render",value:function(){return this.headerFixer(),n.a.createElement("div",{style:{textAlign:"rtl"===this.props.direc?"right":"left"}},n.a.createElement("h3",{style:{color:"white",marginRight:"3px",marginLeft:"3px"}},"rtl"===this.props.direc?"\u0645\u0634\u0627\u0647\u062f\u0647 \u062a\u0645\u0627\u0645 \u0641\u0631\u0645 \u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f":"Showing all forms"),n.a.createElement(S.a,{columns:this.columns,dataSource:this.state.data,style:{backgroundColor:"white"},bordered:"true",tableLayout:"auto",size:"middle"}))}},{key:"handleShow",value:function(e){"fieldAgent"===(new w).getRole()?this.props.history.push("/ShowSpeceficForm/"+e):this.props.history.push("/ShowDashbordForSpeceficForm/"+e)}}]),t}(n.a.Component),j=a(619),F=a(620),I=a(69),A=a(26),B=function e(){var t=this;Object(o.a)(this,e),this.url="http://localhost:5000",this.authServices=new w,this.postComplitedFormByClient=function(e,a){return k.a.post(t.url+"/api/answer/"+a,e,t.authServices.getTokenForSend())},this.getById=function(e){return k.a.get(t.url+"/api/answer/"+e,t.authServices.getTokenForSend())},this.getAllAnswersByFormId=function(e){return k.a.get(t.url+"/api/answer/getAllAnswersByFormId/"+e,t.authServices.getTokenForSend())},this.getAnswerStatesticByFormId=function(e){return k.a.get(t.url+"/api/answer/getAnswerStatesticByFormId/"+e,t.authServices.getTokenForSend())},this.filterAnswersForGrid=function(e,a){return k.a.post(t.url+"/api/answer/filterAnswersForGrid/ "+a,e,t.authServices.getTokenForSend())}},N=a(111),V=a(625),T=a(627),D=a(622),P=a(628),L=a(71),M=a(284),H=a(285),R=function(e){return null!==e&&"object"===typeof e&&e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")};function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var W=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.polygonPromise=function(){var e={},t=new Promise((function(t,a){e.resolve=t,e.reject=a}));return e.then=t.then.bind(t),e.catch=t.catch.bind(t),e.promise=t,e}(),this.renderPolygon()}},{key:"componentDidUpdate",value:function(e){this.props.map===e.map&&function(e,t){if(e===t)return!0;if(!Array.isArray(e)||!Array.isArray(t))return!1;if(e.length!==t.length)return!1;for(var a=0;a<e.length;++a)if(e[a]!==t[a]){if(!R(e[a])||!R(t[a]))return!1;if(t[a].lat!==e[a].lat||t[a].lng!==e[a].lng)return!1}return!0}(this.props.paths,e.paths)||(this.polygon&&this.polygon.setMap(null),this.renderPolygon())}},{key:"componentWillUnmount",value:function(){this.polygon&&this.polygon.setMap(null)}},{key:"renderPolygon",value:function(){var e=this.props,t=e.map,a=e.google,r=e.paths,n=e.strokeColor,i=e.strokeOpacity,l=e.strokeWeight,o=e.fillColor,s=e.fillOpacity,c=Object(H.a)(e,["map","google","paths","strokeColor","strokeOpacity","strokeWeight","fillColor","fillOpacity"]);if(!a)return null;var u=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){Object(M.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({map:t,paths:r,strokeColor:n,strokeOpacity:i,strokeWeight:l,fillColor:o,fillOpacity:s},c);this.polygon=new a.maps.Polygon(u),this.polygonPromise.resolve(this.polygon)}},{key:"getPolygon",value:function(){return this.polygonPromise}},{key:"handleEvent",value:function(e){var t=this;return function(a){var r="on".concat(e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(""));t.props[r]&&t.props[r](t.props,t.polygon,a)}}},{key:"render",value:function(){return null}}]),t}(n.a.Component);W.defaultProps={name:"Polygon"};var q=W,K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).lastId=0,a.clickHandler=function(e,t,r){var n=Object(A.a)(a.props.points);n.push({lat:r.latLng.lat(),lng:r.latLng.lng(),pointId:a.lastId}),a.lastId=a.lastId+1,console.log("z",n),a.props.clickHandler(a.props.itemId,n)},a.onMarkerClick=function(e){e.position;var t=a.props.points.findIndex((function(t){return t.pointId===e.id})),r=Object(A.a)(a.props.points);r.splice(t,1),a.props.clickHandler(a.props.itemId,r)},a.drawPolygon=function(){if(a.props.points.length>=3)return n.a.createElement(q,{paths:a.props.points,strokeColor:"#0000FF",strokeOpacity:.8,strokeWeight:2,fillColor:"#0000FF",fillOpacity:.35})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(L.Map,{google:this.props.google,zoom:10,style:{width:"30%",height:"300px"},initialCenter:{lat:35.715298,lng:51.404343},onClick:this.clickHandler},this.drawPolygon(),this.props.points.map((function(t){return n.a.createElement(L.Marker,{onClick:e.onMarkerClick,name:"Current location",position:{lat:t.lat,lng:t.lng},id:t.pointId,key:t.pointId})})))}}]),t}(r.Component),U=Object(L.GoogleApiWrapper)({apiKey:"AIzaSyDjs0u02-62FMwrtxMxci5pc6PIubSyW28"})(K),_=N.a.Option,G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).firstTimeForSetState=!0,a.state={form:{},ElementValues:[]},a.formBuilder=function(){var e=[];if(!a.state.form.fields)return n.a.createElement("div",null);for(var t=Object(A.a)(a.state.form.fields),r=Object(A.a)(a.state.ElementValues),i=function(i){var l="true"===t[i].required?"#ffffb3":"white";if(t[i].hasOptions)e.push(n.a.createElement("div",{style:{marginTop:"20px",display:"block"}},n.a.createElement("label",{htmlFor:t[i].name},"true"===t[i].required?"*":"",t[i].title," :"),n.a.createElement(N.a,{style:{marginLeft:"10px",marginRight:"10px",backgroundColor:l,width:"300px",textAlign:"center"},placeholder:"rtl"===a.props.direc?"\u06af\u0632\u06cc\u0646\u0647 \u06cc \u0645\u062f \u0646\u0638\u0631 \u062e\u0648\u062f\u0631 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f":"select an option",itemId:i,key:i,onChange:function(e){return a.SelectOptionOnChangeHandeler(e,i)}},t[i].options.map((function(e){return n.a.createElement(_,{value:e.value},e.label)})))));else switch(t[i].type){case"Text":e.push(n.a.createElement("div",{style:{marginTop:"20px",display:"block"}},n.a.createElement("label",{htmlFor:t[i].name},"true"===t[i].required?"*":"",t[i].title," :"),n.a.createElement(V.a,{id:t[i].name,style:{width:"80%",marginLeft:"10px",marginRight:"10px",backgroundColor:l},value:r[i],itemId:i,key:i,onChange:a.inputOnChangeHandeler})));break;case"Number":e.push(n.a.createElement("div",{style:{marginTop:"20px",display:"block"}},n.a.createElement("label",{htmlFor:t[i].name},"true"===t[i].required?"*":"",t[i].title," :"),n.a.createElement(T.a,{id:t[i].name,style:{width:"20%",marginLeft:"10px",marginRight:"10px",backgroundColor:l},Value:r[i],itemId:i,key:i,onChange:function(e){return a.inputNumberOnChangeHandeler(e,i)}})));break;case"Date":e.push(n.a.createElement("div",{style:{marginTop:"20px",display:"block"}},n.a.createElement("label",{htmlFor:t[i].name},"true"===t[i].required?"*":"",t[i].title," :"),n.a.createElement(D.a,{id:t[i].name,style:{marginLeft:"10px",marginRight:"10px",backgroundColor:l,direction:"ltr"},Value:r[i],defaultValue:0,itemId:i,key:i,onChange:function(e){return a.DatePickerOnChangeHandeler(e,i)}})));break;case"Location":e.push(n.a.createElement("div",{style:{marginTop:"20px",display:"block",height:"300px",marginBottom:"40px"}},n.a.createElement("label",{htmlFor:t[i].name},"true"===t[i].required?"*":"",t[i].title," :"),n.a.createElement(U,{id:t[i].name,defaultValue:0,itemId:i,key:i,points:r[i],clickHandler:a.LocationOnClickHandeler})));break;default:console.log("form element not found")}},l=0;l<t.length;l++)i(l);return e},a.intialStateBuilder=function(){var e=[];if(a.state.form.fields){var t=Object(A.a)(a.state.form.fields);e.length=t.length;for(var r=0;r<t.length;r++)if(!t[r].hasOptions)switch(t[r].type){case"Text":case"Number":e[r]="";break;case"Date":break;case"Location":e[r]=[];break;default:console.log("form element not found")}}a.setState({ElementValues:e})},a.inputOnChangeHandeler=function(e){var t=Object(A.a)(a.state.ElementValues);t[e.target.getAttribute("itemId")]=e.target.value,a.setState({ElementValues:t})},a.inputNumberOnChangeHandeler=function(e,t){var r=Object(A.a)(a.state.ElementValues);r[t]=e,a.setState({ElementValues:r})},a.DatePickerOnChangeHandeler=function(e,t){var r=Object(A.a)(a.state.ElementValues);r[t]=e._d,a.setState({ElementValues:r})},a.LocationOnClickHandeler=function(e,t){var r=Object(A.a)(a.state.ElementValues);r[e]=t,a.setState({ElementValues:r})},a.SelectOptionOnChangeHandeler=function(e,t){var r=Object(A.a)(a.state.ElementValues);r[t]=e,a.setState({ElementValues:r})},a.submitForm=function(){var e=new B;a.checker()?e.postComplitedFormByClient(a.formatOutput(),a.props.match.params.id).then((function(e){P.a.success({message:"rtl"===a.props.direc?"\u0639\u0645\u0644\u06cc\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f":"Success",description:"rtl"===a.props.direc?"\u0641\u0631\u0645 \u0627\u0631\u0633\u0627\u0644 \u0634\u062f":"\u0651form is submited",placement:"rtl"===a.props.direc?"bottomLeft":"bottomRight"}),a.props.history.push("/ShowAllForms")})).catch((function(e){P.a.error({message:"rtl"===a.props.direc?"\u0639\u0645\u0644\u06cc\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f":"Faild",description:"rtl"===a.props.direc?"\u0645\u0634\u06a9\u0644 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644  \u0628\u0647 \u0633\u0631\u0648\u0631":"connection to server has problem",placement:"rtl"===a.props.direc?"bottomLeft":"bottomRight",onClick:function(){console.log("Notification Clicked!")}})})):P.a.error({message:"rtl"===a.props.direc?"\u0639\u0645\u0644\u06cc\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f":"Faild",description:"rtl"===a.props.direc?"\u0641\u06cc\u0644\u062f\u0647\u0627\u06cc \u0627\u062c\u0628\u0627\u0631\u06cc \u067e\u0631 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a":"at least one of mandetory filds is not complited",placement:"rtl"===a.props.direc?"bottomLeft":"bottomRight",onClick:function(){console.log("Notification Clicked!")}})},a.formatOutput=function(){var e=Object(A.a)(a.state.ElementValues),t=Object(A.a)(a.state.form.fields);console.log(a.state.form);for(var r={title:a.state.form.title,id:a.state.form.id,type:"formSubmit by client",fields:[]},n=[],i=0;i<t.length;i++)n.push({elementName:t[i].name,answer:e[i]});return r.fields=n,r},a.checker=function(){for(var e=Object(A.a)(a.state.ElementValues),t=!0,r=Object(A.a)(a.state.form.fields),n=0;n<r.length;n++)if("true"===r[n].required&&(!e[n]||""===e[n]&&0===e[n]&&e[n]===[])){t=!1;break}return t},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;(new C).getSpeceficFormById(t).then((function(t){return e.setState({form:t.data.form})}))}},{key:"componentDidUpdate",value:function(){this.state.form.fields&&this.firstTimeForSetState&&(this.intialStateBuilder(),this.firstTimeForSetState=!1)}},{key:"render",value:function(){return console.log(this.state.ElementValues),n.a.createElement("div",{style:{textAlign:"rtl"===this.props.direc?"right":"left"}},n.a.createElement("h3",{style:{color:"white",marginRight:"20px",marginLeft:"20px"}},"rtl"===this.props.direc?"\u0645\u0634\u0627\u0647\u062f\u0647 \u0648 \u067e\u0631 \u06a9\u0631\u062f\u0646 \u0641\u0631\u0645":"Show And Fill"),n.a.createElement("div",{style:{backgroundColor:"white",margin:"20px",padding:10}},n.a.createElement("h4",null,this.state.form.title),this.formBuilder(),n.a.createElement(f.a,{type:"primary",style:{display:"block",marginTop:"20px",marginBottom:"10px"},onClick:this.submitForm},"rtl"===this.props.direc?"\u062b\u0628\u062a":"confirm")))}}]),t}(r.Component),J=a(623),Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||(console.log("Received values of form: ",t),(new w).login(t))}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return n.a.createElement("div",{style:{position:"absolute",backgroundColor:"#001529",width:"50%",height:"300px",left:0,right:0,top:0,bottom:0,margin:"auto",maxWidth:"100%",maxHeight:"100%",overflow:"auto"}},n.a.createElement("div",{style:{marginLeft:"50px",marginRight:"50px",marginTop:"30px"}},n.a.createElement("h2",{style:{color:"white",textAlign:"center"}},"\u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0645\u062f\u06cc\u0631\u06cc\u062a \u0628\u062d\u0631\u0627\u0646"),n.a.createElement(J.a,{onSubmit:this.handleSubmit,className:"login-form"},n.a.createElement(J.a.Item,null,e("username",{rules:[{required:!0,message:"\u0644\u0637\u0641\u0627 \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}]})(n.a.createElement(V.a,{prefix:n.a.createElement(d.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc"}))),n.a.createElement(J.a.Item,null,e("password",{rules:[{required:!0,message:"\u0644\u0637\u0641\u0627 \u0631\u0645\u0632 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}]})(n.a.createElement(V.a,{prefix:n.a.createElement(d.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u06a9\u0644\u0645\u0647\u200c\u06cc \u0639\u0628\u0648\u0631"}))),n.a.createElement(J.a.Item,null,n.a.createElement(f.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{width:"60%",margin:"0 auto",display:"block",marginTop:"20px"}},"\u0648\u0631\u0648\u062f")))))}}]),t}(r.Component),$=a(113),Q=a.n($),X=a(291),Z=a(292),ee=a(624),te=a(626),ae=function e(){var t=this;Object(o.a)(this,e),this.url="http://localhost:5000",this.authServices=new w,this.getAllAreasNameForPoligon=function(e){return k.a.post(t.url+"/api/area/getAllAreasNameForPoligon",e,t.authServices.getTokenForSend())}},re=(N.a.Option,function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={percent:0,data:[],ElementValues:[],visible:!1},a.columns=[],a.headerFixer=function(){var e=[{title:n.a.createElement("span",{style:{color:"#006bd7"}},"rtl"===a.props.direc?"\u0646\u0627\u062d\u06cc\u0647":"area"),dataIndex:"area",key:"area",width:100,align:"center",render:function(e){return n.a.createElement("span",{style:{color:"#001529"}},e)}}],t=a.getMiddlePart(),r=[{title:n.a.createElement("span",{style:{color:"#006bd7"}},"rtl"===a.props.direc?"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc":"username"),dataIndex:"username",key:"username",width:150,align:"center",render:function(e){return n.a.createElement("span",{style:{color:"#001529"}},e)}},{title:n.a.createElement("span",{style:{color:"#006bd7"}},"rtl"===a.props.direc?"\u062a\u0627\u0631\u06cc\u062e \u0627\u0631\u0633\u0627\u0644":"time"),dataIndex:"time",key:"time",width:100,align:"center",render:function(e){return n.a.createElement("span",{style:{color:"#001529"}},e)}},{title:n.a.createElement("span",{style:{color:"#006bd7"}},"rtl"===a.props.direc?"\u0639\u0645\u0644\u06cc\u0627\u062a":"\u064eAction"),width:100,align:"center",key:"action",render:function(e,t){return n.a.createElement("span",null,n.a.createElement(f.a,{type:"primary",onClick:function(){return a.handleShow(t._id)}},"rtl"===a.props.direc?"\u0645\u0634\u0627\u0647\u062f\u0647":"show"))}}];a.columns=[].concat(e,Object(A.a)(t),r)},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(e){console.log("zio"+a.state.ElementValues);for(var t=[],r=0;r<a.state.form.fields.length;r++){var n={};n.type=a.state.form.fields[r].type,n.name=a.state.form.fields[r].name,"Location"!==n.type?n.value=a.state.ElementValues[r]:n.value={lat:a.state.ElementValues[r].substring(0,a.state.ElementValues[r].lastIndexOf("|")),lng:a.state.ElementValues[r].substring(a.state.ElementValues[r].lastIndexOf("|")+1)},console.log("ppp",n.value),t.push(n)}var i=a.props.match.params.id;(new B).filterAnswersForGrid(t,i).then((function(e){console.log("filter",e),a.setState({formAnswerArray:e.data})})).finally((function(){a.getData(),a.setState({visible:!1})}))},a.handleCancel=function(e){console.log(e),a.setState({visible:!1})},a.inputOnChangeHandeler=function(e){var t=Object(A.a)(a.state.ElementValues);t[e.target.getAttribute("itemId")]=e.target.value,a.setState({ElementValues:t})},a.inputNumberOnChangeHandeler=function(e,t){var r=Object(A.a)(a.state.ElementValues);r[t]=e,a.setState({ElementValues:r})},a.DatePickerOnChangeHandeler=function(e,t){var r=Object(A.a)(a.state.ElementValues);r[t]=e._d,a.setState({ElementValues:r})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a=new B;(new C).getSpeceficFormById(t).then((function(r){return a.getAllAnswersByFormId(t).then((function(t){return e.setState({formAnswerArray:t.data,form:r.data.form})}))})),this.getPercent(t),this.getData();var r=setInterval((function(){0===e.state.data.length?e.getData():clearInterval(r)}),1e3)}},{key:"render",value:function(){return this.headerFixer(),n.a.createElement("div",{style:{textAlign:"rtl"===this.props.direc?"right":"left"}},n.a.createElement("h3",{style:{color:"white",marginRight:"3px",marginLeft:"3px"}},"rtl"===this.props.direc?"\u062f\u0627\u0634\u0628\u0631\u062f \u0641\u0631\u0645 \u0628\u062d\u0631\u0627\u0646":"disaster dashboard","undefined"!==typeof this.state.form?" "+this.state.form.title+" ":""),n.a.createElement("div",{style:{backgroundColor:"white",marginBottom:"20px",padding:10}},"rtl"===this.props.direc?"\u062f\u0631\u0635\u062f \u067e\u0627\u0633\u062e\u200c\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0641\u0631\u0645 \u0628\u0647 \u06a9\u0644 \u067e\u0627\u0633\u062e\u200c\u0647\u0627":"this form answers per all answers",n.a.createElement(ee.a,{style:{paddingRight:"8px",paddingLeft:"20px"},type:"circle",percent:this.state.percent,status:"normal"})),n.a.createElement("div",{style:{backgroundColor:"white",marginBottom:"20px",marginTop:"20px",padding:10}},n.a.createElement(f.a,{style:{marginRight:"5px",marginLeft:"10px"},type:"primary",icon:"search",onClick:this.showModal},"rtl"===this.props.direc?"\u062c\u0633\u062a\u200c \u0648\u200c \u062c\u0648":"search"),n.a.createElement(Z.CSVLink,{data:this.state.data},n.a.createElement(f.a,{type:"primary"},"rtl"===this.props.direc?"\u06af\u0631\u0641\u062a\u0646 \u062e\u0631\u0648\u062c\u06cc csv":"export csv")),n.a.createElement(te.a,{title:"rtl"===this.props.direc?"\u062c\u0633\u062a\u200c \u0648\u200c \u062c\u0648":"search",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},this.getSearchItem()),n.a.createElement(S.a,{columns:this.columns,dataSource:this.state.data,style:{backgroundColor:"white",marginTop:"10px"},bordered:"true",tableLayout:"auto",size:"middle"})),n.a.createElement("div",{style:{backgroundColor:"white",marginBottom:"20px",marginTop:"20px",padding:10}},this.getFooter()))}},{key:"getMiddlePart",value:function(){var e=[];if("undefined"!==typeof this.state.form)for(var t=0;t<this.state.form.fields.length;t++){var a={title:n.a.createElement("span",{style:{color:"#006bd7"}},this.state.form.fields[t].title),dataIndex:this.state.form.fields[t].name,key:this.state.form.fields[t].name,width:150,align:"center",render:function(e){return n.a.createElement("span",{style:{color:"#001529"}},e)}};e.push(a)}return e}},{key:"getPercent",value:function(e){var t=this;(new B).getAnswerStatesticByFormId(e).then((function(e){t.setState({percent:e.data})}))}},{key:"getData",value:function(){var e=Object(X.a)(Q.a.mark((function e(){var t,a,r,n,i,l,o,s,c=this;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof this.state.form){e.next=16;break}for(console.log("s1",this.state.formAnswerArray),t=new ae,a=this.state.formAnswerArray,r=this.state.form.fields,n=[],i=[],l=0;l<r.length;l++)i.push(r[l].type);o=Q.a.mark((function e(l){var o,s;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o={},s=0;case 2:if(!(s<r.length)){e.next=17;break}if("Location"!==i[s]){e.next=13;break}if(o[r[s].name]="rtl"===c.props.direc?"\u0646\u0642\u0634\u0647":"map",!(a[l].fields[s].answer.length>0)){e.next=10;break}return e.next=8,t.getAllAreasNameForPoligon(a[l].fields[s].answer).then((function(e){console.log("x24",e),o.area=e.data.join()}));case 8:e.next=11;break;case 10:o.area="\u0646\u062f\u0627\u0631\u062f";case 11:e.next=14;break;case 13:o[r[s].name]=a[l].fields[s].answer;case 14:s++,e.next=2;break;case 17:o.username=a[l].username,o.time=a[l].time,o._id=a[l]._id,n.push(o);case 21:case"end":return e.stop()}}),e)})),s=0;case 10:if(!(s<a.length)){e.next=15;break}return e.delegateYield(o(s),"t0",12);case 12:s++,e.next=10;break;case 15:this.setState({data:n,columnTypes:i});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleShow",value:function(e){this.props.history.push("/ShowSpeceficFormForManager/"+e)}},{key:"getFooter",value:function(){var e=[];if("undefined"!==typeof this.state.form)for(var t=this.FindAllNumbersOfColumnNumbers(),a=0;a<t.length;a++)e.push(this.createSumOfColumn(t[a]));return e}},{key:"FindAllNumbersOfColumnNumbers",value:function(){for(var e=[],t=0;t<this.state.form.fields.length;t++)"Number"===this.state.form.fields[t].type&&e.push(t);return e}},{key:"createSumOfColumn",value:function(e){return n.a.createElement("div",null,n.a.createElement("span",null,n.a.createElement("b",null,this.state.form.fields[e].title))," : ",n.a.createElement("span",{style:{color:"#006bd7"}},this.getSumColumn(e)))}},{key:"getSumColumn",value:function(e){for(var t=this.state.formAnswerArray,a=0,r=0;r<t.length;r++)a+=t[r].fields[e].answer;return a}},{key:"getSearchItem",value:function(){var e=[],t=Object(A.a)(this.state.ElementValues);if("undefined"!==typeof this.state.form)for(var a=0;a<this.state.form.fields.length;a++)console.log("lala",this.state.form.fields),"Location"===this.state.form.fields[a].type?e.push(this.buildItemMap(this.state.form.fields[a],a,t[a])):"Date"===this.state.form.fields[a].type||("Number"===this.state.form.fields[a].type?e.push(this.buildItemNumber(this.state.form.fields[a],a,t[a])):e.push(this.buildItemNotSpecial(this.state.form.fields[a],a,t[a])));return e}},{key:"buildItemNotSpecial",value:function(e,t,a){return n.a.createElement("div",null,n.a.createElement("span",null,e.title," :"),n.a.createElement(V.a,{value:a,itemId:t,key:t,onChange:this.inputOnChangeHandeler}))}},{key:"buildItemDate",value:function(e,t,a){var r=this;return n.a.createElement("div",null,n.a.createElement("span",null,e.title," :"),n.a.createElement(D.a,{id:"xdate"+t,style:{display:"block",width:"100%"},value:a,defaultValue:0,itemId:t,key:t,onChange:function(e){return r.DatePickerOnChangeHandeler(e,t)}}))}},{key:"buildItemMap",value:function(e,t,a){return n.a.createElement("div",null,n.a.createElement("span",null,e.title," (\u0644\u0637\u0641\u0627 \u0628\u0627 \u0641\u0631\u0645\u062a \u0632\u06cc\u0631 \u0646\u0642\u0637\u0647\u200c\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f):"),n.a.createElement(V.a,{value:a,itemId:t,placeholder:"lng|lat",key:t,onChange:this.inputOnChangeHandeler}))}},{key:"buildItemNumber",value:function(e,t,a){var r=this;return n.a.createElement("div",null,n.a.createElement("span",null,e.title," :"),n.a.createElement(T.a,{style:{display:"block",width:"100%"},value:a,itemId:t,key:t,onChange:function(e){return r.inputNumberOnChangeHandeler(e,t)}}))}}]),t}(r.Component)),ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).lastId=0,a.drawPolygon=function(){if(a.props.points.length>=3)return console.log("points",a.props.points),n.a.createElement(q,{paths:a.props.points,strokeColor:"#0000FF",strokeOpacity:.8,strokeWeight:2,fillColor:"#0000FF",fillOpacity:.35})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(L.Map,{google:this.props.google,zoom:10,style:{width:"30%",height:"300px"},initialCenter:{lat:35.715298,lng:51.404343}},this.drawPolygon(),this.props.points.map((function(e){return n.a.createElement(L.Marker,{name:"Current location",position:{lat:e.lat,lng:e.lng},id:e.pointId,key:e.pointId})})))}}]),t}(r.Component),ie=Object(L.GoogleApiWrapper)({apiKey:"AIzaSyDjs0u02-62FMwrtxMxci5pc6PIubSyW28"})(ne),le=(N.a.Option,function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).firstTimeForSetState=!0,a.state={form:{},ElementValues:[],data:[],body:"",formTitle:"",testloc:[{lat:35.74874138089811,lng:51.33087158203125},{lat:35.62381451392674,lng:51.383056640625},{lat:35.71752800693265,lng:51.43524169921875}]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.generateFormData()}},{key:"render",value:function(){return n.a.createElement("div",{style:{textAlign:"rtl"===this.props.direc?"right":"left"}},n.a.createElement("h3",{style:{color:"white",marginRight:"20px",marginLeft:"20px"}},"rtl"===this.props.direc?"\u0645\u0634\u0627\u0647\u062f\u0647\u200c\u06cc \u0641\u0631\u0645":"Show form"),n.a.createElement("div",{style:{backgroundColor:"white",margin:"20px",padding:10}},n.a.createElement("h3",null,"rtl"===this.props.direc?" \u0646\u0627\u0645 \u0641\u0631\u0645:":"form name: "," ",this.state.formTitle),this.state.body))}},{key:"generateFormData",value:function(){var e=this,t=this.props.match.params.id,a=new B,r=new C;a.getById(t).then((function(t){var a=t.data;r.getSpeceficFormById(a.formId).then((function(t){for(var r=t.data.form,n=[],i=0;i<r.fields.length;i++){var l={};l.type=r.fields[i].type,l.title=r.fields[i].title,l.value=a.fields[i].answer,n.push(l)}e.setState({form:r,answer:a,data:n,body:e.generateBody(n),formTitle:r.title})}))}))}},{key:"generateBody",value:function(e){var t=this,a=[];return e.length>0&&e.forEach((function(e){"Location"!==e.type?a.push(t.getElementNotMap(e)):a.push(t.getElementMap(e))})),a}},{key:"getElementNotMap",value:function(e){return n.a.createElement("div",null,n.a.createElement("b",null,e.title)," : ",e.value)}},{key:"getElementMap",value:function(e){for(var t=[],a=0;a<e.value.length;a++){var r={lat:e.value[a].lat,lng:e.value[a].lng};t.push(r)}return n.a.createElement("div",{style:{marginTop:"20px",display:"block",height:"300px",marginBottom:"40px"}},n.a.createElement("b",null,e.title)," : ",n.a.createElement(ie,{points:t}))}}]),t}(r.Component)),oe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={smallSize:!1,isNavbarButtonClicked:!1,direc:"rtl",formCreaterState:{title:"Form",Elements:[],lastId:0}},a.smallView=function(){return"rtl"===a.state.direc?n.a.createElement("div",{className:"App"},n.a.createElement(j.a,null,n.a.createElement(F.a,{span:a.state.isNavbarButtonClicked?22:20},n.a.createElement("div",{style:{margin:"20px"}},n.a.createElement(I.c,null,n.a.createElement(I.a,{path:"/ShowAllForms",render:function(e){return n.a.createElement(x,Object.assign({direc:a.state.direc},e))}}),n.a.createElement(I.a,{path:"/ShowSpeceficForm/:id",render:function(e){return n.a.createElement(G,Object.assign({direc:a.state.direc},e))}}),n.a.createElement(I.a,{path:"/ShowDashbordForSpeceficForm/:id",render:function(e){return n.a.createElement(re,Object.assign({direc:a.state.direc},e))}}),n.a.createElement(I.a,{path:"/ShowSpeceficFormForManager/:id",render:function(e){return n.a.createElement(le,Object.assign({direc:a.state.direc},e))}}),n.a.createElement(I.a,{path:"/",render:function(e){return n.a.createElement(x,Object.assign({direc:a.state.direc},e))}})))),n.a.createElement(F.a,{span:a.state.isNavbarButtonClicked?2:4},n.a.createElement(O,{smallSize:"false",direc:a.state.direc,onDirectChange:a.directHandler,isNavbarButtonClicked:a.navbarButtonResizeViewClickHandler})))):n.a.createElement("div",{className:"App"},n.a.createElement(j.a,null,n.a.createElement(F.a,{span:a.state.isNavbarButtonClicked?2:4},n.a.createElement(O,{smallSize:"false",direc:a.state.direc,onDirectChange:a.directHandler,isNavbarButtonClicked:a.navbarButtonResizeViewClickHandler})),n.a.createElement(F.a,{span:a.state.isNavbarButtonClicked?22:20},n.a.createElement("div",{style:{margin:"20px"}},n.a.createElement(I.c,null,n.a.createElement(I.a,{path:"/ShowAllForms",render:function(e){return n.a.createElement(x,Object.assign({direc:a.state.direc},e))}}),n.a.createElement(I.a,{path:"/ShowSpeceficForm/:id",render:function(e){return n.a.createElement(G,Object.assign({direc:a.state.direc},e))}}),n.a.createElement(I.a,{path:"/ShowDashbordForSpeceficForm/:id",render:function(e){return n.a.createElement(re,Object.assign({direc:a.state.direc},e))}}),n.a.createElement(I.a,{path:"/ShowSpeceficFormForManager/:id",render:function(e){return n.a.createElement(le,Object.assign({direc:a.state.direc},e))}}),n.a.createElement(I.a,{path:"/",render:function(e){return n.a.createElement(x,Object.assign({direc:a.state.direc},e))}}))))))},a.BigView=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(F.a,null,n.a.createElement(j.a,{style:{zIndex:"1"}},n.a.createElement(O,{smallSize:"true",direc:a.state.direc,onDirectChange:a.directHandler})),n.a.createElement(j.a,{style:{zIndex:"0"}},n.a.createElement(I.c,null,n.a.createElement(I.a,{path:"/ShowAllForms",render:function(e){return n.a.createElement(x,Object.assign({direc:a.state.direc},e))}}),n.a.createElement(I.a,{path:"/ShowSpeceficForm/:id",render:function(e){return n.a.createElement(G,Object.assign({direc:a.state.direc},e))}}),n.a.createElement(I.a,{path:"/ShowDashbordForSpeceficForm/:id",render:function(e){return n.a.createElement(re,Object.assign({direc:a.state.direc},e))}}),n.a.createElement(I.a,{path:"/ShowSpeceficFormForManager/:id",render:function(e){return n.a.createElement(le,Object.assign({direc:a.state.direc},e))}}),n.a.createElement(I.a,{path:"/",render:function(e){return n.a.createElement(x,Object.assign({direc:a.state.direc},e))}})))))},a.navbarButtonResizeViewClickHandler=function(){a.setState({isNavbarButtonClicked:!a.state.isNavbarButtonClicked})},a.directHandler=function(){var e="rtl"===a.state.direc?"ltr":"rtl";a.setState({isNavbarButtonClicked:!1}),a.setState({direc:e})},a.formCreaterStateFixHandeler=function(e){a.setState({formCreaterState:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){var e=window.innerWidth<=780;e||this.setState({isNavbarButtonClicked:!1}),this.setState({smallSize:e})}},{key:"render",value:function(){var e=this.state.smallSize,t=new w;if(t.isTokenExist()&&!t.checkIfTokenIsExpired())return t.logUserOutInExpirtim(),e?n.a.createElement("div",{style:{direction:this.state.direc}},this.BigView()):n.a.createElement("div",{style:{direction:this.state.direc}},this.smallView());var a=J.a.create({name:"normal_login"})(Y);return n.a.createElement(a,null)}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(616);l.a.render(n.a.createElement(b.a,null,n.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[298,1,2]]]);
//# sourceMappingURL=main.3a9c99c3.chunk.js.map