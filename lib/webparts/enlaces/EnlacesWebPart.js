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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { clone } from '@microsoft/sp-lodash-subset';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import Enlaces from './components/Enlaces';
var EnlacesWebPart = /** @class */ (function (_super) {
    __extends(EnlacesWebPart, _super);
    function EnlacesWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectedIndex = 0;
        _this.onSelectItem = function (index) {
            _this.selectedIndex = index;
        };
        _this.onDuplicateItem = function (index) {
            var item = clone(_this.properties.enlaces[index]);
            _this.properties.enlaces.push(item);
            _this.render();
        };
        _this.onDeleteItem = function (index) {
            if (!window.confirm("Seguro que deseas eliminar \"" + index + "\"?")) {
                return;
            }
            _this.properties.enlaces = _this.properties.enlaces.filter(function (v, i) { return i !== index; });
            _this.selectedIndex = 0;
            _this.render();
        };
        return _this;
    }
    EnlacesWebPart.prototype.render = function () {
        var element = React.createElement(Enlaces, __assign({ propertyPane: this.context.propertyPane, inDesignMode: this.displayMode === DisplayMode.Edit, onSelectItem: this.onSelectItem, onDeleteItem: this.onDeleteItem, onDuplicateItem: this.onDuplicateItem }, this.properties));
        ReactDom.render(element, this.domElement);
    };
    EnlacesWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(EnlacesWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    EnlacesWebPart.prototype.getPropertyPaneConfiguration = function () {
        return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPane();
    };
    EnlacesWebPart.prototype.itemPanel = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Personalizar la configuración general"
                    },
                    groups: [
                        {
                            groupName: "Elementos",
                            groupFields: [
                                PropertyPaneTextField("enlaces[" + this.selectedIndex + "].title", {
                                    label: "Título"
                                }),
                                PropertyPaneTextField("enlaces[" + this.selectedIndex + "].link", {
                                    label: "Enlace"
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    EnlacesWebPart.prototype.mainPane = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Personalizar la configuración general"
                    },
                    groups: [
                        {
                            groupName: "Elementos",
                            groupFields: [
                                PropertyPaneTextField("title", {
                                    label: "Título"
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return EnlacesWebPart;
}(BaseClientSideWebPart));
export default EnlacesWebPart;
//# sourceMappingURL=EnlacesWebPart.js.map