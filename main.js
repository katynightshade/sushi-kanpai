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

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domSetup": () => (/* reexport safe */ _home_page_js__WEBPACK_IMPORTED_MODULE_0__.domSetup)
/* harmony export */ });
/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.js */ "./src/home-page.js");




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
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");


(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.domSetup)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25Ed0M7Ozs7Ozs7O1VDQXhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDLHFEQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvLi9zcmMvaG9tZS1wYWdlLmpzIiwid2VicGFjazovL3N1c2hpLWthbnBhaS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3N1c2hpLWthbnBhaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N1c2hpLWthbnBhaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N1c2hpLWthbnBhaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N1c2hpLWthbnBhaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZG9tU2V0dXAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nby5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuLi9zcmMvaW1nL2xvZ28ucG5nXCIgYWx0PVwiS2FucGFpIEhvbWVcIj4nXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7ICAgIFxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcblxuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1saXN0Jyk7XG4gICAgY29uc3QgbmF2VUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyksIGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyksIGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkxLmlubmVySFRNTCA9ICc8YSBocmVmPVwiI1wiPk1lbnU8L2E+JztcbiAgICBsaTIuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT4nO1xuICAgIGxpMy5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj5ZZWxwPC9hPic7XG4gICAgbmF2VUwuYXBwZW5kKGxpMSwgbGkyLCBsaTMpO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmF2VUwpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcblxuICAgIFxuICAgIFxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTWVldCBPdXIgVGVhbSEnXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHAxLmNsYXNzTGlzdC5hZGQoJ3AxJyksIHAyLmNsYXNzTGlzdC5hZGQoJ3AxJyksIHAzLmNsYXNzTGlzdC5hZGQoJ3AxJyksIHA0LmNsYXNzTGlzdC5hZGQoJ3AxJyk7XG5cbiAgICBjb25zdCB0bTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksIHRtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSwgdG0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLCB0bTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG0xLnRleHRDb250ZW50ID0gJ1N0b3JlIE1hbmFnZXInLCB0bTIudGV4dENvbnRlbnQgPSAnTGVhZCBDaGVmJywgdG0zLnRleHRDb250ZW50ID0gJ1NvdXMgQ2hlZicsIHRtNC50ZXh0Q29udGVudCA9ICdMZWFkIFNlcnZlcic7XG4gICAgdG0xLmNsYXNzTGlzdC5hZGQoJ3RlYW0tbWVtYmVyJyksIHRtMi5jbGFzc0xpc3QuYWRkKCd0ZWFtLW1lbWJlcicpLCB0bTMuY2xhc3NMaXN0LmFkZCgndGVhbS1tZW1iZXInKSwgdG00LmNsYXNzTGlzdC5hZGQoJ3RlYW0tbWVtYmVyJyk7XG5cblxuICAgIGNvbnN0IHRwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB0cDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgdHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHRwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRwMS5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuLi9zcmMvaW1nL2NoZWYxLmpwZ1wiIGFsdD1cIkVtcGxveWVlXCI+JywgdHAyLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIi4uL3NyYy9pbWcvY2hlZjEuanBnXCIgYWx0PVwiRW1wbG95ZWVcIj4nLCB0cDMuaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiLi4vc3JjL2ltZy9jaGVmMS5qcGdcIiBhbHQ9XCJFbXBsb3llZVwiPicsIHRwNC5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuLi9zcmMvaW1nL2NoZWYxLmpwZ1wiIGFsdD1cIkVtcGxveWVlXCI+JztcbiAgICB0cDEuY2xhc3NMaXN0LmFkZCgndGVhbS1waWMnKSwgdHAyLmNsYXNzTGlzdC5hZGQoJ3RlYW0tcGljJyksIHRwMy5jbGFzc0xpc3QuYWRkKCd0ZWFtLXBpYycpLCB0cDQuY2xhc3NMaXN0LmFkZCgndGVhbS1waWMnKTtcblxuICAgIHAxLmFwcGVuZCh0bTEsIHRwMSk7XG4gICAgcDIuYXBwZW5kKHRtMiwgdHAyKTtcbiAgICBwMy5hcHBlbmQodG0zLCB0cDMpO1xuICAgIHA0LmFwcGVuZCh0bTQsIHRwNCk7XG5cbiAgICBtYWluLmFwcGVuZChwMSwgcDIsIHAzLCBwNCk7XG4gICAgaGVyby5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvKTtcbn0iLCJpbXBvcnQge2RvbVNldHVwfSBmcm9tICcuL2hvbWUtcGFnZS5qcyc7XG5cbmV4cG9ydCB7IGRvbVNldHVwIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2RvbVNldHVwfSBmcm9tICcuL3dlYnNpdGUuanMnO1xuXG5kb21TZXR1cCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==