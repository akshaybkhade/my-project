(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-signup-login-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login-signup/components/login/login.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login-signup/components/login/login.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-container\">\n  <h2 class=\"form-title\">Login</h2>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">\n        <span class=\"username-form-icon\"></span>\n      </label>\n      <input type=\"text\" id=\"username\" placeholder=\"Username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">\n        <span class=\"password-form-icon\"></span>\n      </label>\n      <input type=\"text\" id=\"password\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"checkbox\" name=\"remember-me\" id=\"remember-me\" class=\"remember-me\">\n      <label for=\"remember-me\">\n        <!--        <span class=\"remember-me-icon\"></span>-->\n        Remember me\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login-signup/components/signup/signup.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login-signup/components/signup/signup.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-container\">\n  <h2 class=\"form-title\">Sign up</h2>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">\n        <span class=\"username-form-icon\"></span>\n      </label>\n      <input type=\"text\" id=\"name\" placeholder=\"Your Name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">\n        <span class=\"email-form-icon\"></span>\n      </label>\n      <input type=\"text\" id=\"email\" placeholder=\"Your Email\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">\n        <span class=\"password-form-icon\"></span>\n      </label>\n      <input type=\"text\" id=\"password\" placeholder=\"Password\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"confirm_password\">\n        <span class=\"confirm-password-form-icon\"></span>\n      </label>\n      <input type=\"text\" id=\"confirm_password\" placeholder=\"Repeat your Password\">\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"checkbox\" name=\"remember-me\" id=\"remember-me\" class=\"remember-me\">\n      <label for=\"remember-me\">\n        <!--        <span class=\"remember-me-icon\"></span>-->\n        I agree all statements in Terms of service\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login-signup/containers/login-signup-container/login-signup-container.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login-signup/containers/login-signup-container/login-signup-container.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-signup\">\n\n  <div class=\"container\">\n    <div class=\"content\">\n      <div class=\"row\" [ngStyle]=\"{ 'flex-direction': isLogin ? 'row-reverse' : 'row' }\">\n    <!--  <div class=\"row\" >-->\n        <div class=\"col-lg-6\">\n          <router-outlet></router-outlet>\n        </div>\n        <div class=\"col-lg-6\">\n\n          <div class=\"side-img\">\n            <img [src]=\"sideDetails['img']\" alt=\"\">\n            <a (click)=\"togglePage()\">{{sideDetails['linkTitle']}}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/modules/login-signup/components/login/login.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/login-signup/components/login/login.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-container {\n  width: 300px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n}\n.login-container .form-title {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  margin-bottom: 33px;\n  line-height: 1.66;\n  font-size: 36px;\n}\n.remember-me {\n  position: absolute;\n  opacity: 0;\n}\n.remember-me + label {\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n}\n.remember-me + label:before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border: 1px solid #a5a5a5;\n  display: inline-block;\n  border-radius: 2px;\n  background: white;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n.remember-me:checked + label:after {\n  content: \"\";\n  position: absolute;\n  transform: rotate(45deg);\n  height: 9px;\n  width: 5px;\n  border-bottom: 1px solid #000000;\n  border-right: 1px solid #000000;\n  left: 5px;\n  top: 5px;\n}\n.form-group {\n  font-size: 15px;\n  position: relative;\n  margin-bottom: 25px;\n}\n.form-group input[type=text] {\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #a5a5a5;\n  padding-left: 25px;\n}\n.form-group button[type=submit] {\n  padding: 12px 40px;\n}\n.form-group label {\n  position: relative;\n}\n.form-group label .username-form-icon:before {\n  content: \"\";\n  background-image: url('user-icon.svg');\n  background-size: 10px 20px;\n  position: absolute;\n  width: 10px;\n  height: 15px;\n  background-repeat: no-repeat;\n  top: -8px;\n}\n.form-group label .password-form-icon:before {\n  content: \"\";\n  background-image: url('password-icon.svg');\n  background-size: 10px 20px;\n  position: absolute;\n  width: 10px;\n  height: 15px;\n  background-repeat: no-repeat;\n  top: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BlcmVubmlhbC9Qcm9qZWN0cy9Qcm9qZWN0cy9Bbmd1bGFyL1Byb2plY3RzL3NhbXBsZS1wcm9qZWN0L3NyYy9hcHAvbW9kdWxlcy9sb2dpbi1zaWdudXAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9sb2dpbi1zaWdudXAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FER0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNESjtBREtFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0hKO0FET0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGO0FETUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE9FO0VBQ0Usa0JBQUE7QUNMSjtBRFFFO0VBQ0Usa0JBQUE7QUNOSjtBRFFJO0VBQ0UsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0FDTk47QURTSTtFQUNFLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpbi1zaWdudXAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAuZm9ybS10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjY7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICB9XG59XG5cbi5yZW1lbWJlci1tZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcblxuICAmICsgbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gICYgKyBsYWJlbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhNWE1YTU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbiAgLy8gQm94IGNoZWNrZWRcbiAgJjpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICBoZWlnaHQ6IDlweDtcbiAgICB3aWR0aDogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogNXB4O1xuICB9XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhNWE1YTU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICB9XG5cbiAgYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcbiAgICBwYWRkaW5nOiAxMnB4IDQwcHg7XG4gIH1cblxuICBsYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLnVzZXJuYW1lLWZvcm0taWNvbjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdXNlci1pY29uLnN2Z1wiKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAyMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgdG9wOiAtOHB4O1xuICAgIH1cblxuICAgIC5wYXNzd29yZC1mb3JtLWljb246YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3Bhc3N3b3JkLWljb24uc3ZnXCIpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDIwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB0b3A6IC04cHg7XG4gICAgfVxuICB9XG59XG4iLCIubG9naW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW4tY29udGFpbmVyIC5mb3JtLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAzM3B4O1xuICBsaW5lLWhlaWdodDogMS42NjtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4ucmVtZW1iZXItbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG59XG4ucmVtZW1iZXItbWUgKyBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xufVxuLnJlbWVtYmVyLW1lICsgbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E1YTVhNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5yZW1lbWJlci1tZTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgaGVpZ2h0OiA5cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTVhNWE1O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG4uZm9ybS1ncm91cCBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgcGFkZGluZzogMTJweCA0MHB4O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9ybS1ncm91cCBsYWJlbCAudXNlcm5hbWUtZm9ybS1pY29uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdXNlci1pY29uLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdG9wOiAtOHB4O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwgLnBhc3N3b3JkLWZvcm0taWNvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3Bhc3N3b3JkLWljb24uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0b3A6IC04cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/login-signup/components/login/login.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/login-signup/components/login/login.component.ts ***!
  \**************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login-signup/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/login-signup/components/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/login-signup/components/signup/signup.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/login-signup/components/signup/signup.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-container {\n  width: 300px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n}\n.login-container .form-title {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  margin-bottom: 33px;\n  line-height: 1.66;\n  font-size: 36px;\n}\n.remember-me {\n  position: absolute;\n  opacity: 0;\n}\n.remember-me + label {\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n}\n.remember-me + label:before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border: 1px solid #a5a5a5;\n  display: inline-block;\n  border-radius: 2px;\n  background: white;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n.remember-me:checked + label:after {\n  content: \"\";\n  position: absolute;\n  transform: rotate(45deg);\n  height: 9px;\n  width: 5px;\n  border-bottom: 1px solid #000000;\n  border-right: 1px solid #000000;\n  left: 5px;\n  top: 5px;\n}\n.form-group {\n  font-size: 15px;\n  position: relative;\n  margin-bottom: 25px;\n}\n.form-group input[type=text] {\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #a5a5a5;\n  padding-left: 25px;\n}\n.form-group button[type=submit] {\n  padding: 12px 40px;\n}\n.form-group label {\n  position: relative;\n}\n.form-group label .username-form-icon:before {\n  content: \"\";\n  background-image: url('user-icon.svg');\n  background-size: 10px 20px;\n  position: absolute;\n  width: 10px;\n  height: 15px;\n  background-repeat: no-repeat;\n  top: -8px;\n}\n.form-group label .email-form-icon:before {\n  content: \"\";\n  background-image: url('email-icon.svg');\n  background-size: 10px 20px;\n  position: absolute;\n  width: 10px;\n  height: 15px;\n  background-repeat: no-repeat;\n  top: -8px;\n}\n.form-group label .password-form-icon:before {\n  content: \"\";\n  background-image: url('password-icon.svg');\n  background-size: 10px 20px;\n  position: absolute;\n  width: 10px;\n  height: 15px;\n  background-repeat: no-repeat;\n  top: -8px;\n}\n.form-group label .confirm-password-form-icon:before {\n  content: \"\";\n  background-image: url('lock-icon.svg');\n  background-size: 10px 20px;\n  position: absolute;\n  width: 10px;\n  height: 15px;\n  background-repeat: no-repeat;\n  top: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BlcmVubmlhbC9Qcm9qZWN0cy9Qcm9qZWN0cy9Bbmd1bGFyL1Byb2plY3RzL3NhbXBsZS1wcm9qZWN0L3NyYy9hcHAvbW9kdWxlcy9sb2dpbi1zaWdudXAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2xvZ2luLXNpZ251cC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDQUY7QURFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNBSjtBREdFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDREo7QURLRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNISjtBRE9BO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRE9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDTEo7QURRRTtFQUNFLGtCQUFBO0FDTko7QURTRTtFQUNFLGtCQUFBO0FDUEo7QURTSTtFQUNFLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtBQ1BOO0FEVUk7RUFDRSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7QUNSTjtBRFdJO0VBQ0UsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0FDVE47QURZSTtFQUNFLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtBQ1ZOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpbi1zaWdudXAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC5mb3JtLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzNweDtcbiAgICBsaW5lLWhlaWdodDogMS42NjtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gIH1cbn1cblxuLnJlbWVtYmVyLW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuXG4gICYgKyBsYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgJiArIGxhYmVsOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E1YTVhNTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuICAvLyBCb3ggY2hlY2tlZFxuICAmOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIGhlaWdodDogOXB4O1xuICAgIHdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDAwMDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cbn1cblxuLmZvcm0tZ3JvdXAge1xuXG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG4gIGlucHV0W3R5cGU9J3RleHQnXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTVhNWE1O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgfVxuXG4gIGJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XG4gICAgcGFkZGluZzogMTJweCA0MHB4O1xuICB9XG5cbiAgbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC51c2VybmFtZS1mb3JtLWljb246YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3VzZXItaWNvbi5zdmdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMjBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIHRvcDogLThweDtcbiAgICB9XG5cbiAgICAuZW1haWwtZm9ybS1pY29uOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9lbWFpbC1pY29uLnN2Z1wiKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAyMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgdG9wOiAtOHB4O1xuICAgIH1cblxuICAgIC5wYXNzd29yZC1mb3JtLWljb246YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3Bhc3N3b3JkLWljb24uc3ZnXCIpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDIwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB0b3A6IC04cHg7XG4gICAgfVxuXG4gICAgLmNvbmZpcm0tcGFzc3dvcmQtZm9ybS1pY29uOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2NrLWljb24uc3ZnXCIpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDIwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB0b3A6IC04cHg7XG4gICAgfVxuICB9XG59XG4iLCIubG9naW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW4tY29udGFpbmVyIC5mb3JtLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAzM3B4O1xuICBsaW5lLWhlaWdodDogMS42NjtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4ucmVtZW1iZXItbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG59XG4ucmVtZW1iZXItbWUgKyBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xufVxuLnJlbWVtYmVyLW1lICsgbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E1YTVhNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5yZW1lbWJlci1tZTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgaGVpZ2h0OiA5cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTVhNWE1O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG4uZm9ybS1ncm91cCBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgcGFkZGluZzogMTJweCA0MHB4O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9ybS1ncm91cCBsYWJlbCAudXNlcm5hbWUtZm9ybS1pY29uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdXNlci1pY29uLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdG9wOiAtOHB4O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwgLmVtYWlsLWZvcm0taWNvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2VtYWlsLWljb24uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0b3A6IC04cHg7XG59XG4uZm9ybS1ncm91cCBsYWJlbCAucGFzc3dvcmQtZm9ybS1pY29uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGFzc3dvcmQtaWNvbi5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTBweCAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRvcDogLThweDtcbn1cbi5mb3JtLWdyb3VwIGxhYmVsIC5jb25maXJtLXBhc3N3b3JkLWZvcm0taWNvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2xvY2staWNvbi5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTBweCAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRvcDogLThweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/login-signup/components/signup/signup.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/login-signup/components/signup/signup.component.ts ***!
  \****************************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignupComponent = class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login-signup/components/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/modules/login-signup/components/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/modules/login-signup/containers/login-signup-container/login-signup-container.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/login-signup/containers/login-signup-container/login-signup-container.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-signup {\n  background: #f8f8f8;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n}\n.login-signup .container {\n  display: flex;\n  justify-content: center;\n}\n.login-signup .container .content {\n  width: 900px;\n  height: 600px;\n}\n.login-signup .container .content .row {\n  height: 100%;\n  flex-direction: row;\n  background: #ffffff;\n  border-radius: 25px;\n  box-shadow: 0px 0px 11px 0px #e4e4e4;\n}\n.login-signup .side-img {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  flex-direction: column;\n  display: flex;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BlcmVubmlhbC9Qcm9qZWN0cy9Qcm9qZWN0cy9Bbmd1bGFyL1Byb2plY3RzL3NhbXBsZS1wcm9qZWN0L3NyYy9hcHAvbW9kdWxlcy9sb2dpbi1zaWdudXAvY29udGFpbmVycy9sb2dpbi1zaWdudXAtY29udGFpbmVyL2xvZ2luLXNpZ251cC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbG9naW4tc2lnbnVwL2NvbnRhaW5lcnMvbG9naW4tc2lnbnVwLWNvbnRhaW5lci9sb2dpbi1zaWdudXAtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0FKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NOO0FEQ007RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUNDUjtBRElFO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4tc2lnbnVwL2NvbnRhaW5lcnMvbG9naW4tc2lnbnVwLWNvbnRhaW5lci9sb2dpbi1zaWdudXAtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXNpZ251cCB7XG5cbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5jb250ZW50IHtcbiAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgIGhlaWdodDogNjAwcHg7XG5cbiAgICAgIC5yb3cge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAwcHggI2U0ZTRlNDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2lkZS1pbWcge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCIubG9naW4tc2lnbnVwIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dpbi1zaWdudXAgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxvZ2luLXNpZ251cCAuY29udGFpbmVyIC5jb250ZW50IHtcbiAgd2lkdGg6IDkwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuLmxvZ2luLXNpZ251cCAuY29udGFpbmVyIC5jb250ZW50IC5yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAwcHggI2U0ZTRlNDtcbn1cbi5sb2dpbi1zaWdudXAgLnNpZGUtaW1nIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/login-signup/containers/login-signup-container/login-signup-container.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/login-signup/containers/login-signup-container/login-signup-container.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: LoginSignupContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignupContainerComponent", function() { return LoginSignupContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoginSignupContainerComponent = class LoginSignupContainerComponent {
    constructor(router) {
        this.router = router;
        this.isLogin = true;
    }
    ngOnInit() {
        this.sideDetails = {
            img: '../../../../../assets/img/signup-image.png',
            linkTitle: 'Create an account',
            linkAddress: '/signup'
        };
    }
    togglePage() {
        this.changeRoute();
        if (this.isLogin) {
            this.sideDetails = {
                img: '../../../../../assets/img/signin-image.png',
                linkTitle: 'I am already member',
                linkAddress: '/login'
            };
        }
        else {
            this.sideDetails = {
                img: '../../../../../assets/img/signup-image.png',
                linkTitle: 'Create an account',
                linkAddress: '/signup'
            };
        }
        this.isLogin = !this.isLogin;
    }
    changeRoute() {
        this.router.navigate([this.sideDetails.linkAddress]);
    }
};
LoginSignupContainerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginSignupContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-signup-container',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-signup-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login-signup/containers/login-signup-container/login-signup-container.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-signup-container.component.scss */ "./src/app/modules/login-signup/containers/login-signup-container/login-signup-container.component.scss")).default]
    })
], LoginSignupContainerComponent);



