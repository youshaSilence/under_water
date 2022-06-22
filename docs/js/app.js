/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _storyController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storyController */ \"./src/js/storyController.js\");\n\n\n(0,_storyController__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQUEsNERBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmRlcl93YXRlci8uL3NyYy9qcy9hcHAuanM/OTBlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgc3RvcnlDb250cm9sbGVyIGZyb20gXCIuL3N0b3J5Q29udHJvbGxlclwiO1xyXG5cclxuc3RvcnlDb250cm9sbGVyKCk7XHJcbiJdLCJuYW1lcyI6WyJzdG9yeUNvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/storyController.js":
/*!***********************************!*\
  !*** ./src/js/storyController.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _json_story_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/story.json */ \"./src/json/story.json\");\n\n\nfunction nextDialogue() {\n  var storyContentDiv = document.getElementById(\"storyContent\");\n  var branchObjects = [];\n\n  for (var i = 0; i < _json_story_json__WEBPACK_IMPORTED_MODULE_0__.length; i++) {\n    if (_json_story_json__WEBPACK_IMPORTED_MODULE_0__[i].branch_id == __webpack_require__.g.dialogueBranch) {\n      branchObjects.push(_json_story_json__WEBPACK_IMPORTED_MODULE_0__[i]);\n    }\n  }\n\n  var storyTextObj = branchObjects[__webpack_require__.g.dialogueBranchCounter];\n  var phraseTag = document.createElement(\"p\");\n  var descTag = document.createElement(\"span\");\n\n  if (storyTextObj.text.length) {\n    var text;\n    var text2;\n\n    if (storyTextObj.author) {\n      var splitted = storyTextObj.text.split(' - ');\n      text = document.createTextNode(\"- \".concat(splitted[0], \"\\n\"));\n\n      if (splitted[1]) {\n        var descText = document.createTextNode(\" *\".concat(splitted[1], \"* \"));\n        descTag.appendChild(descText);\n        descTag.className = \"dialogueDesc\";\n      }\n\n      if (splitted[2]) {\n        text2 = document.createTextNode(\" \".concat(splitted[2], \"\\n\"));\n      }\n\n      phraseTag.className = storyTextObj.author;\n    } else {\n      text = document.createTextNode(\"\".concat(storyTextObj.text, \"\\n\"));\n      phraseTag.className = \"normalText\";\n    }\n\n    phraseTag.appendChild(text);\n    phraseTag.appendChild(descTag);\n\n    if (text2) {\n      phraseTag.appendChild(text2);\n    }\n\n    storyContentDiv.appendChild(phraseTag);\n  }\n\n  if (storyTextObj.answers && storyTextObj.answers.length) {\n    var _loop = function _loop(j) {\n      phraseTag = document.createElement(\"p\");\n      var buttonTag = document.createElement(\"button\");\n      buttonTag.className = \"dialogueButton\";\n      buttonTag.innerHTML = \"\".concat(storyTextObj.answers[j].text, \"\\n\");\n\n      buttonTag.onclick = function (event) {\n        __webpack_require__.g.dialogueBranch = storyTextObj.answers[j].id;\n        __webpack_require__.g.dialogueBranchCounter = 0;\n        var buttons = document.getElementsByClassName(\"dialogueButton\");\n\n        while (buttons.length) {\n          buttons[0].remove();\n        }\n\n        var phraseTag = document.createElement(\"p\");\n        var text;\n\n        if (storyTextObj.author) {\n          text = document.createTextNode(\"- \".concat(storyTextObj.answers[j].text));\n          phraseTag.className = storyTextObj.author;\n        } else {\n          if (storyTextObj.answers[j].displayText) {\n            text = document.createTextNode(storyTextObj.answers[j].displayText);\n          } else {\n            text = document.createTextNode(storyTextObj.answers[j].text);\n          }\n\n          phraseTag.className = \"normalText\";\n        }\n\n        phraseTag.appendChild(text);\n        storyContentDiv.appendChild(phraseTag);\n        event.stopPropagation();\n      };\n\n      phraseTag.appendChild(buttonTag);\n      storyContentDiv.appendChild(phraseTag);\n    };\n\n    for (var j = 0; j < storyTextObj.answers.length; j++) {\n      _loop(j);\n    }\n  }\n\n  __webpack_require__.g.dialogueBranchCounter++;\n\n  if (storyTextObj.next_id) {\n    __webpack_require__.g.dialogueBranch = storyTextObj.next_id;\n    __webpack_require__.g.dialogueBranchCounter = 0;\n  }\n}\n\nfunction setNextClicker() {\n  var dialogueButton = document.getElementsByClassName(\"dialogueButton\");\n\n  if (!dialogueButton.length) {\n    nextDialogue();\n    var storyContent = document.getElementById(\"storyContent\"); // window.scroll(0, document.body.clientHeight);\n\n    storyContent.scroll(0, storyContent.scrollHeight);\n  }\n}\n\nfunction makeStory() {\n  __webpack_require__.g.dialogueBranch = 0;\n  __webpack_require__.g.dialogueBranchCounter = 0; // Space in the bottom of the page\n\n  var fool = document.getElementById(\"fool\");\n  fool.id = undefined;\n  var storyContent = document.getElementById(\"storyContent\");\n  storyContent.id = undefined;\n  var buttonTag = document.getElementById(\"startGame\");\n\n  buttonTag.onclick = function () {\n    var startBlockTag = document.getElementById(\"startContent\");\n    startBlockTag.remove();\n    fool.id = \"fool\";\n    storyContent.id = \"storyContent\";\n    window.onclick = setNextClicker;\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeStory);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUd0QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBckI7RUFDQXFDLFlBQVksQ0FBQ1QsRUFBYixHQUFrQmMsU0FBbEI7RUFFQSxJQUFNbEIsU0FBUyxHQUFHekIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxCOztFQUNBd0IsU0FBUyxDQUFDRSxPQUFWLEdBQW9CLFlBQU07SUFDdEIsSUFBTWlCLGFBQWEsR0FBRzVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUF0QjtJQUNBMkMsYUFBYSxDQUFDWixNQUFkO0lBRUFVLElBQUksQ0FBQ2IsRUFBTCxHQUFVLE1BQVY7SUFDQVMsWUFBWSxDQUFDVCxFQUFiLEdBQWtCLGNBQWxCO0lBRUFnQixNQUFNLENBQUNsQixPQUFQLEdBQWlCUyxjQUFqQjtFQUNILENBUkQ7QUFTSDs7QUFDRCxpRUFBZUssU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3VuZGVyX3dhdGVyLy4vc3JjL2pzL3N0b3J5Q29udHJvbGxlci5qcz81MWFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yeVRleHQgZnJvbSBcIi4uL2pzb24vc3RvcnkuanNvblwiXHJcblxyXG5mdW5jdGlvbiBuZXh0RGlhbG9ndWUoKSB7XHJcbiAgICBjb25zdCBzdG9yeUNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3J5Q29udGVudFwiKTtcclxuICAgIGNvbnN0IGJyYW5jaE9iamVjdHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcnlUZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN0b3J5VGV4dFtpXS5icmFuY2hfaWQgPT0gZ2xvYmFsLmRpYWxvZ3VlQnJhbmNoKSB7XHJcbiAgICAgICAgICAgIGJyYW5jaE9iamVjdHMucHVzaChzdG9yeVRleHRbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3J5VGV4dE9iaiA9IGJyYW5jaE9iamVjdHNbZ2xvYmFsLmRpYWxvZ3VlQnJhbmNoQ291bnRlcl07XHJcblxyXG4gICAgbGV0IHBocmFzZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgZGVzY1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICAgIGlmIChzdG9yeVRleHRPYmoudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgdGV4dDtcclxuICAgICAgICBsZXQgdGV4dDI7XHJcbiAgICAgICAgaWYgKHN0b3J5VGV4dE9iai5hdXRob3IpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXR0ZWQgPSBzdG9yeVRleHRPYmoudGV4dC5zcGxpdCgnIC0gJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYC0gJHtzcGxpdHRlZFswXX1cXG5gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzcGxpdHRlZFsxXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgICoke3NwbGl0dGVkWzFdfSogYCk7XHJcbiAgICAgICAgICAgICAgICBkZXNjVGFnLmFwcGVuZENoaWxkKGRlc2NUZXh0KTtcclxuICAgICAgICAgICAgICAgIGRlc2NUYWcuY2xhc3NOYW1lID0gXCJkaWFsb2d1ZURlc2NcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNwbGl0dGVkWzJdKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAgJHtzcGxpdHRlZFsyXX1cXG5gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGhyYXNlVGFnLmNsYXNzTmFtZSA9IHN0b3J5VGV4dE9iai5hdXRob3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3N0b3J5VGV4dE9iai50ZXh0fVxcbmApO1xyXG4gICAgICAgICAgICBwaHJhc2VUYWcuY2xhc3NOYW1lID0gXCJub3JtYWxUZXh0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHBocmFzZVRhZy5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICBwaHJhc2VUYWcuYXBwZW5kQ2hpbGQoZGVzY1RhZyk7XHJcbiAgICAgICAgaWYgKHRleHQyKSB7XHJcbiAgICAgICAgICAgIHBocmFzZVRhZy5hcHBlbmRDaGlsZCh0ZXh0Mik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3J5Q29udGVudERpdi5hcHBlbmRDaGlsZChwaHJhc2VUYWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdG9yeVRleHRPYmouYW5zd2VycyAmJiBzdG9yeVRleHRPYmouYW5zd2Vycy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN0b3J5VGV4dE9iai5hbnN3ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHBocmFzZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uVGFnLmNsYXNzTmFtZSA9IFwiZGlhbG9ndWVCdXR0b25cIjtcclxuICAgICAgICAgICAgYnV0dG9uVGFnLmlubmVySFRNTCA9YCR7c3RvcnlUZXh0T2JqLmFuc3dlcnNbal0udGV4dH1cXG5gO1xyXG4gICAgICAgICAgICBidXR0b25UYWcub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLmRpYWxvZ3VlQnJhbmNoID0gc3RvcnlUZXh0T2JqLmFuc3dlcnNbal0uaWQ7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuZGlhbG9ndWVCcmFuY2hDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRpYWxvZ3VlQnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGJ1dHRvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1swXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGhyYXNlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dDtcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yeVRleHRPYmouYXV0aG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAtICR7c3RvcnlUZXh0T2JqLmFuc3dlcnNbal0udGV4dH1gKTtcclxuICAgICAgICAgICAgICAgICAgICBwaHJhc2VUYWcuY2xhc3NOYW1lID0gc3RvcnlUZXh0T2JqLmF1dGhvcjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3J5VGV4dE9iai5hbnN3ZXJzW2pdLmRpc3BsYXlUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdG9yeVRleHRPYmouYW5zd2Vyc1tqXS5kaXNwbGF5VGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0b3J5VGV4dE9iai5hbnN3ZXJzW2pdLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwaHJhc2VUYWcuY2xhc3NOYW1lID0gXCJub3JtYWxUZXh0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwaHJhc2VUYWcuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgICAgICBzdG9yeUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGhyYXNlVGFnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBocmFzZVRhZy5hcHBlbmRDaGlsZChidXR0b25UYWcpO1xyXG4gICAgICAgICAgICBzdG9yeUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGhyYXNlVGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2xvYmFsLmRpYWxvZ3VlQnJhbmNoQ291bnRlcisrO1xyXG5cclxuICAgIGlmIChzdG9yeVRleHRPYmoubmV4dF9pZCkge1xyXG4gICAgICAgIGdsb2JhbC5kaWFsb2d1ZUJyYW5jaCA9IHN0b3J5VGV4dE9iai5uZXh0X2lkO1xyXG4gICAgICAgIGdsb2JhbC5kaWFsb2d1ZUJyYW5jaENvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROZXh0Q2xpY2tlcigpIHtcclxuICAgIGNvbnN0IGRpYWxvZ3VlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRpYWxvZ3VlQnV0dG9uXCIpO1xyXG4gICAgaWYgKCFkaWFsb2d1ZUJ1dHRvbi5sZW5ndGgpIHtcclxuICAgICAgICBuZXh0RGlhbG9ndWUoKTtcclxuICAgICAgICBjb25zdCBzdG9yeUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3J5Q29udGVudFwiKTtcclxuICAgICAgICAvLyB3aW5kb3cuc2Nyb2xsKDAsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICBzdG9yeUNvbnRlbnQuc2Nyb2xsKDAsIHN0b3J5Q29udGVudC5zY3JvbGxIZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlU3RvcnkoKSB7XHJcbiAgICBnbG9iYWwuZGlhbG9ndWVCcmFuY2ggPSAwO1xyXG4gICAgZ2xvYmFsLmRpYWxvZ3VlQnJhbmNoQ291bnRlciA9IDA7XHJcblxyXG4gICAgLy8gU3BhY2UgaW4gdGhlIGJvdHRvbSBvZiB0aGUgcGFnZVxyXG4gICAgY29uc3QgZm9vbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vbFwiKTtcclxuICAgIGZvb2wuaWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3Qgc3RvcnlDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yeUNvbnRlbnRcIik7XHJcbiAgICBzdG9yeUNvbnRlbnQuaWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEdhbWVcIik7XHJcbiAgICBidXR0b25UYWcub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzdGFydEJsb2NrVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydENvbnRlbnRcIik7XHJcbiAgICAgICAgc3RhcnRCbG9ja1RhZy5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgZm9vbC5pZCA9IFwiZm9vbFwiO1xyXG4gICAgICAgIHN0b3J5Q29udGVudC5pZCA9IFwic3RvcnlDb250ZW50XCI7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gc2V0TmV4dENsaWNrZXI7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdG9yeTtcclxuIl0sIm5hbWVzIjpbInN0b3J5VGV4dCIsIm5leHREaWFsb2d1ZSIsInN0b3J5Q29udGVudERpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJicmFuY2hPYmplY3RzIiwiaSIsImxlbmd0aCIsImJyYW5jaF9pZCIsImdsb2JhbCIsImRpYWxvZ3VlQnJhbmNoIiwicHVzaCIsInN0b3J5VGV4dE9iaiIsImRpYWxvZ3VlQnJhbmNoQ291bnRlciIsInBocmFzZVRhZyIsImNyZWF0ZUVsZW1lbnQiLCJkZXNjVGFnIiwidGV4dCIsInRleHQyIiwiYXV0aG9yIiwic3BsaXR0ZWQiLCJzcGxpdCIsImNyZWF0ZVRleHROb2RlIiwiZGVzY1RleHQiLCJhcHBlbmRDaGlsZCIsImNsYXNzTmFtZSIsImFuc3dlcnMiLCJqIiwiYnV0dG9uVGFnIiwiaW5uZXJIVE1MIiwib25jbGljayIsImV2ZW50IiwiaWQiLCJidXR0b25zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJlbW92ZSIsImRpc3BsYXlUZXh0Iiwic3RvcFByb3BhZ2F0aW9uIiwibmV4dF9pZCIsInNldE5leHRDbGlja2VyIiwiZGlhbG9ndWVCdXR0b24iLCJzdG9yeUNvbnRlbnQiLCJzY3JvbGwiLCJzY3JvbGxIZWlnaHQiLCJtYWtlU3RvcnkiLCJmb29sIiwidW5kZWZpbmVkIiwic3RhcnRCbG9ja1RhZyIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/storyController.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmRlcl93YXRlci8uL3NyYy9zY3NzL2FwcC5zY3NzPzYyOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

