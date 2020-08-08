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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { override } from '@microsoft/decorators';
import { BaseApplicationCustomizer, PlaceholderName, } from '@microsoft/sp-application-base';
import { Navigator } from './components';
var HeaderFooterApplicationCustomizer = /** @class */ (function (_super) {
    __extends(HeaderFooterApplicationCustomizer, _super);
    function HeaderFooterApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderFooterApplicationCustomizer.prototype._onDispose = function () { };
    HeaderFooterApplicationCustomizer.prototype._renderPlaceHolders = function () {
        if (!this._topPlaceholder) {
            this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this._onDispose });
            if (!this._topPlaceholder) {
                console.error("The expected placeholder (Top) was not found.");
                return;
            }
            var navigator_1 = React.createElement(Navigator, {});
            ReactDom.render(navigator_1, this._topPlaceholder.domElement);
        }
        // if (!this._bottomPlaceholder) {
        //   this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(
        //     PlaceholderName.Bottom,
        //     { onDispose: this._onDispose }
        //   );
        //   if (!this._bottomPlaceholder) {
        //     console.error("The expected placeholder (Top) was not found.");
        //     return;
        //   }
        //   const navigatorBottom: React.ReactElement<INavigatorProps> = React.createElement(NavigatorBottom, {});
        //   ReactDom.render(navigatorBottom, this._bottomPlaceholder.domElement);
        // }
    };
    HeaderFooterApplicationCustomizer.prototype.onInit = function () {
        this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
        return Promise.resolve();
    };
    __decorate([
        override
    ], HeaderFooterApplicationCustomizer.prototype, "onInit", null);
    return HeaderFooterApplicationCustomizer;
}(BaseApplicationCustomizer));
export default HeaderFooterApplicationCustomizer;
//# sourceMappingURL=HeaderFooterApplicationCustomizer.js.map