/***/ }),

/***/ "./src/app/modules/login-signup/login-signup-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/login-signup/login-signup-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LoginSignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignupRoutingModule", function() { return LoginSignupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers_login_signup_container_login_signup_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/login-signup-container/login-signup-container.component */ "./src/app/modules/login-signup/containers/login-signup-container/login-signup-container.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/modules/login-signup/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/modules/login-signup/components/signup/signup.component.ts");






const routes = [
    {
        path: '',
        component: _containers_login_signup_container_login_signup_container_component__WEBPACK_IMPORTED_MODULE_3__["LoginSignupContainerComponent"],
        children: [
            {
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            },
            {
                path: 'signup',
                component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
            },
            {
                path: '',
                redirectTo: 'login'
            }
        ]
    }
];
let LoginSignupRoutingModule = class LoginSignupRoutingModule {
};
LoginSignupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginSignupRoutingModule);



/***/ }),

/***/ "./src/app/modules/login-signup/login-signup.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/login-signup/login-signup.module.ts ***!
  \*************************************************************/
/*! exports provided: LoginSignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignupModule", function() { return LoginSignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_signup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-signup-routing.module */ "./src/app/modules/login-signup/login-signup-routing.module.ts");
/* harmony import */ var _containers_login_signup_container_login_signup_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/login-signup-container/login-signup-container.component */ "./src/app/modules/login-signup/containers/login-signup-container/login-signup-container.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/modules/login-signup/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/modules/login-signup/components/signup/signup.component.ts");







let LoginSignupModule = class LoginSignupModule {
};
LoginSignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_containers_login_signup_container_login_signup_container_component__WEBPACK_IMPORTED_MODULE_4__["LoginSignupContainerComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginSignupRoutingModule"]
        ]
    })
], LoginSignupModule);



/***/ })

}]);
//# sourceMappingURL=modules-login-signup-login-signup-module-es2015.js.map