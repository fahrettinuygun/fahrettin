(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");



class AppComponent {
    constructor() {
        this.title = 'fahrettin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
    } }, directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Shippori+Antique&display=swap\");\n@import url(\"//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Didact Gothic\", sans-serif !important;\n  font-family: \"Shippori Antique\", sans-serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWhyZXR0aW4vV29ya3MvZmFocmV0dGluL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0ZBQUE7QUFDQSxxRkFBQTtBQUVBLGdGQUFBO0FBRVI7RUFDSSxtREFBQTtFQUNBLHNEQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EaWRhY3QrR290aGljJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hpcHBvcmkrQW50aXF1ZSZkaXNwbGF5PXN3YXAnKTtcbi8vIEBpbXBvcnQgdXJsKCcvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL3R3aXR0ZXItYm9vdHN0cmFwLzIuMy4yL2Nzcy9ib290c3RyYXAtY29tYmluZWQubm8taWNvbnMubWluLmNzcycpO1xuQGltcG9ydCB1cmwoJy8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzMuMi4xL2Nzcy9mb250LWF3ZXNvbWUuY3NzJyk7XG5cbmJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnU2hpcHBvcmkgQW50aXF1ZScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGlkYWN0K0dvdGhpYyZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hpcHBvcmkrQW50aXF1ZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcIi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzMuMi4xL2Nzcy9mb250LWF3ZXNvbWUuY3NzXCIpO1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJTaGlwcG9yaSBBbnRpcXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _center_center_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./center/center.component */ "./src/app/center/center.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
        _center_center_component__WEBPACK_IMPORTED_MODULE_8__["CenterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                    _center_center_component__WEBPACK_IMPORTED_MODULE_8__["CenterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/center/center.component.ts":
/*!********************************************!*\
  !*** ./src/app/center/center.component.ts ***!
  \********************************************/
/*! exports provided: CenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterComponent", function() { return CenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function CenterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const box_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](box_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](box_r1.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](box_r1.description);
} }
class CenterComponent {
    constructor() {
        this.timeline = [
            {
                date: 1993,
                header: 'Doğum',
                description: "1993 yılının Eylül ayında soğuk bir çarşamba günü sabah saatlerinde Afyonkarahisar'ın Sandıklı ilçesinde dünyaya geldim",
            },
            {
                date: 2007,
                header: 'İlkokul Mezuniyet',
                description: "Antalya Altınova İlköğretim Okulu'ndan mezun oldum",
            },
            {
                date: 2011,
                header: 'Lise Mezuniyet',
                description: "Antalya Endüstri Meslek ve Teknik Lisesi Bilişim Teknolojileri alanından mezun oldum",
            },
            {
                date: 2012,
                header: 'Üniversite',
                description: "Selçuk Üniversitesi Teknoloji Fakültesi Bilgisayar Mühendisliği bölümüne kayıt oldum. İlk yıl zorunlu hazırlık okuduk.",
            },
            {
                date: 2017,
                header: 'Staj - ERS Yazılım',
                description: "Bölümün zorunlu yaz stajlarını birleştirerek otel rezervasyon sistemleri üzerine ürün geliştiren Antalya Teknokent firması olan ERS Yazılım'da tamamladım. Staj süresince React ile dinamik web sayfaları oluşturmak için geliştirilen Tübitak projesinde Test Uzmanı olarak görev aldım. Staj boyunca projede karşılaştığımız sorunları proje ekibine ve yöneticime raporladım.",
            },
            {
                date: 2018,
                header: 'İş Yeri Eğitimi - Talya Bilişim',
                description: "Son sınıfın bir dönemini İş Yeri Eğitimi adı altında intern olarak yine bir Antalya Teknokent şirketi olan ve otel yönetim sistemleri geliştiren Talya Bilişim'de çalıştım. Çalıştığım süre boyunca desktop uygulaması olan restoran yönetim modülünün web uygulamasına dönüştürülmesi projesinde görev aldım. Frontend'de HTML, CSS, KnockoutJS; backend'de .Net Web API; database olarak ise MSSQL kullanarak dönüşüm projesini tamamladık.",
            },
            {
                date: 2018,
                header: 'Üniversite Mezuniyet',
                description: "Selçuk Üniversitesi Teknoloji Fakültesi Bilgisayar Mühendisliği bölümünden mezun oldum",
            },
            {
                date: 2018,
                header: 'İşe Giriş - Talya Bilişim',
                description: "Daha önce İş Yeri Eğitimimi tamamladığım Talya Bilişim'de restoran yönetim modülünde Yazılım Uzmanı olarak işe başladım. Çalıştığım süre zarfında çeşitli projelerde HTML, CSS, Bootstrap, Material, Javascript, Angular, NodeJS, .NET Web API, MSSQL, React Native gibi teknolojilerle projeler geliştirdim.",
            },
            {
                date: 2019,
                header: 'İşe Giriş - ETSTUR',
                description: "Türkiye'nin en büyük tur şirketi olan ETSTUR'da ODAMAX ekibinde Frontend Developer olarak işe başladım. Çalıştığım süre boyunca HTML, CSS, Javascript, JQuery, JSP, JSF, Spring MVC, PostgreSQL, Elastic Search gibi teknolojilerle geliştirmeler yaptım."
            },
            {
                date: 2020,
                header: 'İşe Giriş - INTERTECH',
                description: "Bir Denizbank iştiraki olan ve 54 bankaya hizmet veren INTERTECH'te halen Uzman Yazılım Mühendisi olarak çalışmaktayım. Javascript, .NET, MSSQL, React, .NET Core vb. teknolojiler ve TFS, GIT, Jira, Jenkins, Kibana gibi araçları kullanıyoruz."
            }
        ];
    }
    ngOnInit() {
    }
}
CenterComponent.ɵfac = function CenterComponent_Factory(t) { return new (t || CenterComponent)(); };
CenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CenterComponent, selectors: [["app-center"]], decls: 3, vars: 1, consts: [[1, "content-container"], [1, "timeline"], ["class", "timebox", 4, "ngFor", "ngForOf"], [1, "timebox"], [1, "box"], [1, "line"], [1, "point"], [1, "info"], [1, "title"], [1, "date"], [1, "text"], [1, "description"]], template: function CenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CenterComponent_div_2_Template, 14, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeline);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@media screen and (min-width: 768px) {\n  .content-container[_ngcontent-%COMP%] {\n    background-color: #f5f5f5;\n    height: 70vh;\n    border-top: #424242 solid 5px;\n    overflow: scroll;\n  }\n}\n@media screen and (max-width: 768px) {\n  .content-container[_ngcontent-%COMP%] {\n    background-color: #f5f5f5;\n    border-top: #424242 solid 5px;\n    overflow: scroll;\n  }\n}\n.timeline[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 20px;\n  font-family: \"Shippori Antique\", sans-serif !important;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  border: 3px solid gainsboro;\n  border-radius: 8px;\n  padding: 10px;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  border-right: #424242 solid 5px;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #424242;\n  border-radius: 10px 0px 0px 10px;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: normal !important;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover {\n  display: flex;\n  border: 3px solid rgba(250, 190, 99, 0.801);\n  border-radius: 8px;\n  padding: 30px 15px;\n  background-color: rgba(255, 179, 66, 0.2);\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .line[_ngcontent-%COMP%] {\n  border-right: rgba(250, 190, 99, 0.801) solid 5px;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .line[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: rgba(250, 190, 99, 0.801);\n  border-radius: 10px 0px 0px 10px;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .info[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #fa9907;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.timeline[_ngcontent-%COMP%]   .timebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: medium;\n  color: #424242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWhyZXR0aW4vV29ya3MvZmFocmV0dGluL3NyYy9hcHAvY2VudGVyL2NlbnRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2VudGVyL2NlbnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsNkJBQUE7SUFDQSxnQkFBQTtFQ0FOO0FBQ0Y7QURHQTtFQUNJO0lBQ0kseUJBQUE7SUFDQSw2QkFBQTtJQUNBLGdCQUFBO0VDRE47QUFDRjtBRElBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBRUEsc0RBQUE7QUNISjtBRElJO0VBQ0ksa0JBQUE7QUNGUjtBREdRO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDRFo7QURFWTtFQUVJLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDRGhCO0FERWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FDQXBCO0FER1k7RUFDSSxrQkFBQTtBQ0RoQjtBREdvQjtFQUNJLGlCQUFBO0FDRHhCO0FEUW9CO0VBQ0ksOEJBQUE7QUNOeEI7QURXUTtFQUNJLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQ1RaO0FEVVk7RUFFSSxpREFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ1RoQjtBRFVnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQ0FBQTtBQ1JwQjtBRFdZO0VBQ0ksa0JBQUE7QUNUaEI7QURVZ0I7RUFDSSxjQUFBO0FDUnBCO0FEU29CO0VBQ0ksaUJBQUE7QUNQeEI7QURjb0I7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNaeEIiLCJmaWxlIjoic3JjL2FwcC9jZW50ZXIvY2VudGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XG4gICAgLmNvbnRlbnQtY29udGFpbmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBoZWlnaHQ6IDcwdmg7XG4gICAgICAgIGJvcmRlci10b3A6ICM0MjQyNDIgc29saWQgNXB4O1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIGJvcmRlci10b3A6ICM0MjQyNDIgc29saWQgNXB4O1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cbn1cblxuLnRpbWVsaW5leyBcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLy8gZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnU2hpcHBvcmkgQW50aXF1ZScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAudGltZWJveHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAuYm94e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGdhaW5zYm9ybztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAubGluZXtcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAjNDI0MjQyIHNvbGlkIDVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICAgICAgICAgICAgICAucG9pbnR7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbmZve1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIC5kYXRle1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRleHR7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb257XG4gICAgICAgICAgICAgICAgICAgIGg1e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ib3g6aG92ZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTAsIDE5MCwgOTksIDAuODAxKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMTVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNzksIDY2LCAwLjIpO1xuICAgICAgICAgICAgLmxpbmV7XG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogcmdiYSgyNTAsIDE5MCwgOTksIDAuODAxKSBzb2xpZCA1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgLnBvaW50e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMTkwLCA5OSwgMC44MDEpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5mb3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1MCwgMTUzLCA3KTtcbiAgICAgICAgICAgICAgICAgICAgLmRhdGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGV4dHtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcbiAgICAgICAgICAgICAgICAgICAgaDV7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6bWVkaXVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MjQyNDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIC5wb2ludC1jb250YWluZXIsLmpvYi1jb250YWluZXIsIC5kZXNjLWNvbnRhaW5lcntcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuLy8gfVxuLy8gLnBvaW50e1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4vLyAgICAgYm9yZGVyOiAjNDI0MjQyIDJweCBzb2xpZDtcbi8vICAgICBoZWlnaHQ6IDMwcHg7XG4vLyAgICAgd2lkdGg6IDMwcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogLTE4cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgcGFkZGluZzogM3B4O1xuLy8gICAgIGltZ3tcbi8vICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuLy8gICAgICAgICB3aWR0aDogYXV0bztcbi8vICAgICB9XG4vLyB9XG4vLyAuam9ie1xuLy8gICAgIG1hcmdpbi10b3A6IC05MHB4O1xuLy8gICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4vLyAgICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vICAgICB3aWR0aDogMTAwcHg7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIGNvbG9yOiAjNDI0MjQyO1xuLy8gfVxuLy8gLmRlc2N7XG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICB3aWR0aDogMTAwcHg7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIGNvbG9yOiAjNDI0MjQyO1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vIH0iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIGJvcmRlci10b3A6ICM0MjQyNDIgc29saWQgNXB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXItdG9wOiAjNDI0MjQyIHNvbGlkIDVweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG59XG4udGltZWxpbmUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJTaGlwcG9yaSBBbnRpcXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZSAudGltZWJveCB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi50aW1lbGluZSAudGltZWJveCAuYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAzcHggc29saWQgZ2FpbnNib3JvO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4udGltZWxpbmUgLnRpbWVib3ggLmJveCAubGluZSB7XG4gIGJvcmRlci1yaWdodDogIzQyNDI0MiBzb2xpZCA1cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuLnRpbWVsaW5lIC50aW1lYm94IC5ib3ggLmxpbmUgLnBvaW50IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG59XG4udGltZWxpbmUgLnRpbWVib3ggLmJveCAuaW5mbyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi50aW1lbGluZSAudGltZWJveCAuYm94IC5pbmZvIC50aXRsZSAuZGF0ZSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnRpbWVsaW5lIC50aW1lYm94IC5ib3ggLmluZm8gLmRlc2NyaXB0aW9uIGg1IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lIC50aW1lYm94IC5ib3g6aG92ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1MCwgMTkwLCA5OSwgMC44MDEpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDMwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE3OSwgNjYsIDAuMik7XG59XG4udGltZWxpbmUgLnRpbWVib3ggLmJveDpob3ZlciAubGluZSB7XG4gIGJvcmRlci1yaWdodDogcmdiYSgyNTAsIDE5MCwgOTksIDAuODAxKSBzb2xpZCA1cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuLnRpbWVsaW5lIC50aW1lYm94IC5ib3g6aG92ZXIgLmxpbmUgLnBvaW50IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDE5MCwgOTksIDAuODAxKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG59XG4udGltZWxpbmUgLnRpbWVib3ggLmJveDpob3ZlciAuaW5mbyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi50aW1lbGluZSAudGltZWJveCAuYm94OmhvdmVyIC5pbmZvIC50aXRsZSB7XG4gIGNvbG9yOiAjZmE5OTA3O1xufVxuLnRpbWVsaW5lIC50aW1lYm94IC5ib3g6aG92ZXIgLmluZm8gLnRpdGxlIC5kYXRlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4udGltZWxpbmUgLnRpbWVib3ggLmJveDpob3ZlciAuaW5mbyAuZGVzY3JpcHRpb24gaDUge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgY29sb3I6ICM0MjQyNDI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-center',
                templateUrl: './center.component.html',
                styleUrls: ['./center.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 55, vars: 0, consts: [[1, "content-container"], [1, "profile-photo"], [1, "timeline"], [1, "line"], [1, "job-container"], [1, "job"], [1, "point-container"], [1, "point"], ["src", "../../assets/icon/birtday.png"], ["src", "../../assets/icon/truck.png"], ["src", "../../assets/icon/school.png"], ["src", "../../assets/icon/job.png"], [1, "desc-container"], [1, "desc"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sand\u0131kl\u0131 Afyon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Antalya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Antalya Teknik Lisesi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sel\u00E7uk \u00DCniversitesi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Talya Bili\u015Fim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Etstur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0130stanbul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Intertech");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "22.09.1993");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "1997");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "2007-2011");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "2012-2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "06.2018-11.2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "11.2019-08.2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "08.2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "08.2020-null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".content-container[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  height: 70vh;\n  border-top: #424242 solid 5px;\n}\n\n.profile-photo[_ngcontent-%COMP%] {\n  display: flex;\n  border: 2px solid #424242;\n  border-radius: 100%;\n  height: 200px;\n  width: 200px;\n  background-position: center;\n  background-size: cover;\n  position: absolute;\n  margin-top: -100px;\n  margin-left: 15px;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  width: 100vw;\n  padding-top: 150px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #424242;\n  height: 5px;\n  border-radius: 5px;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-left: 10vw;\n  padding-right: 5vw;\n}\n\n.point-container[_ngcontent-%COMP%], .job-container[_ngcontent-%COMP%], .desc-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.point[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  border: #424242 2px solid;\n  height: 30px;\n  width: 30px;\n  margin-top: -18px;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px;\n}\n\n.point[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 25px;\n  width: auto;\n}\n\n.job[_ngcontent-%COMP%] {\n  margin-top: -90px;\n  transform: rotate(-45deg);\n  text-align: left;\n  width: 100px;\n  margin-left: 100px;\n  font-weight: bold;\n  color: #424242;\n}\n\n.desc[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100px;\n  text-align: center;\n  color: #424242;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWhyZXR0aW4vV29ya3MvZmFocmV0dGluL3NyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDS0o7O0FESkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ01SOztBREhBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgYm9yZGVyLXRvcDogIzQyNDI0MiBzb2xpZCA1cHg7XG59XG4ucHJvZmlsZS1waG90b3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0MjQyNDI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvZmFocmV0dGluLW9sZC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLnRpbWVsaW5le1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG4ubGluZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDV2dztcbn1cbi5wb2ludC1jb250YWluZXIsLmpvYi1jb250YWluZXIsIC5kZXNjLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLnBvaW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm9yZGVyOiAjNDI0MjQyIDJweCBzb2xpZDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogLTE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGltZ3tcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG59XG4uam9ie1xuICAgIG1hcmdpbi10b3A6IC05MHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNDI0MjQyO1xufVxuLmRlc2N7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn0iLCIuY29udGVudC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBoZWlnaHQ6IDcwdmg7XG4gIGJvcmRlci10b3A6ICM0MjQyNDIgc29saWQgNXB4O1xufVxuXG4ucHJvZmlsZS1waG90byB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0MjQyNDI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi50aW1lbGluZSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xufVxuXG4ubGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTB2dztcbiAgcGFkZGluZy1yaWdodDogNXZ3O1xufVxuXG4ucG9pbnQtY29udGFpbmVyLCAuam9iLWNvbnRhaW5lciwgLmRlc2MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5wb2ludCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlcjogIzQyNDI0MiAycHggc29saWQ7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4O1xufVxuLnBvaW50IGltZyB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5qb2Ige1xuICBtYXJnaW4tdG9wOiAtOTBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzQyNDI0Mjtcbn1cblxuLmRlc2Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0MjQyNDI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 22, vars: 0, consts: [[1, "footer-container"], [1, "social-accounts"], [1, "social-item"], ["href", "https://github.com/fahrettinuygun", "target", "_blank"], ["src", "../../assets/icon/github.png"], ["href", "https://www.linkedin.com/in/fahrettinuygun/", "target", "_blank"], ["src", "../../assets/icon/linkedin.png", 1, "linkedin"], ["href", "https://twitter.com/fahrettinuygun", "target", "_blank"], ["src", "../../assets/icon/twitter.png"], ["href", "https://www.youtube.com/channel/UCKT6_f74NJyMs1ZBN09LhMA", "target", "_blank"], ["src", "../../assets/icon/youtube.png"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "/fahrettinuygun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "/fahrettinuygun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "/fahrettinuygun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "/fahrettinuygun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media (min-width: 768px) {\n  .footer-container[_ngcontent-%COMP%] {\n    background-color: #424242;\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    font-family: \"Shippori Antique\", sans-serif !important;\n  }\n\n  .social-accounts[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    flex: 1;\n  }\n\n  .social-item[_ngcontent-%COMP%] {\n    background-color: #f5f5f5;\n    border-radius: 5px;\n    padding: 5px;\n  }\n  .social-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-decoration: none;\n  }\n  .social-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 20px;\n    max-width: 20px;\n    height: auto;\n    width: auto;\n  }\n  .social-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%] {\n    height: 15px !important;\n    padding-bottom: 3px;\n  }\n  .social-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #424242;\n  }\n}\n@media (max-width: 768px) {\n  .footer-container[_ngcontent-%COMP%] {\n    background-color: #424242;\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    font-family: \"Shippori Antique\", sans-serif !important;\n    padding: 10px 0px;\n  }\n\n  .social-accounts[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 40% 40%;\n    grid-template-rows: 50% 50%;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    flex: 1;\n  }\n\n  .social-item[_ngcontent-%COMP%] {\n    background-color: #f5f5f5;\n    border-radius: 5px;\n    padding: 5px;\n    margin-bottom: 3px;\n    font-size: small;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .social-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-decoration: none;\n  }\n  .social-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 20px;\n    max-width: 20px;\n    height: auto;\n    width: auto;\n  }\n  .social-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%] {\n    height: 15px !important;\n    padding-bottom: 3px;\n  }\n  .social-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #424242;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWhyZXR0aW4vV29ya3MvZmFocmV0dGluL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBRUEsc0RBQUE7RUNETjs7RURHRTtJQUNJLGFBQUE7SUFDQSw2QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLE9BQUE7RUNBTjs7RURFRTtJQUNJLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VDQ047RURBTTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0EscUJBQUE7RUNFVjtFRERVO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUNHZDtFRERVO0lBQ0ksdUJBQUE7SUFDQSxtQkFBQTtFQ0dkO0VERFU7SUFDSSxjQUFBO0VDR2Q7QUFDRjtBRENBO0VBQ0k7SUFDSSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxzREFBQTtJQUNBLGlCQUFBO0VDQ047O0VEQ0U7SUFDSSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSwyQkFBQTtJQUNBLDZCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsT0FBQTtFQ0VOOztFREFFO0lBQ0kseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUNHTjtFREZNO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtFQ0lWO0VESFU7SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ0tkO0VESFU7SUFDSSx1QkFBQTtJQUNBLG1CQUFBO0VDS2Q7RURIVTtJQUNJLGNBQUE7RUNLZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcbiAgICAuZm9vdGVyLWNvbnRhaW5lcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvLyBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2hpcHBvcmkgQW50aXF1ZScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNvY2lhbC1hY2NvdW50c3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbiAgICAuc29jaWFsLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBhe1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtlZGlue1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MjQyNDJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5mb290ZXItY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogXCJTaGlwcG9yaSBBbnRpcXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgfVxuICAgIC5zb2NpYWwtYWNjb3VudHN7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuICAgIC5zb2NpYWwtaXRlbXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGF7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua2VkaW57XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4IWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQyNDI0MlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb290ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiU2hpcHBvcmkgQW50aXF1ZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc29jaWFsLWFjY291bnRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5zb2NpYWwtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIC5zb2NpYWwtaXRlbSBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAuc29jaWFsLWl0ZW0gYSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAuc29jaWFsLWl0ZW0gYSAubGlua2VkaW4ge1xuICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIH1cbiAgLnNvY2lhbC1pdGVtIGEgc3BhbiB7XG4gICAgY29sb3I6ICM0MjQyNDI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIlNoaXBwb3JpIEFudGlxdWVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICB9XG5cbiAgLnNvY2lhbC1hY2NvdW50cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA0MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5zb2NpYWwtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc29jaWFsLWl0ZW0gYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLnNvY2lhbC1pdGVtIGEgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xuICAgIG1heC13aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLnNvY2lhbC1pdGVtIGEgLmxpbmtlZGluIHtcbiAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICB9XG4gIC5zb2NpYWwtaXRlbSBhIHNwYW4ge1xuICAgIGNvbG9yOiAjNDI0MjQyO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    changeTheme() {
        let elements = document.getElementsByClassName('content-container');
        if (elements && elements.length > 0) {
            let color = elements[0].getAttribute('style');
            if (color && color.indexOf('#424242') > -1) {
                elements[0].setAttribute('style', 'background-color: #f5f5f5');
            }
            else {
                elements[0].setAttribute('style', 'background-color: #424242');
            }
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 0, consts: [[1, "header-container"], [1, "blur"], [1, "profile-photo"], [1, "contact"], [1, "name"], [1, "phone"], [1, "email"], [1, "theme", 3, "click"], [1, "icon-adjust"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FAHRETT\u0130N UYGUN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0543 219 11 03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "fufahrettinuygun@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_11_listener() { return ctx.changeTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header-container[_ngcontent-%COMP%] {\n  background-color: #424242;\n  background-image: url('header-bg-4.jpeg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  flex: 1;\n  height: 20vh;\n  display: flex;\n  align-items: flex-end;\n}\n\n@media (max-width: 768px) {\n  .profile-photo[_ngcontent-%COMP%] {\n    display: flex;\n    border: 2px solid #424242;\n    border-radius: 100%;\n    height: 100px;\n    width: 100px;\n    background-image: url('fahrettin.jpeg');\n    background-position: center;\n    background-size: cover;\n    position: relative;\n    margin-left: 15px;\n    bottom: -30px;\n  }\n\n  .contact[_ngcontent-%COMP%] {\n    z-index: 9;\n    margin-left: 20px;\n    margin-bottom: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .contact[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    color: #f5f5f5b2;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .contact[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n\n  .name[_ngcontent-%COMP%] {\n    color: #f5f5f5;\n    padding: 0px;\n    margin: 0px;\n    font-size: medium;\n    font-family: \"Shippori Antique\", sans-serif !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .contact[_ngcontent-%COMP%] {\n    z-index: 9;\n    margin-left: 20px;\n    margin-bottom: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .contact[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    color: #f5f5f5b2;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  }\n  .contact[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n\n  .profile-photo[_ngcontent-%COMP%] {\n    display: flex;\n    border: 2px solid #424242;\n    border-radius: 100%;\n    height: 200px;\n    width: 200px;\n    background-image: url('fahrettin.jpeg');\n    background-position: center;\n    background-size: cover;\n    position: relative;\n    margin-left: 15px;\n    bottom: -30px;\n  }\n\n  .name[_ngcontent-%COMP%] {\n    color: #f5f5f5;\n    padding: 0px;\n    margin: 0px;\n    font-family: \"Shippori Antique\", sans-serif !important;\n  }\n}\n\n.blur[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\n.theme[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n  z-index: 9;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWhyZXR0aW4vV29ya3MvZmFocmV0dGluL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EsdUNBQUE7SUFDQSwyQkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUNDTjs7RURDRTtJQUNJLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQ0VOO0VERE07SUFDSSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQ0dWO0VERlU7SUFDSSxrQkFBQTtFQ0lkOztFREFFO0lBQ0ksY0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxzREFBQTtFQ0dOO0FBQ0Y7O0FEREE7RUFDSTtJQUNJLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQ0dOO0VERk07SUFDSSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7RUNJVjtFREhVO0lBQ0ksa0JBQUE7RUNLZDs7RURERTtJQUNJLGFBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSx1Q0FBQTtJQUNBLDJCQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQ0lOOztFREZFO0lBQ0ksY0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0Esc0RBQUE7RUNLTjtBQUNGOztBREhBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2hlYWRlci1iZy00LmpwZWcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5wcm9maWxlLXBob3Rve1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNDI0MjQyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9mYWhyZXR0aW4uanBlZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgfVxuICAgIC5jb250YWN0e1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgY29sb3I6ICNmNWY1ZjViMjsgICAgXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC5waG9uZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5hbWV7XG4gICAgICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU2hpcHBvcmkgQW50aXF1ZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcbiAgICAuY29udGFjdHtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIGNvbG9yOiAjZjVmNWY1YjI7ICAgIFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgLnBob25le1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJvZmlsZS1waG90b3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzQyNDI0MjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvZmFocmV0dGluLmpwZWcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICBib3R0b206IC0zMHB4O1xuICAgIH1cbiAgICAubmFtZXsgICAgXG4gICAgICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1NoaXBwb3JpIEFudGlxdWUnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmJsdXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLDAuMyk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi50aGVtZXtcbiAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgICB6LWluZGV4OiA5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufSIsIi5oZWFkZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9oZWFkZXItYmctNC5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMjB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2ZpbGUtcGhvdG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzQyNDI0MjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvZmFocmV0dGluLmpwZWdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGJvdHRvbTogLTMwcHg7XG4gIH1cblxuICAuY29udGFjdCB7XG4gICAgei1pbmRleDogOTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhY3QgZGl2IHtcbiAgICBjb2xvcjogI2Y1ZjVmNWIyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jb250YWN0IGRpdiAucGhvbmUge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5uYW1lIHtcbiAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgZm9udC1mYW1pbHk6IFwiU2hpcHBvcmkgQW50aXF1ZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFjdCB7XG4gICAgei1pbmRleDogOTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhY3QgZGl2IHtcbiAgICBjb2xvcjogI2Y1ZjVmNWIyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5jb250YWN0IGRpdiAucGhvbmUge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5wcm9maWxlLXBob3RvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0MjQyNDI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2ZhaHJldHRpbi5qcGVnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBib3R0b206IC0zMHB4O1xuICB9XG5cbiAgLm5hbWUge1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LWZhbWlseTogXCJTaGlwcG9yaSBBbnRpcXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgfVxufVxuLmJsdXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRoZW1lIHtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _center_center_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../center/center.component */ "./src/app/center/center.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");





class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 4, vars: 0, consts: [[1, "main-container"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _center_center_component__WEBPACK_IMPORTED_MODULE_2__["CenterComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: space-between;\n}\n\n@media screen and (max-width: 768) {\n  .main-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    justify-content: space-between;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWhyZXR0aW4vV29ya3MvZmFocmV0dGluL3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURDQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsZUFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7ICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4KSB7XG4gICAgLm1haW4tY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG59IiwiLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fahrettin/Works/fahrettin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map