(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function c(){window.lightGallery(document.getElementById("illustration-page"),{speed:500,selector:"a[data-illustration]"})}function l(){const r=document.getElementById("contact-form-modal"),t=document.getElementById("contact-form-modal-button");if(!r||!t)return;t.addEventListener("click",()=>{r.showModal()});const n=r.querySelector("[data-close]");n==null||n.addEventListener("click",()=>r.close())}function d(){const r=document.getElementById("plugin-quote");if(!r)return;const t=[...r.querySelectorAll("[data-quote]")];if(!t.length)return;const n=r.querySelector("[data-quote-placeholder]"),i=Math.floor(Math.random()*t.length);n.style.display="none",t[i].style.display="block"}class a{constructor(t){this.video=t}init(){new IntersectionObserver(n=>{n.forEach(i=>{var e,o;i.isIntersecting?(e=this.video)==null||e.play():(o=this.video)==null||o.pause()},{threshold:1})}).observe(this.video)}}function u(r="[data-autoplay-video]"){document.querySelectorAll(r).forEach(n=>{new a(n).init()})}c();l();d();u();