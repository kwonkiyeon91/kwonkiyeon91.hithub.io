(function(){"use strict";var t={89:function(t,e,o){var n=o(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("TodoHeader"),e("TodoInput"),e("TodoList"),e("TodoFooter")],1)},l=[],a=function(){var t=this;t._self._c;return t._m(0)},s=[function(){var t=this,e=t._self._c;return e("header",[e("h1",[t._v("TODO it!")])])}],i={},d=i,c=o(1001),u=(0,c.Z)(d,a,s,!1,null,"61efdd03",null),m=u.exports,f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"inputBox shadow"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text"},domProps:{value:t.newTodoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),e("span",{staticClass:"addContainer material-symbols-outlined addBtn",on:{click:t.addTodo}},[t._v(" add ")]),t.showModal?e("Modal",{on:{close:function(e){t.showModal=!1}}},[e("h3",{attrs:{slot:"header"},slot:"header"},[t._v("경고!")]),e("div",{attrs:{slot:"body"},slot:"body"},[t._v(" 입력해주세요. ")]),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"modal-default-button closeModalBtn",on:{click:function(e){t.showModal=!1}}},[t._v("확인")])])]):t._e()],1)},p=[],v=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v(" default header ")]}))],2),e("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v(" default body ")]}))],2),e("div",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t._v(" default footer "),e("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v(" OK ")])]}))],2)])])])])},h=[],I={},_=I,g=(0,c.Z)(_,v,h,!1,null,"b2e7f9d4",null),T=g.exports,b={components:{Modal:T},data(){return{newTodoItem:"",showModal:!1}},methods:{addTodo(){""!==this.newTodoItem?(this.$store.commit("addOneItem",this.newTodoItem),this.clearInput()):this.showModal=!0},clearInput(){this.newTodoItem=""}}},w=b,y=(0,c.Z)(w,f,p,!1,null,"00cb6b9e",null),O=y.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(this.storedTodoItems,(function(o,n){return e("li",{key:o.item,staticClass:"shadow"},[e("span",{staticClass:"checkBtn material-symbols-outlined",class:{checkBtnCompleted:o.completed},on:{click:function(e){return t.toggleComplete({todoItem:o,index:n})}}},[t._v(" check_circle ")]),e("span",{class:{textCompleted:o.completed}},[t._v(t._s(o.item))]),e("span",{staticClass:"material-symbols-outlined removeBtn",on:{click:function(e){return t.removeTodo({todoItem:o,index:n})}}},[t._v(" delete ")])])})),0)],1)},k=[],x=o(3822),S={methods:{...(0,x.OI)({removeTodo:"removeOneItem",toggleComplete:"toggleOneItem"})},computed:{...(0,x.Se)(["storedTodoItems"])}},Z=S,M=(0,c.Z)(Z,C,k,!1,null,"3ac09182",null),P=M.exports,A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"clearAllContainer shadow"},[e("span",{staticClass:"clearAllBtn",on:{click:t.clearTodo}},[t._v("Clear All")])])},B=[],j={methods:{...(0,x.OI)({clearTodo:"clearAllItem"})}},N=j,F=(0,c.Z)(N,A,B,!1,null,"c4532a8c",null),J=F.exports,E={name:"App",components:{TodoHeader:m,TodoInput:O,TodoList:P,TodoFooter:J}},H=E,L=(0,c.Z)(H,r,l,!1,null,null,null),$=L.exports;o(7658);const D={fetch(){const t=[];if(localStorage.length>0)for(let e=0;e<localStorage.length;e++)t.push(JSON.parse(localStorage.getItem(localStorage.key(e))));return t}},K={todoItems:D.fetch()},q={storedTodoItems(t){return t.todoItems}},z={addOneItem(t,e){const o={completed:!1,item:e};localStorage.setItem(e,JSON.stringify(o)),t.todoItems.push(o)},removeOneItem(t,e){localStorage.removeItem(e.todoItem.item),t.todoItems.splice(e.index,1)},toggleOneItem(t,e){t.todoItems[e.index].completed=!t.todoItems[e.index].completed,localStorage.removeItem(e.todoItem.item),localStorage.setItem(e.todoItem.item,JSON.stringify(e.todoItem))},clearAllItem(t){t.todoItems=[],localStorage.clear()}};var G={state:K,getters:q,mutations:z};n.ZP.use(x.ZP);const Q=new x.ZP.Store({modules:{todoApp:G}});n.ZP.config.productionTip=!1,new n.ZP({el:"#app",store:Q,render:t=>t($)})}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var l=e[n]={exports:{}};return t[n](l,l.exports,o),l.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,l){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],l=t[c][2];for(var s=!0,i=0;i<n.length;i++)(!1&l||a>=l)&&Object.keys(o.O).every((function(t){return o.O[t](n[i])}))?n.splice(i--,1):(s=!1,l<a&&(a=l));if(s){t.splice(c--,1);var d=r();void 0!==d&&(e=d)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[n,r,l]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,l,a=n[0],s=n[1],i=n[2],d=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(i)var c=i(o)}for(e&&e(n);d<a.length;d++)l=a[d],o.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return o.O(c)},n=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(89)}));n=o.O(n)})();
//# sourceMappingURL=app.b567c4ea.js.map