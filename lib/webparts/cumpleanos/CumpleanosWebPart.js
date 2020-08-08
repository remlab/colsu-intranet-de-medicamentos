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
import * as moment from 'moment';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldDateTimePicker, DateConvention } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';
import Cumpleanos from './components/Cumpleanos';
var CumpleanosWebPart = /** @class */ (function (_super) {
    __extends(CumpleanosWebPart, _super);
    function CumpleanosWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSelectItem = function (item) {
            _this.properties.selectedItem = item;
        };
        _this.onSelectImage = function (imageUrl) {
            _this.properties.image = imageUrl;
        };
        return _this;
    }
    CumpleanosWebPart.prototype.onInit = function () {
        var _this = this;
        this.properties.selectedItem = null;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    CumpleanosWebPart.prototype.render = function () {
        var element = React.createElement(Cumpleanos, __assign({ context: this.context, inDesignMode: this.displayMode === DisplayMode.Edit, onSelectImage: this.onSelectImage, onSelectItem: this.onSelectItem }, this.properties));
        ReactDom.render(element, this.domElement);
    };
    CumpleanosWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(CumpleanosWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    CumpleanosWebPart.prototype.getPropertyPaneConfiguration = function () {
        return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPane();
    };
    CumpleanosWebPart.prototype.itemPanel = function () {
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
                                PropertyPaneTextField("selectedItem.Title", {
                                    label: "Título"
                                }),
                                PropertyPaneTextField("selectedItem.Cargo", {
                                    label: "Cargo"
                                }),
                                PropertyFieldDateTimePicker("Fecha", {
                                    label: "Fecha de cumpleaños",
                                    initialDate: {
                                        value: new Date(this.properties.selectedItem.Fecha),
                                        displayValue: moment(this.properties.selectedItem.Fecha).format('D MMM')
                                    },
                                    dateConvention: DateConvention.Date,
                                    onPropertyChange: function (propertyPath, oldValue, newValue) {
                                        _this.properties.selectedItem.Fecha = newValue.value.toISOString();
                                    },
                                    properties: this.properties.selectedItem,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'dateFieldId',
                                    showLabels: false
                                }),
                                PropertyPaneTextField("selectedItem.Yammer.Url", {
                                    label: "Yammer"
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    CumpleanosWebPart.prototype.mainPane = function () {
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
                        }
                    ]
                }
            ]
        };
    };
    return CumpleanosWebPart;
}(BaseClientSideWebPart));
export default CumpleanosWebPart;
//# sourceMappingURL=CumpleanosWebPart.js.map