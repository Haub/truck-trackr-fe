(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){},143:function(e,t,a){},145:function(e,t,a){},147:function(e,t,a){e.exports=a.p+"static/media/hamburger.d9aaf7d5.svg"},148:function(e,t,a){},150:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(68),o=a.n(s),c=a(153),i=a(8),u=a(27),p=a(70),l=a(75),d=Object(u.b)({breweries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_BREWERIES":return t.breweries;default:return e}},currentPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_PROFILE":return t.currentPage;default:return e}},foodTrucks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_FOOD_TRUCKS":return t.foodTrucks;default:return e}},userEvents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_EVENTS":return t.events;case"ADD_EVENT":return[].concat(Object(l.a)(e),[t.event]);case"REMOVE_EVENT":return e.filter(function(e){return e.id!==t.event.id});case"EDIT_EVENT":return e.map(function(e){return e.id===t.event.id?Object(p.a)({},t.event):e});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":return t.user;case"REMOVE_USER":return{};default:return e}}}),m=(a(85),a(9)),h=a(14),f=a(16),b=a(15),v=a(17),E=a(141),k=a(154),g=a(1),y=a.n(g),w=r.a.createContext(null),O=function(e){return function(t){return r.a.createElement(w.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},N=w,x=a(56),S=a.n(x),_=(a(135),{apiKey:"AIzaSyAZaFvQvt60q0xHZ0LFxug4ooVX3LOiPMA",authDomain:"trucktrackr-2f98a.firebaseapp.com",databaseURL:"https://trucktrackr-2f98a.firebaseio.com",projectId:"trucktrackr-2f98a",storageBucket:"trucktrackr-2f98a.appspot.com",messagingSenderId:"97220175359"}),T=function e(){var t=this;Object(m.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},S.a.initializeApp(_),this.auth=S.a.auth()},j=a(3),P=a.n(j),C=a(4),D=a(13),U=a(155),A=(a(139),function(e){return{type:"LOAD_PROFILE",currentPage:e}}),I=function(e){return{type:"ADD_USER",user:e}},B=function(){var e=Object(C.a)(P.a.mark(function e(t){var a,n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://truck-trackr-api.herokuapp.com/api/v1/".concat(t));case 3:if((a=e.sent).ok){e.next=8;break}throw new Error(a.statusText);case 8:return e.next=10,a.json();case 10:return n=e.sent,e.abrupt("return",n);case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(0),new Error(e.t0.message);case 17:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(C.a)(P.a.mark(function e(t){var a,n,r,s;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://truck-trackr-api.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if((a=e.sent).ok){e.next=8;break}throw new Error(a.statusText);case 8:return e.next=10,a.json();case 10:return n=e.sent,e.next=13,F(n);case 13:return r=e.sent,s=[n,r],e.abrupt("return",s);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(0),new Error(e.t0.message);case 21:case"end":return e.stop()}},e,this,[[0,18]])}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(C.a)(P.a.mark(function e(t){var a,n,r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:return a=e.sent,e.prev=3,e.next=6,fetch("https://truck-trackr-api.herokuapp.com/api/v1/".concat(a.type,"/").concat(a.id,"/").concat(a.eventType));case 6:if((n=e.sent).ok){e.next=11;break}throw new Error(n.statusText);case 11:return e.next=13,n.json();case 13:return r=e.sent,e.abrupt("return",r);case 15:e.next=20;break;case 17:throw e.prev=17,e.t0=e.catch(3),new Error(e.t0.message);case 20:case"end":return e.stop()}},e,this,[[3,17]])}));return function(t){return e.apply(this,arguments)}}(),R=function(e){return"brewery"===e.data.type?{type:"breweries",eventType:"brewery_events",id:e.data.id}:{type:"food_trucks",eventType:"open_dates",id:e.data.id}},V=function(){var e=Object(C.a)(P.a.mark(function e(t,a){var n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://truck-trackr-api.herokuapp.com/api/v1/".concat(a),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if((n=e.sent).ok){e.next=8;break}throw new Error(n.statusText);case 8:return e.next=10,n.json();case 10:return e.abrupt("return",e.sent);case 11:e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(0),new Error(e.t0.message);case 16:case"end":return e.stop()}},e,this,[[0,13]])}));return function(t,a){return e.apply(this,arguments)}}(),K=function(){var e=Object(C.a)(P.a.mark(function e(t,a){var n,r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://truck-trackr-api.herokuapp.com/api/v1/".concat(t.type,"/").concat(t.id,"/").concat(t.eventType),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:if((n=e.sent).ok){e.next=8;break}throw new Error(n.statusText);case 8:return e.next=10,n;case 10:return r=e.sent,e.abrupt("return",r);case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(0),new Error(e.t0.message);case 17:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t,a){return e.apply(this,arguments)}}(),z=function(){var e=Object(C.a)(P.a.mark(function e(t,a){var n,r,s,o;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=R(t),r=W(a,t),e.prev=2,e.next=5,fetch("https://truck-trackr-api.herokuapp.com/api/v1/".concat(n.type,"/").concat(n.id,"/").concat(n.eventType,"/").concat(a.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 5:if((s=e.sent).ok){e.next=10;break}throw new Error(s.statusText);case 10:return e.next=12,s;case 12:return o=e.sent,e.abrupt("return",o);case 14:e.next=19;break;case 16:throw e.prev=16,e.t0=e.catch(2),new Error(e.t0.message);case 19:case"end":return e.stop()}},e,this,[[2,16]])}));return function(t,a){return e.apply(this,arguments)}}(),W=function(e,t){return"food_truck"===t.type?{date:e.attributes.date,"booked?":e.attributes["booked?"],uid:sessionStorage.getItem("uid")}:{date:e.attributes.date,"truck_booked?":e.attributes["truck_booked?"],uid:sessionStorage.getItem("uid")}},M=function(){var e=Object(C.a)(P.a.mark(function e(t,a){var n,r,s;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=R(t),console.log("cleanedBusiness",n),console.log("event",a),e.prev=3,e.next=6,fetch("https://truck-trackr-api.herokuapp.com/api/v1/".concat(n.type,"/").concat(n.id,"/").concat(n.eventType,"/").concat(a.id),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:sessionStorage.getItem("uid")})});case 6:if((r=e.sent).ok){e.next=11;break}throw new Error(r.statusText);case 11:return e.next=13,r.json;case 13:return s=e.sent,e.abrupt("return",s);case 15:e.next=20;break;case 17:throw e.prev=17,e.t0=e.catch(3),new Error(e.t0.message);case 20:case"end":return e.stop()}},e,this,[[3,17]])}));return function(t,a){return e.apply(this,arguments)}}(),J=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).handleKeyPress=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a.handleSubmit=function(){var e=Object(C.a)(P.a.mark(function e(t){var n,r,s,o,c;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a.state,r=n.email,s=n.passwordOne,o=n.signUp,c=n.locationType,o?a.props.firebase.doCreateUserWithEmailAndPassword(r,s).then(function(){var e=Object(C.a)(P.a.mark(function e(t){var n,r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.cleanUserForSignUp(t),sessionStorage.setItem("uid",t.user.uid),e.next=4,V(n,c);case 4:r=e.sent,a.props.addUser(r[0].data),a.props.loadProfile(r[0]),a.props.loadEvents(r[1].included),a.props.history.push("/profile");case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){a.setState({error:e})}):a.props.firebase.doSignInWithEmailAndPassword(r,s).then(function(){var e=Object(C.a)(P.a.mark(function e(t){var n,r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return sessionStorage.setItem("uid",t.user.uid),n=a.cleanUserForLogin(t,c),e.next=4,L(n);case 4:r=e.sent,console.log(r),a.props.addUser(r[0].data),a.props.loadProfile(r[0]),a.props.loadEvents(r[1].included),a.props.history.push("/profile");case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){a.setState({error:e})});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.cleanUserForSignUp=function(e){var t=a.state,n=t.username,r=t.email,s=(t.passwordOne,t.signUp,t.locationType),o=t.businessName,c=t.address,i=t.phoneNumber,u=t.contactName,p=t.foodType;return"food_trucks"===s?{name:o,food_type:p,contact_name:u,phone:i,email:r,website:n,uid:e.user.uid}:{name:o,address:c,contact_name:u,phone:i,email:r,uid:e.user.uid}},a.cleanUserForLogin=function(e,t){return"food_trucks"===t?{uid:e.user.uid,account_type:"food_truck"}:{uid:e.user.uid,account_type:"brewery"}},a.toggleSignUp=function(){var e=!a.state.signUp;a.setState({signUp:e})},a.fileChangedHandler=function(e){a.setState({logo:e.target.files[0]})},a.uploadHandler=function(){console.log(a.state.logo)},a.state={email:"",passwordOne:"",signUp:!1,locationType:"",businessName:"",address:"",phoneNumber:"",contactName:"",foodType:"",logo:null},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t=this,a=this.state,n=a.signUp,s=a.locationType;return n&&"food_trucks"===s&&(e=!0),r.a.createElement("main",{className:"login"},r.a.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"email-input",name:"email",type:"email",placeholder:"Email",onChange:this.handleKeyPress}),r.a.createElement("input",{className:"password-input",name:"passwordOne",type:"password",placeholder:"Password",onChange:this.handleKeyPress}),r.a.createElement("input",{className:n?"business-name-input":"hidden",name:"businessName",placeholder:"Business Name",onChange:this.handleKeyPress}),r.a.createElement("input",{className:n?"address-input":"hidden",name:"address",placeholder:"Address/City Located",onChange:this.handleKeyPress}),r.a.createElement("input",{className:n?"phone-number-input":"hidden",name:"phoneNumber",placeholder:"Phone Number",onChange:this.handleKeyPress}),r.a.createElement("input",{className:n?"contact-name-input":"hidden",name:"contactName",placeholder:"Contact Name",onChange:this.handleKeyPress}),r.a.createElement("input",{className:e?"food-type-input":"hidden",name:"foodType",placeholder:"Food Type",onChange:this.handleKeyPress}),r.a.createElement("p",{className:n?"business-type":"hidden"},"What Type of Business:"),r.a.createElement("div",{className:"button-holder"},r.a.createElement("input",{className:"food-truck-radio",type:"radio",name:"locationType",value:"food_trucks",id:"food-truck-button",onChange:this.handleKeyPress}),r.a.createElement("label",{className:"food-truck-label",htmlFor:"food-truck-button"},"Food Truck"),r.a.createElement("input",{className:"brewery-radio",type:"radio",name:"locationType",value:"breweries",id:"brewery-button",onChange:this.handleKeyPress}),r.a.createElement("label",{className:"brewery-label",htmlFor:"brewery-button"},"Brewery")),r.a.createElement(U.a,{to:"/profile",className:"signin-button",onClick:function(e){return t.handleSubmit(e)}},n?"Sign Up":"Sign In")),r.a.createElement("button",{className:"signup-button",onClick:this.toggleSignUp},n?"Actually I already have an account":"First Time Here? Sign Up!"))}}]),t}(n.Component),H=(y.a.object,y.a.func,Object(i.b)(function(e){return{user:e.user}},function(e){return{addUser:function(t){return e(I(t))},loadProfile:function(t){return e(A(t))},loadEvents:function(t){return e(function(e){return{type:"LOAD_EVENTS",events:e}}(t))}}})(Object(k.a)(J))),X=function(e){return r.a.createElement("div",null,r.a.createElement(N.Consumer,null,function(e){return r.a.createElement(H,{firebase:e})}))},q=(Object(k.a)(O(X)),a(143),function(e){var t=e.data,a=(e.changeCurrentPage,e.currentPage),n=e.loadProfile,s=function(){var e=Object(C.a)(P.a.mark(function e(t){var r,s;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://truck-trackr-api.herokuapp.com/api/v1/".concat(a,"/").concat(t.target.id));case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,e.next=9,n(s);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0.message);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t){return e.apply(this,arguments)}}(),o=t.map(function(e){return r.a.createElement(U.a,{to:"/business/".concat(e.attributes.name),key:e.id,id:e.id,onClick:s,className:"business-button"},e.attributes.name)}),c=a.replace("_"," ").toUpperCase();c.toLowerCase();return r.a.createElement("div",{className:"business-holder"},r.a.createElement("h3",{className:"business-header"},"".concat(c)),o)}),Z=(Object(k.a)(q),a(145),a(147),a(148),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).makeEvent=function(){var e=!a.state.createEventOpen;a.setState({createEventOpen:e})},a.handleKeyPress=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a.handleSubmit=function(){var e=Object(C.a)(P.a.mark(function e(t){var n,r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.cleanDataForRequest(),r=a.createPostBody(),e.next=5,K(n,r);case 5:e.sent,"food_truck"===a.props.user.type?a.props.addEvent({id:a.state.eventDate,attributes:{id:a.state.eventDate,date:a.state.eventDate,"booked?":!1}}):a.props.addEvent({id:a.state.eventDate,attributes:{id:a.state.eventDate,date:a.state.eventDate,"truck_booked?":!1}}),a.setState({createEventOpen:!1,eventName:"",eventDate:""});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.cleanDataForRequest=function(){var e,t,n=a.props.user;return"food_truck"===n.type?(e="food_trucks",t="open_dates"):(e="breweries",t="brewery_events"),{type:e,id:n.id,eventType:t}},a.createPostBody=function(){return{uid:sessionStorage.getItem("uid"),date:a.state.eventDate}},a.toggleEventStatus=function(){var e=Object(C.a)(P.a.mark(function e(t){var n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.props.userEvents.find(function(e){return e.id===t.target.id}),"brewery"!==a.props.user.type){e.next=8;break}return n.attributes["truck_booked?"]=!n.attributes["truck_booked?"],e.next=5,z(a.props.currentPage,n);case 5:a.props.editEvent(n),e.next=12;break;case 8:return n.attributes["booked?"]=!n.attributes["booked?"],e.next=11,z(a.props.currentPage,n);case 11:a.props.editEvent(n);case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.deleteEvent=function(){var e=Object(C.a)(P.a.mark(function e(t){var n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("id",t.target.classList[0]),n=a.props.userEvents.find(function(e){return e.id===t.target.classList[0]}),e.next=4,M(a.props.currentPage,n);case 4:a.props.removeEvent(n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={createEventOpen:!1,eventDate:"",eventBooked:!1},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.currentPage,s=a.user,o=a.userEvents;if(o.length&&n.data===s?e="brewery"===s.type?o.map(function(e){return r.a.createElement("h4",{className:e.attributes["truck_booked?"]?"upcoming-events-date booked":"upcoming-events-date open",key:e.attributes.date},r.a.createElement("span",null,e.attributes.date.slice(5),r.a.createElement("span",{className:"upcoming-events-status"},e.attributes["truck_booked?"]?"Booked":"Open")),r.a.createElement("span",null,r.a.createElement("button",{className:"change-status-button",id:e.attributes.id,onClick:t.toggleEventStatus},"Change Status"),r.a.createElement("button",{className:"".concat(e.attributes.id," delete-status-button"),onClick:t.deleteEvent},"Delete Event")))}):o.map(function(e){return r.a.createElement("h4",{className:e.attributes["booked?"]?"upcoming-events-date booked":"upcoming-events-date open",key:e.attributes.id},e.attributes.date.slice(5),r.a.createElement("span",{className:"upcoming-events-status"},e.attributes["booked?"]?"Booked":"Open"),r.a.createElement("button",{className:"change-status-button",id:e.attributes.id,onClick:t.toggleEventStatus},"Change Status"),r.a.createElement("button",{className:"delete-status-button ".concat(e.attributes.id),onClick:t.deleteEvent},"Delete Event"))}):o.length&&n.data!==s&&(e="brewery"===s.type?n.included.map(function(e){return r.a.createElement("h4",{className:e.attributes["truck_booked?"]?"upcoming-events-date booked":"upcoming-events-date open",key:e.attributes.id},e.attributes.date.slice(5),r.a.createElement("span",{className:"upcoming-events-status"},e.attributes["truck_booked?"]?"Booked":"Open"))}):n.included.map(function(e){return r.a.createElement("h4",{className:e.attributes["booked?"]?"upcoming-events-date booked":"upcoming-events-date open",key:e.attributes.id},e.attributes.date.slice(5),r.a.createElement("span",{className:"upcoming-events-status"},e.attributes["booked?"]?"Booked":"Open"))})),Object.keys(n).length){var c=n.data.attributes;return r.a.createElement("div",{className:"parent-container"},r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"biz-container"},r.a.createElement("h2",{className:"biz-name"},c.name),r.a.createElement("h5",{className:"food_truck"===n.data.type?"biz-title":"hidden"},"Food Type:"),r.a.createElement("h5",{className:"food_truck"===n.data.type?"biz-info":"hidden"},c.food_type||null),r.a.createElement("h5",{className:"biz-title"},"Phone Number:"),r.a.createElement("h5",{className:"biz-info"},c.phone),r.a.createElement("h5",{className:"biz-title"},"Contact Name:"),r.a.createElement("h5",{className:"biz-info"},c.contact_name),r.a.createElement("h5",{className:"biz-title"},"Email:"),r.a.createElement("h5",{className:"biz-info"},c.email),r.a.createElement("h5",{className:"biz-title"},"Website:"),r.a.createElement("a",{href:c.website,target:"blank",className:"biz-info"},c.website)),r.a.createElement("button",{onClick:this.makeEvent,className:n.data===s?"create-event-button":"hidden"},"Create Event"),r.a.createElement("div",{className:"upcoming-events-container"},r.a.createElement("h3",{className:"upcoming-events-title"},"UPCOMING EVENTS"),e),r.a.createElement("form",{className:this.state.createEventOpen?"create-event-form":"hidden"},r.a.createElement("h6",{className:"create-event-date"},"Event date:"),r.a.createElement("span",null,r.a.createElement("input",{className:"create-event-input",id:"event-date",name:"eventDate",value:this.state.eventDate,placeholder:"(yy-mm-dd)",onChange:this.handleKeyPress})),r.a.createElement("button",{onClick:this.handleSubmit,className:"create-event-form-button"},"Create"))))}return r.a.createElement("div",null)}}]),t}(n.Component)),G=(y.a.object,y.a.func,y.a.array,Object(i.b)(function(e){return{currentPage:e.currentPage,user:e.user,userEvents:e.userEvents}},function(e){return{addUser:function(t){return e(I(t))},editEvent:function(t){return e({type:"EDIT_EVENT",event:t})},removeEvent:function(t){return e({type:"REMOVE_EVENT",event:t})},addEvent:function(t){return e({type:"ADD_EVENT",event:t})}}})(Z)),Q={data:[{id:"1",type:"brewery",attributes:{name:"Lockman Inc"}},{id:"2",type:"brewery",attributes:{name:"Cremin, Nikolaus and Volkman"}}]},$=[{data:[{id:"1",type:"food_truck",attributes:{name:"Hot Pasta"}},{id:"2",type:"food_truck",attributes:{name:"Hell On Wheels"}}]}],Y=(JSON.stringify({uid:55,account_type:"brewery"}),JSON.stringify({name:"Test Brewery",address:"Test Address",contact_name:"Test Name",phone:"Test Phone Number",email:"Test Email",uid:"123456789"}),a(150),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).loadData=function(){var e=Object(C.a)(P.a.mark(function e(t){var n,r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.getAttribute("name"),e.next=3,B(n);case 3:r=e.sent,"breweries"===n?(a.props.loadProfile({page:"breweries"}),a.props.loadBreweries(r.data)):(a.props.loadProfile({page:"food_trucks"}),a.props.loadFoodTrucks(r.data));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.loadMockData=function(e){var t=e.target.getAttribute("name");"breweries"===t?a.props.loadBreweries(Q):"food_trucks"===t&&a.props.loadFoodTrucks($)},a.state={},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:this.props.displayStatus?"display":"hidden-nav"},r.a.createElement("ul",{className:"nav-controls"},r.a.createElement(U.a,Object(D.a)({to:"/profile",onClick:function(){return e.props.loadProfile(e.props.user)},className:"nav-control my-profile"},"className",this.props.displayStatus?"nav-control my-profile":"hidden"),"My Profile"),r.a.createElement(U.a,{to:"/breweries",onClick:function(t){return e.loadData(t)},name:"breweries",className:this.props.displayStatus?"nav-control breweries":"hidden"},"Breweries"),r.a.createElement(U.a,{to:"/food_trucks",onClick:function(t){return e.loadData(t)},name:"food_trucks",className:this.props.displayStatus?"nav-control food-trucks":"hidden"},"Food Trucks"),r.a.createElement("input",{className:this.props.displayStatus?"nav-control search-input":"hidden",placeholder:"Search"})))}}]),t}(n.Component)),ee=(y.a.func,Object(i.b)(function(e){return{user:e.user}},function(e){return{loadBreweries:function(t){return e(function(e){return{type:"LOAD_BREWERIES",breweries:e}}(t))},loadFoodTrucks:function(t){return e(function(e){return{type:"LOAD_FOOD_TRUCKS",foodTrucks:e}}(t))},loadProfile:function(t){return e(A(t))}}})(Y)),te=a(73),ae=a.n(te),ne=a(74),re=a.n(ne),se=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(b.a)(t).call(this))).handleNavBar=function(t){e.setState({navOpen:!e.state.navOpen})},e.handleNavBar=function(){e.setState({navOpen:!e.state.navOpen})},e.handleNavBar=function(){e.setState({navOpen:!e.state.navOpen})},e.logOutUser=function(){e.props.removeUser(),sessionStorage.setItem("uid",""),e.setState({navOpen:!1}),e.props.history.push("/")},e.state={navOpen:!1},e}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){Object.keys(this.props.user).length||this.props.history.push("/")}},{key:"render",value:function(){var e=this,t=(this.state.navOpen,this.props),a=(t.match,t.user);return r.a.createElement("div",{className:"main"},r.a.createElement("header",null,r.a.createElement("h1",{className:"main-title"},r.a.createElement("span",null,r.a.createElement("img",{src:ae.a,className:"truck-icon"})),"TruckTrackr",r.a.createElement("span",null,r.a.createElement("img",{src:re.a,className:"barrel-icon"}))),r.a.createElement("section",{className:Object.keys(a).length?"hamburger-holder":"hidden"},r.a.createElement("a",{onClick:this.handleNavBar,className:"hamburger-trigger ".concat(this.state.navOpen),id:"hamburger"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("button",{onClick:this.logOutUser,className:Object.keys(this.props.user).length?"logout-button":"hidden"},"Log Out")),r.a.createElement("div",{className:"content-holder"},r.a.createElement(ee,{displayStatus:this.state.navOpen,history:this.props.history}),r.a.createElement(E.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(X,{history:e.props.history})}}),r.a.createElement(E.a,{exact:!0,path:"/profile",component:G}),r.a.createElement(E.a,{exact:!0,path:"/breweries",render:function(t){return r.a.createElement(q,{data:e.props.breweries,changeCurrentPage:e.props.changeCurrentPage,currentPage:e.props.currentPage.page,loadProfile:e.props.loadProfile,history:e.props.history})}}),r.a.createElement(E.a,{exact:!0,path:"/food_trucks",render:function(t){return r.a.createElement(q,{data:e.props.foodTrucks,changeCurrentPage:e.props.changeCurrentPage,currentPage:e.props.currentPage.page,loadProfile:e.props.loadProfile,history:e.props.history})}}),r.a.createElement(E.a,{path:"/business/:businessName",component:G})))}}]),t}(n.Component),oe=(y.a.object,y.a.func,y.a.array,Object(i.b)(function(e){return{breweries:e.breweries,foodTrucks:e.foodTrucks,currentPage:e.currentPage,user:e.user}},function(e){return{loadProfile:function(t){return e(A(t))},addUser:function(t){return e(I(t))},removeUser:function(){return e({type:"REMOVE_USER"})}}})(Object(k.a)(O(se))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),ie=Object(u.c)(d,ce),ue=r.a.createElement(i.a,{store:ie},r.a.createElement(c.a,null,r.a.createElement(N.Provider,{value:new T},r.a.createElement(oe,null))));o.a.render(ue,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,a){e.exports=a.p+"static/media/food-truck.28e4e20f.png"},74:function(e,t,a){e.exports=a.p+"static/media/barrel-icon-new.976a538b.png"},76:function(e,t,a){e.exports=a(152)},85:function(e,t,a){}},[[76,2,1]]]);
//# sourceMappingURL=main.ec69cf5a.chunk.js.map