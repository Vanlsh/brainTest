import{S as b,G as w}from"./vendor-1fb34423.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(n){if(n.ep)return;n.ep=!0;const e=i(n);fetch(n.href,e)}})();const L="modulepreload",E=function(t){return"/brainTest/"+t},g={},S=function(r,i,s){if(!i||i.length===0)return r();const n=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=E(e),e in g)return;g[e]=!0;const o=e.endsWith(".css"),f=o?'[rel="stylesheet"]':"";if(!!s)for(let l=n.length-1;l>=0;l--){const u=n[l];if(u.href===e&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":L,o||(c.as="script",c.crossOrigin=""),c.href=e,document.head.appendChild(c),o)return new Promise((l,u)=>{c.addEventListener("load",l),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})};document.addEventListener("DOMContentLoaded",async()=>{const{createReviewsSwiper:t}=await S(()=>import("./swiper-config-5684e055.js"),["assets/swiper-config-5684e055.js","assets/vendor-1fb34423.js","assets/vendor-77f7e638.css"]),r=document.querySelector(".js-reviews-swiper");r&&t(r)});const p=document.querySelectorAll(".accordion"),_=t=>{const r=t.querySelector(".accordion__content");t.classList.add("accordion__active"),r.style.maxHeight=r.scrollHeight+"px"},y=t=>{const r=t.querySelector(".accordion__content");t.classList.remove("accordion__active"),r.style.maxHeight=null};p.forEach(t=>{const r=t.querySelector(".accordion__intro"),i=t.querySelector(".accordion__content");r.onclick=()=>{i.style.maxHeight?y(t):(p.forEach(s=>y(s)),_(t))}});const h="is-open",d={closeButton:document.querySelector(".js-close-burger-button"),openButton:document.querySelector(".js-open-burger-button"),burgerContainer:document.querySelector(".js-burger"),navList:document.querySelector(".js-burger-nav-list")},v=t=>{t.code==="Escape"&&m()},q=t=>{t.target.tagName==="A"&&m()},P=t=>{t.target===t.currentTarget&&m()},m=()=>{window.removeEventListener("keydown",v),document.body.removeAttribute("style"),d.burgerContainer.classList.remove(h)},x=()=>{window.addEventListener("keydown",v),document.body.style.overflow="hidden",d.burgerContainer.classList.add(h)};d.closeButton.addEventListener("click",m);d.openButton.addEventListener("click",x);d.burgerContainer.addEventListener("click",P);d.navList.addEventListener("click",q);const N=document.querySelector(".js-gallery-swiper"),O={speed:700,spaceBetween:17,slidesPerView:1,pagination:{el:".gallery-pagination",clickable:!0},navigation:{nextEl:".gallery-btn-next",prevEl:".gallery-btn-prew"},keyboard:{enabled:!0,onlyInViewport:!1}},k=new b(N,O);k.pagination.init();w({selector:".glightbox",touchNavigation:!0,loop:!0,autoplayVideos:!0});function B(){const t=document.querySelectorAll(".stat-number"),r={root:null,rootMargin:"0px",threshold:.3},i=new IntersectionObserver((s,n)=>{s.forEach(e=>{if(e.isIntersecting){const o=parseFloat(e.target.getAttribute("data-target")),f=o<10?.1:Math.ceil(o/100);let a=0;const c=u=>u.toLocaleString("en").replace(/,/g," "),l=()=>{if(a+=f,a>=o){e.target.textContent=c(o%1===0?o:o.toFixed(1));return}e.target.textContent=c(a%1===0?Math.floor(a):a.toFixed(1)),requestAnimationFrame(l)};l(),n.unobserve(e.target)}})},r);t.forEach(s=>{i.observe(s)})}document.addEventListener("DOMContentLoaded",B);document.addEventListener("scroll",function(){const t=document.querySelector(".js-header");window.scrollY>0?t.classList.add("header--small"):t.classList.remove("header--small")});
//# sourceMappingURL=main-feb4c882.js.map
