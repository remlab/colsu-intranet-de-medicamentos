var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import Footer from './components/Footer';
var FooterWebPart = /** @class */ (function (_super) {
    __extends(FooterWebPart, _super);
    function FooterWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterWebPart.prototype.render = function () {
        var element = React.createElement(Footer, {});
        ReactDom.render(element, this.domElement);
    };
    FooterWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(FooterWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    return FooterWebPart;
}(BaseClientSideWebPart));
export default FooterWebPart;
//# sourceMappingURL=FooterWebPart.js.map