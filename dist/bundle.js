(()=>{"use strict";function e(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw c}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var n,o,r,a,c,i,l,u,s,d,m,v,f;(function(e){var t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds");function r(){var e=(new Date("13 august 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:n,seconds:t}}function a(){var e=r();e.hours<10?t.textContent="0"+e.hours:t.textContent=e.hours,e.minutes<10?n.textContent="0"+e.minutes:n.textContent=e.minutes,e.seconds<10?o.textContent="0"+e.seconds:o.textContent=e.seconds}a();var c=setInterval(a,1e3),i=r().timeRemaining;(0===i||i<0)&&(t.textContent="00",n.textContent="00",o.textContent="00",clearInterval(c))})(),v=document.querySelector("menu"),f=function(){v.classList.toggle("active-menu")},document.addEventListener("click",(function(e){var t=e.target;t.closest(".col-md-1")&&f(),t.closest("li>a, .close-btn")&&f(),t.closest(".active-menu, .col-md-1")||v.classList.remove("active-menu")})),l=document.querySelector(".popup"),u=document.querySelectorAll(".popup-btn"),s=document.querySelector(".popup-content"),d=0,m=function e(){if(!(++d<60.1))return cancelAnimationFrame(i),void(d=0);s.style.transform="rotate(".concat(12*d,"deg)"),i=requestAnimationFrame(e)},u.forEach((function(e){e.addEventListener("click",(function(){document.documentElement.clientWidth<768?l.style.display="block":(l.style.display="block",i=requestAnimationFrame(m))}))})),l.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?l.style.display="none":(t=t.closest(".popup-content"))||(l.style.display="none")})),r=document.querySelector(".service-header"),a=r.querySelectorAll(".service-header-tab"),c=document.querySelectorAll(".service-tab"),r.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&a.forEach((function(e,n){e===t&&function(e){for(var t=0;t<c.length;t++)e===t?(a[t].classList.add("active"),c[t].classList.remove("d-none")):(a[t].classList.remove("active"),c[t].classList.add("d-none"))}(n)}))})),function(){for(var e,t=document.querySelectorAll(".portfolio-item"),n=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content")),o=document.querySelector(".portfolio-dots"),r=0,a=0;a<t.length;a++){var c=document.createElement("li");c.className="dot",o.appendChild(c)}var i=document.querySelectorAll(".dot");i[0].classList.add("dot-active");var l=function(){t[r].classList.remove("portfolio-item-active"),i[r].classList.remove("dot-active"),++r>=t.length&&(r=0),t[r].classList.add("portfolio-item-active"),i[r].classList.add("dot-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(l,t)};n.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches("#arrow-right, #arrow-left, .dot")&&(t[r].classList.remove("portfolio-item-active"),i[r].classList.remove("dot-active"),n.matches("#arrow-right")?r++:n.matches("#arrow-left")?r--:n.matches(".dot")&&i.forEach((function(e,t){e===n&&(r=t)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),t[r].classList.add("portfolio-item-active"),i[r].classList.add("dot-active"))})),n.addEventListener("mouseover",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&clearInterval(e)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(3e3)}(),document.addEventListener("mouseover",(function(e){var t=e.target;if(t.closest(".command__photo")){var n=[t.dataset.img,t.src];t.src=n[0],t.dataset.img=n[1]}})),document.addEventListener("mouseout",(function(e){var t=e.target;if(t.closest(".command__photo")){var n=[t.dataset.img,t.src];t.src=n[0],t.dataset.img=n[1]}})),function(){document.querySelector(".calc-block").addEventListener("input",(function(e){e.target.closest(".calc-square, .calc-count, .calc-day")&&(e.target.value=e.target.value.replace(/\D/g,""))})),document.addEventListener("input",(function(e){var t=e.target;t.closest("#form1-name, #form2-name, #form2-message")&&(t.value=t.value.replace(/[^а-яё\-\s]/gi,"")),e.target.closest("#form1-email, #form2-email")&&(t.value=t.value.replace(/[а-яё0-9+^$\][}{)(?/]/gi,"")),e.target.closest("#form1-phone, #form2-phone")&&(t.value=t.value.replace(/[^0-9\-)()]/gi,""))}));var e=document.querySelectorAll("input"),t=document.getElementById("form1-name"),n=document.getElementById("form2-name");e.forEach((function(e){e.addEventListener("blur",(function(){e.value=e.value.replace(/\s+/g," ").replace(/\-+/g,"-").replace(/^\-*\s*\-*|\-*\s*\-*$/g,"").replace(/^\s*\-*\s*|\s*\-*\s*$/g,"").trim(),t.value=t.value.replace(/([а-яё])([а-яё]+)/gi,(function(e,t,n){return t.toUpperCase()+n})),n.value=n.value.replace(/([а-яё])([а-яё]+)/gi,(function(e,t,n){return t.toUpperCase()+n}))}))}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),c=document.getElementById("total"),i=function(){var t=0,i=1,l=1,u=n.options[n.selectedIndex].value,s=+o.value;a.value>1&&(i+=(a.value-1)/10),r.value&&r.value<5?l*=2:r.value&&r.value<10&&(l*=1.5),u&&s&&(t=e*u*s*i*l),c.textContent=t};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&i()}))}(),n=document.querySelectorAll("input"),(o=document.createElement("div")).style.csstext="font-size: 2rem;",o.style.color="white",document.addEventListener("submit",(function(e){e.preventDefault();var t=e.target;t.appendChild(o),o.innerHTML="<img src='images/anim.gif' width='30' height='30'>";var r=new FormData(t),a={};r.forEach((function(e,t){a[t]=e})),n.forEach((function(e){e.value=""})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(a).then((function(e){if(200!==e.status)throw new Error("Status network not 200");o.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){o.textContent=""}),4e3)})).catch((function(e){o.textContent="Что-то пошло не так...",console.error(e),setTimeout((function(){o.textContent=""}),4e3)}))})),function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",o=document.querySelectorAll(t);function r(e){var t=e.keyCode,o=n,r=o.replace(/\D/g,""),a=this.value.replace(/\D/g,""),c=0,i=o.replace(/[_\d]/g,(function(e){return c<a.length?a.charAt(c++)||r.charAt(c):e}));-1!==(c=i.indexOf("_"))&&(i=i.slice(0,c));var l=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=i),"blur"===e.type&&this.value.length<5&&(this.value="")}var a,c=e(o);try{for(c.s();!(a=c.n()).done;){var i=a.value;i.addEventListener("input",r),i.addEventListener("focus",r),i.addEventListener("blur",r)}}catch(e){c.e(e)}finally{c.f()}}("#form1-phone, #form2-phone, #form3-phone")})();