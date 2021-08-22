(()=>{"use strict";function t(t,n){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return l=t.done,t},e:function(t){s=!0,a=t},f:function(){try{l||null==o.return||o.return()}finally{if(s)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function n(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){s=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw a}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function r(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const l=function(){function t(e){var n=e.main,o=e.wrap,r=e.next,i=e.prev,a=e.infinity,l=void 0!==a&&a,s=e.position,c=void 0===s?0:s,d=e.slidesToShow,u=void 0===d?3:d,p=e.responsive,f=void 0===p?[]:p;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n&&o||console.warn('slider-carousel: необходимо 2 свойства: "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=u,this.options={position:c,infinity:l,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=f}var e,n;return e=t,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=r(t))){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){s=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw a}}}}(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("glo-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("sliderCarousel-style");t||((t=document.createElement("style")).id="sliderCarousel-style"),t.textContent="\n        .glo-slider {\n          overflow: hidden !important;\n        }\n        .glo-slider__wrap {\n          display: flex !important;\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n        }\n        .glo-slider__item {\n          display: flex !important;\n          align-items: center;\n          justify-content: center;\n          flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n          margin: auto 0 !important;\n        }\n        "),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var t=document.createElement("style");t.textContent="\n        .glo-slider__prev,\n        .glo-slider__next {\n          margin: 10px 10px;\n          border: 20px solid transparent;\n          background: transparent;\n        }\n        .glo-slider__next {\n          border-left-color: #19b5fe\n        }\n        .glo-slider__prev {\n          border-right-color: #19b5fe\n        }\n        .glo-slider__next:hover,\n        .glo-slider__next:focus,\n        .glo-slider__prev:hover,\n        .glo-slider__prev:focus {\n          background: transparent;\n          outline: transparent;\n        }\n        ",document.head.appendChild(t)}},{key:"responseInit",value:function(){var t,e=this,n=this.slidesToShow,o=this.responsive.map((function(t){return t.breakpoint})),a=Math.max.apply(Math,function(t){if(Array.isArray(t))return i(t)}(t=o)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=function(){var t=document.documentElement.clientWidth;if(t<a)for(var r=0;r<o.length;r++)t<o[r]&&(e.slidesToShow=e.responsive[r].slidesToShow,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle());else e.slidesToShow=n,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle()};l(),window.addEventListener("resize",l)}}])&&a(e.prototype,n),t}();(function(){var e,n=document.querySelector(".accordeon").querySelectorAll(".element");(e=document.createElement("style")).textContent="\n      .accordeon .element.active .element-content {\n        display: block !important;\n      }\n      .accordeon .element-content {\n        display: none !important;\n      }\n    ",document.head.appendChild(e);var o,r=t(n);try{for(r.s();!(o=r.n()).done;)o.value.addEventListener("click",(function(){if(this.classList.contains("active"))this.classList.remove("active");else{var e,o=t(n);try{for(o.s();!(e=o.n()).done;)e.value.classList.remove("active")}catch(t){o.e(t)}finally{o.f()}this.classList.add("active")}}))}catch(t){r.e(t)}finally{r.f()}})(),function(){!function(){var t=document.createElement("style");t.textContent="\n        .active-menu {\n          display: block;\n        }\n        ",document.head.appendChild(t)}(),document.addEventListener("click",(function(t){var e=t.target;(e.matches(".callback-btn, .modal-overlay, .button-services, .before")||e.closest(".modal-close"))&&(document.querySelector(".modal-callback").classList.toggle("active-menu"),document.querySelector(".modal-overlay").classList.toggle("active-menu"))}));for(var t=document.querySelectorAll(".img-wrapper"),e=0;e<t.length;e++)if(t[e].closest(".col-sm-6")){var n=document.createElement("div");n.className="before",n.textContent="Оформить заявку",t[e].appendChild(n)}var o=document.createElement("style");document.head.appendChild(o),o.textContent="\n      .before {\n        display: block !important;\n        position: absolute !important;\n        width: 200px !important;\n        height: 48px !important;\n        top: 50% !important;\n        left: 50% !important;\n        margin-left: -100px !important;\n        -webkit-transition: all 200ms ease-out !important;\n        -moz-transition: all 200ms ease-out !important;\n        -o-transition: all 200ms ease-out !important;\n        transition: all 200ms ease-out !important;\n        margin-top: -24px !important;\n        z-index: 10 !important;\n        opacity: 0 !important;\n        color: #fff !important;\n        padding: 10px 0 !important;\n        text-align: center !important;\n        text-transform: uppercase !important;\n        border: 2px solid #fff !important;\n        cursor: pointer;\n      }\n    "}(),function(){var t,e=document.querySelector(".up");(t=document.createElement("style")).textContent="\n      .up {\n        display: none;\n      }  \n      .up-active {\n        display: block !important;\n      }\n      ",document.head.appendChild(t);var n=function(){var t=window.pageYOffset;t>=503&&e.classList.add("up-active"),0===t&&e.classList.remove("up-active")};n(),e.addEventListener("click",(function(){window.pageYOffset>0&&window.scrollTo(window.pageYOffset,0)})),document.addEventListener("scroll",n)}(),function(t,e){var n,o=document.querySelectorAll(".item"),r=document.querySelector(".top-slider"),i=document.querySelectorAll(".table"),a=0;i[0].classList.add("active");var l=document.createElement("ul");l.className="slick-dots",r.appendChild(l);for(var s=0;s<o.length;s++){var c=document.createElement("li");c.className="dot",l.appendChild(c)}var d=document.querySelectorAll(".dot");d[0].classList.add("slick-active");var u,p=function(t,e,n){t[e].classList.remove(n)},f=function(t,e,n){t[e].classList.add(n)};(u=document.createElement("style")).textContent="\n        .item-active {\n          position: absolute !important;\n          background-size: cover;\n          top: 0;\n          width: 100%;\n          height: 100%;\n          z-index: 11;\n        }\n        .dot {\n          z-index: 15;\n        }\n        ",document.head.appendChild(u);var m=function(){p(o,a,"item-active"),p(i,a,"active"),p(d,a,"slick-active"),++a>=o.length&&(a=0),f(o,a,"item-active"),f(i,a,"active"),f(d,a,"slick-active")},h=function(){e&&(n=setInterval(m,t))};r.addEventListener("click",(function(t){t.preventDefault();var e=t.target;e.matches(".dot")&&(p(o,a,"item-active"),p(i,a,"active"),p(d,a,"slick-active"),e.matches(".dot")&&d.forEach((function(t,n){t===e&&(a=n)})),a>=o.length&&(a=0),a<0&&(a=o.length-1),f(o,a,"item-active"),f(i,a,"active"),f(d,a,"slick-active"))})),r.addEventListener("mouseover",(function(t){t.target.matches(".dot")&&clearInterval(n)})),r.addEventListener("mouseout",(function(t){t.target.matches(".dot")&&h()})),h()}(3e3,!0),function(){var t=document.querySelectorAll("input"),e=document.getElementsByName("fio")[0],n=document.createElement("div");n.style.cssText="\n    font-size: 2rem;\n    color: black;\n    text-align: center;\n  ",document.addEventListener("input",(function(t){"Ваше имя"===t.target.placeholder&&(t.target.value=t.target.value.replace(/[^а-яё\s]/gi,""))})),t.forEach((function(t){t.addEventListener("blur",(function(){e.value=e.value.replace(/([а-яё])([а-яё]+)/gi,(function(t,e,n){return e.toUpperCase()+n}))}))}));var o=!1;document.addEventListener("input",(function(t){"Ваше имя"===t.target.placeholder&&/^[а-яё]{3,20}$/i.test(t.target.value)?o=!0:(o=!1,o="Телефон*"===t.target.placeholder&&18===t.target.value.length)})),document.addEventListener("submit",(function(e){e.preventDefault();var r=e.target;if(!0===o){r.appendChild(n),n.textContent="Загрузка...";var i=new FormData(r),a={};i.forEach((function(t,e){a[e]=t})),t.forEach((function(t){t.value=""})),function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}(a).then((function(t){if(200!==t.status)throw new Error("Status network not 200");n.textContent="Спасибо! Мы скоро с вами свяжемся!",document.querySelector(".feedback").value="отправлено",setTimeout((function(){document.querySelector(".feedback").value="отправить",n.textContent=""}),5e3)})).catch((function(t){n.textContent="Что-то пошло не так...",console.error(t),document.querySelector(".feedback").value="отправляется",setTimeout((function(){document.querySelector(".feedback").value="отправить",n.textContent=""}),5e3)})),o=!1}}))}(),new l({main:".services-elements",wrap:".services-carousel",next:".arrow-right",prev:".arrow-left",slidesToShow:3,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init(),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",o=document.querySelectorAll(t);function r(t){var n=t.keyCode,o=e,r=o.replace(/\D/g,""),i=this.value.replace(/\D/g,""),a=0,l=o.replace(/[_\d]/g,(function(t){return a<i.length?i.charAt(a++)||r.charAt(a):t}));-1!==(a=l.indexOf("_"))&&(l=l.slice(0,a));var s=o.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(s=new RegExp("^"+s+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"===t.type&&this.value.length<5&&(this.value="")}var i,a=n(o);try{for(a.s();!(i=a.n()).done;){var l=i.value;l.addEventListener("input",r),l.addEventListener("focus",r),l.addEventListener("blur",r)}}catch(t){a.e(t)}finally{a.f()}}(".tel")})();