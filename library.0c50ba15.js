!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("54T7b"),a=r("b3pWk"),i=r("73ES2"),l=r("kWfXz");let u=o.default.watched,d=1;let c;const s={gallery:document.querySelector(".gallery"),btnWatched:document.querySelector("#btn-watched"),btnQueue:document.querySelector("#btn-queue"),modalContent:document.querySelector(".modal__content")};function f(e){const t=e.currentTarget;t===s.btnWatched&&u===o.default.watched||t===s.btnQueue&&u===o.default.queue||(d=1,t===s.btnWatched?(u=o.default.watched,s.btnWatched.classList.add("is-active"),s.btnQueue.classList.remove("is-active")):t===s.btnQueue&&(u=o.default.queue,s.btnWatched.classList.remove("is-active"),s.btnQueue.classList.add("is-active")),u.refreshMovies(),v())}Object.values(s).some((e=>!e))&&console.error("Error: invalid markup!"),s.gallery.insertAdjacentHTML("afterend",'<div class="js-guard"></div>'),s.guardDiv=document.querySelector(".js-guard"),s.btnWatched.addEventListener("click",f),s.btnQueue.addEventListener("click",f);const g=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&d<u.getCountPages(9)&&(d+=1,v())}))}),{root:null,rootMargin:"300px",threshold:1});function v(){1===d&&(u.getCount()>0?s.gallery.innerHTML="":s.gallery.innerHTML='<li class="gallery__pin">The library is empty</li>');const e=u.getMoviesPage(d,9);s.gallery.insertAdjacentHTML("beforeend",function(e){return e.map((e=>(0,a.default)(e))).join("")}(e)),1===d&&u.getCountPages(9)>1?g.observe(s.guardDiv):d===u.getCountPages(9)&&g.unobserve(s.guardDiv)}function b(){u.getCount()!==c&&(d=1,v(),c=u.getCount())}v(),s.gallery.addEventListener("click",(function(e){e.preventDefault();const t=e.target.closest(".card");if(!t)return;const n=t.dataset.filmid,r=u.getMovieById(n);if(!r)return void console.error(`Movie with id = ${n} isn't found in library!`);c=u.getCount(),s.modalContent.innerHTML=(0,i.default)(r),(0,l.openMovieModal)(b)}))}();
//# sourceMappingURL=library.0c50ba15.js.map