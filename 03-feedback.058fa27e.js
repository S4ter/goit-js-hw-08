!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var n=r("1WSnx"),o=document.querySelector('input[name="email"]'),l=document.querySelector('textarea[name="message"]'),i=document.querySelector(".feedback-form"),d=(0,n.throttle)((function(){var e={email:o.value,message:l.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);o.addEventListener("input",d),l.addEventListener("input",d),window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e>""){var t=JSON.parse(e);o.value=t.email,l.value=t.message}})),i.addEventListener("submit",(function(e){e.preventDefault();var t=localStorage.getItem("feedback-form-state");console.log(t),localStorage.removeItem("feedback-form-state"),o.value="",l.value=""}))}();
//# sourceMappingURL=03-feedback.058fa27e.js.map
