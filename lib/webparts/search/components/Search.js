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
import styles from './Search.module.scss';
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Search.prototype.render = function () {
        return (React.createElement("div", { className: styles.search },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column["ms-lgPush1"] },
                        React.createElement("div", { className: styles.section_search },
                            React.createElement("div", { className: styles.search__container },
                                React.createElement("form", { action: "", className: styles.search__container__form },
                                    React.createElement("img", { src: "http://aremlab.com/media/colsubsidio/institucional/search/lupa.png", alt: "" }),
                                    React.createElement("input", { type: "text", name: "name", placeholder: "Ingresa tu consulta" }),
                                    React.createElement("button", null, "Buscar")))))))));
    };
    return Search;
}(React.Component));
export default Search;
//# sourceMappingURL=Search.js.map