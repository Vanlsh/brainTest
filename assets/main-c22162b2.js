import{S as u,A as v}from"./vendor-b35d98b2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();u.use([v]);new u(".js-reviews-swiper",{loop:!0,slidesPerView:1,spaceBetween:24,breakpoints:{1440:{slidesPerView:4}},centeredSlides:!0,centeredSlidesBounds:!0,speed:1500,autoplay:{delay:2500,disableOnInteraction:!1}});const m=document.querySelectorAll(".accordion"),S=e=>{const r=e.querySelector(".accordion__content");e.classList.add("accordion__active"),r.style.maxHeight=r.scrollHeight+"px"},f=e=>{const r=e.querySelector(".accordion__content");e.classList.remove("accordion__active"),r.style.maxHeight=null};m.forEach(e=>{const r=e.querySelector(".accordion__intro"),s=e.querySelector(".accordion__content");r.onclick=()=>{s.style.maxHeight?f(e):(m.forEach(c=>f(c)),S(e))}});const y="is-open",a="/brainTest",i={closeButton:document.querySelector(".js-close-burger-button"),openButton:document.querySelector(".js-open-burger-button"),burgerContainer:document.querySelector(".js-burger"),navList:document.querySelector(".js-burger-nav-list")},b=e=>{e.code==="Escape"&&d()},L=e=>{const r=e.target;if(r.tagName==="A"){d(),console.log(window.location.pathname),console.log("MAIN_PAGE",a);const s=window.location.pathname;window.localStorage.setItem("test",s),a!==s&&(console.log(a!==s),e.preventDefault(),window.location.href=a+r.getAttribute("href"))}},E=e=>{e.target===e.currentTarget&&d()},d=()=>{window.removeEventListener("keydown",b),document.body.removeAttribute("style"),i.burgerContainer.classList.remove(y)},A=()=>{window.addEventListener("keydown",b),document.body.style.overflow="hidden",i.burgerContainer.classList.add(y)};i.closeButton.addEventListener("click",d);i.openButton.addEventListener("click",A);i.burgerContainer.addEventListener("click",E);i.navList.addEventListener("click",L);const _=document.querySelector(".js-gallery-swiper"),q={speed:700,spaceBetween:17,slidesPerView:1,pagination:{el:".gallery-pagination",clickable:!0},navigation:{nextEl:".gallery-btn-next",prevEl:".gallery-btn-prew"},keyboard:{enabled:!0,onlyInViewport:!1}},N=new u(_,q);N.pagination.init();function x(){const e=document.querySelectorAll(".stat-number"),r={root:null,rootMargin:"0px",threshold:.3},s=new IntersectionObserver((c,t)=>{c.forEach(o=>{if(o.isIntersecting){const n=parseFloat(o.target.getAttribute("data-target")),w=n<10?.1:Math.ceil(n/100);let l=0;const g=h=>h.toLocaleString("en").replace(/,/g," "),p=()=>{if(l+=w,l>=n){o.target.textContent=g(n%1===0?n:n.toFixed(1));return}o.target.textContent=g(l%1===0?Math.floor(l):l.toFixed(1)),requestAnimationFrame(p)};p(),t.unobserve(o.target)}})},r);e.forEach(c=>{s.observe(c)})}document.addEventListener("DOMContentLoaded",x);
//# sourceMappingURL=main-c22162b2.js.map
