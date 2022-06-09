/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domSetup": () => (/* binding */ domSetup)
/* harmony export */ });
function domSetup() {
    const content = document.querySelector('#content');
    
    const header = document.createElement('div');

    const logo = document.createElement('div');
    logo.innerHTML = '<img src="../src/img/logo.png" alt="Kanpai Home">'
    logo.classList.add('logo');    
    header.appendChild(logo);

    const navList = document.createElement('div');
    navList.classList.add('nav-list');
    const navUL = document.createElement('ul');
    const li1 = document.createElement('li'), li2 = document.createElement('li'), li3 = document.createElement('li');
    li1.innerHTML = '<a href="#">Menu</a>';
    li2.innerHTML = '<a href="#">Contact</a>';
    li3.innerHTML = '<a href="#">Yelp</a>';
    navUL.append(li1, li2, li3);
    navList.appendChild(navUL);
    header.appendChild(navList);

    
    
    const hero = document.createElement('div');
    const main = document.createElement('div');
    const title = document.createElement('p');
    title.textContent = 'Meet Our Team!'
    main.appendChild(title);

    const p1 = document.createElement('div'), p2 = document.createElement('div'), p3 = document.createElement('div'), p4 = document.createElement('div');
    p1.classList.add('p1'), p2.classList.add('p1'), p3.classList.add('p1'), p4.classList.add('p1');

    const tm1 = document.createElement('p'), tm2 = document.createElement('p'), tm3 = document.createElement('p'), tm4 = document.createElement('p');
    tm1.textContent = 'Store Manager', tm2.textContent = 'Lead Chef', tm3.textContent = 'Sous Chef', tm4.textContent = 'Lead Server';
    tm1.classList.add('team-member'), tm2.classList.add('team-member'), tm3.classList.add('team-member'), tm4.classList.add('team-member');


    const tp1 = document.createElement('div'), tp2 = document.createElement('div'), tp3 = document.createElement('div'), tp4 = document.createElement('div');
    tp1.innerHTML = '<img src="../src/img/chef1.jpg" alt="Employee">', tp2.innerHTML = '<img src="../src/img/chef1.jpg" alt="Employee">', tp3.innerHTML = '<img src="../src/img/chef1.jpg" alt="Employee">', tp4.innerHTML = '<img src="../src/img/chef1.jpg" alt="Employee">';
    tp1.classList.add('team-pic'), tp2.classList.add('team-pic'), tp3.classList.add('team-pic'), tp4.classList.add('team-pic');

    p1.append(tm1, tp1);
    p2.append(tm2, tp2);
    p3.append(tm3, tp3);
    p4.append(tm4, tp4);

    main.append(p1, p2, p3, p4);
    hero.appendChild(main);
    
    content.appendChild(header);
    content.appendChild(hero);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.js */ "./src/home-page.js");


(0,_home_page_js__WEBPACK_IMPORTED_MODULE_0__.domSetup)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ25EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTndDOztBQUV4Qyx1REFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VzaGkta2FucGFpLy4vc3JjL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VzaGkta2FucGFpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRvbVNldHVwKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiLi4vc3JjL2ltZy9sb2dvLnBuZ1wiIGFsdD1cIkthbnBhaSBIb21lXCI+J1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpOyAgICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtbGlzdCcpO1xuICAgIGNvbnN0IG5hdlVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpLCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpLCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpMS5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj5NZW51PC9hPic7XG4gICAgbGkyLmlubmVySFRNTCA9ICc8YSBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+JztcbiAgICBsaTMuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+WWVscDwvYT4nO1xuICAgIG5hdlVMLmFwcGVuZChsaTEsIGxpMiwgbGkzKTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG5hdlVMKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbiAgICBcbiAgICBcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ01lZXQgT3VyIFRlYW0hJ1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwMS5jbGFzc0xpc3QuYWRkKCdwMScpLCBwMi5jbGFzc0xpc3QuYWRkKCdwMScpLCBwMy5jbGFzc0xpc3QuYWRkKCdwMScpLCBwNC5jbGFzc0xpc3QuYWRkKCdwMScpO1xuXG4gICAgY29uc3QgdG0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLCB0bTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksIHRtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSwgdG00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRtMS50ZXh0Q29udGVudCA9ICdTdG9yZSBNYW5hZ2VyJywgdG0yLnRleHRDb250ZW50ID0gJ0xlYWQgQ2hlZicsIHRtMy50ZXh0Q29udGVudCA9ICdTb3VzIENoZWYnLCB0bTQudGV4dENvbnRlbnQgPSAnTGVhZCBTZXJ2ZXInO1xuICAgIHRtMS5jbGFzc0xpc3QuYWRkKCd0ZWFtLW1lbWJlcicpLCB0bTIuY2xhc3NMaXN0LmFkZCgndGVhbS1tZW1iZXInKSwgdG0zLmNsYXNzTGlzdC5hZGQoJ3RlYW0tbWVtYmVyJyksIHRtNC5jbGFzc0xpc3QuYWRkKCd0ZWFtLW1lbWJlcicpO1xuXG5cbiAgICBjb25zdCB0cDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgdHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHRwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB0cDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cDEuaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiLi4vc3JjL2ltZy9jaGVmMS5qcGdcIiBhbHQ9XCJFbXBsb3llZVwiPicsIHRwMi5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuLi9zcmMvaW1nL2NoZWYxLmpwZ1wiIGFsdD1cIkVtcGxveWVlXCI+JywgdHAzLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIi4uL3NyYy9pbWcvY2hlZjEuanBnXCIgYWx0PVwiRW1wbG95ZWVcIj4nLCB0cDQuaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiLi4vc3JjL2ltZy9jaGVmMS5qcGdcIiBhbHQ9XCJFbXBsb3llZVwiPic7XG4gICAgdHAxLmNsYXNzTGlzdC5hZGQoJ3RlYW0tcGljJyksIHRwMi5jbGFzc0xpc3QuYWRkKCd0ZWFtLXBpYycpLCB0cDMuY2xhc3NMaXN0LmFkZCgndGVhbS1waWMnKSwgdHA0LmNsYXNzTGlzdC5hZGQoJ3RlYW0tcGljJyk7XG5cbiAgICBwMS5hcHBlbmQodG0xLCB0cDEpO1xuICAgIHAyLmFwcGVuZCh0bTIsIHRwMik7XG4gICAgcDMuYXBwZW5kKHRtMywgdHAzKTtcbiAgICBwNC5hcHBlbmQodG00LCB0cDQpO1xuXG4gICAgbWFpbi5hcHBlbmQocDEsIHAyLCBwMywgcDQpO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVybyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2RvbVNldHVwfSBmcm9tICcuL2hvbWUtcGFnZS5qcyc7XG5cbmRvbVNldHVwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9