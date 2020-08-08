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
import styles from './Navigator.module.scss';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
var Navigator = /** @class */ (function (_super) {
    __extends(Navigator, _super);
    function Navigator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigator.prototype.render = function () {
        return (React.createElement("div", { className: styles.app },
            React.createElement("div", { className: styles.top },
                React.createElement("div", { className: styles.section_header },
                    React.createElement("div", { className: styles.header },
                        React.createElement("a", { href: "/sites/IntranetdeMedicamentos" },
                            React.createElement("img", { className: styles.header__logo, src: "http://aremlab.com/media/colsubsidio/institucional/header/logo_colsub.png", alt: "" })),
                        React.createElement("ul", { className: styles.header__nav },
                            React.createElement("li", null,
                                React.createElement("a", { href: "http://windtiintrane01/isolucion/", target: "_blank" },
                                    React.createElement("img", { src: "http://aremlab.com/media/colsubsidio/institucional/header/link1.svg", alt: "" }))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/ServiciosCompartidosV2.aspx", target: "_blank" },
                                    React.createElement("img", { src: "http://aremlab.com/media/colsubsidio/institucional/header/link2.svg", alt: "" }))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/convocatorias-internas.aspx", target: "_blank" },
                                    React.createElement("img", { src: "http://aremlab.com/media/colsubsidio/institucional/header/link3.svg", alt: "" })))),
                        React.createElement("div", { className: styles.hamburguer },
                            " ",
                            React.createElement(Icon, { style: { color: 'white', fontSize: 25, marginRight: '1rem' }, iconName: "CollapseMenu" }),
                            " ")),
                    React.createElement("div", { className: styles.headerMobile },
                        React.createElement("ul", { className: styles.header__nav },
                            React.createElement("li", null,
                                React.createElement("a", { href: "http://windtiintrane01/isolucion/", target: "_blank" },
                                    React.createElement("img", { src: "http://aremlab.com/media/colsubsidio/institucional/header/link1.svg", alt: "" }))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/ServiciosCompartidosV2.aspx", target: "_blank" },
                                    React.createElement("img", { src: "http://aremlab.com/media/colsubsidio/institucional/header/link2.svg", alt: "" }))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/convocatorias-internas.aspx", target: "_blank" },
                                    React.createElement("img", { src: "http://aremlab.com/media/colsubsidio/institucional/header/link3.svg", alt: "" })))))))));
    };
    return Navigator;
}(React.Component));
export { Navigator };
var NavigatorBottom = /** @class */ (function (_super) {
    __extends(NavigatorBottom, _super);
    function NavigatorBottom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigatorBottom.prototype.render = function () {
        return (React.createElement("div", { className: styles.app }, "New"));
    };
    return NavigatorBottom;
}(React.Component));
export { NavigatorBottom };
//# sourceMappingURL=Navigator.js.map