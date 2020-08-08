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
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField, PropertyPaneDropdown } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { clone } from '@microsoft/sp-lodash-subset';
import DetalleIndicadorExperienciaUsuario from './components/DetalleIndicadorExperienciaUsuario';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
var DetalleIndicadorExperienciaUsuarioWebPart = /** @class */ (function (_super) {
    __extends(DetalleIndicadorExperienciaUsuarioWebPart, _super);
    function DetalleIndicadorExperienciaUsuarioWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectedIndex = 0;
        _this.onSelectItem = function (index) {
            _this.selectedIndex = index;
        };
        _this.onDuplicateItem = function (index) {
            var item = clone(_this.properties.indicadores[index]);
            _this.properties.indicadores.push(item);
            _this.render();
        };
        _this.onDeleteItem = function (index) {
            if (!window.confirm("Seguro que deseas eliminar \"" + index + "\"?")) {
                return;
            }
            _this.properties.indicadores = _this.properties.indicadores.filter(function (v, i) { return i !== index; });
            _this.selectedIndex = 0;
            _this.render();
        };
        _this.setImageIndicador = function (index, image) {
            _this.properties.indicadores[index].image = image;
        };
        return _this;
    }
    DetalleIndicadorExperienciaUsuarioWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    DetalleIndicadorExperienciaUsuarioWebPart.prototype.render = function () {
        var element = React.createElement(DetalleIndicadorExperienciaUsuario, __assign({ propertyPane: this.context.propertyPane, inDesignMode: this.displayMode === DisplayMode.Edit, context: this.context, setImageIndicador: this.setImageIndicador, onSelectItem: this.onSelectItem, onDeleteItem: this.onDeleteItem, onDuplicateItem: this.onDuplicateItem }, this.properties));
        ReactDom.render(element, this.domElement);
    };
    DetalleIndicadorExperienciaUsuarioWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(DetalleIndicadorExperienciaUsuarioWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    DetalleIndicadorExperienciaUsuarioWebPart.prototype.getPropertyPaneConfiguration = function () {
        return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPane();
    };
    DetalleIndicadorExperienciaUsuarioWebPart.prototype.itemPanel = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Personalizar la configuración del indicador"
                    },
                    groups: [{
                            groupName: "Elementos",
                            groupFields: [
                                PropertyPaneTextField("indicadores[" + this.selectedIndex + "].titulo", {
                                    label: "Título"
                                }),
                                PropertyPaneDropdown("indicadores[" + this.selectedIndex + "].icono", {
                                    label: "Icono",
                                    options: [
                                        { key: "Time", text: "Time", },
                                        { key: "Heart", text: "Heart", },
                                        { key: "Shop", text: "Shop", },
                                        { key: "Stats", text: "Stats", },
                                        { key: "Pills", text: "Pills", },
                                    ]
                                }),
                                PropertyPaneTextField("indicadores[" + this.selectedIndex + "].valor", {
                                    label: "Valor"
                                }),
                                PropertyFieldColorPicker("color", {
                                    label: "Color",
                                    selectedColor: this.properties.indicadores[this.selectedIndex].color,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties.indicadores[this.selectedIndex],
                                    disabled: false,
                                    isHidden: false,
                                    alphaSliderHidden: true,
                                    style: PropertyFieldColorPickerStyle.Inline,
                                    iconName: 'Precipitation',
                                    key: 'colorFieldId'
                                })
                            ]
                        }]
                }
            ]
        };
    };
    DetalleIndicadorExperienciaUsuarioWebPart.prototype.mainPane = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Personalizar la configuración"
                    },
                    groups: [
                        {
                            groupName: "General",
                            groupFields: [
                                PropertyPaneTextField("title", {
                                    label: "Título"
                                }),
                                PropertyPaneTextField("subtitle", {
                                    label: "Subtítulo"
                                }),
                                PropertyPaneDropdown("type", {
                                    label: "Tipo",
                                    options: [{
                                            key: "main",
                                            text: "Principal",
                                        }, {
                                            key: "secondary",
                                            text: "Secundario",
                                        }]
                                }),
                            ]
                        }, {
                            groupName: "Miga de pan",
                            groupFields: [
                                PropertyPaneTextField("breadcrumb.title", {
                                    label: "Título"
                                }),
                                PropertyPaneTextField("breadcrumb.link", {
                                    label: "Enlace"
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return DetalleIndicadorExperienciaUsuarioWebPart;
}(BaseClientSideWebPart));
export default DetalleIndicadorExperienciaUsuarioWebPart;
//# sourceMappingURL=DetalleIndicadorExperienciaUsuarioWebPart.js.map