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
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import CanalesDomicilio from './components/CanalesDomicilio';
var CanalesDomicilioWebPart = /** @class */ (function (_super) {
    __extends(CanalesDomicilioWebPart, _super);
    function CanalesDomicilioWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CanalesDomicilioWebPart.prototype.render = function () {
        var element = React.createElement(CanalesDomicilio, __assign({}, this.properties));
        ReactDom.render(element, this.domElement);
    };
    CanalesDomicilioWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(CanalesDomicilioWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    CanalesDomicilioWebPart.prototype.getPropertyPaneConfiguration = function () {
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
                                PropertyPaneTextField("phone", {
                                    label: "Teléfonos"
                                }),
                                PropertyPaneTextField("whatsapp", {
                                    label: "WhatsApp"
                                }),
                                PropertyPaneTextField("website", {
                                    label: "Website"
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return CanalesDomicilioWebPart;
}(BaseClientSideWebPart));
export default CanalesDomicilioWebPart;
//# sourceMappingURL=CanalesDomicilioWebPart.js.map