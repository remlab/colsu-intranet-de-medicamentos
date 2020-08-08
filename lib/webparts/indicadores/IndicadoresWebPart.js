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
import { PropertyPaneTextField, PropertyPaneDropdown, } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import Indicadores from './components/Indicadores';
var IndicadoresWebPart = /** @class */ (function (_super) {
    __extends(IndicadoresWebPart, _super);
    function IndicadoresWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSelectItem = function (item) {
            _this.properties.selectedItem = item;
        };
        return _this;
    }
    IndicadoresWebPart.prototype.render = function () {
        var element = React.createElement(Indicadores, __assign({ context: this.context, inDesignMode: this.displayMode === DisplayMode.Edit, onSelectItem: this.onSelectItem }, this.properties));
        ReactDom.render(element, this.domElement);
    };
    IndicadoresWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(IndicadoresWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    IndicadoresWebPart.prototype.getPropertyPaneConfiguration = function () {
        return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPane();
    };
    IndicadoresWebPart.prototype.mainPane = function () {
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
                                PropertyFieldListPicker("list", {
                                    label: 'Seleccione una lista',
                                    selectedList: this.properties.list,
                                    includeHidden: false,
                                    orderBy: PropertyFieldListPickerOrderBy.Title,
                                    disabled: false,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    properties: this.properties,
                                    context: this.context,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'listPickerFieldId'
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    IndicadoresWebPart.prototype.itemPanel = function () {
        return {
            pages: [{
                    header: {
                        description: "Personalizar la configuración general"
                    },
                    groups: [
                        {
                            groupName: "Selecciona",
                            groupFields: [
                                PropertyPaneTextField("selectedItem.Title", {
                                    label: "Título"
                                }),
                                PropertyPaneTextField("selectedItem.Valor", {
                                    label: "Valor"
                                }),
                                PropertyPaneDropdown("selectedItem.Formato", {
                                    label: "Formato",
                                    options: [{
                                            key: "MONEDA",
                                            text: "Moneda",
                                        }, {
                                            key: "PORCENTAJE",
                                            text: "Porcentaje",
                                        }]
                                }),
                            ]
                        }
                    ]
                }]
        };
    };
    return IndicadoresWebPart;
}(BaseClientSideWebPart));
export default IndicadoresWebPart;
//# sourceMappingURL=IndicadoresWebPart.js.map