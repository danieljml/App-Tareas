(this.webpackJsonpapp_lista_tareas=this.webpackJsonpapp_lista_tareas||[]).push([[0],{18:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(12),s=a.n(r),o=(a(18),a(5)),i=a(4),l=a(3),m=(a(24),a(0)),j=function(e){var t=e.mostrarCompletadas,a=e.cambiarMostrarCompletadas,n=function(){a(!t)};return Object(m.jsxs)("header",{className:"header headerColor",children:[Object(m.jsx)("div",{className:"header__container-title",children:Object(m.jsx)("h1",{className:"header__title",children:"Lista de tareas"})}),t?Object(m.jsxs)("button",{onClick:function(){return n()},className:"header__btn",children:["No mostrar completadas",Object(m.jsx)(i.a,{icon:l.d,className:"header__icon-eye-btn"})]}):Object(m.jsxs)("button",{onClick:function(){return n()},className:"header__btn",children:["Mostrar completadas",Object(m.jsx)(i.a,{icon:l.c,className:"header__icon-eye-btn"})]})]})},u=a(13),d=a(28),b=function(e){var t=e.homework,a=e.changeHomework,c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],j=r[1];return Object(m.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),a([].concat(Object(u.a)(t),[{id:Object(d.a)(),content:s,finish:!1}])),j("")},className:"form-homework",children:[Object(m.jsx)("input",{type:"text",placeholder:"Escribe una tarea",className:"form-homework__input",value:s,onChange:function(e){return function(e){j(e.target.value)}(e)}}),Object(m.jsx)("button",{type:"submit",className:"form-homework__btn",children:Object(m.jsx)(i.a,{icon:l.e,className:"form-homework__icon-btn"})})]})},h=a(8),f=function(e){var t=e.id,a=e.content,c=e.finish,r=e.toggleCompletada,s=e.editarTarea,j=e.eliminarTarea,u=Object(n.useState)(!1),d=Object(o.a)(u,2),b=d[0],h=d[1],f=Object(n.useState)(a),O=Object(o.a)(f,2),_=O[0],p=O[1];return Object(m.jsxs)("li",{className:"lista-tareas__tarea",children:[Object(m.jsx)(i.a,{icon:c?l.a:l.f,className:"lista-tareas__icono lista-tareas__icono-check",onClick:function(){return r(t)}}),Object(m.jsx)("div",{className:"lista-tareas__texto",children:b?Object(m.jsxs)("form",{action:"",className:"formulario-editar-tarea",onSubmit:function(e){e.preventDefault(),s(t,_),h(!1)},children:[Object(m.jsx)("input",{type:"text",value:_,onChange:function(e){return p(e.target.value)},className:"formulario-editar-tarea__input"}),Object(m.jsx)("button",{type:"submit",className:"formulario-editar-tarea__btn",children:"Actualizar"})]}):a}),Object(m.jsxs)("div",{className:"lista-tareas__contenedor-botones",children:[Object(m.jsx)(i.a,{icon:l.b,className:"lista-tareas__icono lista-tareas__icono-accion",onClick:function(){h(!b)}}),Object(m.jsx)(i.a,{icon:l.g,className:"lista-tareas__icono lista-tareas__icono-accion",onClick:function(){j(t)}})]})]})},O=function(e){var t=e.homework,a=e.changeHomework,n=e.mostrarCompletadas,c=function(e){a(t.map((function(t){return t.id===e?Object(h.a)(Object(h.a)({},t),{},{finish:!t.finish}):t})))},r=function(e,n){a(t.map((function(t){return t.id===e?Object(h.a)(Object(h.a)({},t),{},{content:n}):t})))},s=function(e){a(t.filter((function(t){return t.id!==e?t:""})))};return Object(m.jsx)("ul",{className:"lista-tareas",children:t.length>0?t.map((function(e){return n?Object(m.jsx)(f,{id:e.id,content:e.content,finish:e.finish,toggleCompletada:c,editarTarea:r,eliminarTarea:s},e.id):e.finish?"":Object(m.jsx)(f,{id:e.id,content:e.content,finish:e.finish,toggleCompletada:c,editarTarea:r,eliminarTarea:s},e.id)})):Object(m.jsx)("div",{className:"lista-tareas__mensaje",children:"~ No hay tareas agregadas ~"})})},_=function(){var e=localStorage.getItem("tareas")?JSON.parse(localStorage.getItem("tareas")):[],t=Object(n.useState)(e),a=Object(o.a)(t,2),c=a[0],r=a[1],s="";s=null===localStorage.getItem("mostrarCompletadas")||"true"===localStorage.getItem("mostrarCompletadas");var i=Object(n.useState)(s),l=Object(o.a)(i,2),u=l[0],d=l[1];return Object(n.useEffect)((function(){localStorage.setItem("tareas",JSON.stringify(c))}),[c]),Object(n.useEffect)((function(){localStorage.setItem("mostrarCompletadas",u.toString())}),[u]),Object(m.jsxs)("div",{className:"contenedor",children:[Object(m.jsx)(j,{mostrarCompletadas:u,cambiarMostrarCompletadas:d}),Object(m.jsx)(b,{homework:c,changeHomework:r}),Object(m.jsx)(O,{homework:c,changeHomework:r,mostrarCompletadas:u,cambiarMostrarCompletadas:d})]})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c883da7b.chunk.js.map