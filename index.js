import{a as g,S as L,i as a}from"./assets/vendor-Dpd1z_xS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const x="https://pixabay.com/api/",b="44022963-dc7d5638f3e5caf2e9b20745b";async function h(s,e){const c=new URLSearchParams({q:s,image_type:"photo",orientation:"horizontal",per_page:12,page:e});return(await g.get(`${x}?key=${b}&${c}`)).data}function f(s){return s.map(e=>`
      <li class="item-card">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="small-img" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <ul class="text-box-list">
          <li class="text-box">
            <p class="text-content">Likes:</p>
            <p class="text-values">${e.likes}</p>
          </li>
          <li class="text-box">
            <p class="text-content">Views:</p>
            <p class="text-values">${e.views}</p>
          </li>
          <li class="text-box">
            <p class="text-content">Comments:</p>
            <p class="text-values">${e.comments}</p>
          </li>
          <li class="text-box">
            <p class="text-content">Downloads:</p>
            <p class="text-values">${e.downloads}</p>
          </li>
        </ul>
      </li>
      `).join("")}const w={captionsData:"alt",captionDelay:250},y=new L(".gallery-link",w);a.settings({resetOnHover:!0,timeout:2500,color:"red",position:"topRight",safesearch:!0});const v=document.querySelector(".search-form"),m=document.querySelector(".gallery-list"),o=document.querySelector(".loader"),i=document.querySelector(".load-more-btn");let n="",l=1,p="";v.addEventListener("submit",$);i.addEventListener("click",E);async function $(s){if(s.preventDefault(),n=s.target.elements.searchWord.value.trim(),n===""){a.show({title:"Hay",message:"Enter some value please."}),s.target.reset();return}m.innerHTML="",o.classList.remove("is-hiden");try{const{hits:e}=await h(n,l);if(e.length===0){i.classList.add("is-hiden"),a.show({title:"Hay",message:"Sorry, there are no images matching your search query. Please try again!"}),i.classList.add("is-hiden"),s.target.reset();return}m.insertAdjacentHTML("beforeEnd",f(e)),i.classList.remove("is-hiden"),y.refresh()}catch(e){a.show({title:"Error",message:`${e.message}`})}finally{o.classList.add("is-hiden"),s.target.reset()}}async function E(){l+=1;try{o.classList.remove("is-hiden");const{hits:s,totalHits:e}=await h(n,l);if(p=Math.ceil(e/12),l>p){a.show({title:"Hey",message:"There is no more images!"}),o.classList.add("is-hiden"),i.classList.add("is-hiden");return}m.insertAdjacentHTML("beforeEnd",f(s)),o.classList.add("is-hiden"),y.refresh()}catch(s){a.show({title:"Error",message:`${s.message}`})}}
//# sourceMappingURL=index.js.map
