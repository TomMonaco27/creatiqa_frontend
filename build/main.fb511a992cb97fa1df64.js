(()=>{"use strict";var e,t,r,n={7737:(e,t,r)=>{var n=r(7378),a=r(7634),l=r(4935),o=r(5783),i=r(8780);const c=r.p+"6de9165ae69add305108.svg",u=r.p+"4b22b82e3fadb33b8cfe.png",m=r.p+"d9679a4cc4c7dda96e4d.svg";var s=function(){(0,i.v9)((function(e){return e.dropReducer.drop}));var e=(0,i.I0)();return n.createElement("div",{className:"menu__box_navigation_profile"},n.createElement("div",{className:"menu__box_navigation_profile-info"},n.createElement("img",{width:"79",src:u,alt:"creatiqa-profile"}),n.createElement("div",{className:"info"},n.createElement("span",null,"Имя Фамилия"),n.createElement("span",null,"mail@gmail.com"))),n.createElement(o.rU,{onClick:function(){e({type:"DROP",payload:!1})},to:"/profile"},n.createElement("img",{src:m,alt:"creatiqa"})))};const f=r.p+"7a3d903b4c6625790785.svg",p=r.p+"04509442f5391752c8b5.svg",v=r.p+"09f25efb19f454890b86.svg",d=r.p+"7b3812e1af456703aa38.svg",b=r.p+"f7e1389e4008fd180172.svg";var y=function(){var e=(0,i.I0)(),t=((0,l.TH)(),(0,i.v9)((function(e){return e.dropReducer.drop_}))),r=(0,i.v9)((function(e){return e.dropReducer.drop})),a=(0,i.v9)((function(e){return e.profileReducer.isProfile})),c=function(){e({type:"DROP_",payload:!1})};return console.log(a),n.createElement("div",{className:"".concat(t?"d-trsfm":r&&"block"," menu__join_navigation")},n.createElement("ul",null,t&&n.createElement("img",{src:"".concat(b),alt:"creatiqa_menu",className:"logo_",onClick:c}),n.createElement("li",{onClick:c}," ",n.createElement(o.OL,{to:"/home"},n.createElement("img",{src:"".concat(f),alt:"creatiqa_menu"})," Главная")," "),n.createElement("li",{onClick:c}," ",n.createElement(o.OL,{to:"/templates"},n.createElement("img",{src:"".concat(p),alt:"creatiqa_menu"})," Шаблоны")," "),n.createElement("li",{onClick:c}," ",n.createElement(o.OL,{to:"/projects"}," ",n.createElement("img",{src:"".concat(v),alt:"creatiqa_menu"})," Проекты")),n.createElement("li",{className:"".concat(r&&"hidden"),onClick:c}," ",n.createElement(o.OL,{className:"premium",to:"/premium"}," ",n.createElement("img",{src:"".concat(d),alt:"creatiqa_menu"})," Creatiqa Premium"))),n.createElement("div",{className:"".concat((a||!r)&&"hidden"," menu__join_navigation-btns")},n.createElement("button",null," ",n.createElement("img",{src:d,alt:"creatiqa-premium"}),"Creatiqa Premium "),n.createElement("button",null,"Создать проект")))},g=function(){var e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.dropReducer.drop})),r=(0,i.v9)((function(e){return e.authReducer.isLogin})),a=(0,i.v9)((function(e){return e.profileReducer.isProfile})),l=function(){e({type:"DROP",payload:!1})};return n.createElement(n.Fragment,null,n.createElement("ul",{className:"menu__box_navigation ".concat(!t&&"mob__hidden"," ")},!a&&r&&n.createElement(s,null),n.createElement("li",{onClick:l},n.createElement(o.OL,{to:"/"},"Главная")),n.createElement("li",{onClick:l},n.createElement(o.OL,{to:"/templates"},"Шаблоны")),n.createElement("li",{onClick:l},n.createElement(o.OL,{to:"/education"},"Обучение")),n.createElement("li",{onClick:l},n.createElement(o.OL,{to:"/prices"},"Тарифы"))),n.createElement("div",{className:"menu__box_navigation-join ".concat(t&&"block")},n.createElement(y,null)))};const E=r.p+"f39327979cda210b407f.svg";var h=r(5255);function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var _=function(e){var t,r,a=e.email,l=e.login,o=e.set,c=(0,i.I0)(),u=(t=(0,n.useState)(""),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],c=!0,u=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=u[0],s=u[1];return n.createElement("div",{className:"popup__registration_verify"},n.createElement("button",{onClick:close,className:"x"},n.createElement("img",{src:"".concat(E),alt:"login-creatiqa"})),n.createElement("form",{action:"verify"},n.createElement("fieldset",null,n.createElement("label",{htmlFor:"verify"},"Код подтверждения",n.createElement("input",{id:"value",placeholder:"Код подтверждения",value:m,onChange:function(e){return s(e.target.value)},type:"number"})),n.createElement("button",{onClick:function(e){e.preventDefault(),(0,h.Z)({method:"PUT",url:"http://217.25.88.184:8080/registr/verify/".concat(a),"Content-Type":"application/json",data:"12345"}).then((function(e){o((function(e){return!e})),l()})).catch((function(){return c({type:"FETCH_AUTH_ERROR"})}))}},"Отправить"))))};function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===S(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],c=!0,u=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=function(e){var t=e.popup,r=e.handlers,a=(0,i.I0)(),l=N((0,n.useState)(!1),2),c=l[0],u=l[1],m=N(n.useState({email:"fupi018@gmail.com",password:null,password2:null,phone:null,first_name:null}),2),s=m[0],f=m[1],p=s.email,v=null==r?void 0:r[1];return n.createElement(n.Fragment,null,t[0].register&&n.createElement("div",{className:"popup__registration"},c?n.createElement(_,{email:p,login:v,set:u}):n.createElement("form",{action:"registration",className:"popup__registration_form"},n.createElement("label",{htmlFor:"title",className:"title"},"Регистрация"),n.createElement("button",{onClick:function(e){e.preventDefault(),document.title="Creatiqa",t[1]({register:!1,auth:!1}),u(!1)},className:"x"},n.createElement("img",{src:"".concat(E),alt:"login-creatiqa"})),n.createElement("fieldset",null,n.createElement("label",{htmlFor:"name"},"Имя",n.createElement("input",{type:"text",value:s.first_name||"",onChange:function(e){return f(w(w({},s),{},{first_name:e.target.value}))},placeholder:"Введите ваше имя"})),n.createElement("label",{htmlFor:"email"},"E-mail",n.createElement("input",{type:"email",value:s.email||"",onChange:function(e){return f(w(w({},s),{},{email:e.target.value}))},placeholder:"Введите адрес электронной почты"})),n.createElement("label",{htmlFor:"tel"},"Телефон",n.createElement("input",{type:"tel",value:s.phone||"",onChange:function(e){return f(w(w({},s),{},{phone:e.target.value}))},placeholder:"Введите номер телефона"})),n.createElement("label",{htmlFor:"password"},"Пароль",n.createElement("input",{value:s.password||"",onChange:function(e){return f(w(w({},s),{},{password:e.target.value}))},type:"password",placeholder:"Придумайте пароль"})),n.createElement("label",{htmlFor:"password"},"Подтвердите пароль",n.createElement("input",{value:s.password2||"",onChange:function(e){return f(w(w({},s),{},{password2:e.target.value}))},type:"password",placeholder:"Подтвердите пароль"})),n.createElement("p",{className:"license"},"Продолжая, вы соглашаетесь с ",n.createElement("a",{href:"#"},"Условиями использования")," и ",n.createElement("a",{href:"#"},"Политикой конфиденциальности.")),n.createElement("button",{onClick:function(e){e.preventDefault(),(0,h.Z)({method:"POST",url:"http://217.25.88.184:8080/registr",data:s}).then((function(e){a({type:"FETCH_AUTH_REQUEST"}),u((function(e){return!e}))})).catch((function(){return a({type:"FETCH_AUTH_ERROR"})}))},className:"popup__registration_submit"},"Зарегистрироваться"),n.createElement("p",{className:"link-login"},"У вас есть аккаунт? ",n.createElement(o.rU,{onClick:v,to:"/"},"Войти"))))))};function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===T(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var L=function(e){var t,r,a=e.popup,c=e.handlers,u=(0,i.I0)(),m=(t=(0,n.useState)({email:"",password:""}),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],c=!0,u=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=m[0],f=m[1],p=null==c?void 0:c[0],v=null==c?void 0:c[1],d=(0,l.s0)();return n.createElement(n.Fragment,null,a[0].auth&&n.createElement("div",{className:"popup__authorization"},n.createElement("form",{action:"http://217.25.88.184:8080/api-authlogin/?next=/auth",className:"popup__authorization_form"},n.createElement("input",{type:"hidden",name:"_csrf",value:"SKUDASCSRF"}),n.createElement("label",{htmlFor:"title",className:"title"},"Вход"),n.createElement("button",{onClick:p,className:"x2"},n.createElement("img",{src:"".concat(E),alt:"login-creatiqa"})),n.createElement("fieldset",null,n.createElement("label",{htmlFor:"email"},"E-mail",n.createElement("input",{onChange:function(e){return f(I(I({},s),{},{email:e.target.value}))},type:"email",placeholder:"Введите адрес электронной почты"})),n.createElement("label",{htmlFor:"password"},"Пароль",n.createElement("input",{onChange:function(e){return f(I(I({},s),{},{password:e.target.value}))},type:"password",placeholder:"Придумайте пароль"})),n.createElement("button",{onClick:function(e){return e.preventDefault(),u({type:"FETCH_AUTH_REQUEST"}),a[1](!1),d("/home")},className:"popup__authorization_submit"},"Войти"),n.createElement("p",{className:"link-login"},"Нет аккаунт? ",n.createElement(o.rU,{onClick:v,to:"/"},"Зарегистрироваться"))))))};const x=r.p+"1a862cb4549c4535e5b5.svg",U=r.p+"a90c18de55212957f84f.svg";var F=function(e){var t=e.onClick,r=(0,i.v9)((function(e){return e.dropReducer.drop})),a=(0,i.v9)((function(e){return e.dropReducer.drop_})),l=(0,i.v9)((function(e){return e.profileReducer.isProfile}));return(0,n.useEffect)((function(){}),[a]),n.createElement(n.Fragment,null,n.createElement("div",{className:"".concat(a&&l&&"hidden"," drop__menu")},r||a?r?n.createElement("img",{src:"".concat(U),alt:"creatiqa_menu",className:"logo",onClick:t}):n.createElement("img",{src:"".concat(b),alt:"creatiqa_menu",className:"logo",onClick:t}):n.createElement("img",{src:"".concat(x),alt:"creatiqa_menu",onClick:t})))};function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],c=!0,u=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var M=function(){var e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.authReducer.isLogin})),r=(0,i.v9)((function(e){return e.profileReducer.isProfile})),a=(0,i.v9)((function(e){return e.dropReducer.drop})),m=(0,i.v9)((function(e){return e.dropReducer.drop_})),s=(0,l.TH)(),f=q((0,n.useState)({email:null,password:null,password2:null,phone:"+799999999",first_name:null}),2),p=(f[0],f[1],q((0,n.useState)({register:!1,auth:!1}),2)),v=p[0],d=p[1],b=function(){document.title="Creatiqa Регистрация",d({register:!0,auth:!1})},E=function(e){e.preventDefault(),document.title="Creatiqa",d({register:!1,auth:!1})},h=function(){document.title="Creatiqa Вход",d({register:!1,auth:!0})};return(0,n.useEffect)((function(){"/profile"==s.pathname?e({type:"IS_PROFILE",payload:!0}):e({type:"IS_PROFILE",payload:!1})}),[s]),n.createElement("div",{className:"menu"},m&&n.createElement("div",{className:"drop_profile_menu"},n.createElement("div",{className:"drop_profile_menu_nav"},n.createElement(y,null))),!r&&n.createElement(F,{onClick:function(){e({type:"DROP",payload:!a})}}),n.createElement("div",{className:"menu__box ".concat(r&&"flex")},!m&&n.createElement(o.rU,{to:"/",className:"".concat(r&&"isProfileLogo")},n.createElement("div",{className:"menu__box_logo"},n.createElement("img",{src:"".concat(c),alt:"creatiqa"}),"CREATIQA"),"  "),n.createElement(g,null),t?n.createElement("ul",{className:"menu__box_items-join ".concat(r&&"show")},n.createElement("button",null,"Создать проект"),n.createElement(o.rU,{to:"/profile"},n.createElement("img",{width:"50",src:"".concat(u),alt:"photo"}))):n.createElement("ul",{className:"menu__box_items  ".concat(!a&&"mob__hidden"," ")},n.createElement("li",{onClick:h,className:"item_auth"}," ",n.createElement(o.OL,{to:"/"},"Войти")),n.createElement("li",{onClick:b,className:"item_registration"},n.createElement(o.OL,{to:"/"},"Зарегистрироваться")))),n.createElement("div",{className:"".concat((v.register||v.auth)&&"popup","  ").concat(!a&&"mob__hidden"," ")},n.createElement(C,{popup:[v,d],handlers:[E,h]}),n.createElement(L,{popup:[v,d],handlers:[E,b]})))},B=function(){var e=(0,i.v9)((function(e){return e.dropReducer.drop}));return(0,n.useEffect)((function(){document.title="Creatiqa "}),[]),n.createElement(n.Fragment,null,!e&&n.createElement("div",{className:"home-header"},n.createElement("div",{className:"home-header__box"},n.createElement("div",{className:"home-header__box_subtitle"},n.createElement("p",null,n.createElement("span",null,"CREATIQA")," - поможет найти решение для графического дизайна, презентаций, макетов для полиграфии, графики для социальных сетей и многого другого в мире цифровых иллюстраций. Creatiqa подходит как профессионалам, так и любителям.")),n.createElement("div",{className:"home-header__box_image"},n.createElement("div",null),n.createElement("div",null),n.createElement("div",null,n.createElement("svg",{width:"226",height:"199",viewBox:"0 0 226 199",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M100.876 6.99999C106.264 -2.33334 119.736 -2.33333 125.124 7L223.851 178C229.24 187.333 222.504 199 211.727 199H14.2731C3.49589 199 -3.23986 187.333 2.14875 178L100.876 6.99999Z",fill:"#33D6D6"}))),n.createElement("div",null),n.createElement("div",null))),n.createElement("div",{className:"home-header__start-button"},n.createElement("button",null,"Начать бесплатно"))))},K=function(e){var t=e.x,r=e.onClick,a=(0,i.v9)((function(e){return e.templateListReducer.data}));return n.createElement("div",{onClick:function(){return r(t)}},n.createElement("div",{className:"template ".concat(a&&a.value==t.value&&"active")},n.createElement("img",{src:t.img})),n.createElement("span",null,t.value))};const G=r.p+"a2d39f54502202dd6ab2.svg",$=r.p+"e43c4dae9292c0fcd637.svg",Q=r.p+"ba6e95fca032a95ca08d.svg",z=r.p+"800015cdfb668842db3a.svg",W=r.p+"a4ced4e9f8564fc4af89.svg",Z=r.p+"11f09437489ec3fd1e86.svg",Y=r.p+"99cfc646fc32c9ebc882.svg",V=r.p+"4eb201131d0ab7c846f9.svg",J=r.p+"e9080a82fcc37c1d9a5b.svg",X=r.p+"3889bf7ee618df8a3656.svg";var ee=[{id:1,name:"setting-size",active:!1,value:"Настраиваемый размер",img:G},{id:2,name:"SOCIAL",active:!1,value:"Социальные сети",img:$},{id:3,name:"BUSINESS",active:!1,value:"Бизнес",img:Q},{id:4,name:"PRINT",active:!1,value:"Печать",img:z},{id:5,name:"STANDART",active:!1,value:"Стандартные",img:W},{id:5.5,name:"MARKETING",active:!1,value:"Маркетинг",img:Z}],te={name:"SOCIAL",value:"Социальные сети",data:[{id:6,name:"post-instagram",active:!1,value:"Пост Instagram",img:J},{id:7,name:"history-instagram",active:!1,value:"История Instagram",img:J},{id:8,name:"vk-cover",active:!1,value:"Обложка Вконтакте",img:Y},{id:9,name:"post-vk",active:!1,value:"Пост Вконтакте",img:Y},{id:10,name:"history-vk",active:!1,value:"История Вконтакте",img:Y},{id:11,name:"album-post-vk",active:!1,value:"Альбомный пост Вконтакте",img:Y},{id:12,name:"cover-youtube",active:!1,value:"Обложка YouTube",img:X},{id:13,name:"cover-facebook",active:!1,value:"Обложка Facebook",img:V},{id:14,name:"post-facebook",active:!1,value:"Пост Facebook",img:V}]},re=[{id:15,name:"design",active:!1,value:"Мой дизайн",img:""},{id:16,name:"design",active:!1,value:"Пост",img:""},{id:17,name:"design",active:!1,value:"Инстаграм",img:""},{id:18,name:"design",active:!1,value:"Название",img:""}],ne={name:"BUSINESS",value:"Бизнес",data:[{id:19,name:"BUSINESS",active:!1,value:"Бизнес 1",img:""},{id:20,name:"BUSINESS",active:!1,value:"Бизнес 2",img:""},{id:21,name:"BUSINESS",active:!1,value:"Бизнес 3",img:""},{id:22,name:"BUSINESS",active:!1,value:"Бизнес 4",img:""},{id:23,name:"BUSINESS",active:!1,value:"Бизнес 5",img:""}]},ae={name:"PRINT",value:"Печать",data:[{id:19,name:"PRINT",active:!1,value:"Печать 1",img:""},{id:20,name:"PRINT",active:!1,value:"Печать 2",img:""},{id:21,name:"PRINT",active:!1,value:"Печать 3",img:""},{id:22,name:"PRINT",active:!1,value:"Печать 4",img:""},{id:23,name:"PRINT",active:!1,value:"Печать 5",img:""}]},le={name:"STANDART",value:"Стандартные",data:[{id:19,name:"STANDART",active:!1,value:"Стандарт 1",img:""},{id:20,name:"STANDART",active:!1,value:"Стандарт 2",img:""},{id:21,name:"STANDART",active:!1,value:"Стандарт 3",img:""},{id:22,name:"STANDART",active:!1,value:"Стандарт 4",img:""},{id:23,name:"STANDART",active:!1,value:"Стандарт 5",img:""}]},oe={name:"MARKETING",value:"Маркетинг",data:[{id:19,name:"MARKETING",active:!1,value:"Маркетинг 1",img:""},{id:20,name:"MARKETING",active:!1,value:"Маркетинг 2",img:""},{id:21,name:"MARKETING",active:!1,value:"Маркетинг 3",img:""},{id:22,name:"MARKETING",active:!1,value:"Маркетинг 4",img:""},{id:23,name:"MARKETING",active:!1,value:"Маркетинг 5",img:""}]},ie=function(){var e=(0,i.I0)(),t=(0,l.s0)(),r=(0,l.TH)(),a=(0,i.v9)((function(e){return e.dropReducer.drop})),o=(0,i.v9)((function(e){return e.authReducer.isLogin}));(0,n.useEffect)((function(){document.title="Главная Creatiqa "}),[]),(0,n.useEffect)((function(){if(e({type:"NULL"}),!o)return t("/")}),[r]);var c=function(r){e({type:r.name}),t("/templates")},u=function(e){console.log("redactor...")};return n.createElement(n.Fragment,null,!a&&n.createElement("div",{className:"main"},n.createElement(y,null),n.createElement("div",{className:"main__list"},n.createElement("h2",null,"Выбрать формат..."),n.createElement("div",{className:"main__list_main"},ee.map((function(e){return n.createElement(K,{key:e.id,x:e,onClick:c})}))),n.createElement("h2",null,"Последние дизайны"),n.createElement("div",{className:"main__list_main"},re.map((function(e){return n.createElement(K,{key:e.id,x:e,onClick:u})}))))))};const ce=r.p+"9a42adbca449993606bc.svg";var ue=function(){return n.createElement("div",{className:"profile__box"},n.createElement("div",{className:"profile__box_media"},n.createElement("h2",null,"Профиль"),n.createElement("span",null,"Мой тариф: ",n.createElement("a",{href:"#"},"Премиум")),n.createElement("div",{className:"profile__box_media_photo"},n.createElement("img",{src:"".concat(u),alt:"creatiqa"}),n.createElement("div",{className:"del"}," ",n.createElement("span",null,"Фото профиля ")," ",n.createElement("img",{src:"".concat(ce),alt:"delete"})),n.createElement("button",null,"Редактировать"))),n.createElement("div",{className:"profile__box_settings"},n.createElement("label",null,"Личные данные"),n.createElement("fieldset",null,n.createElement("input",{type:"text"}),n.createElement("button",null,"Редактировать"))),n.createElement("div",{className:"profile__box_settings"},n.createElement("label",null,"Почта"),n.createElement("fieldset",null,n.createElement("input",{type:"email"}),n.createElement("button",null,"Изменить"))),n.createElement("div",{className:"profile__box_settings"},n.createElement("label",null,"Пароль"),n.createElement("fieldset",null,n.createElement("input",{type:"password"}))))},me=function(){(0,i.v9)((function(e){return e.profileReducer.isProfile}));var e=(0,i.v9)((function(e){return e.dropReducer.drop_})),t=(0,i.v9)((function(e){return e.authReducer.isLogin})),r=(0,i.I0)(),a=(0,l.s0)();return(0,n.useEffect)((function(){document.title="Профиль Creatiqa"}),[]),(0,n.useEffect)((function(){if(!t)return a("/")}),[]),n.createElement("div",{className:"profile"},n.createElement(F,{onClick:function(){r({type:"DROP_",payload:!e})}}),n.createElement("div",{className:"profile__media-mob"},n.createElement(y,null)),n.createElement(ue,null))},se=function(){var e=(0,i.I0)(),t=(0,l.s0)(),r=(0,l.TH)(),a=(0,i.v9)((function(e){return e.dropReducer.drop})),o=(0,i.v9)((function(e){return e.authReducer.isLogin})),c=(0,i.v9)((function(e){return e.templateListReducer.data}));(0,n.useEffect)((function(){document.title="Шаблоны Creatiqa "}),[]),(0,n.useEffect)((function(){if(!o)return t("/")}),[r]);var u=function(t){e({type:t.name})},m=function(e){console.log("redactor...")};return n.createElement(n.Fragment,null,!a&&n.createElement("div",{className:"templates"},n.createElement(y,null),n.createElement("div",{className:"templates__list"},n.createElement("div",{className:"templates__list_main"},ee.map((function(e){return n.createElement(K,{key:e.id,x:e,onClick:u})}))),n.createElement("h2",null,c&&c.value),n.createElement("div",{className:"templates__list_social"},c&&c.data.map((function(e){return n.createElement(K,{key:e.id,x:e,onClick:m})}))))))},fe=function(){var e=(0,i.v9)((function(e){return e.dropReducer.drop}));return(0,n.useEffect)((function(){document.title="Проекты Creatiqa "}),[]),n.createElement(n.Fragment,null,!e&&n.createElement("div",{className:"projects"},n.createElement(y,null),n.createElement("div",{className:"projects__box"},n.createElement("h1",null,"Not found 404"))))},pe=function(){var e=(0,i.v9)((function(e){return e.authReducer.isLogin})),t=(0,l.s0)();return(0,n.useEffect)((function(){e&&t("/home")}),[]),n.createElement("div",{className:"page"},n.createElement(M,null),n.createElement(l.Z5,null,n.createElement(l.AW,{path:"/",element:n.createElement(B,null)}),n.createElement(l.AW,{path:"/home",element:n.createElement(ie,null)}),n.createElement(l.AW,{path:"/templates",element:n.createElement(se,null)}),n.createElement(l.AW,{path:"/projects",element:n.createElement(fe,null)}),n.createElement(l.AW,{path:"/profile",element:n.createElement(me,null)})))},ve=r(7609),de=r(4845);function be(e){return be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},be(e)}function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){Ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ee(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==be(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==be(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===be(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var he={isLoading:!1,hasError:!1,isLogin:!1};function Oe(e){return Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oe(e)}function _e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(r),!0).forEach((function(t){je(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function je(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==Oe(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==Oe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Oe(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var we={isLoading:!1,hasError:!1,userData:null};function Pe(e){return Pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pe(e)}function Ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(r),!0).forEach((function(t){Ce(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ce(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==Pe(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==Pe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Pe(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Te={drop:!1,drop_:!1,isProfile:!1};function Ae(e){return Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ae(e)}function Ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(r),!0).forEach((function(t){De(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function De(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==Ae(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==Ae(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Ae(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Le={data:null},xe=(0,de.UY)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_AUTH_REQUEST":return ge(ge({},e),{},{isLoading:!0,hasError:!1,isLogin:!0});case"FETCH_AUTH_SUCCESS":return ge(ge({},e),{},{isLoading:!1,hasError:!1,isLogin:!0});case"FETCH_AUTH_ERROR":return ge(ge({},e),{},{isLoading:!1,hasError:!0,isLogin:!0});case"LOGOUT_USER":return ge(ge({},e),{},{isLogin:!1});default:return e}},userDataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_DATA_REQUEST":return Se(Se({},e),{},{isLoading:!0,hasError:!1,userData:we.userData});case"FETCH_USER_DATA_SUCCESS":return Se(Se({},e),{},{isLoading:!1,hasError:!1,userData:t.payload});case"FETCH_USER_DATA_ERROR":return Se(Se({},e),{},{isLoading:!1,hasError:!0,userData:we.userData});default:return e}},dropReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DROP":return Re(Re({},e),{},{drop:t.payload});case"DROP_":return Re(Re({},e),{},{drop_:t.payload});default:return e}},profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;return"IS_PROFILE"===t.type?Re(Re({},e),{},{isProfile:t.payload}):e},templateListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SOCIAL":return ke(ke({},e),{},{data:te});case"BUSINESS":return ke(ke({},e),{},{data:ne});case"PRINT":return ke(ke({},e),{},{data:ae});case"STANDART":return ke(ke({},e),{},{data:le});case"MARKETING":return ke(ke({},e),{},{data:oe});case"NULL":return ke(ke({},e),{},{data:null});default:return e}}}),Ue=(0,ve.xC)({reducer:xe,state:{},devTools:!0}),Fe=document.getElementById("root");(0,a.s)(Fe).render(n.createElement(i.zt,{store:Ue},n.createElement(o.VK,null,n.createElement(pe,null))))}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e](r,r.exports,l),r.exports}l.m=n,e=[],l.O=(t,r,n,a)=>{if(!r){var o=1/0;for(m=0;m<e.length;m++){for(var[r,n,a]=e[m],i=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(l.O).every((e=>l.O[e](r[c])))?r.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(m--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[r,n,a]},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);l.r(a);var o={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,l.d(a,o),a},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[o,i,c]=r,u=0;if(o.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(c)var m=c(l)}for(t&&t(r);u<o.length;u++)a=o[u],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(m)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),l.O(void 0,[961],(()=>l(1202)));var o=l.O(void 0,[961],(()=>l(7737)));o=l.O(o)})();