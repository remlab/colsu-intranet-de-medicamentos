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
import { PropertyPaneTextField, PropertyPaneToggle } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';
import { clone } from '@microsoft/sp-lodash-subset';
import MediosPago from './components/MediosPago';
var MediosPagoWebPart = /** @class */ (function (_super) {
    __extends(MediosPagoWebPart, _super);
    function MediosPagoWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectedIndex = 0;
        _this.onSelectItem = function (index) {
            _this.selectedIndex = index;
        };
        _this.onDuplicateItem = function (index) {
            var item = clone(_this.properties.paymentMethods[index]);
            _this.properties.paymentMethods.push(item);
            _this.render();
        };
        _this.onDeleteItem = function (index) {
            if (!window.confirm("Seguro que deseas eliminar \"" + index + "\"?")) {
                return;
            }
            _this.properties.paymentMethods = _this.properties.paymentMethods.filter(function (v, i) { return i !== index; });
            _this.selectedIndex = 0;
            _this.render();
        };
        return _this;
    }
    MediosPagoWebPart.prototype.render = function () {
        var element = React.createElement(MediosPago, __assign({ propertyPane: this.context.propertyPane, inDesignMode: this.displayMode === DisplayMode.Edit, onSelectItem: this.onSelectItem, onDeleteItem: this.onDeleteItem, onDuplicateItem: this.onDuplicateItem }, this.properties));
        ReactDom.render(element, this.domElement);
    };
    MediosPagoWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(MediosPagoWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    MediosPagoWebPart.prototype.getPropertyPaneConfiguration = function () {
        return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPane();
    };
    MediosPagoWebPart.prototype.itemPanel = function () {
        var _this = this;
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
                                PropertyFieldCodeEditor("paymentMethods[" + this.selectedIndex + "].title", {
                                    label: 'Título',
                                    panelTitle: 'Título',
                                    initialValue: this.properties.paymentMethods[this.selectedIndex].title,
                                    onPropertyChange: function (propertyPath, oldValue, newValue) { return _this.properties.paymentMethods[_this.selectedIndex].title = newValue; },
                                    properties: this.properties,
                                    disabled: false,
                                    key: 'titleFieldId',
                                    language: PropertyFieldCodeEditorLanguages.HTML
                                }),
                                PropertyFieldCodeEditor("paymentMethods[" + this.selectedIndex + "].subtitle", {
                                    label: 'Subtítulo',
                                    panelTitle: 'Subtítulo',
                                    initialValue: this.properties.paymentMethods[this.selectedIndex].subtitle,
                                    onPropertyChange: function (propertyPath, oldValue, newValue) { return _this.properties.paymentMethods[_this.selectedIndex].subtitle = newValue; },
                                    properties: this.properties,
                                    disabled: false,
                                    key: 'subtitleFieldId',
                                    language: PropertyFieldCodeEditorLanguages.HTML
                                }),
                                PropertyPaneTextField("paymentMethods[" + this.selectedIndex + "].link", {
                                    label: "Enlace"
                                }),
                                PropertyPaneTextField("paymentMethods[" + this.selectedIndex + "].image", {
                                    label: "URL Imagen"
                                }),
                                PropertyPaneToggle("paymentMethods[" + this.selectedIndex + "].applyAttention", {
                                    label: "Aplica restricciones"
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    MediosPagoWebPart.prototype.mainPane = function () {
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
                                }),
                                PropertyPaneTextField("subtitle", {
                                    label: "Subtítulo"
                                }),
                                PropertyFieldCodeEditor("footerText", {
                                    label: 'Texto restricciones',
                                    panelTitle: 'Texto restricciones',
                                    initialValue: this.properties.footerText,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    disabled: false,
                                    key: 'footerTextFieldId',
                                    language: PropertyFieldCodeEditorLanguages.HTML
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return MediosPagoWebPart;
}(BaseClientSideWebPart));
export default MediosPagoWebPart;
//# sourceMappingURL=MediosPagoWebPart.js.map