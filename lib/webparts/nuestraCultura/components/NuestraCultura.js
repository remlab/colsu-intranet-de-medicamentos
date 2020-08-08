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
import classnames from 'classnames';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import styles from './NuestraCultura.module.scss';
import { IntranetMedicamentosCRUDList, IntranetMedicamentosPageList } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
var NuestraCulturaComponent = function (_a) {
    var listName = _a.listName, data = _a.data;
    var _b = React.useState(null), file = _b[0], setFile = _b[1];
    React.useEffect(function () {
        sp.web.lists.getByTitle(listName)
            .items
            .getById(data.Id)
            .select("File")
            .expand("File")
            .get()
            .then(function (response) { return setFile(response); })
            .catch(function (err) { return console.log(err); });
    }, []);
    if (!Boolean(file))
        return React.createElement("p", null, "Cargando...");
    return (React.createElement("div", { className: classnames(["ms-Grid", styles.nuestraCultura]), dir: "ltr" },
        React.createElement("div", { className: "ms-Grid-row", style: { display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
            React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg4" },
                React.createElement("div", { className: styles.nuestraCultura__media }, data.BannerImageUrl && React.createElement("img", { src: data.BannerImageUrl.Url, alt: data.Title }))),
            React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg8", style: { display: 'flex' } },
                React.createElement("a", { href: file.File.ServerRelativeUrl, title: file.File.Name, className: styles.nuestraCultura__cta, style: { width: '100%' } },
                    React.createElement("h2", null, data.Title),
                    React.createElement("p", null, data.Description))))));
};
var NuestraCultura = /** @class */ (function (_super) {
    __extends(NuestraCultura, _super);
    function NuestraCultura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NuestraCultura.prototype.render = function () {
        var _a = this.props, list = _a.list, terms = _a.terms, context = _a.context, inDesignMode = _a.inDesignMode;
        if (!Array.isArray(terms) || terms.length === 0)
            return React.createElement("h1", null, "Error! [tags] not found!");
        var term = terms[0];
        var filterTag = term.name;
        if (list === undefined || list === null || list === '')
            return React.createElement("h1", null, "Error! [pages] list not found!");
        if (!context.pageContext)
            return React.createElement("h1", null, "Error! absoluteUrl not found!");
        return (React.createElement(IntranetMedicamentosCRUDList, { listId: list, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl }, function (listName) { return (React.createElement(IntranetMedicamentosPageList, { propertyPane: context.propertyPane, inDesignMode: inDesignMode, listName: listName, filterTag: filterTag }, function (_a) {
            var items = _a.items, status = _a.status;
            if (items.length === 0)
                return React.createElement("h1", null,
                    status,
                    " No items found!");
            var data = items[items.length - 1];
            return (React.createElement(NuestraCulturaComponent, { listName: listName, data: data }));
        })); }));
    };
    return NuestraCultura;
}(React.Component));
export default NuestraCultura;
//# sourceMappingURL=NuestraCultura.js.map