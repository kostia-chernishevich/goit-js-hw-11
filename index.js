import{a as f,S as d,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p="https://pixabay.com/api/",m="51804617-5c5cc92897b27f37b703790c6";function y(n){if(n.trim().length===0)throw new Error("Empty query");return f.get(p,{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0},timeout:1e4}).then(r=>r.data.hits).catch(r=>{var e;const t=(e=r==null?void 0:r.response)==null?void 0:e.status;let o;throw t===403?o="Invalid API key":t===429?o="Rate limit exceeded, try again later":o="Network or server error",new Error(o)})}let c;const u=document.querySelector(".gallery");function h(n=".gallery a"){c=new d(n,{captionsData:"alt",captionDelay:250})}function g(){c&&c.refresh()}function L(n){const r=n.map(t=>`<li class="card">
  <a href="${t.largeImageURL}" rel="noopener noreferrer">
    <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy">
  </a>
  <ul class="stats">
    <li><span>Likes</span><span>${t.likes}</span></li>
    <li><span>Views</span><span>${t.views}</span></li>
    <li><span>Comments</span><span>${t.comments}</span></li>
    <li><span>Downloads</span><span>${t.downloads}</span></li>
  </ul>
</li>
`).join("");u.innerHTML=r,g()}function w(){u.innerHTML=""}const a=document.querySelector("#loader");function b(){a&&a.classList.remove("hidden")}function v(){a&&a.classList.add("hidden")}const q=document.querySelector(".form"),S=document.querySelector('[name="search-text"]');h();q.addEventListener("submit",n=>{n.preventDefault();const r=S.value.trim();if(r===""){l.warning({message:"Enter a search query"});return}w(),b(),y(r).then(t=>{if(t.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(t)}).catch(t=>{l.error({message:t.message||"Network or server error"})}).finally(()=>v())});
//# sourceMappingURL=index.js.map
