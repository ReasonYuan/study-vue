"use strict";
/*
 * @Author: reason
 * @Date: 2020-10-07 11:40:36
 * @LastEditTime: 2020-10-07 14:00:56
 * @FilePath: /study-vue/src/_study/ts/TSWEB/src/components.ts
 * @Descripttion:
 */
var Components;
(function (Components) {
    // 子命名空间
    var SubComponents;
    (function (SubComponents) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    var Hader = /** @class */ (function () {
        function Hader() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
        return Hader;
    }());
    Components.Hader = Hader;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
/*
 * @Author: reason
 * @Date: 2020-10-07 11:28:13
 * @LastEditTime: 2020-10-07 13:49:53
 * @FilePath: /study-vue/src/_study/ts/TSWEB/src/page.ts
 * @Descripttion:
 */
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Hader();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
