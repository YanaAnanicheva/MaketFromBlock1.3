!function(e){var s={};function i(o){if(s[o])return s[o].exports;var t=s[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=s,i.d=function(e,s,o){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)i.d(o,t,function(s){return e[s]}.bind(null,t));return o},i.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="",i(i.s=0)}([function(e,s,i){e.exports=i(1)},function(e,s,i){"use strict";i.r(s);i(2),i(3);console.log("Works!")},function(e,s,i){},function(e,s){var i=document.querySelector("body"),o=document.querySelector(".shadow-of-war"),t=document.querySelector(".page__burger-menu"),a=document.querySelector(".aside-menu"),l=document.querySelector(".aside-menu__x");t.addEventListener("click",(function(){a.classList.remove("aside-menu__unvisible"),a.classList.add("aside-menu__visible"),o.classList.remove("shadow-of-war__unvisible"),o.classList.add("shadow-of-war__visible"),i.classList.add("overflow-hidden")})),l.addEventListener("click",(function(){a.classList.remove("aside-menu__visible"),a.classList.add("aside-menu__unvisible"),o.classList.remove("shadow-of-war__visible"),o.classList.add("shadow-of-war__unvisible"),i.classList.remove("overflow-hidden")}));var d=document.querySelector(".aside-menu__call"),r=document.querySelector(".popup-call"),c=document.querySelector(".popup-call__close");d.addEventListener("click",(function(){r.classList.remove("popup-call__unvisible"),r.classList.add("popup-call__visible"),a.classList.remove("aside-menu__visible"),a.classList.add("aside-menu__unvisible"),i.classList.add("overflow-hidden"),o.classList.remove("shadow-of-war__unvisible"),o.classList.add("shadow-of-war__visible")})),c.addEventListener("click",(function(){r.classList.remove("popup-call__visible"),r.classList.add("popup-call__unvisible"),i.classList.remove("overflow-hidden"),o.classList.remove("shadow-of-war__visible"),o.classList.add("shadow-of-war__unvisible")})),document.querySelector(".page-phone").addEventListener("click",(function(){r.classList.remove("popup-call__unvisible"),r.classList.add("popup-call__visible"),a.classList.remove("aside-menu__visible"),a.classList.add("aside-menu__unvisible"),i.classList.add("overflow-hidden"),o.classList.remove("shadow-of-war__unvisible"),o.classList.add("shadow-of-war__visible")}));var n=document.querySelector(".aside-menu__chat"),u=document.querySelector(".popup-feedback"),_=document.querySelector(".popup-feedback__close"),v=document.querySelector(".page-chat");n.addEventListener("click",(function(){u.classList.remove("popup-feedback__unvisible"),u.classList.add("popup-feedback__visible"),a.classList.remove("aside-menu__visible"),a.classList.add("aside-menu__unvisible"),i.classList.add("overflow-hidden"),o.classList.remove("shadow-of-war__unvisible"),o.classList.add("shadow-of-war__visible")})),_.addEventListener("click",(function(){u.classList.remove("popup-feedback__visible"),u.classList.add("popup-feedback__unvisible"),i.classList.remove("overflow-hidden"),o.classList.remove("shadow-of-war__visible"),o.classList.add("shadow-of-war__unvisible")})),v.addEventListener("click",(function(){u.classList.remove("popup-feedback__unvisible"),u.classList.add("popup-feedback__visible"),a.classList.remove("aside-menu__visible"),a.classList.add("aside-menu__unvisible"),i.classList.add("overflow-hidden"),o.classList.remove("shadow-of-war__unvisible"),o.classList.add("shadow-of-war__visible")})),o.addEventListener("click",(function(){r.classList.remove("popup-call__visible"),r.classList.add("popup-call__unvisible"),i.classList.remove("overflow-hidden"),u.classList.remove("popup-feedback__visible"),u.classList.add("popup-feedback__unvisible"),i.classList.remove("overflow-hidden"),o.classList.remove("shadow-of-war__visible"),o.classList.add("shadow-of-war__unvisible")}));var p=document.querySelector(".about-us__more"),f=document.querySelector(".about-us__text");document.querySelector(".about-us__less");p.addEventListener("click",(function(){f.classList.toggle("show-text"),p.classList.toggle("about-us__more"),p.classList.toggle("about-us__less")}));var m=document.querySelector(".brands-logo-table__more"),b=(document.querySelector(".brands-logo-table__less"),document.querySelectorAll(".hidden-brands"));m.addEventListener("click",(function(){m.classList.toggle("brands-logo-table__more"),m.classList.toggle("brands-logo-table__less");for(var e=0;e<b.length;e++)b[e].classList.toggle("hidden-brands"),b[e].classList.toggle("show-hidden-brands")}));var w=document.querySelector(".tech-logo-table__more"),L=(document.querySelector(".tech-logo-table__less"),document.querySelectorAll(".hidden-tech"));w.addEventListener("click",(function(){w.classList.toggle("tech-logo-table__more"),w.classList.toggle("tech-logo-table__less");for(var e=0;e<L.length;e++)L[e].classList.toggle("hidden-tech"),L[e].classList.toggle("show-hidden-tech")}));var h=window.matchMedia("(min-width: 320px) and (max-width: 767px)"),g=window.matchMedia("(min-width: 768px) and (max-width: 1024px)"),S=window.matchMedia("(min-width: 1025px)");if(h.matches){Swiper;new Swiper(".swiper-first",{slidesPerView:"auto",effect:"coverflow",centeredSlides:!0,loop:!0,direction:"horizontal",pagination:{el:".swiper-pagination-first"},coverflowEffect:{rotate:0,stretch:0,depth:0,modifier:0,slideShadows:!1}});Swiper;new Swiper(".swiper-second",{slidesPerView:"auto",effect:"coverflow",centeredSlides:!0,loop:!0,direction:"horizontal",pagination:{el:".swiper-pagination-second"},coverflowEffect:{rotate:0,stretch:0,depth:0,modifier:0,slideShadows:!1}});Swiper;new Swiper(".swiper-third",{slidesPerView:"auto",effect:"coverflow",centeredSlides:!0,loop:!0,direction:"horizontal",pagination:{el:".swiper-pagination-third"},coverflowEffect:{rotate:0,stretch:0,depth:0,modifier:0,slideShadows:!1}})}else(g.matches||S.matches)&&(swiper.destroy(),init=!1)}]);
//# sourceMappingURL=bundle.js.map