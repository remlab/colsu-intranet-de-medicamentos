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
import { PropertyPaneTextField, } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { clone } from '@microsoft/sp-lodash-subset';
import IndicadoresExperienciaUsuario from './components/IndicadoresExperienciaUsuario';
var IndicadoresExperienciaUsuarioWebPart = /** @class */ (function (_super) {
    __extends(IndicadoresExperienciaUsuarioWebPart, _super);
    function IndicadoresExperienciaUsuarioWebPart() {
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
        return _this;
    }
    IndicadoresExperienciaUsuarioWebPart.prototype.render = function () {
        var element = React.createElement(IndicadoresExperienciaUsuario, __assign({ propertyPane: this.context.propertyPane, inDesignMode: this.displayMode === DisplayMode.Edit, onSelectItem: this.onSelectItem, onDeleteItem: this.onDeleteItem, onDuplicateItem: this.onDuplicateItem }, this.properties));
        ReactDom.render(element, this.domElement);
    };
    IndicadoresExperienciaUsuarioWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(IndicadoresExperienciaUsuarioWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    IndicadoresExperienciaUsuarioWebPart.prototype.getPropertyPaneConfiguration = function () {
        return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPane();
    };
    IndicadoresExperienciaUsuarioWebPart.prototype.itemPanel = function () {
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
                                PropertyPaneTextField("indicadores[" + this.selectedIndex + "].valor", {
                                    label: "Valor"
                                }),
                                PropertyPaneTextField("indicadores[" + this.selectedIndex + "].enlace", {
                                    label: "Enlace"
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
                        }, {
                            groupName: "Opción A",
                            groupFields: [
                                PropertyPaneTextField("indicadores[" + this.selectedIndex + "].opcionA.titulo", {
                                    label: "Título"
                                }),
                                PropertyPaneTextField("indicadores[" + this.selectedIndex + "].opcionA.valor", {
                                    label: "Valor"
                                }),
                            ]
                        }, {
                            groupName: "Opción B",
                            groupFields: [
                                PropertyPaneTextField("indicadores[" + this.selectedIndex + "].opcionB.titulo", {
                                    label: "Título"
                                }),
                                PropertyPaneTextField("indicadores[" + this.selectedIndex + "].opcionB.valor", {
                                    label: "Valor"
                                }),
                            ]
                        }]
                }
            ]
        };
    };
    IndicadoresExperienciaUsuarioWebPart.prototype.mainPane = function () {
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
    return IndicadoresExperienciaUsuarioWebPart;
}(BaseClientSideWebPart));
export default IndicadoresExperienciaUsuarioWebPart;
//# sourceMappingURL=IndicadoresExperienciaUsuarioWebPart.js.map