(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function l(){window.lightGallery(document.getElementById("illustration-page"),{speed:500,selector:"a[data-illustration]"})}function s(){const r=document.getElementById("contact-form-modal"),o=document.getElementById("contact-form-modal-button");if(!r||!o)return;o.addEventListener("click",()=>{r.showModal()});const n=r.querySelector("[data-close]");n==null||n.addEventListener("click",()=>r.close())}l();s();
