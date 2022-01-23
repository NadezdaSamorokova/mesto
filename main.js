(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._cardSelector=n,this._handleCardClick=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleCardLike",value:function(){this._likeButton.classList.toggle("element__button-like_active")}},{key:"_deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._elementImage.addEventListener("click",this._handleCardClick),this._element.querySelector(".element__button-delete").addEventListener("click",(function(){e._deleteCard()})),this._likeButton.addEventListener("click",(function(){e._handleCardLike()}))}},{key:"renderCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementTitle=this._element.querySelector(".element__title"),this._likeButton=this._element.querySelector(".element__button-like"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._elementTitle.textContent=this._name,this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._validateForm=n}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._submitButton=this._validateForm.querySelector(this._submitButtonSelector),this._inputs=Array.from(this._validateForm.querySelectorAll(this._inputSelector)),this._setEventListeners()}},{key:"_handleFieldValidation",value:function(e){var t=e.target;this._validateForm.querySelector("#".concat(t.id,"-error")).textContent=t.validationMessage,t.classList.toggle(this._inputErrorClass,!t.validity.valid),t.classList.toggle(this._errorClass,!t.validity.valid)}},{key:"_setSubmitButtonState",value:function(){this._submitButton.disabled=!this._validateForm.checkValidity(),this._submitButton.classList.toggle(this._inactiveButtonClass,!this._validateForm.checkValidity())}},{key:"_setEventListeners",value:function(){var e=this;this._setSubmitButtonState(),this._inputs.forEach((function(t){t.addEventListener("input",(function(t){e._handleFieldValidation(t),e._setSubmitButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._setSubmitButtonState(),this._inputs.forEach((function(t){var n=e._validateForm.querySelector("#".concat(t.id,"-error"));t.classList.remove(e._inputErrorClass),n.classList.remove(e._errorClass),n.textContent=""}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-icon")&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function p(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=r,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._form.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputs.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;c(f(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){c(f(a.prototype),"close",this).call(this),this._form.reset()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._link=t._popup.querySelector(".popup__image"),t._name=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e){this._link.src=e.link,this._link.alt=e.name,this._name.textContent=e.name,h(k(a.prototype),"open",this).call(this)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e.addItem(t)}))}},{key:"addItem",value:function(e){var t=this._renderer(e);this._container.prepend(t)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.profileName,r=t.profileOccupation;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nikname=n,this._occupation=r}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{nikname:this._nikname.textContent,occupation:this._occupation.textContent}}},{key:"setUserInfo",value:function(e){this._nikname.textContent=e.nikname,this._occupation.textContent=e.occupation}}],n&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=document.querySelector(".popup_type_edit"),j=document.querySelector(".profile-info__edit-button"),L=C.querySelector(".popup__form"),P=C.querySelector(".popup__name"),q=C.querySelector(".popup__occupation"),B=document.querySelector(".profile-info__name"),x=document.querySelector(".profile-info__occupation"),R=document.querySelector(".popup_type_add").querySelector(".popup__form"),I=document.querySelector(".profile__add-button"),T={},F=new S(".popup_type_image");F.setEventListeners();var V=new O({profileName:B,profileOccupation:x}),A=function(e){var t={link:e.target.src,name:e.target.closest(".element").querySelector(".element__title").textContent};F.open(t)},D=new w({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){return new t(e,"#element-template",A).renderCard()}},".elements__list");D.renderItems();var U=new y(".popup_type_add",{handleFormSubmit:function(e){D.addItem(e),U.close()}});U.setEventListeners();var N,z=new y(".popup_type_edit",{handleFormSubmit:function(e){V.setUserInfo(e),z.close()}});z.setEventListeners(),I.addEventListener("click",(function(){U.open(),T[R.name].resetValidation()})),j.addEventListener("click",(function(){var e=V.getUserInfo();P.value=e.nikname,q.value=e.occupation,z.open(C),T[L.name].resetValidation()})),N={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(N.formSelector)).forEach((function(e){var t=new r(N,e);T[e.name]=t,t.enableValidation()}))})();