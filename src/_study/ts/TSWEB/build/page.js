/*
 * @Author: reason
 * @Date: 2020-10-07 11:40:36
 * @LastEditTime: 2020-10-07 14:04:17
 * @FilePath: /study-vue/src/_study/ts/TSWEB/src/components.ts
 * @Descripttion:
 */
// namespace Components {
// 子命名空间
// export namespace SubComponents {
//   export class Test {
define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Hader = void 0;
    //   }
    // }
    var Hader = /** @class */ (function () {
        function Hader() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
        return Hader;
    }());
    exports.Hader = Hader;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
// }
/*
 * @Author: reason
 * @Date: 2020-10-07 11:28:13
 * @LastEditTime: 2020-10-07 14:10:04
 * @FilePath: /study-vue/src/_study/ts/TSWEB/src/page.ts
 * @Descripttion:
 */
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*
    namespace Home {
      export class Page {
        constructor() {
          new Components.Hader()
          new Components.Content()
          new Components.Footer()
        }
      }
    }
    */
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Hader();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
