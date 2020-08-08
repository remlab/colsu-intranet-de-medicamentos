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
import * as React from 'react';
import styles from './CanalesDomicilio.module.scss';
var CanalesDomicilio = /** @class */ (function (_super) {
    __extends(CanalesDomicilio, _super);
    function CanalesDomicilio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CanalesDomicilio.prototype.render = function () {
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, phone = _a.phone, whatsapp = _a.whatsapp, website = _a.website;
        return (React.createElement("div", { className: styles.section_deliveryChannels },
            React.createElement("div", { className: styles.section_deliveryChannels__header },
                React.createElement("h2", null,
                    title,
                    " ",
                    React.createElement("strong", null, subtitle))),
            React.createElement("div", { className: styles.section_deliveryChannels__content },
                React.createElement("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-comercial/SiteAssets/SitePages/canal-comercial/icon1.svg", alt: "" }),
                React.createElement("a", { href: "" }, phone)),
            React.createElement("div", { className: styles.section_deliveryChannels__content },
                React.createElement("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-comercial/SiteAssets/SitePages/canal-comercial/icon3.svg", alt: "" }),
                React.createElement("a", { href: "" }, whatsapp)),
            React.createElement("div", { className: styles.section_deliveryChannels__content },
                React.createElement("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-comercial/SiteAssets/SitePages/canal-comercial/icon4.svg", alt: "" }),
                React.createElement("a", { href: "" }, website))));
    };
    return CanalesDomicilio;
}(React.Component));
export default CanalesDomicilio;
//# sourceMappingURL=CanalesDomicilio.js.map