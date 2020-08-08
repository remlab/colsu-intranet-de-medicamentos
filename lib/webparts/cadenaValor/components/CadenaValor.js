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
import styles from './CadenaValor.module.scss';
import { groupBy } from '@microsoft/sp-lodash-subset';
import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import BlockTitle from '../../componentes/blockTitle/blockTitle';
var CadenaValorItem = function (_a) {
    var item = _a.item;
    var _b;
    var data = item;
    var _c = React.useState(true), hideDialog = _c[0], setHideDialog = _c[1];
    var _showDialog = function () {
        setHideDialog(false);
    };
    var _closeDialog = function () {
        setHideDialog(true);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("a", { href: "#", onClick: _showDialog, className: classnames((_b = {},
                _b[styles.cadena_valor__levelOne] = data.Posici_x00f3_n === 1,
                _b[styles.cadena_valor__levelTwo] = data.Posici_x00f3_n === 2,
                _b[styles.cadena_valor__levelTree] = data.Posici_x00f3_n >= 3,
                _b)), style: { borderBottomColor: data.Color } },
            React.createElement("h4", null, data.Title)),
        React.createElement(Dialog, { hidden: hideDialog, onDismiss: _closeDialog, dialogContentProps: {
                type: DialogType.largeHeader,
                title: data.Title
            }, modalProps: {
                isBlocking: false,
                styles: { main: { maxWidth: '60vw !important' } },
            } },
            React.createElement("p", null, data.Descripci_x00f3_n),
            React.createElement(DialogFooter, null,
                React.createElement(DefaultButton, { onClick: _closeDialog, text: "Ok" })))));
};
var CadenaValor = /** @class */ (function (_super) {
    __extends(CadenaValor, _super);
    function CadenaValor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.crud = null;
        return _this;
    }
    CadenaValor.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, list = _a.list, context = _a.context, inDesignMode = _a.inDesignMode;
        if (list === undefined || list === null || list === '')
            return React.createElement("h1", null, "Error! [cadena de valor] list not found!");
        if (!context.pageContext)
            return React.createElement("h1", null, "Error! absoluteUrl not found!");
        if (!context.spHttpClient)
            return React.createElement("h1", null, "Error! spHttpClient not found!");
        return (React.createElement("div", { className: "ms-Grid cadena_valor", dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                React.createElement(BlockTitle, { type: 'title__center' },
                    React.createElement("span", null, title),
                    "  ",
                    React.createElement("strong", null, subtitle)),
                React.createElement(IntranetMedicamentosCRUDList, { listId: list, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl }, function (listName) { return (React.createElement(IntranetMedicamentosCRUD, { propertyPane: context.propertyPane, inDesignMode: inDesignMode, ref: function (el) { return _this.crud = el; }, listName: listName, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl, include: "Color,Posici_x00f3_n,Descripci_x00f3_n", onEditAction: function (data) {
                        if (_this.crud)
                            _this.crud.listItemTempData = data;
                        var item = data;
                        _this.props.onSelectItem(item);
                    }, onDeleteAction: function (data) {
                        if (_this.crud)
                            _this.crud.listItemTempData = data;
                        var item = data;
                        _this.props.onSelectItem(item);
                    }, actions: function (_a) {
                        var item = _a.item, handleCreate = _a.handleCreate;
                        return (React.createElement(React.Fragment, null,
                            React.createElement(TooltipHost, { id: "tooltip_duplicate", content: "Duplicar item", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                                React.createElement(IconButton, { onClick: function () {
                                        var _a = item, Title = _a.Title, Posici_x00f3_n = _a.Posici_x00f3_n, Descripci_x00f3_n = _a.Descripci_x00f3_n, Color = _a.Color;
                                        if (_this.crud) {
                                            var newData = {
                                                Title: Title,
                                                Posici_x00f3_n: Posici_x00f3_n,
                                                Descripci_x00f3_n: Descripci_x00f3_n,
                                                Color: Color
                                            };
                                            _this.crud.listItemTempData = newData;
                                            handleCreate();
                                            if (_this.props.context.propertyPane.isPropertyPaneOpen())
                                                _this.props.context.propertyPane.close();
                                        }
                                    }, iconProps: { iconName: "Page" }, title: "Duplicar item", ariaLabel: "Duplicar item", "aria-describedby": "tooltip_duplicate", className: "ToolbarButton CanvasControlToolbar-item" }))));
                    }, ParentComponent: function (_a) {
                        var items = _a.items, data = _a.data;
                        var elements = groupBy(items, 'key');
                        var result = groupBy(data, 'Posici_x00f3_n');
                        var positions = Object.keys(result);
                        return (React.createElement("div", { className: "ms-Grid-row" }, positions.map(function (pos, pindex) { return (React.createElement("div", { key: pindex, className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                            React.createElement("div", { className: "ms-Grid-row" }, result[pos].map(function (dt) {
                                var element = elements[dt.Id][0];
                                var cols = 12 / (result[pos].length <= 4 ? result[pos].length : 4);
                                return (React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg" + (cols < 6 ? 6 : cols) + " ms-xl" + cols }, element));
                            })))); })));
                    } }, function (_a) {
                    var item = _a.item;
                    return (React.createElement(CadenaValorItem, { item: item }));
                })); }))));
    };
    return CadenaValor;
}(React.Component));
export default CadenaValor;
//# sourceMappingURL=CadenaValor.js.map