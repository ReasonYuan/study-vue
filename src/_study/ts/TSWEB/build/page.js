"use strict";
/*
 * @Author: reason
 * @Date: 2020-10-07 11:28:13
 * @LastEditTime: 2020-10-07 11:38:07
 * @FilePath: /study-vue/src/_study/ts/TSWEB/src/page.ts
 * @Descripttion:
 */
var Home;
(function (Home) {
    var Hader = /** @class */ (function () {
        function Hader() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
        return Hader;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Hader();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
