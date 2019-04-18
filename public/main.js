(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<title>Coming Soon 2</title><!--===============================================================================================-->\t\n\t<link rel=\"icon\" type=\"image/png\" href=\"/images/icons/favicon.ico\"/>\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor/bootstrap/css/bootstrap.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor/animate/animate.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/vendor/select2/select2.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css/util.css\">\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css/main.css\">\n<!--===============================================================================================-->\n</head>\n<body>\n\t\n\t<!--  -->\n\t<div class=\"simpleslide100\">\n\t\t<div class=\"simpleslide100-item bg-img1\" style=\"background-image: url('assets/images/bg01.jpg');\"></div>\n\t\t<div class=\"simpleslide100-item bg-img1\" style=\"background-image: url('assets/images/bg02.jpg');\"></div>\n\t\t<div class=\"simpleslide100-item bg-img1\" style=\"background-image: url('assets/images/bg03.jpg');\"></div>\n\t</div>\n\n\t<div class=\"size1 overlay1\">\n\t\t<!--  -->\n\t\t<div class=\"size1 flex-col-c-m p-l-15 p-r-15 p-t-50 p-b-50\">\n\t\t\t<h3 class=\"l1-txt1 txt-center p-b-25\">\n\t\t\t\tComing Soon\n\t\t\t</h3>\n\n\t\t\t<p class=\"m2-txt1 txt-center p-b-48\">\n\t\t\t\tOur website is under construction, follow us for update now!\n\t\t\t</p>\n\n\t\t\t<div class=\"flex-w flex-c-m cd100 p-b-33\">\n\t\t\t\t<div class=\"flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20\">\n\t\t\t\t\t<span class=\"l2-txt1 p-b-9 days\">35</span>\n\t\t\t\t\t<span class=\"s2-txt1\">Days</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20\">\n\t\t\t\t\t<span class=\"l2-txt1 p-b-9 hours\">17</span>\n\t\t\t\t\t<span class=\"s2-txt1\">Hours</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20\">\n\t\t\t\t\t<span class=\"l2-txt1 p-b-9 minutes\">50</span>\n\t\t\t\t\t<span class=\"s2-txt1\">Minutes</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20\">\n\t\t\t\t\t<span class=\"l2-txt1 p-b-9 seconds\">39</span>\n\t\t\t\t\t<span class=\"s2-txt1\">Seconds</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<form class=\"w-full flex-w flex-c-m validate-form\">\n\n\t\t\t\t<div class=\"wrap-input100 validate-input where1\" data-validate = \"Valid email is required: ex@abc.xyz\">\n\t\t\t\t\t<input class=\"input100 placeholder0 s2-txt2\" type=\"text\" name=\"email\" placeholder=\"Enter Email Address\">\n\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<button class=\"flex-c-m size3 s2-txt3 how-btn1 trans-04 where1\">\n\t\t\t\t\tSubscribe\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\n\n\n\t\n\n<!--===============================================================================================-->\t\n\t<script src=\"/vendor/jquery/jquery-3.2.1.min.js\"></script>\n<!--===============================================================================================-->\n\t<script src=\"/vendor/bootstrap/js/popper.js\"></script>\n\t<script src=\"/vendor/bootstrap/js/bootstrap.min.js\"></script>\n<!--===============================================================================================-->\n\t<script src=\"/vendor/select2/select2.min.js\"></script>\n<!--===============================================================================================-->\n\t<script src=\"/vendor/countdowntime/moment.min.js\"></script>\n\t<script src=\"/vendor/countdowntime/moment-timezone.min.js\"></script>\n\t<script src=\"/vendor/countdowntime/moment-timezone-with-data.min.js\"></script>\n\t<script src=\"/vendor/countdowntime/countdowntime.js\"></script>\n\t<script>\n\t\t$('.cd100').countdown100({\n\t\t\t/*Set Endtime here*/\n\t\t\t/*Endtime must be > current time*/\n\t\t\tendtimeYear: 0,\n\t\t\tendtimeMonth: 0,\n\t\t\tendtimeDate: 35,\n\t\t\tendtimeHours: 18,\n\t\t\tendtimeMinutes: 0,\n\t\t\tendtimeSeconds: 0,\n\t\t\ttimeZone: \"\" \n\t\t\t// ex:  timeZone: \"America/New_York\"\n\t\t\t//go to \" http://momentjs.com/timezone/ \" to get timezone\n\t\t});\n\t</script>\n<!--===============================================================================================-->\n\t<script src=\"vendor/tilt/tilt.jquery.min.js\"></script>\n\t<script >\n\t\t$('.js-tilt').tilt({\n\t\t\tscale: 1.1\n\t\t})\n\t</script>\n<!--===============================================================================================-->\n\t<script src=\"js/main.js\"></script>\n\n</body>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\mysurvey\mysurvey\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map