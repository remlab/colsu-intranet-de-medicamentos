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
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import { PropertyPaneTextField, PropertyPaneDropdown, PropertyPaneToggle } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { clone } from '@microsoft/sp-lodash-subset';
import HeaderWelcome from './components/HeaderWelcome';
var HeaderWelcomeWebPart = /** @class */ (function (_super) {
    __extends(HeaderWelcomeWebPart, _super);
    function HeaderWelcomeWebPart() {
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
        _this.onSetImage = function (image) {
            _this.properties.image = image;
        };
        return _this;
    }
    HeaderWelcomeWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    HeaderWelcomeWebPart.prototype.render = function () {
        var element = React.createElement(HeaderWelcome, __assign({ propertyPane: this.context.propertyPane, inDesignMode: this.displayMode === DisplayMode.Edit, onSelectItem: this.onSelectItem, onDeleteItem: this.onDeleteItem, onDuplicateItem: this.onDuplicateItem, onSetImage: this.onSetImage, context: this.context, spHttpClient: this.context.spHttpClient, siteUrl: this.context.pageContext.web.absoluteUrl }, this.properties));
        ReactDom.render(element, this.domElement);
    };
    HeaderWelcomeWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(HeaderWelcomeWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HeaderWelcomeWebPart.prototype.getPropertyPaneConfiguration = function () {
        return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPane();
    };
    HeaderWelcomeWebPart.prototype.itemPanel = function () {
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
                                PropertyPaneTextField("items[" + this.selectedIndex + "].title", {
                                    label: "Título",
                                }),
                                PropertyPaneTextField("items[" + this.selectedIndex + "].link", {
                                    label: "Enlace"
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    HeaderWelcomeWebPart.prototype.mainPane = function () {
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
                                PropertyPaneDropdown("type", {
                                    label: "Estilo encabezado",
                                    options: [{
                                            key: "saludo",
                                            text: "Saludo",
                                        }, {
                                            key: "interna",
                                            text: "Interna página",
                                        }]
                                }),
                                PropertyPaneToggle("hideTitle", {
                                    label: "Ocultar título"
                                }),
                                PropertyFieldColorPicker("titleColor", {
                                    label: "Color título",
                                    selectedColor: this.properties.titleColor,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    disabled: false,
                                    isHidden: false,
                                    alphaSliderHidden: true,
                                    style: PropertyFieldColorPickerStyle.Inline,
                                    iconName: 'Precipitation',
                                    key: 'colorFieldId'
                                })
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
    return HeaderWelcomeWebPart;
}(BaseClientSideWebPart));
export default HeaderWelcomeWebPart;
//# sourceMappingURL=HeaderWelcomeWebPart.js.map