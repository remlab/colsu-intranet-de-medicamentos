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
import styles from './FormsSection.module.scss';
var FormsSection = /** @class */ (function (_super) {
    __extends(FormsSection, _super);
    function FormsSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormsSection.prototype.render = function () {
        var src = 'https://forms.office.com/Pages/ResponsePage.aspx?id=LECteWyuVkeuCWUfx6Tgq5Ob8rPICZxHlFo1kGKwE6pUMEZHUzBVTlVTVVA4QzZOMkpDUkdXRTRNMS4u&lang=es-ES&themecolor=0078d4&oembedsso=true&hostId=2678a516bd614b03b5b73695674ed0dd&origin=FormsWebPart&preview=true';
        return (React.createElement("div", { className: styles.formsSection },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { style: { display: 'flex', justifyContent: 'space-around', marginBottom: 70 } },
                        React.createElement("img", { style: { width: '100%', height: 105 }, src: "https://remagencia.com/media/colsubsidio/forms_head.png" })),
                    React.createElement("iframe", { className: styles.iframe, src: src })))));
    };
    return FormsSection;
}(React.Component));
export default FormsSection;
//# sourceMappingURL=FormsSection.js.map