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
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldTermPicker } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';
import NoticiasDestacado from './components/NoticiasDestacado';
var NoticiasDestacadoWebPart = /** @class */ (function (_super) {
    __extends(NoticiasDestacadoWebPart, _super);
    function NoticiasDestacadoWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoticiasDestacadoWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    NoticiasDestacadoWebPart.prototype.render = function () {
        var element = React.createElement(NoticiasDestacado, __assign({ context: this.context, inDesignMode: this.displayMode === DisplayMode.Edit }, this.properties));
        ReactDom.render(element, this.domElement);
    };
    NoticiasDestacadoWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(NoticiasDestacadoWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    NoticiasDestacadoWebPart.prototype.getPropertyPaneConfiguration = function () {
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
                                    label: 'Seleccione una biblioteca de páginas',
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
                                PropertyFieldTermPicker("terms", {
                                    label: "Seleccione la categoría",
                                    panelTitle: "Seleccione la categoría",
                                    initialValues: this.properties.terms,
                                    allowMultipleSelections: false,
                                    excludeSystemGroup: true,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    context: this.context,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    // limitByGroupNameOrID: 'People',
                                    limitByTermsetNameOrID: 'Tags',
                                    key: 'termSetsPickerFieldId'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return NoticiasDestacadoWebPart;
}(BaseClientSideWebPart));
export default NoticiasDestacadoWebPart;
//# sourceMappingURL=NoticiasDestacadoWebPart.js.map