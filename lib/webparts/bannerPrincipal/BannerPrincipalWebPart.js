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
import { PropertyPaneToggle, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// import { PropertyFieldSPListPicker, PropertyFieldSPListPickerOrderBy } from 'sp-client-custom-fields/lib/PropertyFieldSPListPicker';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldNumericInput } from 'sp-client-custom-fields/lib/PropertyFieldNumericInput';
import BannerPrincipal from './components/BannerPrincipal';
var BannerPrincipalWebPart = /** @class */ (function (_super) {
    __extends(BannerPrincipalWebPart, _super);
    function BannerPrincipalWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSelectItem = function (item) {
            _this.properties.selectedItem = item;
        };
        return _this;
    }
    BannerPrincipalWebPart.prototype.onInit = function () {
        var _this = this;
        this.properties.selectedItem = null;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    BannerPrincipalWebPart.prototype.render = function () {
        var element = React.createElement(BannerPrincipal, __assign({ context: this.context, inDesignMode: this.displayMode === DisplayMode.Edit, onSelectItem: this.onSelectItem }, this.properties));
        ReactDom.render(element, this.domElement);
    };
    BannerPrincipalWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(BannerPrincipalWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    BannerPrincipalWebPart.prototype.getPropertyPaneConfiguration = function () {
        return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPane();
    };
    BannerPrincipalWebPart.prototype.itemPanel = function () {
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
                                PropertyPaneTextField("selectedItem.Title", {
                                    label: "Título"
                                }),
                                PropertyPaneTextField("selectedItem.Subt_x00ed_tulo", {
                                    label: "Subtítulo"
                                }),
                                PropertyPaneTextField("selectedItem.Resumen", {
                                    label: "Resumen",
                                    multiline: true,
                                }),
                                PropertyPaneToggle("selectedItem.TarjetaActiva", {
                                    label: "Tarjeta Activa"
                                }),
                                PropertyPaneTextField("selectedItem.Enlace.Url", {
                                    label: "Link"
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    BannerPrincipalWebPart.prototype.mainPane = function () {
        var titleSubtitle = [
            PropertyPaneTextField("title", {
                label: "Título"
            }),
            PropertyPaneTextField("subtitle", {
                label: "Subtítulo"
            })
        ];
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
                                PropertyFieldNumericInput("slides", {
                                    label: 'Número máximo de slides',
                                    initialValue: this.properties.slides,
                                    min: 0,
                                    max: 10,
                                    step: 1,
                                    precision: 0,
                                    size: 10,
                                    disabled: false,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    render: this.render.bind(this),
                                    disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                                    properties: this.properties,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'slidesFieldId'
                                }),
                                PropertyPaneToggle("hasTitle", {
                                    label: "Mostrar titulo / subtítulo"
                                })
                            ].concat((this.properties.hasTitle) ? titleSubtitle : [])
                        }
                    ]
                }
            ]
        };
    };
    return BannerPrincipalWebPart;
}(BaseClientSideWebPart));
export default BannerPrincipalWebPart;
//# sourceMappingURL=BannerPrincipalWebPart.js.map