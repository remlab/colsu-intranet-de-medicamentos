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
import { PropertyPaneTextField, PropertyPaneButton, } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldPeoplePicker, PrincipalType } from '@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker';
import Organigrama from './components/Organigrama';
var OrganigramaWebPart = /** @class */ (function (_super) {
    __extends(OrganigramaWebPart, _super);
    function OrganigramaWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSelectItem = function (item) {
            _this.properties.person = null;
            _this.properties.selectedItem = item;
        };
        return _this;
    }
    OrganigramaWebPart.prototype.render = function () {
        var element = React.createElement(Organigrama, __assign({ context: this.context, inDesignMode: this.displayMode === DisplayMode.Edit, onSelectItem: this.onSelectItem }, this.properties));
        ReactDom.render(element, this.domElement);
    };
    OrganigramaWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(OrganigramaWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    OrganigramaWebPart.prototype.getPropertyPaneConfiguration = function () {
        return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPanel();
    };
    OrganigramaWebPart.prototype.itemPanel = function () {
        var _this = this;
        return {
            pages: [{
                    header: {
                        description: "Personalizar la configuración general"
                    },
                    groups: [
                        {
                            groupName: "Selecciona",
                            groupFields: [
                                PropertyFieldPeoplePicker("person", {
                                    label: "Persona",
                                    initialData: [],
                                    allowDuplicate: false,
                                    multiSelect: false,
                                    principalType: [PrincipalType.Users],
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    context: this.context,
                                    properties: this.properties,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'peopleFieldId'
                                }),
                                PropertyPaneButton("copy", {
                                    text: "Copiar",
                                    icon: "Copy",
                                    onClick: function () {
                                        if (Array.isArray(_this.properties.person) && _this.properties.person.length > 0) {
                                            var persona = _this.properties.person[0];
                                            _this.properties.selectedItem.Title = persona.fullName;
                                            _this.properties.selectedItem.Cargo = persona.jobTitle;
                                            if (persona.imageUrl !== "")
                                                _this.properties.selectedItem.Picture = { Url: persona.imageUrl };
                                        }
                                    }
                                })
                            ]
                        },
                        {
                            groupName: "Elementos",
                            groupFields: [
                                PropertyPaneTextField("selectedItem.Title", {
                                    label: "Nombre"
                                }),
                                PropertyPaneTextField("selectedItem.Cargo", {
                                    label: "Cargo"
                                }),
                                PropertyPaneTextField("selectedItem.yammer.Url", {
                                    label: "Link Yammer"
                                }),
                                PropertyPaneTextField("selectedItem.Picture.Url", {
                                    label: "Foto URL"
                                }),
                            ]
                        }
                    ]
                }]
        };
    };
    OrganigramaWebPart.prototype.mainPanel = function () {
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
    return OrganigramaWebPart;
}(BaseClientSideWebPart));
export default OrganigramaWebPart;
//# sourceMappingURL=OrganigramaWebPart.js.map