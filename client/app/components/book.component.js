"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var book_service_1 = require("../services/book.service");
var BookComponent = (function () {
    // constructor
    function BookComponent(bookService) {
        this.bookService = bookService;
        this.title = 'MEAN SPA with Angular Two';
        // call get as soon as component is instantiated
        this.getBooks();
    }
    // get all from our service (intead of subscribe function)
    BookComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().then(function (response) {
            _this.books = response;
        });
    };
    return BookComponent;
}());
BookComponent = __decorate([
    core_1.Component({
        selector: 'book',
        templateUrl: '../views/books.html',
        providers: [book_service_1.BookService],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookComponent);
exports.BookComponent = BookComponent;