/***/ }),

/***/ "./src/json/story.json":
/*!*****************************!*\
  !*** ./src/json/story.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"branch_id":0,"author":"player","text":"Я замерзла и чувствую себя глупо. Не хватает еще наступить на гвоздь, или чтобы на голову кирпич упал."},{"branch_id":0,"author":"voice","text":"О, божечки, хватит ныть. - Послышался голос где-то спереди."},{"branch_id":0,"text":"Я аккуратно пробираюсь в темноте, переступаю через палки, камни с обрушенных стен и мусор. Я бы светила себе телефоном, но моя спутница запретила сегодня брать с собой любые девайсы. Скудный лунный свет пробивается сквозь разрушенную местами крышу, но это не сильно помогает."},{"branch_id":0,"text":"Пахнет плесенью и сыростью, а иногда до тошноты чем-то очень зловонным, не хочу думать, чем именно. Но ветер с моря приносит спасающую свежесть, не был бы он еще таким холодным."},{"branch_id":0,"author":"voice","text":"Пришли. - Услышала я голос прямо над своим ухом и вздрогнула от неожиданности."},{"branch_id":0,"author":"player","text":"Ах!"},{"branch_id":0,"author":"voice","text":"Тихо! Ты все испортишь своими криками."},{"branch_id":0,"text":"Я слышу звук зажигалки и в тот же момент вижу свет маленького огонька."},{"branch_id":0,"author":"voice","text":"Ты сомневаешься, я это чувствую."},{"branch_id":0,"author":"player","text":"","answers":[{"id":1,"text":"Мне немного жутко тут."},{"id":2,"text":"Почему ты так думаешь?"}]},{"branch_id":1,"author":"voice","text":"Да брось, это же не психбольница какая-нибудь или тюрьма заброшенная. Всего-то морской вокзал.","next_id":3},{"branch_id":2,"author":"voice","text":"Было бы глупо не бояться.","next_id":3},{"branch_id":3,"text":"Я беру зажигалку в правую руку и решаю осмотреться. Вокзал заброшен еще в нулевых, но хорошо сохранился. Этот зал представляет собой типичный зал ожидания. Высоченные потолки, огромные окна, даже скамейки так и остались стоять рядами. Граффити на стенах про молодость, безнадежность и Цоя странно сочетаются с витиеватыми чугунными перилами. Большое табло с расписанием рейсов висит над кассами. Я представляю как покупаю билет на призрачный паром и уплываю на нем покорять океаны и пугать моряков."},{"branch_id":3,"text":"Я слышу шум ветра и волн, я их не вижу, но знаю, что там, снаружи много большой и холодной воды."},{"branch_id":3,"text":"На узкой стене расположено огромное зеркало, оно делает зал бесконечно длинным. Я поднимаюсь по ступеням к зеркалу. Удивительно, как оно осталось не разбитым и не имеет ни единой трещины. Я задумываюсь о том, имеют ли зеркала память. Сколько лиц они видели. Но самое главное, это зеркало видело ее."},{"branch_id":3,"author":"voice","text":"Мама говорит, я была здесь в детстве, но я совсем этого не помню. - Говорит голос с другой стороны зеркала."},{"branch_id":3,"text":"Я встречаюсь с ней взглядом."},{"branch_id":3,"author":"player","text":"","answers":[{"id":4,"text":"Мне холодно."},{"id":5,"text":"Мне страшно."}]},{"branch_id":4,"author":"voice","text":"Это нормально. - Говорит она успокаивающим голосом. - Я знаю, что тебе холодно, но ты должна мне довериться, если хочешь встретиться с ней.","next_id":6},{"branch_id":5,"author":"voice","text":"Понимаю. - Говорит она успокаивающим голосом. - Но ты должна мне довериться, если хочешь встретиться с ней.","next_id":6},{"branch_id":6,"text":"Она протягивает мне руку. Я медлю секунду, а затем касаюсь ее пальцев своими. Я чувствую холод и безжизненность от ее рук."},{"branch_id":6,"text":"Я смотрю в ее лицо и меня сковывает ужас. Серое пыльное лицо из параллельного мира смотрит на меня со страхом. Или это я чувствую страх. Я опускаю взгляд и чувствую стыд."},{"branch_id":6,"author":"voice","text":"Все в порядке. - Говорит голос рядом со мной. - Не стыдись себя."},{"branch_id":6,"text":"Я смотрю на расставленные на полу свечи. Рядом с ними лежит фотография, сделанная на старый пленочный фотоаппарат."},{"branch_id":6,"text":"","answers":[{"id":7,"text":"Смотреть фотографию","displayText":"Я беру фотографию в руки."}]},{"branch_id":7,"text":"На фотографии изображена молодая девушка в здании водного вокзала. Снимок был сделан примерно в начале нулевых, когда вокзал еще действовал. Девушка одета в бардовый свитер и серую юбку до колен. Темные волосы собраны в хвост. Она выглядит счастливой."},{"branch_id":7,"author":"player","text":"Слушай, мне кажется это все немного странным. Я не хочу тебя обидеть, но…"},{"branch_id":7,"author":"voice","text":"Я понимаю, что ты чувствуешь. Но ты сама хотела сюда прийти, я тебя не заставляла. Слушай, если хочешь уйти, лучше сделай это прямо сейчас."},{"branch_id":7,"text":"Я кладу лицо в ладони и делаю глубокий вдох."},{"branch_id":7,"author":"voice","text":"Помни, что ты потом можешь пожалеть, что так и не решилась."},{"branch_id":7,"text":"Это будет тяжело. Я не готова. Но я хочу этого и мне уже все равно, что со мной может случиться. Еще несколько секунд сомнений и я поднимаю взгляд на нее."},{"branch_id":7,"author":"player","text":"","answers":[{"id":8,"text":"Но мне холодно, я не могу так."},{"id":9,"text":"Ладно."}]},{"branch_id":8,"author":"voice","text":"Я знаю, но тебе придется справиться с этим, иначе никак. Все дело в ее присутствии. - Она берет в руки снимок. - Разве ты не чувствуешь? Посмотри на фотографию еще раз. Подумай о ней. Мы сейчас находимся на том же месте, пусть и прошло уже больше 15 лет.","next_id":10},{"branch_id":9,"author":"voice","text":"Хорошо. Посмотри на ее фотографию, подумай о ней. - Она протягивает мне снимок. - Чувствуешь ее присутствие? Мы сейчас находимся на том же месте, пусть и прошло уже больше 15 лет.","next_id":10},{"branch_id":10,"author":"player","text":"Я не совсем понимаю, что именно я должна ощутить."},{"branch_id":10,"author":"voice","text":"Не задавай вопросы, просто почувствуй сама. Откройся, позволь этому наполнить тебя. Наблюдай и не вмешивайся."},{"branch_id":10,"author":"player","text":"Ну…"},{"branch_id":10,"author":"voice","text":"Просто попробуй. Я не могу объяснить это словами."},{"branch_id":10,"text":"Хорошо. Что я чувствую сейчас?"},{"branch_id":10,"text":"","answers":[{"id":11,"text":"Я пытаюсь сконцентрироваться на своих ощущениях, но ничего, кроме холода почувствовать не могу."},{"id":11,"text":"Страх подавляет меня, я не могу сопротивляться."},{"id":12,"text":"Внутренняя боль дает мне силу и решимость. Я и правда пожалею, если остановлюсь сейчас."}]},{"branch_id":11,"author":"voice","text":"Не сопротивляйся ему, это бессмысленно."},{"branch_id":11,"author":"player","text":"Но что мне тогда делать? Он мне мешает…","next_id":12},{"branch_id":12,"author":"voice","text":"Тебе мешает одежда. Сними свою кофту. Твоя кожа должна быть открытой, чтобы ты могла чувствовать эту энергию телом."},{"branch_id":12,"author":"player","text":"Что? Ты точно сошла с ума."},{"branch_id":12,"author":"voice","text":"Нет, стой. - Она хватает меня за руку. Ее рука холодная как лед. - Поверь мне. Это кажется сложным и безумным поначалу. Но я обещаю тебе, все получится."},{"branch_id":12,"author":"player","text":"Я даже не понимаю, что ты от меня хочешь."},{"branch_id":12,"author":"voice","text":"Откройся этому опыту. Тебе не нужно ничего делать самой. Наблюдай и не сопротивляйся."},{"branch_id":12,"text":"Какой же ерундой я тут страдаю. Одна в здании заброшенного морского вокзала ночью. Мой мозг замерз так сильно, что я уже не могу рассуждать разумно. Но это даже к лучшему, потому что я хочу встретиться с ней, а это не разумно."},{"branch_id":12,"author":"player","text":"Ох, ну ладно. Черт."},{"branch_id":12,"text":"Я дрожу от холода. Ледяной ветер с моря не дает возможности даже подумать о тепле. Непослушными руками я расстегиваю пуговицы кофты и снимаю ее."},{"branch_id":12,"author":"voice","text":"Расслабься. Холод только в твоей голове. Дыши глубже. Закрой глаза. Думай о своем дыхании. Холод лишь в твоей голове. Сконцентрируйся и перестань дрожать усилием воли."},{"branch_id":12,"text":"Сначала я не понимаю, о чем она говорит. Но потом я действительно концентрируюсь на своем теле и заставляю себя не трястись. Это не так уж и трудно, если думать только об этом."},{"branch_id":12,"author":"player","text":"","answers":[{"id":13,"text":"Холод только в моей голове."}]},{"branch_id":13,"author":"voice","text":"Молодец! Ты молодец, слышишь! Она гордится тобой. - Слышу я взволнованный голос прямо над ухом. - Ты делаешь шаги ей навстречу."},{"branch_id":13,"text":"Но если все свои силы направить на то, чтобы не замечать холод, все остальное выходит из под контроля. И постепенно я чувствую приближение бури. На место дрожи приходят новые чувства."},{"branch_id":13,"text":"Я слышу ветер. Слышу волны. Звуки приглушаются, будто я под водой."},{"branch_id":13,"text":"На мою грудь кладут тяжелую каменную плиту. Она прижимает меня к земле."},{"branch_id":13,"author":"voice","text":"Расслабься, поддайся этому чувству. Она с тобой, она тебе поможет."},{"branch_id":13,"text":"Шум волн становится все ближе. Кажется, что море сейчас ворвется через окно в этот зал и затопит все."},{"branch_id":13,"author":"player","text":"Я не могу дышать."},{"branch_id":13,"author":"voice","text":"Можешь. Ты боишься воды, но зря. Ты можешь дышать даже под водой. Она могла, и ты можешь."},{"branch_id":13,"author":"player","text":"Мама…"},{"branch_id":13,"text":"Холодные слезы льются из моих глаз. Я чувствую их соленый вкус на губах. Мое тело сковывает, а голова становится тяжелой. Я не могу говорить и срываюсь на крик. Слезы льются рекой и заливают всю мою одежду холодной соленой водой. Шум волн заглушает мои крики."},{"branch_id":13,"text":"","answers":[{"id":14,"text":"Мои руки немеют, сердце бешено бьется. Спустя то ли мгновения, то ли вечность меня начинает трясти. Накатывает страх смерти."},{"id":14,"text":"В глазах темнота, сначала немеют руки, а затем все тело. Я медленно и мучительно куда-то падаю. Неважно, что будет дальше."}]},{"branch_id":14,"text":"Я думаю только о ней."},{"branch_id":14,"text":"Я открываю глаза, чтобы увидеть, как вода врывается в окна и заполняет зал."},{"branch_id":14,"text":"Но мне уже не страшно. Она могла дышать под водой, и я смогу."},{"branch_id":14,"author":"player","text":"Забери меня."},{"branch_id":14,"text":"Мне больше не холодно."},{"branch_id":14,"text":"..."},{"branch_id":14,"text":"Женщина на пирсе молча смотрит на меня. Ее серое безжизненное лицо выражает горечь и сожаление."},{"branch_id":14,"text":"Я чувствую себя немой. Мне так много хочется сказать, что сказать нечего."},{"branch_id":14,"author":"player","text":"Скажи что-нибудь. Скажи, что это была ошибка."},{"branch_id":14,"text":"Она молчит. Я не могу сдвинуться с места."},{"branch_id":14,"author":"player","text":"Мам…"},{"branch_id":14,"author":"mother","text":"Прости."},{"branch_id":14,"text":"В ее руках металлический шар. Он пристегнут к ноге."},{"branch_id":14,"author":"player","text":"Мам, нет!"},{"branch_id":14,"text":"Она качает головой."},{"branch_id":14,"author":"player","text":"Пожалуйста, мам! Я прощаю тебя, прощаю."},{"branch_id":14,"text":"Ужас сковывает меня. Я чувствую, что мир рушится."},{"branch_id":14,"text":"Она падает в воду. Вокзал позади меня падает в море. Все внутри меня падает в пропасть. Только я стою и не могу пошевелиться."},{"branch_id":14,"text":"..."},{"branch_id":14,"text":"Я лежу на полу заброшенного вокзала. Луна светит сквозь частично разрушенную крышу."},{"branch_id":14,"text":"Девушка со снимка улыбается мне."},{"branch_id":14,"author":"player","text":"Я тебя ненавижу."},{"branch_id":14,"author":"voice","text":"Ей плевать."},{"branch_id":14,"text":"."}]');

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;