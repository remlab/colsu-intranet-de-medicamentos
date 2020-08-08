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
import { PropertyPaneTextField, PropertyPaneDropdown } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { clone } from '@microsoft/sp-lodash-subset';
import ExplorarAreas from './components/ExplorarAreas';
import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
var ExplorarAreasWebPart = /** @class */ (function (_super) {
    __extends(ExplorarAreasWebPart, _super);
    function ExplorarAreasWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectedIndex = 0;
        _this.onSelectItem = function (index) {
            _this.selectedIndex = index;
        };
        _this.onDuplicateItem = function (index) {
            var item = clone(_this.properties.items[index]);
            _this.properties.items.push(item);
            _this.render();
        };
        _this.onDeleteItem = function (index) {
            if (!window.confirm("Seguro que deseas eliminar \"" + index + "\"?")) {
                return;
            }
            _this.properties.items = _this.properties.items.filter(function (v, i) { return i !== index; });
            _this.selectedIndex = 0;
            _this.render();
        };
        return _this;
    }
    ExplorarAreasWebPart.prototype.render = function () {
        var element = React.createElement(ExplorarAreas, __assign({ propertyPane: this.context.propertyPane, inDesignMode: this.displayMode === DisplayMode.Edit, onSelectItem: this.onSelectItem, onDeleteItem: this.onDeleteItem, onDuplicateItem: this.onDuplicateItem }, this.properties));
        ReactDom.render(element, this.domElement);
    };
    ExplorarAreasWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(ExplorarAreasWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ExplorarAreasWebPart.prototype.getPropertyPaneConfiguration = function () {
        return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPane();
    };
    ExplorarAreasWebPart.prototype.itemPanel = function () {
        var _this = this;
        return {
            pages: [
                {
                    header: {
                        description: "Personalizar la configuración del item"
                    },
                    groups: [
                        {
                            groupName: "Elementos",
                            groupFields: [
                                PropertyFieldCodeEditor("items[" + this.selectedIndex + "].title", {
                                    label: 'Título',
                                    panelTitle: 'Título',
                                    initialValue: this.properties.items[this.selectedIndex].title,
                                    onPropertyChange: function (propertyPath, oldValue, newValue) { return _this.properties.items[_this.selectedIndex].title = newValue; },
                                    properties: this.properties,
                                    disabled: false,
                                    key: 'titleFieldId',
                                    language: PropertyFieldCodeEditorLanguages.HTML
                                }),
                                PropertyPaneTextField("items[" + this.selectedIndex + "].link", {
                                    label: "Enlace"
                                }),
                                PropertyPaneDropdown("items[" + this.selectedIndex + "].icon", {
                                    label: "Icono",
                                    options: [
                                        { key: "bottle", text: "Pastillas", },
                                        { key: "cart", text: "Carrito", },
                                        { key: "message", text: "Mensaje", },
                                        { key: "payroll", text: "Planilla", },
                                        { key: "human", text: "Gestión", },
                                        { key: "nurse", text: "Atención", },
                                        { key: "services", text: "Formula", },
                                        { key: "group", text: "Comunidad", },
                                    ]
                                }),
                                PropertyFieldColorPicker("color", {
                                    label: "Color",
                                    selectedColor: this.properties.items[this.selectedIndex].color,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    properties: this.properties.items[this.selectedIndex],
                                    disabled: false,
                                    isHidden: false,
                                    alphaSliderHidden: true,
                                    style: PropertyFieldColorPickerStyle.Inline,
                                    iconName: 'Precipitation',
                                    key: 'colorFieldId'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    ExplorarAreasWebPart.prototype.mainPane = function () {
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
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ExplorarAreasWebPart;
}(BaseClientSideWebPart));
export default ExplorarAreasWebPart;
//# sourceMappingURL=ExplorarAreasWebPart.js.map