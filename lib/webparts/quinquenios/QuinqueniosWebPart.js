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
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';
import { PropertyFieldNumericInput } from 'sp-client-custom-fields/lib/PropertyFieldNumericInput';
import Quinquenios from './components/Quinquenios';
var QuinqueniosWebPart = /** @class */ (function (_super) {
    __extends(QuinqueniosWebPart, _super);
    function QuinqueniosWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSelectItem = function (item) {
            _this.properties.selectedItem = item;
        };
        _this.onSelectSignImage = function (data) {
            _this.properties.sign.image = data;
        };
        return _this;
    }
    QuinqueniosWebPart.prototype.onInit = function () {
        var _this = this;
        this.properties.selectedItem = null;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    QuinqueniosWebPart.prototype.render = function () {
        var element = React.createElement(Quinquenios, __assign({ context: this.context, inDesignMode: this.displayMode === DisplayMode.Edit, onSelectSignImage: this.onSelectSignImage, onSelectItem: this.onSelectItem }, this.properties));
        ReactDom.render(element, this.domElement);
    };
    QuinqueniosWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(QuinqueniosWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    QuinqueniosWebPart.prototype.getPropertyPaneConfiguration = function () {
        return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPane();
    };
    QuinqueniosWebPart.prototype.itemPanel = function () {
        return {
            pages: [{
                    header: {
                        description: "Personalizar la configuración del item"
                    },
                    groups: [
                        {
                            groupName: "Elementos",
                            groupFields: [
                                PropertyPaneTextField("selectedItem.Title", {
                                    label: "Nombre"
                                }),
                                PropertyPaneTextField("selectedItem.Cargo", {
                                    label: "Cargo"
                                }),
                                PropertyFieldNumericInput("A_x00f1_os", {
                                    label: 'Años trabajando para Colsubsidio',
                                    initialValue: this.properties.selectedItem.A_x00f1_os,
                                    min: 0,
                                    max: 100,
                                    step: 1,
                                    precision: 0,
                                    size: 10,
                                    disabled: false,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    render: this.render.bind(this),
                                    disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                                    properties: this.properties.selectedItem,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'yearsFieldId'
                                }),
                                PropertyPaneTextField("selectedItem.Foto.Url", {
                                    label: "Foto"
                                }),
                                PropertyPaneTextField("selectedItem.Yammer.Url", {
                                    label: "Yammer"
                                })
                            ]
                        }
                    ]
                }]
        };
    };
    QuinqueniosWebPart.prototype.mainPane = function () {
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
                                PropertyFieldListPicker('list', {
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
                        }, {
                            groupName: "Textos encabezado",
                            groupFields: [
                                PropertyFieldCodeEditor("text1", {
                                    label: 'Texto 1',
                                    panelTitle: 'Texto 1',
                                    initialValue: this.properties.text1,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    properties: this.properties,
                                    disabled: false,
                                    key: 'text1FieldId',
                                    language: PropertyFieldCodeEditorLanguages.HTML
                                }),
                                PropertyFieldCodeEditor("text2", {
                                    label: 'Texto 2',
                                    panelTitle: 'Texto 2',
                                    initialValue: this.properties.text2,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    properties: this.properties,
                                    disabled: false,
                                    key: 'text2FieldId',
                                    language: PropertyFieldCodeEditorLanguages.HTML
                                }),
                            ]
                        }, {
                            groupName: "Firma pie de página",
                            groupFields: [
                                PropertyFieldCodeEditor("text", {
                                    label: 'Texto firma',
                                    panelTitle: 'Texto firma',
                                    initialValue: this.properties.sign.text,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    properties: this.properties.sign,
                                    disabled: false,
                                    key: 'text1FieldId',
                                    language: PropertyFieldCodeEditorLanguages.HTML
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return QuinqueniosWebPart;
}(BaseClientSideWebPart));
export default QuinqueniosWebPart;
//# sourceMappingURL=QuinqueniosWebPart.js.map